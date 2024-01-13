export interface Spell {
    id: number;
    name: string;
    description: string;
    school: string;
    level: number;
    range: string;
    components: string;
    duration: string;
    casting_time: string;
    is_ritual: boolean;
    is_concentration: boolean;
    higher_levels: string;
  }