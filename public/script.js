let input = document.querySelector(".input__group__field");
let btn = document.querySelector(".input__group__submit-btn");
let username = document.querySelector(".result__username");
let submit_btn = document.querySelector(".submit_btn");
let personName = document.querySelector(".result__person-name");
let userName = document.querySelector(".username");
let joinStatus = document.querySelector(".result__join_status");
let repoNumber = document.querySelector(".repo_number");
let followersNumber = document.querySelector(".followers_number");
let repoDescription = document.querySelector(".repo_description");
let followingNumber = document.querySelector(".following_number");
let profileDescription = document.querySelector(".description");
let userLocation = document.querySelector(".user_location");
let userBlog = document.querySelector(".user_blog");
let userTwitter = document.querySelector(".user_twitter");
let userCompany = document.querySelector(".user_company");
let userTwitterUsername = document.querySelector(".user_twitter");
let img = document.createElement("img");
let personAvatar = document.querySelector(".result__user-avatar");
let lighttoggle = document.querySelector(".btn-flex__button");
btn.addEventListener("click", () => {
  async function getUser() {
    let value = input.value;
    const response = await fetch(`https://api.github.com/users/${value}`);
    const data = await response.json();

    console.log(data.created_at);

    img.src = data.avatar_url;
    personAvatar.appendChild(img);
    personAvatar.style.border = "none";

    const dateData = data.created_at.slice(0, data.created_at.length - 10);

    personName.innerHTML = data.name;
    username.innerHTML = `@${data.login}`;
    joinStatus.innerHTML = `Joined ${dateData}`;
    profileDescription.innerHTML = data.bio;
    repoNumber.innerHTML = data.public_repos;
    followersNumber.innerHTML = data.followers;
    followingNumber.innerHTML = data.following;
    userLocation.innerHTML = data.location;
    userBlog.innerHTML = data.blog;
    userCompany.innerHTML = data.company;
    userTwitterUsername.innerHTML = data.twitter_username;
  }
  getUser();
});

lighttoggle.addEventListener('click', () => {
  document.classList.add('.dark-mode');
})
