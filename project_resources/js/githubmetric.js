fetch("https://api.github.com/users/DBAKANG-GIT") //Api to hit
  .then((result) => result.json()) //configure the promise which is returned and converted to json
  .then((data) => {
    document.getElementById("repoCount").textContent = data.public_repos; //Set the response to this element//
  })
  .catch((error) => {
    console.error("Error fetching data from GitHub API", error);
  });
