const tacos = [
    {
        name: "Blue Boolean",
        ingredients: ["blue corn tortilla", "chicken OR steak", "lettuce", "cheddar cheese", "sour cream", "pico de gallo", "hot sauce"],
        description: "Don't let the name fool you, you won't have the blues after eating this taco. You have a choice of chicken or beef- so get to pickin! ",
        price: 4
    },
    {
        name: "Javocado Script",
        ingredients: ["flour tortilla", "fried avocado", "pickled cactus", "cotija cheese", "slaw", "spicy yogurt sauce"],
        description: "Not everyone loves the Javocado Script taco, but if you do- YOU CAN'T GET ENOUGH",
        price: 3
    },
    {
        name: "Binary Barbacoa",
        ingredients: ["yellow corn tortilla", "beef barbacoa", "lettuce", "cotija cheese", "jalapeños", "pico de gallo", "hot sauce", "fritos"],
        description: "01010100 01101000 01101001 01110011 00100000 01110100 01100001 01100011 01101111 00100000 01101001 01110011 00100000 01100100 01100101 01101100 01101001 01100011 01101001 01101111 01110101 01110011 ",
        price: 4
    },
    {
        name: "Sí #",
        ingredients: ["flour tortilla", "fried chicken", "lettuce", "cheddar cheese", "ranch", "tomato", "hot sauce"],
        description: "Crispy, crunchy, yummy. It may not be fancy, but the Sí # is a classic.",
        price: 4
    },
    {
        name: "export const PotaterDater",
        ingredients: ["flour tortilla", "fried potatos", "bravo sauce", "fried egg", "jalapeños", "sour cream", "hot sauce"],
        description: "They tell you never to export your data... but our fried taters are so delicious we had to share them with everyone",
        price: 3
    }

]

export const useTacos = () => {
    return tacos.slice()
}