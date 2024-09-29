const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

// Synchronize models with database and start server
sequelize.sync()
  .then(() => {
    console.log('Database connected and tables created.');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('Failed to sync database:', err));
