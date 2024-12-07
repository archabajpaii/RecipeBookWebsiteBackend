const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (email, password) => {
console.log(email,password)
  const existingUser = await User.findOne({ email });
  if (existingUser){
     throw new Error("User already exists");
  }
  else{
    const user=await User.create({email,password});
    return {"User is regsitered":email}
  }

};

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email,password });
  if (!user) throw new Error("user does not exist");

  // const isMatch = await User.compare(password, user.password);
  // if (!isMatch) throw new Error("Invalid credentials");
 
  
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return { token };
};
