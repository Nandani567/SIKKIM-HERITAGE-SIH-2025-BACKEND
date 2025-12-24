import { Schema, model, Document, Types } from "mongoose";

export interface IBooking extends Document {
    userId: Types.ObjectId;
    monasteryId: Types.ObjectId;
    eventId?: Types.ObjectId;
    date: Date;
    numberOfVisitors: number;
    status: "pending" | "confirmed" | "cancelled";
}

const BookingSchema = new Schema<IBooking>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        monasteryId: {
            type: Schema.Types.ObjectId,
            ref: "Monastery",
        },

        eventId: {
            type: Schema.Types.ObjectId,
            ref: "Event",
        },

        date: Date,
        numberOfVisitors: Number,

        status: {
            type: String,
            enum: ["pending", "confirmed", "cancelled"],
            default: "pending",
        },
    },
    { timestamps: true }
);

export const Booking = model<IBooking>("Booking", BookingSchema);
