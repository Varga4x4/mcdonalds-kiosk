const IDS = {
    welcomeScreenWrapper: "welcome-screen-wrapper",
    menuScreenWrapper: "menu-screen-wrapper",
    menuHeader: "menu-header",
    homeButton: "home-button",
    logoElement: "logo",
    choiceWrapperElement: "choice-wrapper",
    eatInElement: "eat-in",
    takeOutelement: "take-out",
    languageWrapperElement: "language-wrapper",
    englishLanguageElement: "english-language",
    hungarianLanguageElement: "hungarian-language",
}

const INNER_TEXTS = {
    logoElement: "McDonald's logo",
    englishLanguageElement: "English",
    hungarianLanguageElement: "Magyar",
    homeButton: {
        en: "Home",
        hu: "Kezdolap"
    },
    whereYouEat: {
        en: "Where will you be eating today?",
        hu: "Helyben fogyasztasz, vagy elivetre?"
    },
    eatInElement: {
        en: "Eat in",
        hu: "Helyben"
    },
    takeOutelement: {
        en: "Take out",
        hu: "Elviszem"
    },
}

const CLASS_NAMES = {
    screenWrapper: "screen-wrapper",
    buttonWrapperElement: "button-wrapper",
    choiceButtonElement: "choice-button",
    languageElement: "language-button",
}

const LANGUAGES = {
    en: "en",
    hu: "hu"
}

const defaultLanguage = LANGUAGES ? LANGUAGES.en : LANGUAGES.hu

const mainElement = document.querySelector("main")

    ; (() => {
        // TODO
        // replace it with removeAllWrappers
        const removeWelcomeScreen = () => {
            const previousWelcomeScreenElement = document.getElementById(IDS.welcomeScreenWrapper)
            if (previousWelcomeScreenElement) {
                previousWelcomeScreenElement.remove()
            }
        }

        const removeMenuScreen = () => {
            const previousWelcomeScreenElement = document.getElementById(IDS.menuScreenWrapper)
            if (previousWelcomeScreenElement) {
                previousWelcomeScreenElement.remove()
            }
        }

        // TODO
        // This function should take the same parameter as the other function
        const menuScreen = () => {
            removeMenuScreen()
            removeWelcomeScreen()

            const menuScreenWrapper = document.createElement("div")
            menuScreenWrapper.id = IDS.menuScreenWrapper
            menuScreenWrapper.className = CLASS_NAMES.screenWrapper

            mainElement.appendChild(menuScreenWrapper)

            const menuHeader = document.createElement("div")
            menuHeader.id = IDS.menuHeader

            menuScreenWrapper.appendChild(menuHeader)

            const homeButton = document.createElement("button")
            homeButton.id = IDS.homeButton
            homeButton.innerText = INNER_TEXTS.homeButton
            homeButton.onclick = () => {
                // TODO 
                // Find out
                // 1 how to write, single line comments in JS
                // 2 how to reduce number of spare parens in JS
                renderWelcomeScreen()
            }

            menuHeader.appendChild(homeButton)
        }

        const renderWelcomeScreen = (language = defaultLanguage) => {
            removeWelcomeScreen()
            removeMenuScreen()

            const welcomeScreenWrapper = document.createElement("div")
            welcomeScreenWrapper.id = IDS.welcomeScreenWrapper
            welcomeScreenWrapper.className = CLASS_NAMES.screenWrapper

            mainElement.appendChild(welcomeScreenWrapper)

            const logoElement = document.createElement("div")
            logoElement.id = IDS.logoElement
            logoElement.innerText = INNER_TEXTS.logoElement

            welcomeScreenWrapper.appendChild(logoElement)

            const whereYouEat = document.createElement("h1")
            whereYouEat.innerText = INNER_TEXTS.whereYouEat[language]

            welcomeScreenWrapper.appendChild(whereYouEat)

            const choiceWrapperElement = document.createElement("div")
            choiceWrapperElement.id = IDS.choiceWrapperElement
            choiceWrapperElement.className = CLASS_NAMES.buttonWrapperElement

            welcomeScreenWrapper.appendChild(choiceWrapperElement)

            // TODO use array.forEach
            const eatInElement = document.createElement("button")
            eatInElement.id = IDS.eatInElement
            eatInElement.className = CLASS_NAMES.choiceButtonElement
            eatInElement.innerText = INNER_TEXTS.eatInElement[language]
            eatInElement.onclick = menuScreen

            choiceWrapperElement.appendChild(eatInElement)

            const takeOutelement = document.createElement("button")
            takeOutelement.id = IDS.takeOutelement
            takeOutelement.className = CLASS_NAMES.choiceButtonElement
            takeOutelement.innerText = INNER_TEXTS.takeOutelement[language]
            takeOutelement.onclick = menuScreen

            choiceWrapperElement.appendChild(takeOutelement)
            // End of TODO
            const languageWrapperElement = document.createElement("div")
            languageWrapperElement.id = IDS.languageWrapperElement
            languageWrapperElement.className = CLASS_NAMES.buttonWrapperElement

            welcomeScreenWrapper.appendChild(languageWrapperElement)
            // I should use for each to automate
            const englishLanguageElement = document.createElement("button")
            englishLanguageElement.id = IDS.englishLanguageElement
            englishLanguageElement.className = CLASS_NAMES.languageElement
            englishLanguageElement.innerText = INNER_TEXTS.englishLanguageElement
            englishLanguageElement.onclick = () => {
                renderWelcomeScreen(LANGUAGES.en)
            }

            languageWrapperElement.appendChild(englishLanguageElement)

            const hungarianLanguageElement = document.createElement("button")
            hungarianLanguageElement.id = IDS.hungarianLanguageElement
            hungarianLanguageElement.className = CLASS_NAMES.languageElement
            hungarianLanguageElement.innerText = INNER_TEXTS.hungarianLanguageElement
            hungarianLanguageElement.onclick = () => {
                renderWelcomeScreen(LANGUAGES.hu)
            }
            languageWrapperElement.appendChild(hungarianLanguageElement)
            //
        }

        renderWelcomeScreen()
    })();

// Investigate how to format code automatically in VS code for html files
