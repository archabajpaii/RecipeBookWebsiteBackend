const authService = require('../services/authService');
const asyncHandler = require("express-async-handler")

exports.register = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await authService.registerUser(email, password);
  res.status(201).json(result);
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const {token,user} = await authService.loginUser(email, password);
  res.status(200).json({
    token,
    user
  });
});
