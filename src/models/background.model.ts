import { GenericURL } from "./generics.model";

export interface Background {
    index: string;
    name: string;
    starting_proficiencies: GenericURL[];
    language_options: LanguageOptions;
    starting_equipment: StartingEquipment[];
    starting_equipment_options: StartingEquipmentOption[];
    feature: Feature;
    personality_traits: PersonalityTraits;
    ideals: Ideals;
    bonds: Bonds;
    flaws: Flaws;
    url: string;
  }
  
  interface LanguageOptions {
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      resource_list_url: string;
    };
  }
  
  interface StartingEquipment {
    equipment: GenericURL;
    quantity: number;
  }
  
  interface StartingEquipmentOption {
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      equipment_category: GenericURL;
    };
  }
  
  interface Feature {
    name: string;
    desc: string[];
  }
  
  interface PersonalityTraits {
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      options: {
        option_type: string;
        string: string;
      }[];
    };
  }
  
  interface Ideals {
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      options: {
        option_type: string;
        desc: string;
        alignments: GenericURL[];
      }[];
    };
  }
  
  interface Bonds {
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      options: {
        option_type: string;
        string: string;
      }[];
    };
  }
  
  interface Flaws {
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      options: {
        option_type: string;
        string: string;
      }[];
    };
  }