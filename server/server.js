const express = require('express');
const app = express();
const cors = require('cors');
const stretch = require('./stretches.json')
app.use(cors());

app.get('/stretches', (req, res) => {
  return res.send(stretch)
})

app.use(express.json());
app.route('/stretches/:id').get ((req, res) => {
let currentStretch = stretch.find((stretch) => stretch.id == req.params.id);

if(currentStretch === undefined) {
  return res
  .status(404)
  .send(`Stretch gif ID of ${req.params.id} does not exist`)
};
return res.send(currentStretch)
});


app.listen (8080, () => {
  console.log('The server is running')
})