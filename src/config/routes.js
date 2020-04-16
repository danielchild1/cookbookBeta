import express from 'express'
import {indexPage, aboutPage, contactPage, recipesPage} from '../app/controllers/index.controller'
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
  


  app.use('/', router)
}