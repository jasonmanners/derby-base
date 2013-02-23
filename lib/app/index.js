var derby = require('derby')
  , app = derby.createApp(module)
  , get = app.get
  , view = app.view
  , ready = app.ready
  , start = +new Date()

derby.use(require('../../ui'))


// ROUTES //

// Derby routes can be rendered on the client and the server
get('/', function(page, model, params) {
  page.render();
})


// CONTROLLER FUNCTIONS //

ready(function(model) {

})
