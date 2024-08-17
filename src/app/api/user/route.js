import { NextResponse } from "next/server";


export function GET(){
    const users = getUserController();

    return NextResponse.json(users);
}