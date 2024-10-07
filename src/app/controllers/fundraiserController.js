import Fundraisermodel from "../models/Fundraisermodel";
import { uploadToCloudinary } from "../lib/uploadtocloud";

const uploadfilemiddleware = async (images,folder)=>{
    const image = [];

        for(let i = 0;i<images.length;i++){
            try{
        const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${images[i].name}`;

        const buffer = Buffer.from(await images[i].arrayBuffer())

        const mimeType = images[i].type;
        const encoding = "base64";
        const base64Data = buffer.toString(encoding);

        const fileUri = `data:${mimeType};${encoding},${base64Data}`;

        const res = await uploadToCloudinary(fileUri, filename, folder);

                image.push(res.result.secure_url);

            }catch(err){
                console.log(err);
            }
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
    // const amountraised = 0;
    const enddate = req.get('enddate');
    const images = req.getAll('image');
    const category = req.get('category');
    const requisitee = req.get('requisitee');
    const beneficiary = req.get('beneficiary');
    const accountNumber = req.get('accountNumber');
    const ifscCode = req.get('ifscCode');
    const upiId = req.get('upiId');

    console.log(accountNumber);

    // console.log(images);


    const image = await uploadfilemiddleware(images,"fundraisers");
   

    // console.log(image);





    const newFundraiser = new Fundraisermodel({
        title,
        description,
        goal,
        enddate,
        image,
        category,
        requisitee,
        beneficiary,
        accountNumber,
        ifscCode,
        upiId
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

export async function getFundraiserController(query){
    try{
        let fundraisers;
        console.log(query);
        if(query) fundraisers = await Fundraisermodel.findById(query);

        else fundraisers = await Fundraisermodel.find();
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

export async function updateAmountraised(req){
    const {id,amount} = req;

    console.log(id,amount);
    try{
        const fundraiser = await Fundraisermodel.findById(id);

        console.log(fundraiser.amountraised);
        fundraiser.amountraised = fundraiser.amountraised + Number(amount);
        await fundraiser.save();
        return {
            status: 200,
            json: {message: "Amount raised updated successfully"},
        }
    }
    catch(error){
        return {
            status: 500,
            json: {error: error.message},
        }
    }
}

