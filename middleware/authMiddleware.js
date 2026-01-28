const checkRole = (role) => {
    return (req, res, next) => {
        const userRole = req.headers['x-user-role']; 
        if (userRole === role) {
            next(); 
        } else {
            res.status(403).json({ message: "Forbidden: Kamu bukan " + role });
        }
    };
};

module.exports = checkRole;