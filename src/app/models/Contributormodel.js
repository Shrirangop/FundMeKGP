import mongoose from "mongoose";

const contributorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please provide a name"],
    },

    Amount : {
        type: Number,
        required: true,
    },

    title :{
        type: String,
        required: [true, "Please provide a title"],
    },

    beneficiary:{
        type: String,
        required: [true, "Please provide a beneficiary"],
    },

    receipt:{
        type: String,
        required: [true, "Please provide a receipt"],
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
    
})

export default mongoose.models.Contributor || mongoose.model("Contributor", contributorSchema);