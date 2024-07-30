import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, title:"joke1", joke: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, title:"joke2", joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
    { id: 3, title:"joke3", joke: "Why don't skeletons fight each other? They don't have the guts." },
    { id: 4, title:"joke4", joke: "What do you call fake spaghetti? An impasta!" },
    { id: 5, title:"joke5", joke: "Why did the bicycle fall over? Because it was two-tired!" }
  ];
  res.json(jokes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});