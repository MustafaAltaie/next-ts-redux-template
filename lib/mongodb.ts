import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

interface MongooseGlobal {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  let mongoose: MongooseGlobal | undefined;
}

const globalWithMongoose = global as typeof globalThis & { mongoose?: MongooseGlobal };

globalWithMongoose.mongoose ??= { conn: null, promise: null };

const cached = globalWithMongoose.mongoose;

async function dbConnect(): Promise<Mongoose> {
  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached!.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      console.log("✅ MongoDB connected");
      return mongoose;
    }).catch((err) => {
      console.error("❌ MongoDB connection error:", err);
      throw err;
    });
  }

  cached!.conn = await cached!.promise;
  return cached!.conn;
}

export default dbConnect;