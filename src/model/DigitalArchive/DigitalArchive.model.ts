import {Schema , model, Document,Types} from "mongoose";

export interface IDigitalArchive extends Document {
    title: string;
    description: string;
    fileUrl: string;
    uploadedAt: Date;
    language?: string;
    tags: string[];
    uploadedBy: Types.ObjectId;
}

const DigitalArchiveSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true ,  language: String, },
    fileUrl: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
    tags: { type: [String], default: [] },
    uploadedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const DigitalArchive = model<IDigitalArchive>('DigitalArchive', DigitalArchiveSchema);