const mongoose = require("mongoose")
const schema = mongoose.Schema

const TaskSchema = new schema({
    description:{
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("Task",TaskSchema)