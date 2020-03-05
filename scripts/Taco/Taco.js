export const TacoHtml = (tacoObject) => {
    return `
        <h4>${tacoObject.name}</h4>
        <ul>
            <li>${tacoObject.price}</li>
            <li>${tacoObject.description}</li>
            <ul>
            ${tacoObject.ingredients
                .map(oneIngredient => `<li>${oneIngredient}</li>`)
                .join("")}
            </ul>
        </ul>
    `
}