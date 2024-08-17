import { createContributorController,getContributorController } from "@/app/controllers/contributorController";

import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";

export async function GET(req){
    // Connect to the database
    await dbConnect();
    const title = await req.query;
    const contributors = await getContributorController(title);

    return NextResponse.json(contributors);
}

export async function POST(req){
    // Connect to the database
    await dbConnect();
    try {
        const reqbody = await req.json();
        const contributor = await createContributorController(reqbody);

        return NextResponse.json(contributor,{status:200})

    }  

    catch (error) {
        // Return an error response
        return NextResponse.json({ error: error.message }, { status:500})
}
}