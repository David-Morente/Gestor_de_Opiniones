import {Schema, model} from "mongoose";

const commentsSchema = Schema({
    comment:{
        type: String,
        required: [true, "Comment is required"],
        maxLength:[150, "Comment cannot exceed 150 characters"]
    },
    punlication: {
        type: Schema.Types.ObjectId,
        ref: 'Publications',
        required: true
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

export default model("Comments", commentsSchema)