import mongoose from "mongoose";

const fundraiseScema  = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    goal: {
        type: Number,
        required: [true, "Please provide a goal"],
    },
    image: {
        type: Array,
        required: [true, "Please provide a image"],
    },
    requisitee: {
        type: String,
        required : true,
    },
    beneficiary:{
        type: String,
        required : true,
    },
    amountraised:{
        type: Number,
        default: 0,
    },
    enddate:{
        type: Date,
        required: [true, "Please provide a enddate"],
    },
    category: {
        type: String,
        required: [true, "Please provide a category"],
    },

    accountNumber:{
        type: Number,
        required: [true, "Please provide a account number"],
    },
    ifscCode:{
        type: String,
        required: [true, "Please provide a ifsc code"],
    },
    upiId:{
        type: String,
        required: [true, "Please provide a upi id"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Fundraiser || mongoose.model("Fundraiser", fundraiseScema);
