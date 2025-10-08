import express from 'express';
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

// New endpoint for user sign-up
app.post('/api/auth/signup', (req, res) => {
  const { fullName, email, password } = req.body;

  console.log('Received user registration data:');
  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Password:', password);

  res.json({ message: "User registration request received successfully" });
});

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});