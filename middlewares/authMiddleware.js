const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({message: 'No token provided'})
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({message : 'Invalid token '})
        }
        req.userId = decoded.id;
        next();
    });
};

exports.authorize = (roles) => {
    return (req, res, next) => {
        const userRole = req.user.role;

        if(!roles.includes(userRole)){
            return res.status(403).json({message: 'Forbidden'});
        }
        next();
    };
};