import Contributormodel from "../models/Contributormodel";

export async function createContributorController(req){
    const {name, email, Phone, title, Amount } = req;
    const newContributor = new Contributormodel({
        name,
        email,
        Phone,
        title,
        Amount
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
    catch{
        console.log(error);
        return {
            status: 500,
            json: {error: error.message},
        }
    }
}

export async function getContributorController(req){
    const title = req;
    try{
        const contributors = await Contributormodel.find(
            {title: title}
        );
        return {
            status: 200,
            json: contributors,
        }
    }
    catch{
        return {
            status: 500,
            json: {error: error.message},
        }
    }
}