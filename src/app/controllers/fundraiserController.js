import Fundraisermodel from "../models/Fundraisermodel";

export async function createFundraiserController(req){
    const {title, description, goal, amountraised, enddate, image, category, requisitee,beneficiary} = req;
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

    console.log(title);

    try{
    
    await newFundraiser.save()
    
        console.log("Fundraiser created");
        return {
            status: 200,
            json: {message : "Fundraiser registered succesfully"},
        }
        
    
}
    catch{
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
    catch{
        return {
            status: 500,
            json: {error: error.message},
        }
    }
}