const { navigationFragment, cookiesFragment} = inject();

Given('a user is on the webpage Ornikar', () => {
  navigationFragment.goToMainPage();
  cookiesFragment.rejectCookies();
});

