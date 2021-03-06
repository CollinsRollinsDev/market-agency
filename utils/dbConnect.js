import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect("mongodb+srv://admin:admin@marketting.fki0u.mongodb.net/dbFiles?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState;
    console.log(`Successfully accessed database: ${connection.isConnected}`)
}

export default dbConnect;