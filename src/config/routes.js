import express from 'express'
import {indexPage, recipesPage} from '../app/controllers/index.controller'
import {allRecipesAPI, oneRecipeAPI, createRecipeAPI, changeRecipeAPI} from '../app/controllers/recipe.controller'
import { isSignedIn, requireSignIn} from '../app/helpers/require_signin'
let router = express.Router()

export function configureRoutes(app){
  app.all('*', (req, res, next) => {
    app.locals.signedIn = isSignedIn(req)
    next()
  })
  //routs
  router.get('/', indexPage)
  router.get('/recipes', indexPage)

  router.get('/recipes*', indexPage)
  
  //end points
  router.get('/api/recipes', allRecipesAPI)
  router.get('/api/recipes/:id', oneRecipeAPI)
  router.post('/api/recipes', createRecipeAPI)
  router.put('/api/recipes/:id', changeRecipeAPI)
  


  app.use('/', router)
}