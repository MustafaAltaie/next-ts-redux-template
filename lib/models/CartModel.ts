import { Schema, model, models } from "mongoose";

const CartSchema = new Schema({
    name: { type: String },
});

const Contact = models.Contact || model('Contact', CartSchema);

export default Contact;