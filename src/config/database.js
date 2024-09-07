const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

const databaseConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n⚙️  MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
} catch (error) {
    console.error(" MONGODB connection FAILED : ", error);
    process.exit(1)
}
};

module.exports = { databaseConnection };
