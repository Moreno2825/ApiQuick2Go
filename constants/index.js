module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product Created Successfully',
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup Successfully',
        LOGIN_SUCCESS: 'Login Successfully',
        DUPLICATE_EMAIL: 'User already exist with given email',
        USER_NOT_FOUND: 'User not found',
        INVALID_PASSWORD: 'Incorrect Password'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    }
}