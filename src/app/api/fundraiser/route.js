import { getFundraiserController,createFundraiserController } from "@/app/controllers/fundraiserController";

import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";

import multer from 'multer';
import fs from 'fs';
import path from 'path';

export async function GET(){
    // Connect to the database
    await dbConnect();
    const fundraisers = await getFundraiserController();

    return NextResponse.json(fundraisers);
}

export async function POST(req){
    // Connect to the database
    

    // console.log(ans);

    await dbConnect();
    try {
        const reqbody = await req.formData();

        console.log(reqbody);
        // const isImageuploaded =

       const fundraiser = await createFundraiserController(reqbody);
        // .then(()=>{
        //     console.log("Fundraiser created successfully");
            
        // // console.log(fundraiser);
        // }).catch((err)=>{
        //     console.log(err);
        // })

        // console.log(fundraiser);

        return NextResponse.json(fundraiser,{status:200})

    }  

    catch (error) {
        // Return an error response
        console.log("hello");
        return NextResponse.json({ error: error.message }, { status:500})
}
}


// // Configure multer for file uploads
// const uploadDir = path.join(process.cwd(), '/public/uploads');

// // Ensure the upload directory exists
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//     cb(null, `${uniqueSuffix}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const uploadMiddleware = upload.array('image');

// export async function POST(req) {
  

//   return new Promise((resolve, reject) => {
//     uploadMiddleware(req,{}, async (err) => {
//       if (err) {
//         console.error('Multer error:', err);
//         return resolve(
//           NextResponse.json({ error: 'Error uploading files' }, { status: 500 })
//         );
//       }

      
//       const formData = await req.formData();

//       const title = formData.get('title');
//       const description = formData.get('description');
//       const goal = formData.get('goal');
//       const requisitee = formData.get('requisitee');
//       const beneficiary = formData.get('beneficiary');
//       const enddate = formData.get('enddate');
//       const category = formData.get('category');
//       const files = formData.get('image');




//     //   const { title, description, goal, requisitee, beneficiary, enddate, category } = await req.json();
//     //   const files = req.files;

//       console.log('Form Fields:', { title, description, goal, requisitee, beneficiary, enddate, category });
//       console.log('Uploaded Files:', files);

//       // Handle your logic here, e.g., saving to a database

//       resolve(NextResponse.json({ message: 'Fundraiser created successfully' }));
//     });
//   });
// }
