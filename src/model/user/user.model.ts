import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string; // hashed
    role: 'tourist' | 'admin' | 'community'; // roles
    phone?: string;
    profilePicture?: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },

        role: { type: String, enum: ['tourist', 'admin', 'community'], default: 'tourist' },
        phone: { type: String },
        profilePicture: { type: String }, // URL to image
    },
    { timestamps: true }
);

export const User = model<IUser>('User', UserSchema);
