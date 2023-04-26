const { I } = inject();

export = {

  // data
  headers: {
    Accept: '*/*',
  },

  // locators
  mainPageUrl: 'https://www.ornikar.com/assurance-auto',

  // methods

  validateHttpCode(state: any, expected: number) {
    I.assertEqual(state.responseObj.status, expected);
  }

}
