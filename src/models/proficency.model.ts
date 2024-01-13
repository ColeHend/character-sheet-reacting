import { GenericURL } from "./generics.model";

export interface Proficiency {
    index: string;
    type: string;
    name: string;
    classes: GenericURL[];
    races: GenericURL[];
    url: string;
    reference: GenericURL;
}
