import resume from "./resume.json";
import { envVars, github } from "./utils/const";

const token = envVars.PUBLIC_GITHUB_TOKEN;
const { api, path, user } = github;
const headers = {
  Authorization: `Bearer ${token}`,
  "X-GitHub-Api-Version": "2022-11-28",
  Accept: "application/vnd.github+json"
};

const dontShow = ["manfred", "loannesdev", "to-do-list", "console-js", "portfolio"];

export const readRepos = async () => {
  const url = `${api}${path.users}/${user}${path.repos}?type=public`;

  try {
    const res = await fetch(url, { headers });
    const json = await res.json();

    const filteredData = json.filter((repo) => {
      const { fork, name: repoName } = repo;
      const repoExclude = !fork && !dontShow.some((excludeNameRepo) => excludeNameRepo === repoName);

      if (repoExclude) {
        return repo;
      }

      return null;
    });
    console.log({ filteredData });

    return filteredData;
  } catch {
    return [];
  }
};

export const readCV = async () => {
  return new Response(JSON.stringify(resume)).json();
};
