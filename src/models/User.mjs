import mongoose from "mongoose";

/* The code is defining a Mongoose schema for a user object. The schema specifies the structure and data types of the user object. */
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

/* `export default mongoose.model('User', userSchema);` is exporting the Mongoose model for the user schema. */
export default mongoose.model('User', userSchema);