import {Schema, model} from "mongoose";

const publicationSchema = Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        maxLength:[50, "Title cannot exceed 50 characters"]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
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

export default model("Publications", publicationSchema)