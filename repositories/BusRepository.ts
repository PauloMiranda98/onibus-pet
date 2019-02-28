import Bus,{IBus} from "../models/Bus";
import ErrorCode from "../models/ErrorCode";

export default class BusRepository {

    async pushMovementToBus(bus : IBus,_idMovement : any) : Promise<boolean> {

        let promise = Bus.update(
            { nameID: bus.nameID },
            { $push: { movements: _idMovement } },
            { upsert: true}
        );

        let result = await promise.catch(err => {
            throw new ErrorCode(500, err.message);
        });

        return result != null;

    }

    async getBusMovements(bus : IBus) : Promise<IBus[]> {

        return await  Bus.find({ nameID: bus.nameID}).select({_id:0, __v:0}).populate("movements", {__v:0}).catch(err => {
            throw new ErrorCode(500, err.message);
        });

    }

}