import {Schema , model , Document , Types} from 'mongoose';

export interface IMonasteries extends Document {
    name: string;
    establishedYear: Date;
    monksCount: number;
    isActive: boolean;
    description?: string;
    timestamps: Date;
    sect:string;
    location: {
        type: "Point";
        coordinates: [number, number];
        address: string;
        district: string;
    };
    images: string[];
    virtualTour?: Types.ObjectId;
}

const MonasteriesSchema = new Schema<IMonasteries>({
    name: { type: String, required: true },
    establishedYear: { type: Date, required: true },
    monksCount: { type: Number, required: true },
    isActive: { type: Boolean, required: true },
    description: { type: String },
    sect: { type: String, required: true },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        },
        address: { type: String, required: true },
        district: { type: String, required: true }
    },
    images: { type: [String], required: true },
    virtualTour: { type: Schema.Types.ObjectId, ref: 'VirtualTours' }
}, { timestamps: true });

MonasteriesSchema.index({ location: "2dsphere" });

export const MonasteriesModel = model<IMonasteries>('Monasteries', MonasteriesSchema);