  
const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! "
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "I like it"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "The greatest thing since sliced bread"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful "
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;