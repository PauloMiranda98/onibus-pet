import LogSystemController from "../controllers/LogSystemController";
import Route from "../models/Route";
import e = require("express");

class LogSystem implements Route {

    applyRoute(app: e.Application): void {


        app.get('/', LogSystemController.getLogSystem);

    }
}

export default new LogSystem();