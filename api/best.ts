import fetch from "node-fetch";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { BestAnimes } from "../src/interfaces/bestAnime";

const url = "https://graphql.anilist.co";
const query = `
{
	best: Page(page: 1, perPage: 100) {
	  pageInfo {
		total
		perPage
		currentPage
		lastPage
		hasNextPage
	  }
	  media(sort: SCORE_DESC, type: ANIME) {
		title {
		  english
		  native
		}
		coverImage {
		  extraLarge
		  color
		}
		id
		bannerImage
		description
		episodes
	  }
	}
}
`;
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query: query,
  }),
};

export default async (req: VercelRequest, res: VercelResponse) => {
  const apiAnswer: BestAnimes = await (await fetch(url, options)).json();
  if (!apiAnswer.errors) {
    const animeNumber: number = Math.floor(
      Math.random() * apiAnswer.data!.best.media.length
    );
    res.json(apiAnswer.data!.best.media[animeNumber]);
  } else {
    res.json(apiAnswer.errors);
  }
};
