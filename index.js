(() => {
    const mainElement = document.getElementById("main")

    const welcomeScreen = () => {
        const logoElement = document.createElement("div")
        logoElement.id = "logo"
        logoElement.innerText = "McDonald's logo"

        mainElement.appendChild(logoElement)

        const whereYouEat = document.createElement("h1")
        whereYouEat.innerText = "Where will you be eating today?"

        mainElement.appendChild(whereYouEat)

        const choiceWrapperElement = document.createElement("div")
        choiceWrapperElement.id = "choice-wrapper"

        mainElement.appendChild(choiceWrapperElement)

        const eatInElement = document.createElement("button")
        eatInElement.id = "eat-in"
        eatInElement.className = "choice-button"
        eatInElement.innerText = "Eat in"

        choiceWrapperElement.appendChild(eatInElement)

        const takeOutelement = document.createElement("button")
        takeOutelement.id = "take-out"
        takeOutelement.className = "choice-button"
        takeOutelement.innerText = "Take out"

        choiceWrapperElement.appendChild(takeOutelement)

        const languageWrapperElement = document.createElement("div")
        languageWrapperElement.id = "language-wrapper"

        mainElement.appendChild(languageWrapperElement)

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