//jshint esversion:6

const blogPosts = [
  {
    id: 0,
    author: "Patryk Szczerbiński",
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vel quod doloribus, ex doloremque nam beatae soluta molestias corporis aliquid esse vero, voluptas minus voluptatum hic. Omnis distinctio dolorem sunt.",
    date: "05.07.2022",
    url: "/posts/title"
  },
];

exports.getDate = function () {
  const today = new Date();

  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric"
  };

  let date = today.toLocaleDateString("pl-PL", options);

  if(today.getDate()<10){
    date = "0" + date;
  }
  return date;
};

exports.getBlogData = function () {
  return blogPosts;
};

exports.setBlogData = (blogData, title) => {
  blogPosts.push({id: blogPosts.length, author: blogData.author, title: blogData.title, content: blogData.content, date: this.getDate(), url: title});
};

exports.checkErrors = (data) => {
  let isAuthor = true;
  let isTitle = true;
  let isContent = true;
  if (data.author === "") {
    isAuthor = false;
  }
  if (data.title === "") {
    isTitle = false;
  }
  if (data.content === "") {
    isContent = false;
  }

  return { isAuthor: isAuthor, isTitle: isTitle, isContent: isContent };
};
