import { createUserController,loginUserController } from "@/app/controllers/usercontroller";
import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";

export async function POST(req){
    // Connect to the database
    await dbConnect();
    try {
        // console.log(req.json())
      
      // Call the controller function

      const reqbody = await req.json();
      console.log(reqbody);
      
      const user = await createUserController(reqbody);

      console.log(user);

      if(user.status==500) return NextResponse.json(user,{status:500})

        return NextResponse.json(user,{status:200})

    }  

    catch (error) {
      // Return an error response
      return NextResponse.json({ error: error.message }, { status:500})
}
}