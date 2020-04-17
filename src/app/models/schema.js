import mongoose from "mongoose"
const Schema = mongoose.Schema

let recipeSchema = new Schema({
    title: String,
    description: String,
    cookTime: String,
    prepTime: String,
    servings: String,
    image: String,
    added_at: Date,
    updated_at: Date,
    isArchived: Boolean,
    //Im not sure if the is the best way to do this
    //ingredients: [{type: Schema.Types.ObjectId, ref: "Ingredient"}],
   /// directions: [{type: Schema.Types.ObjectId, ref: "Direction"}],
    //tags: [{type: Schema.Types.ObjectId, ref: "Tag"}]
    ingredients: [{type: String, ref: "ingredients"}],
    directions: [{type: String, ref: "direction"}],
    tags: [{type: String, ref: "tag"}]

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

// let ingredientSchema = new Schema({
//     id: Number,
//     text: String,
//     added_at: Date,
//     updated_at: Date
// })


// let directionsSchema = new Schema({
//     id: Number,
//     orderNumber: Number,
//     text: String,
//     added_at: Date,
//     updated_at: Date
// })


// let tagSchema = new Schema({
//     id: Number,
//     tag: String,
// })

// export let Tag = mongoose.model("Tag", tagSchema)
// export let Direction = mongoose.model("Direction", directionsSchema)
export let Recipe = mongoose.model("Recipe", recipeSchema)
//export let Ingredient = mongoose.model("Ingredients", ingredientSchema)