const user = require('../models/User');
// example function to create a new user
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = new User({
            name,
            email,
            password
        });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}