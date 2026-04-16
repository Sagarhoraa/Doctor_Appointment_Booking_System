//api for adding doctor

const addDoctor = async(req,res)=>{
    try {
        const {name,email,password,speciality,degree,experience,about,fees,address} = req.body;
        //when we call this api , we will add these data in from data format to parse the form data , we need a middleware.
        const imageFile = req.file


        console.log({name,email,password,speciality,degree,experience,about,fees,address}, imageFile);
        

    } catch (error) {
        
    }
}
export {addDoctor}