
const { isAuthorized } = require("../middlewares/authorization.middleware");
const ServicesController = require('../controllers/services.controller');

exports.routesConfig = function (app) {

    app.post("/services/register",
        isAuthorized,
        ServicesController.register
    )

};
