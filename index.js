const IDS = {
    welcomeScreenWrapper: "welcome-screen-wrapper",
    menuScreenWrapper: "menu-screen-wrapper",
    menuHeader: "menu-header",
    homeButton: "home-button",
    logoElement: "logo",
    choiceWrapperElement: "choice-wrapper",
    eatInElement: "eat-in",
    takeOutElement: "take-out",
    languageWrapperElement: "language-wrapper",
    englishLanguageElement: "english-language",
    hungarianLanguageElement: "hungarian-language",
    menuWrapperElement: "menu-wrapper",
    slidingMenuWrapperElement: "sliding-wrapper",
    gridMenuWrapperElement: "grid-wrapper",
    choosenEatingOptionWrapper: "choosen-eating-wrapper",
    displayElement: "display-element",
    viewOrderButtonElement: "view-order-element",
    payOrCancelButtonsWrapperElement: "pay-cancel-wrapper"
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
    takeOutElement: {
        en: "Take out",
        hu: "Elviszem"
    },
    mainMenuElement: {
        en: "Main Menu",
        hu: "Fomenu"
    },
    displayElement: {
        en: "Total: ",
        hu: "Osszesen: ",
    },
    viewOrderButtonElement: {
        en: "View my order",
        hu: "Rendeles megtekintese"
    },
    burgers: {
        en: "Burgers",
        hu: "Burgerek"
    },
    chickenAndFish: {
        en: "Chicken & Fish",
        hu: "Csirke es Hal"
    },
    signatureCraftedBurgers: {
        en: "Signature Crafted Burgers",
        hu: "Signature Burgerek"
    },
    mcCafe: {
        en: "McCafe",
        hu: "McCafe"
    },
    happyMeal: {
        en: "Happy Meal",
        hu: "Happy Meal"
    },
    beverages: {
        en: "Beverages",
        hu: "Italok"
    },
    sweetTreats: {
        en: "Sweet Treats",
        hu: "Edessegek"
    },
    salad: {
        en: "Salad",
        hu: "Salatak"
    },
    milkshakesAndIcecreams: {
        en: "Milkshakes & Icecreams",
        hu: "Shekek es fagylaltok"
    },
    coldDrinks: {
        en: "Cold Drinks",
        hu: "Hideg Italok"
    },
    hotDrinks: {
        en: "Hot Drinks",
        hu: "Meleg Italok"
    },
    meals: {
        en: "Meals",
        hu: "Menuk"
    },
    sides: {
        en: "Sides",
        hu: "Koretek"
    },
    saversMeals: {
        en: "Savers Meals",
        hu: "Takarekos Menuk"
    },
    signatureMeals: {
        en: "Signature Meals",
        hu: "Signature Menuk"
    },
    payButton: {
        en: "Pay",
        hu: "Fizetes"
    },
    cancelButton: {
        en: "Cancel",
        hu: "Rendeles Torlese"
    }
}

const CLASS_NAMES = {
    screenWrapper: "screen-wrapper",
    buttonWrapperElement: "button-wrapper",
    eatingOptionsElementWrapper: "eating-wrapper",
    eatingOptionsImageElement: "eating-image",
    choiceButtonElement: "choice-button",
    languageElement: "language-button",
    languageIconElement: "language-icon",
    gridMenuElement: "grid-menu-element",
    slideMenuElement: "slide-menu-element",
    payOrCancelButtonsElement: "pay-or-cancel-button"
}

const IMAGES = {
    mcDonaldsLogo: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
    eatInElement: "https://www.foodandwine.com/thmb/_Bfuv0FsNMVExh12yJBAIlnIIRY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/McDonalds-Hacks-Menu-FT-1-BLOG0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg",
    takeOutElement: "https://i2-prod.mirror.co.uk/incoming/article29776846.ece/ALTERNATES/s1200d/1_McDonalds-Corp-Trials-Table-Service-At-UK-Restaurant.jpg",
}

const LANGUAGES = ["en", "hu"]
const EATING_OPTIONS = ["eatInElement", "takeOutElement"]
const LANGUAGE_ELEMENTS = ["englishLanguageElement", "hungarianLanguageElement"]
const MAIN_MENU_GRID_ELEMENTS = [
    "burgers",
    "chickenAndFish",
    "signatureCraftedBurgers",
    "mcCafe",
    "happyMeal",
    "beverages",
    "sweetTreats",
    "salad",
]
const MAIN_MENU_SLIDE_ELEMENTS = [
    "milkshakesAndIcecreams",
    "coldDrinks",
    "hotDrinks",
    "meals",
    "sides",
    "saversMeals",
    "happyMeal",
    "signatureMeals",
]
const PAY_OR_CANCEL_BUTTON_ELEMENTS = ["payButton", "cancelButton"]

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

            const mainMenuElement = document.createElement("h1")
            mainMenuElement.innerText = INNER_TEXTS.mainMenuElement[language]

            menuHeader.appendChild(mainMenuElement)

            const menuWrapperElement = document.createElement("div")
            menuWrapperElement.id = IDS.menuWrapperElement

            menuScreenWrapper.appendChild(menuWrapperElement)

            const slidingMenuWrapperElement = document.createElement("div")
            slidingMenuWrapperElement.id = IDS.slidingMenuWrapperElement

            menuWrapperElement.appendChild(slidingMenuWrapperElement)

            MAIN_MENU_SLIDE_ELEMENTS.forEach((key) => {
                const slideMenuElement = document.createElement("button")
                slideMenuElement.innerText = INNER_TEXTS[key][language]
                slideMenuElement.className = CLASS_NAMES.slideMenuElement

                slidingMenuWrapperElement.appendChild(slideMenuElement)
            })

            const gridMenuWrapperElement = document.createElement("div")
            gridMenuWrapperElement.id = IDS.gridMenuWrapperElement

            menuWrapperElement.appendChild(gridMenuWrapperElement)

            MAIN_MENU_GRID_ELEMENTS.forEach((key) => {
                const gridMenuElement = document.createElement("button")
                gridMenuElement.innerText = INNER_TEXTS[key][language]
                gridMenuElement.className = CLASS_NAMES.gridMenuElement

                gridMenuWrapperElement.appendChild(gridMenuElement)
            })

            const choosenEatingOptionWrapper = document.createElement("div")
            choosenEatingOptionWrapper.id = IDS.choosenEatingOptionWrapper

            menuScreenWrapper.appendChild(choosenEatingOptionWrapper)

            const displayElement = document.createElement("div")
            displayElement.id = IDS.displayElement
            displayElement.innerText = INNER_TEXTS.displayElement[language]

            menuScreenWrapper.appendChild(displayElement)

            const viewOrderButtonElement = document.createElement("button")
            viewOrderButtonElement.id = IDS.viewOrderButtonElement
            viewOrderButtonElement.innerText = INNER_TEXTS.viewOrderButtonElement[language]

            displayElement.appendChild(viewOrderButtonElement)

            const payOrCancelButtonsWrapperElement = document.createElement("div")
            payOrCancelButtonsWrapperElement.id = IDS.payOrCancelButtonsWrapperElement

            menuScreenWrapper.appendChild(payOrCancelButtonsWrapperElement)

            PAY_OR_CANCEL_BUTTON_ELEMENTS.forEach((key) => {
                const payOrCancelButtonsElement = document.createElement("button")
                payOrCancelButtonsElement.innerText = INNER_TEXTS[key][language]
                payOrCancelButtonsElement.className = CLASS_NAMES.payOrCancelButtonsElement

                payOrCancelButtonsWrapperElement.appendChild(payOrCancelButtonsElement)
            })
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