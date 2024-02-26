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

const LANGUAGES = ["en", "hu"]
const EATING_OPTIONS = ["eatInElement", "takeOutelement"]
const LANGUAGE_ELEMENTS = ["englishLanguageElement", "hungarianLanguageElement"]

const DEFAULT_LANGUAGE = LANGUAGES[0]

const mainElement = document.querySelector("main")

    ; (() => {
        const removeAllWrappers = () => {
            const previousWelcomeScreenElement = document.querySelectorAll(`.${CLASS_NAMES.screenWrapper}`)
            previousWelcomeScreenElement.forEach((element) => {
                element.remove()
            })
        }

        const renderMenuScreen = (language = DEFAULT_LANGUAGE) => {
            removeAllWrappers()

            const menuScreenWrapper = document.createElement("div")
            menuScreenWrapper.id = IDS.menuScreenWrapper
            menuScreenWrapper.className = CLASS_NAMES.screenWrapper

            mainElement.appendChild(menuScreenWrapper)

            const menuHeader = document.createElement("div")
            menuHeader.id = IDS.menuHeader

            menuScreenWrapper.appendChild(menuHeader)

            const homeButton = document.createElement("button")
            homeButton.id = IDS.homeButton
            homeButton.innerText = INNER_TEXTS.homeButton[language]
            homeButton.onclick = () => renderWelcomeScreen(language)

            menuHeader.appendChild(homeButton)
        }

        const renderWelcomeScreen = (language = DEFAULT_LANGUAGE) => {
            removeAllWrappers()

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

            EATING_OPTIONS.forEach((key) => {
                const eatingOptionsButtonElement = document.createElement("button")
                eatingOptionsButtonElement.id = IDS[key]
                eatingOptionsButtonElement.className = CLASS_NAMES.choiceButtonElement
                eatingOptionsButtonElement.innerText = INNER_TEXTS[key][language]
                eatingOptionsButtonElement.onclick = () => renderMenuScreen(language)

                choiceWrapperElement.appendChild(eatingOptionsButtonElement)
            })

            const languageWrapperElement = document.createElement("div")
            languageWrapperElement.id = IDS.languageWrapperElement
            languageWrapperElement.className = CLASS_NAMES.buttonWrapperElement

            welcomeScreenWrapper.appendChild(languageWrapperElement)

            LANGUAGE_ELEMENTS.forEach((key, index) => {
                const languageButtonElement = document.createElement("button")
                languageButtonElement.id = IDS[key]
                languageButtonElement.className = CLASS_NAMES.languageElement
                languageButtonElement.innerText = INNER_TEXTS[key]
                languageButtonElement.onclick = () => renderWelcomeScreen(LANGUAGES[index])

                languageWrapperElement.appendChild(languageButtonElement)
            })
        }

        renderWelcomeScreen()
    })();

// TODO The whole app shoould be centered vetically and horizontally, should have 100VP
// Investigate how to format code automatically in VS code for html files
