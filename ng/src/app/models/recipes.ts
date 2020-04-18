export class Recipe{
    id: number
    title: string
    directions: string
    ingredients: string
    cookTime: string
    prepTime: string
    servings: string
    image: string
    added_at: Date
    updated_at: Date
   
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