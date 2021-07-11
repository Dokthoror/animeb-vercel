import fetch from "node-fetch";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { AnimeType } from "../src/interfaces/anime";

const url = "https://graphql.anilist.co";
const query = `
query ($id: Int) {
	Media(id: $id) {
	  title {
		english
		native
	  }
	  description
	  episodes
	  trailer {
		site
		id
	  }
	  bannerImage
	  coverImage {
		extraLarge
		color
	  }
	  averageScore
	  tags {
		id
		name
		category
	  }
	  studios {
		edges {
		  node {
			name
		  }
		}
	  }
	}
  }
`;

export default async (req: VercelRequest, res: VercelResponse) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: {
        id: req.query.id,
      },
    }),
  };
  const apiAnswer: AnimeType = await (await fetch(url, options)).json();
  if (!apiAnswer.errors) {
    res.json(apiAnswer.data!.Media);
  } else {
    res.json(apiAnswer.errors);
  }
};
