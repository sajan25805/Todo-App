import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema( {
      data: {
        type: String,
    },
    done: {
        type: Boolean,
        default: false
    },
},
 { timestamps: true}
);

export default mongoose.model("Todo", todoSchema, "todos");
