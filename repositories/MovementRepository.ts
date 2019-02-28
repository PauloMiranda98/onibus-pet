import {IMovement, default as Movement} from "../models/Movement";
import ErrorCode from "../models/ErrorCode";

export default class MovementRepository {

    async saveMovement(movement : IMovement) : Promise<IMovement>{

        let m = new Movement(movement);

        let validate = await m.validateSync();
        if(validate)
            throw new ErrorCode(400, validate.message);


        return await m.save().catch(err => {
            throw new ErrorCode(500, err.message);
        });

    }

    async getMovements() : Promise<IMovement[]> {
        return await  Movement.find().select({_id:0, __v:0}).catch(err => {
            throw new ErrorCode(500, err.message);
        });
    }

}