import { createContributorController,getContributorController } from "@/app/controllers/contributorController";

import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";

export async function GET(req){
    // Connect to the database
    await dbConnect();
    const { searchParams } = new URL(req.url);

    const paramValue = searchParams.get('title');

    console.log(paramValue);

    const contributors = await getContributorController(title);

    return NextResponse.json(contributors);
}

export async function POST(req){
    // Connect to the database
    await dbConnect();
    try {
        const reqbody = await req.formData();

        console.log(reqbody);
        
        const contributor = await createContributorController(reqbody);

        return NextResponse.json(contributor,{status:200})

    }  

    catch (err) {
        // Return an error response

        console.log(err);
        return NextResponse.json({ error: err.message }, { status:500})
}
}