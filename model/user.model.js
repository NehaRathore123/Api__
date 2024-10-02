import mongoose from "mongoose";
import uniquevalidator from 'mongoose-unique-validator';

const userSchema = mongoose.Schema({
    _id:Number,
    Name: {
        type:String,
        required:[true,"name is required"],
        trim:true,
        lowercase:true
    },
    email: {
        type:String,
        required:[true,"email is required"],
        trim:true,
        lowercase:true,
        unique:true
    },
    password: {
        type:String,
        required:[true,"password is required"],
        trim:true,
        lowercase:true,
        maxlength:10,
        minlength:5
    },
    mobile: {
        type:String,
        required:[true,"mobile is required"],
        trim:true,
        lowercase:true,
        maxlength:10,
        minlength:10
    },
    info:String,


})

userSchema.plugin(uniquevalidator);

const userSchemaModel = mongoose.model('data_collection',userSchema);

export default userSchemaModel;