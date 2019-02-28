import mongoose = require('mongoose');

export interface IMovement extends mongoose.Document {
    lat: string,
    lon: string,
    time: string,
}

export const MovementSchema = new mongoose.Schema({
    lat: { type: mongoose.Schema.Types.String, required : true},
    lon: { type: mongoose.Schema.Types.String, required : true},
    time: { type: mongoose.Schema.Types.String, required : true}
});

const Movement = mongoose.model<IMovement>('Movement', MovementSchema);
export default Movement;