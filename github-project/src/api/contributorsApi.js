export function getContributors(dataRepo) {
  return fetch(
    `https://api.github.com/repos/${dataRepo.ownerName}/${dataRepo.repoName}/contributors`
  );
}
