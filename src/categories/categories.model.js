import {Schema, model} from "mongoose";

const categorieSchema = Schema({
    categoryType:{
        type: String,
        required: [true, "Name is required"],
        maxLength:[25, "Name cannot exceed 25 characters"]
    },
    description:{
        type: String
    },
    status:{
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timeStamps: true
})

export default model("Categories", categorieSchema)