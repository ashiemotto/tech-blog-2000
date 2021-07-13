const { Post } = require('../models');

const postData = [
    {
        title: "Greatest app of our generation",
        content: "Some of the most amazing features I've ever seen",
        user_id: 1
    },
    {
        title: "Wonderful simply wonderful",
        content: "Suspendisse aliquet vestibulum nunc, in volutpat odio. Morbi vulputate, ex sit amet pellentesque interdum, enim purus pellentesque lacus, quis finibus augue lectus ac ipsum. Duis metus risus, blandit ac condimentum eu, posuere at mi. Nulla vel odio at neque elementum viverra. Morbi sollicitudin scelerisque justo, vitae euismod nibh molestie vitae. Ut aliquet quis ex sit amet aliquet. Fusce id lacinia dolor, id tempor tortor. Vivamus blandit nulla orci, eu euismod enim dapibus vitae.",
        user_id: 2
    },
    {
        title: "Greatest app developer!",
        content: "Mauris sit amet eleifend mauris. Mauris quis feugiat nulla, vitae faucibus ipsum. Donec fringilla diam lorem, ultrices dignissim tortor tincidunt sit amet. Fusce iaculis metus a felis euismod, eget vehicula mauris fringilla.",
        user_id: 3

    },
    {
        title: "Etiam porttitor lorem urna, ut euismod risus ultrices ut. ",
        content: " eu aliquam erat augue pellentesque odio. Pellentesque turpis nibh, molestie in tortor eget, lobortis efficitur lorem. Morbi lacinia, augue quis consequat hendrerit, orci massa suscipit tellus, sit amet aliquet orci urna quis tortor. ",
        user_id: 4
    },
    {
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        content: "Suspendisse aliquet vestibulum nunc, in volutpat odio. Morbi vulputate, ex sit amet pellentesque interdum, enim purus pellentesque lacus, quis finibus augue lectus ac ipsum. ",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;