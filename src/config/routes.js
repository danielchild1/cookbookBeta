import express from 'express'
import {indexPage, aboutPage, contactPage} from '../app/controllers/index.controller'
import { isSignedIn, requireSignIn} from '../app/helpers/require_signin'
let router = express.Router()

export function configureRoutes(app){
  app.all('*', (req, res, next) => {
    app.locals.signedIn = isSignedIn(req)
    next()
  })
  router.get('/', indexPage)

  


  app.use('/', router)
}