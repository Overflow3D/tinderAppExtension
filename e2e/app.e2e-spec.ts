import { TinderAppExtensionPage } from './app.po';

describe('tinder-app-extension App', function() {
  let page: TinderAppExtensionPage;

  beforeEach(() => {
    page = new TinderAppExtensionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
