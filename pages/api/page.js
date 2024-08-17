const demoResponse = {
    status: 200,
    message: "This is a demo response",
    data: {
        name: "John Doe",
        age: 25,
        email: "johndoe@example.com"
    }
};

const handler = (req,res)=>{
    res.status(200).json(demoResponse);
}

export default handler;