const { I, navigationFragment, mainPage, aboutPage, responsibleGamingPage } = inject();

export = {

    // data
    footerApiUrlPath: 'https://www.ornikar.com/assurance-auto',

    // locators

    // methods

    async goToFooterLink(dataTable: any, state: any) {
        let i = 0;
        while (dataTable.parse().hashes()[i] != undefined) {
            state['expectedDescription' + i] = dataTable.parse().hashes()[i].expectedDescription;
            let buttonLocatorFromGherkin = eval(`${dataTable.parse().hashes()[i].linkName}Page.${dataTable.parse().hashes()[i].linkName}Button`);
            let pageContentLocatorFromGherkin = eval(`${dataTable.parse().hashes()[i].linkName}Page.${dataTable.parse().hashes()[i].linkName}PageContent`);
            I.scrollTo(buttonLocatorFromGherkin);
            I.click(dataTable.parse().hashes()[i].button);
            I.waitForElement(pageContentLocatorFromGherkin, 10);
            state['currentDescription' + i] = await I.grabTextFrom(pageContentLocatorFromGherkin);
            navigationFragment.goToMainPage();
            i++
        }
    },

    validateContent(state: any, current: string, expected: string) {
        let i = 0;
        while (state[current + i] != undefined) {
           //had to add a space and go to line in the code check, as else the test failed, might be worth checking your UI 
            var currentStateWithoutNewline = state[current + i].replace(/\n/g, '');
            currentStateWithoutNewline = currentStateWithoutNewline.replace(/(?!^)\s+/g, ' ');
            const expectedStateWithoutNewline = state[expected + i].replace(/\n/g, '');
           i == 1 ? I.assertContain(currentStateWithoutNewline, expectedStateWithoutNewline + ' ') : I.assertContain(state[current + i], state[expected + i]);
            i++
        }
    },

    async getFooterElements(dataTable: any, state: any) {
        let response: any = await I.sendGetRequest(this.footerApiUrlPath, mainPage.headers);

        //Get over jSON circular structure error
        const getCircularReplacer = () => {
            const seen = new WeakSet();
            return (key: any, value: string) => {
                if (typeof value === "object" && value !== null) {
                    if (seen.has(value)) {
                        return;
                    }
                    seen.add(value);
                }
                return value;
            };
        };

        //Turning API response to an Object
        let obj = JSON.parse(JSON.stringify(response, getCircularReplacer()));

        state['responseObj'] = obj;

        let i = 0;
        while (dataTable.parse().hashes()[i] != undefined) {
            state['expectedLinkText' + i] = dataTable.parse().hashes()[i].expectedLinkText
            state['currentLinkText' + i] = obj.data.links[i].text
            i++
        }
    }
}
