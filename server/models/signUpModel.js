import mongoose from 'mongoose'

const signUpSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {timeStamps: true})

export const SignUp = mongoose.model('signUp', signUpSchema)