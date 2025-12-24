import { Schema, model, Document, Types } from "mongoose";

export interface IEvent extends Document {
    monasteryId: Types.ObjectId;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    openForTourists: boolean;
}

const EventSchema = new Schema<IEvent>(
    {
        monasteryId: {
            type: Schema.Types.ObjectId,
            ref: "Monastery",
            required: true,
        },

        title: String,
        description: String,
        startDate: Date,
        endDate: Date,

        openForTourists: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export const Event = model<IEvent>("Event", EventSchema);
