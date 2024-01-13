import { GenericURL, GenericName } from "./generics.model";
export interface MainClass {
    index: string;
    name: string;
    hit_die: number;
    proficiency_choices: GenericURL[];
    proficiencies: GenericURL[];
    saving_throws: GenericURL[];
    starting_equipment: StartingEquipment[];
    starting_equipment_options: StartingEquipmentOption[];
    class_levels: GenericURL;
    multi_classing: MultiClassing;
    subclasses: GenericURL[];
    spellcasting: Spellcasting;
    spells: GenericURL;
    url: string;
}

export interface StartingEquipment {
    equipment: GenericURL;
    quantity: number;
}

export interface StartingEquipmentOption {
    desc: string;
    choose: number;
    type: string;
    from: From;
}

interface From {
    option_set_type: string;
    options: Option[];
}

interface Option {
    option_type: string;
    items?: Item[];
    choice?: Choice;
}

interface Choice {
    desc: string;
    choose: number;
    type: string;
    from: From2;
}

interface From2 {
    option_set_type: string;
    equipment_category: GenericURL;
}

interface Item {
    option_type: string;
    count: number;
    of: GenericURL;
}

interface MultiClassing {
    prerequisites: Prerequisite[];
    proficiencies: GenericURL[];
}

interface Prerequisite {
    ability_score: GenericURL;
    minimum_score: number;
}

interface Spellcasting {
    level: number;
    spellcasting_ability: GenericURL;
    info: GenericName[];
}

