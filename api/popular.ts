import fetch from "node-fetch";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { PopularAnimes } from "../src/interfaces/popularAnime";

const url = "https://graphql.anilist.co";
const query = `
{
	popular: Page(page: 1, perPage: 20) {
	  pageInfo {
		total
		perPage
		currentPage
		lastPage
		hasNextPage
	  }
	  media(sort: POPULARITY_DESC, type: ANIME) {
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
  const apiAnswer: PopularAnimes = await (await fetch(url, options)).json();
  if (!apiAnswer.errors) {
    const animeNumber: number = Math.floor(
      Math.random() * apiAnswer.data!.popular.media.length
    );
    res.json(apiAnswer.data!.popular.media[animeNumber]);
  } else {
    res.json(apiAnswer.errors);
  }
};
