import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Your at HOME');
});
app.get('/about', (req, res) => {
  res.send('Your at ABOUT');
});
app.get('/contact', (req, res) => {
  res.send('Your at CONTACT');
});
app.get('/help', (req, res) => {
  res.send('Your at HELP');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:`, PORT) ;
});

