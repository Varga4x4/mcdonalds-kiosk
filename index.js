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
        hu: "Helyben fogyasztasz, vagy elvitelre?"
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
    eatingOptionsElementWrapper: "eating-wrapper",
    eatingOptionsImageElement: "eating-image",
    choiceButtonElement: "choice-button",
    languageElement: "language-button",
    languageIconElement: "language-icon",
}

const IMAGES = {
    mcDonaldsLogo: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
    eatInElement: "https://www.foodandwine.com/thmb/_Bfuv0FsNMVExh12yJBAIlnIIRY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/McDonalds-Hacks-Menu-FT-1-BLOG0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg",
    takeOutelement: "https://i2-prod.mirror.co.uk/incoming/article29776846.ece/ALTERNATES/s1200d/1_McDonalds-Corp-Trials-Table-Service-At-UK-Restaurant.jpg",
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

            const logoElement = new Image(150, 150)
            logoElement.id = IDS.logoElement
            logoElement.src = IMAGES.mcDonaldsLogo

            welcomeScreenWrapper.appendChild(logoElement)

            const whereYouEat = document.createElement("h1")
            whereYouEat.innerText = INNER_TEXTS.whereYouEat[language]

            welcomeScreenWrapper.appendChild(whereYouEat)

            const choiceWrapperElement = document.createElement("div")
            choiceWrapperElement.id = IDS.choiceWrapperElement
            choiceWrapperElement.className = CLASS_NAMES.buttonWrapperElement

            welcomeScreenWrapper.appendChild(choiceWrapperElement)

            EATING_OPTIONS.forEach((key, index) => {
                const eatingOptionsElementWrapper = document.createElement("div")
                eatingOptionsElementWrapper.className = CLASS_NAMES.eatingOptionsElementWrapper

                choiceWrapperElement.appendChild(eatingOptionsElementWrapper)

                const eatingOptionsImageElement = new Image(170, 170)
                eatingOptionsImageElement.className = CLASS_NAMES.eatingOptionsImageElement
                eatingOptionsImageElement.src = IMAGES[key]

                eatingOptionsElementWrapper.appendChild(eatingOptionsImageElement)

                const eatingOptionsButtonElement = document.createElement("button")
                eatingOptionsButtonElement.id = IDS[key]
                eatingOptionsButtonElement.className = CLASS_NAMES.choiceButtonElement
                eatingOptionsButtonElement.innerText = INNER_TEXTS[key][language]
                eatingOptionsButtonElement.onclick = () => renderMenuScreen(language)

                eatingOptionsElementWrapper.appendChild(eatingOptionsButtonElement)
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

                const languageIconElement = document.createElement("div")
                languageIconElement.className = CLASS_NAMES.languageIconElement
                languageIconElement.innerText = LANGUAGES[index].toUpperCase()

                languageButtonElement.appendChild(languageIconElement)
            })
        }

        renderWelcomeScreen()
    })();