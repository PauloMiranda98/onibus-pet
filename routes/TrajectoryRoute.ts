import Route from "../models/Route";
import e = require("express");
import TrajectoryController from "../controllers/TrajectoryController";

class TrajectoryRoute implements Route {
    applyRoute(app: e.Application): void {

        let controller = new TrajectoryController();

        app.post("/trajectory/:busID", controller.postTrajectory);

        app.get("/trajectory/", controller.getAllMovements);

        app.get("/trajectory/bus/:busID", controller.getAllBusMovements);

    }
}

export default new TrajectoryRoute();