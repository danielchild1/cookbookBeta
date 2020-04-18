import mongoose from "mongoose"
const Schema = mongoose.Schema

let recipeSchema = new Schema({
    title: String,
    cookTime: String,
    prepTime: String,
    servings: String,
    image: String,
    added_at: Date,
    updated_at: Date,
    ingredients: String,
    directions: String

})
recipeSchema.virtual('id').get(function(){
    return this._id.toHexString()
})
recipeSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options)=>{
        delete ret.__v
        delete ret._id
    }
})


export let Recipe = mongoose.model("Recipe", recipeSchema)
//export let Ingredient = mongoose.model("Ingredients", ingredientSchema)

// export class Recipe{
//     id: number
//     title: string
//     directions: string
//     ingredients: string
//     cookTime: string
//     prepTime: string
//     servings: string
//     image: string
//     added_at: Date
//     updated_at: Date
   
// }