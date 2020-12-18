/*
  I started designing a data structure before I decided that it was important to save data as markdown.
*/

const sourceBlogs = {
  "Food Network": {
    // TODO logo image
    url: "https://www.foodnetwork.com/",
  },
  "Loving It Vegan": {

  }
}

const collection = [
  {
    name: "Basic Granola",
    tags: ["breakfast"],
    source: {
      name: "Food Network",
      url: "https://www.foodnetwork.com/recipes/basic-granola-recipe-3043290"
    },
    yield: '4-6 servings',
    ingredients: [
      '3 cups rolled oats',
      '2 tbsp light brown sugar',
      ['1/2 tsp ground cinnamon', '1/4 tsp nutmeg', '1/4 tsp cardamom'], // DEVNOTE Possible substitutions
      '1/2 tsp kosher salt',
      ['1/3 cup honey', '1/3 maple syrup', '1/4 cup agave w/ 2tbsp hot water'], // DEVNOTE Possible substitution mixture
      ['1/4 cup canola oil', '1/4 cup vegetable oil', '1/4 cup grapeseed oil', '1/4 cup coconut oil'],
      ['1 tsp vanilla extract', '1/2 teaspoon almond extract'],
      ['1/2 cup coarsely chopped almonds', '1/2 cup coarsely nuts'], // DEVNOTE Ingredient adjectives // DEVNOTE Superset "nuts"
      ['1/2 cup dried cranberries', '1/2 cup dried fruit']
    ],
    recipe: [
      `Preheat the oven to 300 degrees F.`,
      `Line a baking sheet with parchment paper.`,
      `In a large bowl, mix together the oats, light brown sugar, cinnamon and salt.`,
      `Stir the honey, oil and vanilla extract into the dry ingredients. Use your hands if necessary to make sure it's well combined.`,
      `Spread the mixture in an even layer on the prepared baking sheet.`,
      `Bake for 20 minutes.`,
      `Remove from the oven and stir.`,
      `Add the chopped almonds.`
      `Bake until everything is toasted and evenly browned, an additional 10 minutes.`,
      `Allow the granola to cool on the baking sheet.`,
      `Add the dried cranberries.`
      `Toss to distribute.`
    ],
    keep: `Store in an airtight container at room temperature for up to 2 weeks.`
  },
  {
    name: "Carrot Cake Smoothie",
    tags: ["breakfast", "dessert"],
    source: {
      name: "Loving It Vegan",
      url: "https://lovingitvegan.com/vegan-carrot-cake-smoothie/"
    },
    yield: '2 smoothies',
    ingredients: [
      '3 frozen bananas (10.5oz/300g)',
      '2 large, shredded carrots (7oz/200g)',
      '1 cup (240ml) canned coconut milk',
      '2 tbsp maple syrup',
      '1/8 tsp nutmeg'
    ],
    recipe: [
      `Blend all ingredients.`
    ]
  }
]

// IGNORE, FUNCTIONS ==========
// FIXME Separation of concerns
const SELECTED = 0;
const selectedRecipe = collection[selected];
console.log(`
  Let's make ${selectedRecipe.name}!

`);
