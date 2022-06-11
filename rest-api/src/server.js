const app = require('./app')

//variavel que recebe o endereço da porta
var PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App listen on port : ${PORT}`)
})
