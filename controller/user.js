

export const getUser = async(req , res)=>{

    try {
        res.status(200).send({message: "the users are available now"})
    } catch (error) {
        console.log("the user not exist", error);
    }

}