const sendToken = (res, statusCode, message, user, token) => {

    //cookie
    const options = {
        expires: new Date(
            Date.now() + (1000 * 60 * 60 * 24 * 360)
        ),
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
    };
    res.cookie('token', token, { domain: 'http://localhost:3001', path: '/', secure: false });
    res.status(statusCode).cookie('token', token, options).json({
        status: statusCode,
        message,
        user,
        token
    });
}

module.exports = sendToken;