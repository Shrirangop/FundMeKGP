import Contributormodel from "../models/Contributormodel";




export async function createContributorController(req){

    const name = req.get('name');
    const Amount = req.get('Amount');
    const title = req.get('title');
    const beneficiary = req.get('beneficiary');
    const receipt = req.get('receipt');
    
 
    const newContributor = new Contributormodel({
        name,
        Amount,
        title,
        beneficiary,
        receipt
    });

    console.log(name);

    try{
    
    await newContributor.save()
    
        console.log("Contributor created");
        return {
            status: 200,
            json: {message : "Contributor registered succesfully"},
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

export async function getContributorController(req){
    const title = req;

    console.log(title);
    try{
        const contributors = await Contributormodel.find(
            {title: title}
        );
        return {
            status: 200,
            json: contributors,
        }
    }
    catch(error){
        return {
            status: 500,
            json: {error: error.message},
        }
    }
}