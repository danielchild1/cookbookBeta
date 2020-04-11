import mongoose from 'mongoose'
import crypto from 'crypto'
import { APP_SECRET, AUTH_TOKEN_EXPIRES_IN } from '../../config/vars'
import jwt from 'jsonwebtoken'

const Schema = mongoose.Schema

let userSchema = new Schema({ 
  // TODO 
})

//TODO

export let User = mongoose.model("User", userSchema)