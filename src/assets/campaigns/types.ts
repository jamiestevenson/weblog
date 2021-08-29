export interface Campaign {
    cast: Character[];
    episodes: Episode[];
}

export interface Episode {
    id: number;
    name: string;
    cast: string[];
    scenes: Scene[];
}

export interface Character {
    name: string;
    player: Player;
    race: Race;
    tags: string[];
    relationships?: Relationship[]
}

export interface Relationship {
    type: Relation;
    who: string[];
}

const ERelationship = {
    Amour: 'Amour',
    Associate: 'Associate',
    Commerce: 'Commerce',
    Child: 'Child',
    Employer: 'Employer',
    Enemy: 'Enemy',
    Liege: 'Liege',
    Mentor: 'Mentor',
    Mount: 'Mount',
    Rival: 'Rival',
    Sibling: 'Sibling',
    Spouse: 'Spouse',
    Ward: 'Ward'
} as const;
export type Relation = typeof ERelationship[keyof typeof ERelationship];

const EPlayer = {
    Dave: 'Dave',
    Elliot: 'Elliot',
    Euan_R: 'Euan_R',
    Euan_T: 'Euan_T',
    Jamie: 'Jamie',
    Jen: 'Jen',
    Mitch: 'Mitch',
    Sean: 'Sean',
} as const;
export type Player = typeof EPlayer[keyof typeof EPlayer];

export enum Race {
    Bear,
    Dwarf,
    Elf,
    Halfling,
    Horse,
    Human,
    Ogre,
    Stag,
    Vampire
}

export interface Scene {
    type: SceneType;
    region: Region;
    subRegion: string;
    subTitle: string;
}

export interface BattleScene extends Scene {
    conditions: string;
    outcome: 'win' | 'loss';
}

export enum SceneType {
    Simple,
    Battle,
    Downtime
}

export enum Region {
    TheEmpire
}
