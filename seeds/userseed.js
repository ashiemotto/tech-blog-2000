const { User } = require('../models');

const userData = [
    {
        name: "tyrell_wellick",
        email: "tyrell@gmail.com",
        password: "p@ssword1"
    },
    {
        name: "mia_simay",
        email: "mia@gmail.com",
        password: "p@ssword2"
    },
    {
        name: "robert_paulson",
        email: "robertp@gmail.com",
        password: "p@ssword3"
    },
    {
        name: "gon_freecs",
        email: "gon@gmail.com",
        password: "p@ssword4"
    },
    {
        name: "uma_thurman",
        email: "uma@gmail.com",
        password: "p@ssword5"
    },
    {
        name: "tyler_durden",
        email: "tyler@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;