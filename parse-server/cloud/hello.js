'use strict';

Parse.Cloud.define('hello', function(request, response) {
  response.success('Hello world!');
});
