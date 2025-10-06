import { connectToDatabase } from "../database/mongoose";

async function main() {
    try {
        await connectToDatabase();
        console.log('OK: Database Connected Successfully' );
        process.exit(0);
    } catch (error) {
        console.error('Error: Database Connection Failed');
        console.error(error);
        process.exit(1);
    }
}

main(); 