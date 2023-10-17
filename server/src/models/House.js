import { Schema } from "mongoose";

export const HouseSchema = new Schema(
    {
        price: { type: Number, required: true, min: 1, max: 10000000 },
        year: { type: Number, required: true, min: 1700, max: new Date().getUTCFullYear() },
        bedrooms: { type: Number, required: true, min: 0, max: 20 },
        bathrooms: { type: Number, required: true, min: 0, max: 20 },
        description: { type: String, required: false, max: 1000 },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }

    },
    { timestamps: true, toJSON: { virtuals: true } }
)