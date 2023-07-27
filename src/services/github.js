import { github } from "../utils/const";
import { envVars } from "../utils/my_scripts";

const token = envVars.PUBLIC_GITHUB_TOKEN;
const { api, path, user, cv } = github;
const headers = {
  Authorization: `Bearer ${token}`,
  "X-GitHub-Api-Version": "2022-11-28",
  Accept: "application/vnd.github+json"
};

const dontShow = ["portfolio", "manfred", "loannesdev"];

export const readRepos = async () => {
  const url = `${api}${path.users}/${user}${path.repos}`;

  try {
    const res = await fetch(url, { headers });
    const json = await res.json();
    const filteredData = json.filter(repo => !repo.fork && !dontShow.some((name) => name === repo.name));

    return filteredData;
  } catch {
    return [];
  }
};

export const readResume = async () => {
  const url = `${api}/repos/${user}/${cv.name}/contents/${cv.file}`;

  try {
    const res = await fetch(url, { headers });
    const { content } = await res.json();

    const base64Decode = atob(content);
    const utf8Encode = new TextDecoder("utf8").decode(new Uint8Array([...base64Decode].map((c) => c.charCodeAt(0))));
    const data = JSON.parse(utf8Encode);

    return data;
  } catch (error) {
    throw Error(error);
  }
};
