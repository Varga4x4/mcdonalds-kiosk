(() => {
    // ELEMENTS
    const welcomeScreenWrapper = document.getElementById("welcome-screen-wrapper")
    const menuScreenWrapper = document.getElementById("menu-screen-wrapper")

    const menuScreen = () => {
        welcomeScreenWrapper.style.display = "none"

        const menuHeader = document.createElement("div")
        menuHeader.id = "menu-header"

        menuScreenWrapper.appendChild(menuHeader)

        const homeButton = document.createElement("button")
        homeButton.id = "home-button"
        homeButton.innerText = "Home"
        homeButton.onclick = () => {
            welcomeScreenWrapper.style.display = "flex"
            menuScreenWrapper.style.display = "none"
            welcomeScreen
        }

        menuHeader.appendChild(homeButton)
    }

    const welcomeScreen = () => {
        const logoElement = document.createElement("div")
        logoElement.id = "logo"
        logoElement.innerText = "McDonald's logo"

        welcomeScreenWrapper.appendChild(logoElement)

        const whereYouEat = document.createElement("h1")
        whereYouEat.innerText = "Where will you be eating today?"

        welcomeScreenWrapper.appendChild(whereYouEat)

        const choiceWrapperElement = document.createElement("div")
        choiceWrapperElement.id = "choice-wrapper"

        welcomeScreenWrapper.appendChild(choiceWrapperElement)

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

        const languageWrapperElement = document.createElement("div")
        languageWrapperElement.id = "language-wrapper"

        welcomeScreenWrapper.appendChild(languageWrapperElement)

        const englishLanguageElement = document.createElement("button")
        englishLanguageElement.id = "english-language"
        englishLanguageElement.className = "language-button"
        englishLanguageElement.innerText = "English"

        languageWrapperElement.appendChild(englishLanguageElement)

        const hungarianLanguageElement = document.createElement("button")
        hungarianLanguageElement.id = "hungarian-language"
        hungarianLanguageElement.className = "language-button"
        hungarianLanguageElement.innerText = "Magyar"

        languageWrapperElement.appendChild(hungarianLanguageElement)
    }
    welcomeScreen()
})();