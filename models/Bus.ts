import mongoose = require('mongoose');

export interface IBus extends mongoose.Document{
    nameID : string,
    movements : mongoose.Schema.Types.ObjectId[]
}

export const BusSchema = new mongoose.Schema({
    nameID : {type : mongoose.Schema.Types.String, required : true, unique : true},
    movements : [{type: mongoose.Schema.Types.ObjectId, ref : "Movement"}]
});

const Bus = mongoose.model<IBus>("Bus", BusSchema);
export default Bus;