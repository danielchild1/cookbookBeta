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
    //Im not sure if the is the best way to do this
    ingredients: string[]
    directions: string[]
    tag: string[]
}