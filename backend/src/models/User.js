import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: function () {
      return this.role !== 'client';
    },
    unique: true,
    sparse: true
  },

  password: {
    type: String,
    required: function () {
      return this.role !== 'client';
    },
  },

  role: {
    type: String,
    enum: ['admin', 'partner', 'asistente', 'client'],
    default: 'client'
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;