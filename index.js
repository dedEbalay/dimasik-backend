require('dotenv').config()
const express = require('express'),
      sequelize = require('./db.js'),
      models = require('./models/models.js'),
      cors = require('cors'),
      router = require('./routes/index.js')

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router)

app.get('/', (req, res) => {
    res.status(200).json({message:'Hello hell!'})
})

const start = async () =>  {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
}

start();