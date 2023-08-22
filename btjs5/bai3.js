const topics = [
    {
      topic: "ReactJS",
      posts: [
        { postID: "id1", title: "title1" },
        { postID: "id2", title: "title2" },
      ],
    },
    {
      topic: "Vue.js",
      posts: [
        { postID: "id3", title: "title3" },
        { postID: "id4", title: "title4" },
      ],
    },
];

const newArray = [];
topics.forEach(topic => {
    newArray.push(...topic.posts);
})
console.log(newArray);