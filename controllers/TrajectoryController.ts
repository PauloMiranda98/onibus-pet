import {Request, Response} from "express";
import Movement, {IMovement} from "../models/Movement";
import Bus, {IBus} from "../models/Bus";
import MovementRepository from "../repositories/MovementRepository";
import BusRepository from "../repositories/BusRepository";

export default class TrajectoryController {

    busRepository : BusRepository;
    movementRepository : MovementRepository;

    constructor(){
        this.busRepository = new BusRepository();
        this.movementRepository = new MovementRepository();
    }

    postTrajectory = async (req : Request, res : Response) => {

        let busID = req.params.busID;
        let body = req.body;
        let movement = new Movement(body);

        try {
            let bus = new Bus({nameID : busID});
            let trajectorySaved : IMovement = await this.movementRepository.saveMovement(movement);
            let result = await this.busRepository.pushMovementToBus(bus, trajectorySaved);
            if(result)
                res.sendStatus(200);

        }catch (e) {
            console.log(e);
            res.status(e.code).send(e.message);
        }

    };

    getAllMovements = async (req : Request, res : Response) => {

        try {
            let results : IMovement[] = await this.movementRepository.getMovements();
            if(results)
                res.send(results);

        }catch (e) {
            console.log(e);
            res.status(e.code).send(e.message);
        }
    };

    getAllBusMovements = async (req : Request, res : Response) => {

        let busID = req.params.busID;
        let bus = new Bus({nameID : busID});

        try {
            let results : IBus[] = await this.busRepository.getBusMovements(bus);
            if(!results || results.length == 0 )
                res.sendStatus(404);
            else
                res.send(results);

        }catch (e) {
            console.log(e);
            res.status(e.code).send(e.message);
        }
    };

}