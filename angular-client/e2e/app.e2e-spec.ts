import { JsdemoPage } from './app.po';

describe('jsdemo App', function() {
  let page: JsdemoPage;

  beforeEach(() => {
    page = new JsdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
