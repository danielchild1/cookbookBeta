import {Recipe} from '../models/schema'

export const allRecipesAPI = (req, res, next) =>{
    Recipe.find().exec((err, recipe)=>{
        if(err){
            res.json({success: false, message: 'Failed query'})
            res.end()
        }
        else{
            res.write(JSON.stringify(recipe))
            res.end()
        }
    })
}

export const oneRecipeAPI = (req, res, next) =>{
    Recipe.findOne({_id: req.params.id}).exec((err, recipe)=>{
        if(err){
            res.json({success: false, message: 'Failed query'})
            res.end()
        }
        else{
            res.write(JSON.stringify(recipe))
            res.end()
        }
    })
}

export const createRecipeAPI = (req, res, next) =>{
    let recipe = new Recipe(req.body)
    recipe.save(err => {
        if(err){
            res.json({success: false, message: 'unable to save'})
        }
        else{
            res.end()
        }
    })
}

export const changeRecipeAPI = (req, res, next) => {
    console.log("It Got to the Backend")
    Recipe.findOne({_id: req.params.id}).exec((err, recipe)=>{
        if(err){
            res.json({success: false, message: 'Failed query'})
            res.end()
        }
        else{
            Object.assign(recipe, req.body)
            Recipe.save(err => {
                if(err){
                    res.json({success: false, message: 'unable to save'})
                }
                else{
                    res.end()
                }
            })
            res.write(JSON.stringify(recipe))
            res.end()
        }
    })
}