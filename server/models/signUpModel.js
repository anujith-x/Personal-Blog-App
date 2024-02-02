import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {timeStamps: true})

export const User = mongoose.model('user', UserSchema)