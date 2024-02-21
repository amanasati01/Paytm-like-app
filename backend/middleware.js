const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('./config');

function AuthMiddleWare(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(403).json({
            Error: error.message
        });
    }
}

module.exports = {
    AuthMiddleWare
};
