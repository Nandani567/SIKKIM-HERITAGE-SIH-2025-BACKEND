import {Schema , Document,Types ,model} from "mongoose";

export interface IVirtualTour extends Document {
    title: string;
    monasteryId: Types.ObjectId;
    description?: string;
    tourUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

const VirtualTourSchema = new Schema<IVirtualTour>({
    title: { type: String, required: true },
    monasteryId: {type:Schema.Types.ObjectId, ref: 'Monasteries', required: true },

    description: { type: String },
    tourUrl: { type: String, required: true }
}, { timestamps: true });

export const VirtualTourModel = model<IVirtualTour>('VirtualTour', VirtualTourSchema);