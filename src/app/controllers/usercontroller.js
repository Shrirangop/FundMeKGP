import user from "../models/UserModel";
import bcrypt from "bcrypt";

export async function createUserController(req){
    const {name, email, password, role, phonenumber} = req;

    const hashedpassword = await bcrypt.hash(password,10);
    const newUser = new user({
        name,
        email,
        password : hashedpassword,
        role,
        phonenumber,
    });

    // console.log(name);

    try{
    
    await newUser.save()
    
        console.log("User created");
        return {
            status: 200,
            json: {message : "User registered succesfully"},
        }
        
    
}
    catch{
        console.log(error);
        return {
            status: 500,
            json: {error: error.message},
        }
    }
}


export async function loginUserController(req) {
    // console.log(req.json());
    const { email, password } = req;
    // console.log(email,password)
    let foundUser;
    try {
        // Find the user by email
        
         foundUser = await user.findOne({ email });
    
     
        // console.log(foundUser);
        
        if (!foundUser) {
            return { "status": 404, "json": { "message": "User not found" } };
        }

        if (foundUser.password !== password) {
            return { status: 401, json: { message: "Invalid credentials" } };
        }

        return { status: 200, json: foundUser };
    } catch (error) {
        return { status: 500, json: { error: error.message } };
    }
}
