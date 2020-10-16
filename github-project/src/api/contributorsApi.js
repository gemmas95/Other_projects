export function getContributors(dataRepo) {
  return fetch(
    console.log("fetching....", dataRepo),
    `https://api.github.com/repos/${dataRepo.ownerName}/${dataRepo.repoName}/contributors`
  );
}
