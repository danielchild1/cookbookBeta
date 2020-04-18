export class Recipe{
    id: number
    title: string
    description: string
    cookTime: string
    prepTime: string
    servings: string
    image: string
    added_at: Date
    updated_at: Date
    Archived: Boolean
    Breakfast: Boolean
    Appetizer: Boolean
    Dessert: Boolean
    MainDish: Boolean
    Salad: Boolean
    Soup: Boolean
    ingredients: String
    directions: String
}

// title: String,
//     description: String,
//     cookTime: String,
//     prepTime: String,
//     servings: String,
//     image: String,
//     added_at: Date,
//     updated_at: Date,
//     isArchived: Boolean,
//     isBreakfast: Boolean,
//     isAppetizer: Boolean,
//     isDessert: Boolean,
//     isMainDish: Boolean,
//     isSalad: Boolean,
//     isSoup: Boolean,
//     //Im not sure if the is the best way to do this
//     //ingredients: [{type: Schema.Types.ObjectId, ref: "Ingredient"}],
//    /// directions: [{type: Schema.Types.ObjectId, ref: "Direction"}],
//     //tags: [{type: Schema.Types.ObjectId, ref: "Tag"}]
//     ingredients: String,
//     Directions: String