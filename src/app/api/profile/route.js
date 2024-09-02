import dbConnect from "@/app/lib/db";
import { getProfilecontroller,updateProfilecontroller } from "@/app/controllers/profileController";
import { NextResponse } from "next/server";

export async function GET(req){
    // Connect to the database
    try{
    await dbConnect();

    
    const { searchParams } = new URL(req.url);

    const paramValue = searchParams.get('email');

    // console.log(paramValue);

    const userProfile= await getProfilecontroller(paramValue);

    // console.log(userProfile);

    return NextResponse.json(userProfile);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Profile not found",
            error: error.message
        });
    }
}

export async function POST(req){
    // Connect to the database
    try{
    await dbConnect();

    const reqbody = await req.formData();

    const userProfile= await updateProfilecontroller(reqbody);

    return NextResponse.json({
        message: "Profile updated successfully",
        data: userProfile
    });
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Profile update failed",
            error: error.message
    })
    }

}