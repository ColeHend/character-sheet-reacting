import { GenericURL } from "./generics.model";

export interface AbilityScore {
    index: string;
    name: string;
    full_name: string;
    desc: string[];
    skills: GenericURL[];
    url: string;
  }