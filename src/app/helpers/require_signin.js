export function isSignedIn(req){
  try{
    jwt.verify(req.headers.authorization.split(' ')[1], APP_SECRET)
    return true
  }catch(err){
    try{
      jwt.verify(req.cookies.token, APP_SECRET)
      return true
    }catch(err){
      return false
    }
  }
}

export function requireSignIn(req, res, next) {
  if(isSignedIn(req)){
    next()
  }else{
    res.status(401).json("unauthorized request")
    res.end()
  }
}

export function currentUser(req){
  if(req.headers.authorization){
    return jwt.decode(req.headers.authorization.split(' ')[1], APP_SECRET)
  }else if(req.cookies.token){
    return jwt.decode(req.cookies.token, APP_SECRET) 
  }else {
    return null
  }
}

