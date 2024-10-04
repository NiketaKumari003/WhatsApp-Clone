import mongoose from 'mongoose';
import dotenv from 'dotenv';

// initialization of dotenv package
dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;



const Connection = async()=>{
    const URL =`mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.16hjs.mongodb.net/clone-whatsApp`
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true});
        console.log('Database connected successfully');
    }
    catch(error){
        console.log('Error while connecting with database',error.message);
    }
}
export default  Connection;