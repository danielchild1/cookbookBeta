export const indexPage = (req, res, next) => {
  res.render('layout', { title: 'App Title', content: 'index', header: false })
}
