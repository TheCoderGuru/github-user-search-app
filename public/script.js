let input = document.querySelector(".input-field");
let btn = document.querySelector('.submit-btn');
let username = document.querySelector(".username");
let personName = document.querySelector(".person_name");
let joinStatus = document.querySelector(".join_status");
let repoNumber = document.querySelector(".repo_number")
let followersNumber = document.querySelector(".followers_number")
let followingNumber = document.querySelector(".following_number");
let profileDescription = document.querySelector('.description');
let userLocation = document.querySelector(".user_location");
let userBlog = document.querySelector(".user_blog");
let userCompany = document.querySelector(".user_company");
let userTwitterUsername = document.querySelector(".user_twitter");


btn.addEventListener("click", () => {
  async function getUser() {
    let value = input.value;
    const response = await fetch(`https://api.github.com/users/${value}`);
    const data = await response.json();
      
      personName.innerHTML = data.name;
      username.innerHTML = data.login;
      joinStatus.innerHTML = data.created_at;
      profileDescription.innerHTML = data.bio;
      repoNumber.innerHTML = data.public_repos;
      followersNumber.innerHTML = data.followers;
      followingNumber.innerHTML = data.following;
      userLocation.innerHTML = data.location;
      userBlog.innerHTML = data.blog;
      userCompany.innerHTML = data.company;
      userTwitterUsername = data.twitter_username;
  }

  getUser();
});

