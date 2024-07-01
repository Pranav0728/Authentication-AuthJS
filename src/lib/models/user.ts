import {Schema, model, models} from 'mongoose'

const userSchema = new Schema({
    name: {required: true, type: String},
    email: {required: true, type: String, unique: true},
    password: {required: true, type: String},
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
const User = models.User || model("User", userSchema)
export default User;
