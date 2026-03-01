// checks for required fields, calls the create method of user model to create a new user in the database and returns the created user object
const userModel = require("../models/user.model");

module.exports.createUser = async ({
    firstname, lastname, email, password
})=>{
    if (!firstname || !email || !password) {
        throw new Error("All fields are required");
    }
    const user = userModel.create({
        fullname : {
            firstname,
            lastname
        },
        email,
        password
    });
    return user;
}