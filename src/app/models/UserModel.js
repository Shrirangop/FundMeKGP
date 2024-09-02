import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    role: {
        type: String,
        enum: ["student", "alumni"],
        default: "student",
        required:true
    },
    phonenumber:{
        type: Number,
        required: [true, "Please provide a phonenumber"],
    },
    Department : {
        type : String,
        required : false,
        default : ""
    },
    Hall : {
        type : String,
        required : false,
        default: ""
    },

    Place :{
        type : String,
        required : false,
        default : ""
    },

    profilepic : {
        type : String,
        required : false,
        default : ""
    },
    id : {
        type : String,
        required : false,
        default : ""
    }

    

    
});

export default mongoose.models.User || mongoose.model("User", UserSchema);