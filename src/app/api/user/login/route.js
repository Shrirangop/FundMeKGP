import { loginUserController } from "@/app/controllers/usercontroller";
import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";


export async function POST(req) {
    // Connect to the database
    await dbConnect();
    try {
        // console.log(req.json())
      
      // Call the controller function

      const reqbody = await req.json();
      
      const user = await loginUserController(reqbody);



      console.log(user);

      if(user.status==404) return NextResponse.json(user, { status: 404 })
      if(user.status==401) return NextResponse.json(user, { status: 401 })
      // Return the response using NextResponse
      return NextResponse.json(user, { status: 200 });

    } catch (error) {
      // Return an error response
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }