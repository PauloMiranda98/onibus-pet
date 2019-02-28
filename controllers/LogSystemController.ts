import {Request, Response} from "express";
import Database from "../service/Database";

export default class LogSystemController {

    static getLogSystem(req : Request, res : Response) {
        res.send(
            {
                "version":"0.0.1",
                "database": Database.getDBStatus()
            }
        );
    }

}