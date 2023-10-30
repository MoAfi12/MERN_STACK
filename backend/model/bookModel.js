import mongoose from "mongoose";


const bookSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        author:{
          type: String,
          required: true,
        },
        description:{
            type: String,
           
        },
        price:{
            type: Number,
            required: true,
        },

        publishYear: {
            type: Number,
            required: true,
        }
       
    },
    {
        timestamps: true
    }
)

const Book = mongoose.model("Book", bookSchema);

export default Book