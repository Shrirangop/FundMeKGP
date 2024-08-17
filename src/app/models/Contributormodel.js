import mongoose from "mongoose";

const contributorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please provide a name"],
    },

    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },

    Phone : {
        type: Number,
        required: [true, "Please provide a phone number"],
    },

    Amount : {
        type: Number,
        required: true,
    },
    title :{
        type: String,
        required: [true, "Please provide a title"],
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
    
})

export default mongoose.models.Contributor || mongoose.model("Contributor", contributorSchema);