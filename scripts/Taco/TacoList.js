import { TacoHtml } from "./Taco.js"
import { useTacos } from "./TacoDataProvider.js"

const contentTarget = document.querySelector(".tacoContainer")

export const TacoList = () => {
    const arrayOfTacoObjects = useTacos()

    for (const tacoObject of arrayOfTacoObjects) {
        //make an html representation of a taco
        const htmlRepresentationOfTaco = TacoHtml(tacoObject)
        //put that html representation on the DOM
        contentTarget.innerHTML += htmlRepresentationOfTaco

    }
}