import { SkillforkeralaFrontendPage } from './app.po';

describe('skillforkerala-frontend App', () => {
  let page: SkillforkeralaFrontendPage;

  beforeEach(() => {
    page = new SkillforkeralaFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
