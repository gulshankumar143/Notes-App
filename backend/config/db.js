import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connect =async ()=>{
    try {
        const conn =await mongoose.connect(process.env.MONGO_URI);
        console.log(`connection to db successful ${conn}`);
    } catch (error) {
        console.error(`error: ${error.message}`);
        process.exit(1);
    }
};
export default connect;