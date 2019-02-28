import {IMovement, default as Movement} from "../models/Movement";
import ErrorCode from "../models/ErrorCode";

export default class MovementRepository {

    async saveMovement(movement : IMovement) : Promise<IMovement>{

        return await new Movement(movement).save().catch(err => {
            throw new ErrorCode(500, err.message);
        });

    }

    async getMovements() : Promise<IMovement[]> {
        return await  Movement.find().select({_id:0, __v:0}).catch(err => {
            throw new ErrorCode(500, err.message);
        });
    }

}