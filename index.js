function getUserData() {
  let userName = document.querySelector("input").value;
  if(userName.length == 0) {
    alert("Please Enter the GitHub username to view the user profile");
    return;
  }
  const url = "https://api.github.com/users/" + userName;
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    if(data["message"] == "Not Found") {
      alert("Username is incorrect!")
      return;
    }

    console.log(data["company"]);

    document.querySelector("img").src = data["avatar_url"];
    document.querySelector(".login").innerHTML = "login: " + data["login"]
    document.querySelector(".followers").innerHTML = "Followers: " + data["followers"];
    document.querySelector(".following").innerHTML = "Following: " + data["following"];
    document.querySelector(".blog").innerHTML = "Blog: " + data["blog"];
    document.querySelector(".bio").innerHTML = "Bio: " + data["bio"];
    document.querySelector(".email").innerHTML = "Email: " + data["email"];
    document.querySelector(".location").innerHTML = "Location: " + data["location"];
    document.querySelector(".company").innerHTML = "Company: " + data["company"];
    document.querySelector(".name").innerHTML = "Name: " + data["name"];
    document.querySelector(".public-repos").innerHTML = "Public Repository: " + data["public_repos"];
    document.querySelector(".twitter-username").innerHTML = "Twitter username: " + data["twitter_username"];
  })
}

document.querySelector(".btn").addEventListener("click", function() {
  getUserData();
})

document.querySelector("input").addEventListener("keypress", function(event) {
  if(event.key == "Enter") {
    getUserData();
  }
})

getUserData();
