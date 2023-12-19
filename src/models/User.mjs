import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        password: {
            type: String,
            required: true,
        },
        passwordResetToken: String,
        passwordResetExpires: Date,
        sessionCount: {
            type: Number,
            default: 0

        },
        selections: [{
            answer: String,
            label: String
        }],
        pdfData: {
            type: String
        }

    },
    {
        timestamps: true,
    }
);


export default mongoose.model('User', userSchema);