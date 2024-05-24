import mongoose from "mongoose";
// require('dotenv').config();
// const { MONGO_URI } = process.env;
// import { config } from "dotenv/lib/main";
import { config } from 'dotenv';
config();

export const dbConnection = () => {
  try{
    mongoose
    .connect(process.env.MONGO_URI, 
      // dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    )
    console.log("Db Connected");
  }
  catch(error){
    console.log("Error in DB");
  }
  
   
};
