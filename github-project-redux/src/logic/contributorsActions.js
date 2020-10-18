export async function loadContributors(dataRepo) {
  const url = `https://api.github.com/repos/${dataRepo.ownerName}/${dataRepo.repoName}/contributors`;

  // API call
  const response = await fetch(url);
  const contributors = await response.json();

  console.log("contrib", contributors);
  return contributors;
}
