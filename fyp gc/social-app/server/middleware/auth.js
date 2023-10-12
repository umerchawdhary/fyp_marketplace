const jwt = require('jsonwebtoken');
const User = require('../models/user');
const json = require('../utils/jsonresponse');

exports.isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return json(res, 403, `Forbidden request.`)

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decode._id);

    next();
};