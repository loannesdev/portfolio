import { github } from "../utils/const";

const token = import.meta.env.PUBLIC_GITHUB_TOKEN;
const { api, path, myUser } = github;
const headers = {
  "Authorization": `Bearer ${token}`,
  "X-GitHub-Api-Version": "2022-11-28",
  "Accept": "application/vnd.github+json"
}

const dontShow = ["portfolio", "manfred", "loannesdev"];

export const readRepos = async () => {
  const url = `${api}${path.users}/${myUser}${path.repos}`

  try {
    const res = await fetch(url, { headers })
    const json = await res.json();
    const filteredData = json.filter(repo => !repo.fork && !dontShow.some((name) => name === repo.name))

    return filteredData
  }

  catch {
    return [];
  }
}
