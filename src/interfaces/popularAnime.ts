export interface PopularAnimes {
  data: Data | null;
  errors: Error | undefined;
}

export interface Data {
  popular: Popular;
}

export interface Popular {
  pageInfo: PageInfo;
  media: Media[];
}

export interface Media {
  title: Title;
  coverImage: CoverImage;
  id: number;
  bannerImage: string;
  description: string;
  episodes: number;
}

export interface CoverImage {
  extraLarge: string;
  color: null | string;
}

export interface Title {
  english: string;
  native: string;
}

export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

export interface Error {
  message: string;
  status: number;
  locations: Location[];
}

export interface Location {
  line: number;
  column: number;
}
