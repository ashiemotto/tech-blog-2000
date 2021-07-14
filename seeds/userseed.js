const { User } = require('../models');

const userData = [
    {
        name: "ashton_headley",
        email: "ashheadley@gmail.com",
        password: "password"
    },
    {
        name: "kaitlin_vanleyen",
        email: "kaitlinvanleyen@gmail.com",
        password: "pasword123"
    },
    {
        name: "stellen_headley",
        email: "stellen@gmail.com",
        password: "password1234"
    },
    {
        name: "wrenner_headley",
        email: "wrenner@gmail.com",
        password: "password4321"
    },
    {
        name: "lousha_vanleyen",
        email: "lousha@gmail.com",
        password: "password12345"
    },
    {
        name: "pepsi_pepsico",
        email: "pepsi@gmail.com",
        password: "password123456"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;