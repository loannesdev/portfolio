import { github } from "../utils/info.json";

const token = import.meta.env.PUBLIC_GITHUB_TOKEN;
const { api, path, myUser } = github;
const myHeaders = {
  headers: {
    "Authorization": `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28"
  }
}

export const readRepos = async () => {
  try {
    const res = await fetch(`${api}${path.users}/${myUser}${path.repos}`, { ...myHeaders })
    return res.json();
  }

  catch {
    console.log("Ocurrio un problema");
  }
}
