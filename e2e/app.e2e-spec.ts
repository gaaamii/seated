import { SeatedPage } from './app.po';

describe('seated App', () => {
  let page: SeatedPage;

  beforeEach(() => {
    page = new SeatedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
