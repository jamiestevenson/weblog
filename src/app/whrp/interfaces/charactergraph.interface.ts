export interface CharacterGraph {
    nodes: CharacterNode[];
    links: CharacterLink[];
}

export interface CharacterNode {
    name: string;
}

export interface CharacterLink {
    source: string;
    destination: string;
}