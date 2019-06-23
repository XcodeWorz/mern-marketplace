const app = require('./express')
const port = process.env.PORT || 5000
const mongoose = require('mongoose')

// DB config
const db = require('./config/config').mongoURI;

// Connect to mongoDB
mongoose.connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err))


app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})

