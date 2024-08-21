import Fundraisermodel from "../models/Fundraisermodel";
import path from "path";
import { writeFile } from "fs/promises";

const uploadfilemiddleware = async (images)=>{
    const image = [];
        for(let i = 0;i<images.length;i++){
        const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${images[i].name}`;
        const filepath = path.join(process.cwd(),'/public/uploads',filename);
        const buffer = Buffer.from(await images[i].arrayBuffer())
        await writeFile(filepath, buffer)
        .then(()=>{
            console.log("Image uploaded successfully");
            // console.log(typeof(filepath));
            
        image.push(filepath);

        }).catch((err)=>{
            console.log(err);
        })

    }

    // console.log(image);

    return image;

  
}

export async function createFundraiserController(req){
    // console.log(req);
    // const {title, description, goal, amountraised, enddate, image, category, requisitee,beneficiary} = req;
    const title = req.get('title');
    const description = req.get('description');
    const goal = req.get('goal');
    const amountraised = req.get('amountraised');
    const enddate = req.get('enddate');
    const images = req.getAll('image');
    const category = req.get('category');
    const requisitee = req.get('requisitee');
    const beneficiary = req.get('beneficiary');

    // console.log(images);


    const image = await uploadfilemiddleware(images)
   

    // console.log(image);





    const newFundraiser = new Fundraisermodel({
        title,
        description,
        goal,
        amountraised,
        enddate,
        image,
        category,
        requisitee,
        beneficiary
    });


    try{
    
    await newFundraiser.save()
    .then(()=>{
        console.log("Fundraiser created");
    })
    .catch((err)=>{
        console.log(err);
    })
        return {
            status: 200,
            json: {message : "Fundraiser registered succesfully"},
        }
        
    
}
    catch(error){
        console.log(error);
        return {
            status: 500,
            json: {error: error.message},
        }
    }
}

export async function getFundraiserController(){
    try{
        const fundraisers = await Fundraisermodel.find();
        return {
            status: 200,
            json: fundraisers,
        }
    }
    catch(error){
        return {
            status: 500,
            json: {error: error.message},
        }
    }
}