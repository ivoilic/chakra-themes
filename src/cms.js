import Prismic from "prismic-javascript";
import { siteQuery } from "graphql";

const REPOSITORY = process.env.MC_PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
export const API_TOKEN = process.env.MC_PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.MC_PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

export const request = async (query, { previewData, variables } = {}) => {
  const prismicAPI = await PrismicClient.getApi();

  console.log(query);
  const finalQuery = `query{
    ${siteQuery + query}
  }`;

  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${finalQuery}&variables=${JSON.stringify(
      variables
    )}`,
    {
      headers: {
        "Prismic-Ref": previewData?.ref || prismicAPI.masterRef.ref,
        "Content-Type": "application/json",
        "Accept-Language": API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error("Failed to fetch API");
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
};
