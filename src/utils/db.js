const mongoose = require("mongoose");

const DB_URL = 'mongodb+srv://usuario_1:usuario_1@cluster0.8muiq0n.mongodb.net/student-api';

const connectDB = async()=>{
   try {
    mongoose.set('strictQuery',true);
   const db = await mongoose.connect(DB_URL);
   const {name,host} = db.connection;
   console.log(`Server conectado a la base de datos ${name} en host ${host}`);
   } catch (error) {
    console.log(`Error, ${error}`);
   }
}

module.exports = {
    connectDB
}


// Aqui tengo el lin pa ver la clase
// https://uphubgrade.sharepoint.com/sites/202211FSDFTLIVE/_layouts/15/stream.aspx?id=%2Fsites%2F202211FSDFTLIVE%2FDocumentos%20compartidos%2FGeneral%2FRecordings%2FNODE%2D20230116%5F093436%2DGrabaci%C3%B3n%20de%20la%20reuni%C3%B3n%2Emp4