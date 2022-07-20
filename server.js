require('dotenv-flow').config();

const express = require('express');
const app = express();
const router = express.Router();
const RoutesConfig = require('./src/routes/config');
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/', router);

RoutesConfig.routesConfig(router);

app.listen(PORT, () => {
    console.log('Gateway has started on port ' + PORT);
})
