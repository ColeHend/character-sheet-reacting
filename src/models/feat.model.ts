import { GenericURL } from "./generics.model";
export interface Feat {
    index: string;
    name: string;
    prerequisites: {
        ability_score: GenericURL;
        minimum_score: number;
    }[];
    desc: string[];
    url: string;
}

