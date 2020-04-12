import mongoose from "mongoose"
const Schema = mongoose.Schema

let recipeSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    cookTime: String,
    prepTime: String,
    servings: String,
    image: String,
    added_at: Date,
    updated_at: Date,
    isApp: Boolean,
    isBreakfast: Boolean,
    isDessert: Boolean,
    isDrink: Boolean,
    isMainDish: Boolean,
    isSalad: Boolean,
    isSoup: Boolean,
    isSideDish: Boolean,
    //Im not sure if the is the best way to do this
    ingredients: [{type: Schema.Types.ObjectId, ref: "Ingredient"}],
    directions: [{type: Schema.Types.ObjectId, ref: "Direction"}],
})
export let Recipe = mongoose.model("Recipe", recipeSchema)

let ingredients = new Schema({
    id: Number,
    text: String,
    added_at: Date,
    updated_at: Date
})
export let Ingredient = mongoose.model("Ingredients")

let directions = new Schema({
    id: Number,
    orderNumber: Number,
    text: String,
    added_at: Date,
    updated_at: Date
})
export let Direction = mongoose.model("Direction")