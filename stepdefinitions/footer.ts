const { footerFragment, mainPage } = inject();
let state = {};

Before(() => {
  state = {};
});

// API section
When('the user gets footer data from api', async (dataTable: any) => {
  await footerFragment.getFooterElements(dataTable, state);
});

Then('the user should receive text content in the api response', async () => {
  mainPage.validateHttpCode(state, 202);
  footerFragment.validateContent(state, 'currentLinkText', 'expectedLinkText');
});

// UI section
When('the user goes to the link in footer', async (dataTable: any) => {
  await footerFragment.goToFooterLink(dataTable, state);
});

Then('the user should see text content in the page', () => {
  footerFragment.validateContent(state, 'currentDescription', 'expectedDescription');
});

