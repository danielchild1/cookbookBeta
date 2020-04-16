export const indexPage = (req, res, next) => {
  res.render('layout', { title: 'Child Family Cookbook', content: 'index', header: false })
}

export const recipesPage = (req, res, next) =>{
  res.render('layout', { title: 'Child Family Cookbook', content: 'recipes'})
}


