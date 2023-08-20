// githubmetric.js
function fetchRepoCount() {
  // TODO: Have the token be replaced by a environvironment variable when deployed to netlify
  const accessToken = "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"; // Replace with your GitHub access token
  const username = "DBAKANG-GIT"; // Replace with your GitHub username

  const apiUrl = `https://api.github.com/users/${username}`;

  fetch(apiUrl, {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const repoCount = data.public_repos;
      document.getElementById(
        "repoCount"
      ).textContent = `GitHub Repository Count: ${repoCount}`;
    })
    .catch((error) => {
      console.error("Error fetching data from GitHub API", error);
    });
}
fetchRepoCount();
