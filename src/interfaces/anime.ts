export interface AnimeType {
    data: Data | null;
    errors: Error[] | undefined;
}

export interface Data {
    Media: Media;
}

export interface Media {
    title: Title;
    description: string;
    episodes: number;
    trailer: Trailer;
    bannerImage: string;
    coverImage: CoverImage;
    averageScore: number;
    tags: Tag[];
    studios: Studios;
}

export interface CoverImage {
    extraLarge: string;
    color: string;
}

export interface Studios {
    edges: Edge[];
}

export interface Edge {
    node: Node;
}

export interface Node {
    name: string;
}

export interface Tag {
    id: number;
    name: string;
    category: string;
}

export interface Title {
    english: string;
    native: string;
}

export interface Trailer {
    site: string;
    id: string;
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
