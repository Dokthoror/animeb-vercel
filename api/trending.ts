import fetch from "node-fetch";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { TrendingAnimes } from "../src/interfaces/trendingAnimes";

const url = "https://graphql.anilist.co";
const query = `
{
	trending: Page(page: 1, perPage: 20) {
	  pageInfo {
		total
		perPage
		currentPage
		lastPage
		hasNextPage
	  }
	  media(sort: TRENDING_DESC, type: ANIME) {
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
  const apiAnswer: TrendingAnimes = await (await fetch(url, options)).json();
  if (!apiAnswer.errors) {
    const animeNumber: number = Math.floor(
      Math.random() * apiAnswer.data!.trending.media.length
    );
    res.json(apiAnswer.data!.trending.media[animeNumber]);
  } else {
    res.json(apiAnswer.errors);
  }
};
