import user from "../models/UserModel"
import { uploadToCloudinary } from "../lib/uploadtocloud";

const uploadfilemiddlewareprofile = async (file,folder)=>{

    try {
        // console.log(file);
        const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${file.name}`;

        const buffer = Buffer.from(await file.arrayBuffer())

        const mimeType = file.type;
        const encoding = "base64";
        const base64Data = buffer.toString(encoding);

        const fileUri = `data:${mimeType};${encoding},${base64Data}`;

        const res = await uploadToCloudinary(fileUri, filename, folder);

        // console.log(res);
        return res.result.secure_url;
    }
    catch (error) {
        // console.log(error);
        return error;
    }

    }

export async function getProfilecontroller(reqbody){
    const email = reqbody;
    console.log(email);
    const userProfile = await user.findOne({
        email
    });
    console.log(userProfile);
    return userProfile;
}

export async function updateProfilecontroller(reqbody){

    // console.log(reqbody);

    const Department = reqbody.get('Department');
    const Hall = reqbody.get('Hall');
    const Place = reqbody.get('Place');

    const email = reqbody.get('email');
    const pic = reqbody.get('pic');
    const idcard = reqbody.get('idcard');

    // console.log(pic);

    const picurl = await uploadfilemiddlewareprofile(pic,"profile");
    const idcardurl = await uploadfilemiddlewareprofile(idcard,"id_card");


    // console.log(picurl);
    const userProfile = await user.findOneAndUpdate({
        email
    },{
        Department:Department,
        Hall:Hall,
        Place:Place,
        profilepic: picurl,
        id: idcardurl
    });

    console.log(userProfile);
    return userProfile;
}

