// TODO
// -migrate all ids to object
// -migrate all text to object
// -migrate all classes to object

// TODO create a variable holding default language and use it
// Read about optional chaining and apply it to this file

const IDS = {
    welcomeScreenWrapper: "welcome-screen-wrapper",
    menuScreenWrapper: "menu-screen-wrapper",
}

const INNER_TEXTS = {
    homeButton: "Home",
    whereYouEat: {
        en: "Where will you be eating today?",
        hu: "abc"
    }
}

const LANGUAGES = {
    en: "en",
    hu: "hu"
}

const mainElement = document.getElementById("main")

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
            menuScreenWrapper.className = "wrapper"

            mainElement.appendChild(menuScreenWrapper)

            const menuHeader = document.createElement("div")
            menuHeader.id = "menu-header"

            menuScreenWrapper.appendChild(menuHeader)

            const homeButton = document.createElement("button")
            homeButton.id = "home-button"
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

        const renderWelcomeScreen = (language = LANGUAGES.en) => {
            removeWelcomeScreen()
            removeMenuScreen()

            const welcomeScreenWrapper = document.createElement("div")
            welcomeScreenWrapper.id = IDS.welcomeScreenWrapper
            welcomeScreenWrapper.className = "wrapper"

            mainElement.appendChild(welcomeScreenWrapper)

            const logoElement = document.createElement("div")
            logoElement.id = "logo"
            logoElement.innerText = "McDonald's logo"

            welcomeScreenWrapper.appendChild(logoElement)

            const whereYouEat = document.createElement("h1")
            whereYouEat.innerText = INNER_TEXTS.whereYouEat[language]

            welcomeScreenWrapper.appendChild(whereYouEat)

            const choiceWrapperElement = document.createElement("div")
            choiceWrapperElement.id = "choice-wrapper"

            welcomeScreenWrapper.appendChild(choiceWrapperElement)

            // TODO use array.forEach
            const eatInElement = document.createElement("button")
            eatInElement.id = "eat-in"
            eatInElement.className = "choice-button"
            eatInElement.innerText = "Eat in"
            eatInElement.onclick = menuScreen

            choiceWrapperElement.appendChild(eatInElement)

            const takeOutelement = document.createElement("button")
            takeOutelement.id = "take-out"
            takeOutelement.className = "choice-button"
            takeOutelement.innerText = "Take out"
            takeOutelement.onclick = menuScreen

            choiceWrapperElement.appendChild(takeOutelement)
            // End of TODO
            const languageWrapperElement = document.createElement("div")
            languageWrapperElement.id = "language-wrapper"

            welcomeScreenWrapper.appendChild(languageWrapperElement)
            // I should use for each to automate
            const englishLanguageElement = document.createElement("button")
            englishLanguageElement.id = "english-language"
            englishLanguageElement.className = "language-button"
            englishLanguageElement.innerText = "English"
            englishLanguageElement.onclick = () => {
                renderWelcomeScreen(LANGUAGES.en)
            }

            languageWrapperElement.appendChild(englishLanguageElement)

            const hungarianLanguageElement = document.createElement("button")
            hungarianLanguageElement.id = "hungarian-language"
            hungarianLanguageElement.className = "language-button"
            hungarianLanguageElement.innerText = "Magyar"
            hungarianLanguageElement.onclick = () => {
                renderWelcomeScreen(LANGUAGES.hu)
            }
            languageWrapperElement.appendChild(hungarianLanguageElement)
            //
        }

        renderWelcomeScreen()
    })();