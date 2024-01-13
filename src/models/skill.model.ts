import { GenericURL } from "./generics.model";

export interface Skill {
    index: string;
    name: string;
    desc: string[];
    ability_score: GenericURL;
    url: string;
}