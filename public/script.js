let input = document.querySelector(".input-field");
let submit_btn = document.querySelector(".submit_btn");
let personName = document.querySelector(".person_name");
let userName = document.querySelector(".username");
let joinStatus = document.querySelector(".join_status");
let repoDescription = document.querySelector(".repo_description");
let repoNumber = document.querySelector(".repo_number");
let followersNumber = document.querySelector(".followers_number");
let followingNumber = document.querySelector(".following_number");
let userLocation = document.querySelector(".user_location");
let userBlog = document.querySelector(".user_blog");
let userTwitter = document.querySelector(".user_twitter");
let userCompany = document.querySelector(".user_company");
let personAvatar = document.querySelector(".person_avatar");

async function getUser() {
  const response = await fetch(`https://api.github.com/users/${input.value}`);
  let data = await response.json();

  personAvatar.innerHTML = data.avatar_url;
  personName.innerHTML = data.name;
  userName.innerHTML = data.login;
  joinStatus.innerHTML = data.created_at;
  repoNumber.innerHTML = data.public_repos;
  followersNumber.innerHTML = data.followers;
  followingNumber.innerHTML = data.following;
  userLocation.innerHTML = data.location;
  userBlog.innerHTML = data.blog;
  userTwitter.innerHTML = data.twitter;
  userCompany.innerHTML = data.company;
}
