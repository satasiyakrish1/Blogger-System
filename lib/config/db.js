import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ DB Connected");
    } catch (error) {
        console.error("❌ DB Connection Error:", error.message);
        process.exit(1); // Exit if DB connection fails
    }
};
