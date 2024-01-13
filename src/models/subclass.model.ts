import { GenericURL } from "./generics.model";

export interface Subclass {
    index: string;
    class: GenericURL;
    name: string;
    subclass_flavor: string;
    desc: string[];
    spells: {
        prerequisites: {
            index: string;
            type: string;
            name: string;
            url: string;
        }[];
        spell: GenericURL;
    }[];
    subclass_levels: string;
    url: string;
}