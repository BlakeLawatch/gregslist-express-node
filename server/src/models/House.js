import { Schema } from "mongoose";

export const HouseSchema = new Schema(
    {
        Price: { type: Number, required: true, min: 1, max: 10000000 },
        Year: { type: Number, required: true, min: 1700, max: new Date().getUTCFullYear() },
        Bedrooms: { type: Number, required: true, min: 0, max: 20 },
        Bathrooms: { type: Number, required: true, min: 0, max: 20 },
        Description: { type: String, required: false, max: 1000 },
        CreatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }

    },
    { timestamps: true, toJSON: { virtuals: true } }
)