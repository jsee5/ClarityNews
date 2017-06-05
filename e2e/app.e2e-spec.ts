import { ClarityNewsPage } from './app.po';

describe('clarity-news App', () => {
  let page: ClarityNewsPage;

  beforeEach(() => {
    page = new ClarityNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
