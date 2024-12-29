import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            Unique:true,
        },
        
        fullName:{
            type:String,
            required:true,
        },

        password:{
            type:String,
            required:true,
            minlength:6,
        },

        ProfilePic:{
            type:String,
            default: "",
        },
    },

    {typeStamps: true}
);

const User = mongoose.model("User",userSchema);

export default User;



