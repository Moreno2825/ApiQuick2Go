const User = require('../database/models/userModel');
const constant = require('../constants');
const { formatMongoData } = require('../helper/dbHelper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signup = async ({name ,lastname, phone, email ,password}) => {
    try {
        const user = await User.findOne({email});
        if (user) {
            throw new Error(constant.userMessage.DUPLICATE_EMAIL);
        }
        
        password = await bcrypt.hash(password, 12);

        const newUser = new User({ name, lastname, email, phone, password });

        let result = await newUser.save();

        return formatMongoData(result);

    } catch (error) {
        console.log('Something went wrong: Services: createProduct', error);
        throw new Error(error);
    }
}

module.exports.login = async ({ email ,password}) => {
    try {
        const user = await User.findOne({email});
        if (!user) {
            throw new Error(constant.userMessage.USER_NOT_FOUND);
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error(constant.userMessage.INVALID_PASSWORD);
        }
        
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY || 'my-secret-key', { expiresIn: '1d'});

        return { token };
    } catch (error) {
        console.log('Something went wrong: Services: createProduct', error);
        throw new Error(error);
    }
}