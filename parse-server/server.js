import path from 'path'
import express from 'express'
import Parse from 'parse/node'
import {ParseServer,S3Adapter} from 'parse-server'
import ParseDashboard from 'parse-dashboard'

const SERVER_PORT = process.env.PORT || 8080
const SERVER_HOST = process.env.HOST || 'localhost'
const APP_ID = process.env.APP_ID || 'parse-server-example-es6-2016'
const MASTER_KEY = process.env.MASTER_KEY || '91b4387cba5a7e55968a1c7be4dd3e4f74ed4aab'
const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://localhost:27017/dev'
const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production'
const DASHBOARD_AUTH = process.env.DASHBOARD_AUTH

Parse.initialize(APP_ID);
Parse.serverURL = `http://localhost:${SERVER_PORT}/parse`
Parse.masterKey = MASTER_KEY
Parse.Cloud.useMasterKey()

const server = express()

server.use(express.static('public'))

server.use(
  '/parse',
  new ParseServer({
    databaseURI: DATABASE_URI,
    cloud: path.resolve(__dirname, 'cloud.js'),
    appId: APP_ID,
    masterKey: MASTER_KEY,
    serverURL: `http://${SERVER_HOST}:${SERVER_PORT}/parse`,
    filesAdapter: new S3Adapter(
      "S3_ACCESS_KEY",
      "S3_SECRET_KEY",
      "S3_BUCKET",
      {
        directAccess: true,
        region:'S3_REGION'
      }
    ),
    liveQuery: {
      classNames: ['News','Chat']
    }
  })
)

if (IS_DEVELOPMENT) {
  let users =  [
    {
      "user":"admin",
      "pass":"password"
    }
  ]

  if (DASHBOARD_AUTH) {
    var [user, pass] = DASHBOARD_AUTH.split(':')
    users = [{user, pass}]
    console.log(users)
  }
  server.use(
    '/dashboard',
    new ParseDashboard({
      apps: [{
        serverURL: '/parse',
        appId: APP_ID,
        masterKey: MASTER_KEY,
        appName: 'ChatDemo Parse Server',
      }],
      users,
      // useEncryptedPasswords: true
    }, IS_DEVELOPMENT),
  )
}

var httpServer = require('http').createServer(server);
httpServer.listen(SERVER_PORT);
var parseLiveQueryServer = ParseServer.createLiveQueryServer(httpServer);
