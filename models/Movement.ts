import mongoose = require('mongoose');

export interface IMovement extends mongoose.Document {
    lat: string,
    lon: string,
    time: string,
    velocity: number,
}

export const MovementSchema = new mongoose.Schema({
    lat: { type: mongoose.Schema.Types.String, required : true},
    lon: { type: mongoose.Schema.Types.String, required : true},
    time: { type: mongoose.Schema.Types.String, required : true},
    velocity: { type: mongoose.Schema.Types.Number}
});

const Movement = mongoose.model<IMovement>('Movement', MovementSchema);
export default Movement;