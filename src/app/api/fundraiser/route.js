import { getFundraiserController,createFundraiserController } from "@/app/controllers/fundraiserController";

import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";

export async function GET(){
    // Connect to the database
    await dbConnect();
    const fundraisers = await getFundraiserController();

    return NextResponse.json(fundraisers);
}

export async function POST(req){
    // Connect to the database
    await dbConnect();
    try {
        const reqbody = await req.json();
        const fundraiser = await createFundraiserController(reqbody);

        return NextResponse.json(fundraiser,{status:200})

    }  

    catch (error) {
        // Return an error response
        return NextResponse.json({ error: error.message }, { status:500})
}
}