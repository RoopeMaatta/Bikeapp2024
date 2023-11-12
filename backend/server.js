const app = require('./app');
const PORT = process.env.PORT || 3000;

// Entry point: Starts the Express server on a defined port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
