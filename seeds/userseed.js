const { User } = require('../models');

const userData = [
    {
        username: "ashton_headley",
        email: "ashheadley@gmail.com",
        password: "password"
    },
    {
        username: "kaitlin_vanleyen",
        email: "kaitlinvanleyen@gmail.com",
        password: "pasword123"
    },
    {
        username: "stellen_headley",
        email: "stellen@gmail.com",
        password: "password1234"
    },
    {
        username: "wrenner_headley",
        email: "wrenner@gmail.com",
        password: "password4321"
    },
    {
        username: "lousha_vanleyen",
        email: "lousha@gmail.com",
        password: "password12345"
    },
    {
        username: "pepsi_pepsico",
        email: "pepsi@gmail.com",
        password: "password123456"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;