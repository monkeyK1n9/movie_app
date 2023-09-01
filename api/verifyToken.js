const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const authHeader = req.headers.token

    if (authHeader) {
        const token = authHeader.split(" ")[1]; //the token in the header will be of the form "Bearer sfsdgsdfsdfsfs", so the actual token will be the second entry of the array when spitted

        jwt.verify(
            token, 
            process.env.SECRET_KEY,
            (err, data) => {
                if (err) return res.status(403).json({msg: "Token is not valid"})

                req.user = data;

                next();
            }
        )
    }
    else {
        return res.status(401).json({msg: "You are not authenticated"}); 
    }
}

module.exports = verify;