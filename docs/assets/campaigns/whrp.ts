import { Campaign, Player, Race } from './types';


const oldGuard: Player[] = [
    'Elliot',
    'Euan_R',
    'Euan_T',
    'Jamie',
    'Jen',
    'Mitch'
];
const fullhouse: Player[] = [
    'Dave',
    'Elliot',
    'Euan_R',
    'Euan_T',
    'Jamie',
    'Jen'
];

const campaign: Campaign = {
    cast: [
        {
            name: 'Aesthanoc',
            player: 'Euan_T',
            race: Race.Elf,
            tags: ['AKA Nock', 'sylvan', 'wanderer'],
            relationships: [
                {type: 'Ward', who: ['Lady Saska Oberlander, the Younger', 'Lord Helmar Oberlander']},
                {type: 'Mount', who: ['Ul-Sariour']}
            ]
        },
        {
            name: 'Anders Writ',
            player: 'Elliot',
            race: Race.Human,
            tags: ['doctor', 'lawyer', 'grey wizard', 'man of many words'],
            relationships: [
                {type: 'Mentor', who: ['Vard']}
            ]
        },
        {
            name: 'Bruno',
            player: 'Euan_R',
            tags: ['?'],
            race: Race.Bear
        },
        {
            name: 'Buttercup',
            player: 'Euan_R',
            tags: ['?'],
            race: Race.Horse
        },
        {
            name: 'Captain Blackfish',
            player: 'Sean',
            race: Race.Human,
            tags: ['pirate', 'charming'],
            relationships: [
                {type: 'Commerce', who: [
                        'Aesthanoc',
                        'Anders Writ',
                        'Helga Flussboot',
                        'Henryk Bauer',
                        'Sir Hrodbert de Pleisy'
                    ]
                }
            ]
        },
        {
            name: 'Chamberlin Mithas Krobber',
            player: 'Sean',
            race: Race.Human,
            tags: ['chamberlin', 'dwarf-like', 'dogsbody'],
            relationships: [
                {type: 'Liege', who: ['Lord Sergor Oberlander']}
            ]
        },
        {
            name: 'Coblik Hayfoot',
            player: 'Sean',
            race: Race.Halfling,
            tags: ['chef', 'famous', 'dogsbody'],
            relationships: [
                {type: 'Liege', who: ['Lord Helmar Oberlander']}
            ]
        },
        {
            name: 'Dieter von Bracken',
            player: 'Sean',
            race: Race.Human,
            tags: ['noble', 'famous', 'bounder']
        },
        {
            name: 'Filibert Widmann',
            player: 'Sean',
            race: Race.Human,
            tags: ['Trademaster of Habercorn Ltd.', 'influential', 'jolly', 'huge', 'shrewd', 'unkind'],
            relationships: [
                {type: 'Commerce', who: ['Lord Helmar Oberlander']}
            ]
        },
        {
            name: 'Fiona Hoffman',
            player: 'Sean',
            race: Race.Human,
            tags: ['AKA Bilge', 'tour gide', 'street rat', 'adopted oprhan'],
            relationships: [
                {type: 'Commerce', who: ['Will']}
            ]
        },
        {
            name: 'Goremn Drexen',
            player: 'Sean',
            race: Race.Dwarf,
            tags: ['ranger', 'mercenary'],
            relationships: [
                {type: 'Employer', who: ['Lord Helmar Oberlander']}
            ]
        },
        {
            name: 'Grob the Thinker',
            player: 'Sean',
            race: Race.Ogre,
            tags: ['hungry', 'surprisingly lucid'],
            relationships: [
                {type: 'Liege', who: ['Coblik Hayfoot']}
            ]
        },
        {
            name: 'Helga Flussboot',
            player: 'Jen',
            race: Race.Human,
            tags: ['riverfolk', 'duelist', 'heroic', 'determined'],
            relationships: [
                {type: 'Amour', who: ['Sir Hrodbert de Pleisy']}
            ]
        },
        {
            name: 'Henryk Bauer',
            player: 'Jamie',
            race: Race.Human,
            tags: ['amethyst college', 'battle wizard', 'pious', 'humble beginnings'],
            relationships: [
                {type: 'Mentor', who: ['Master Hager Kitchern']},
                {type: 'Mount', who: ['Hemlock']}
            ]
        },
        {
            name: 'Hemlock',
            player: 'Jamie',
            tags: ['?'],
            race: Race.Horse
        },
        {
            name: 'Lady Saska Oberlander',
            player: 'Sean',
            race: Race.Human,
            tags: ['missing', 'troubled', 'noble'],
            relationships: [
                { type: 'Spouse', who: ['Lord Helmar Oberlander']},
                {type: 'Child', who: ['Lord Helmar Oberlander', 'Lady Saska Oberlander, the Younger']}
            ]
        },
        {
            name: 'Lady Saska Oberlander, the Younger',
            player: 'Sean',
            race: Race.Human,
            tags: ['accomplished archer', 'likable', 'noble'],
            relationships: [
                {type: 'Sibling', who: ['Lord Helmar Oberlander']}
            ]
        },
        {
            name: 'Lord Garrett Goldstein-Oberlander',
            player: 'Mitch',
            race: Race.Human,
            tags: ['humble beginnings', 'loyal'],
            relationships: [
                {type: 'Liege', who: ['Lord Sergor Oberlander']},
                {type: 'Enemy', who: ['Dieter von Bracken']}
            ]
        },
        {
            name: 'Lord Helmar Oberlander',
            player: 'Sean',
            tags: ['accomplished hunter', 'mourning lost wife', 'noble'],
            race: Race.Human
        },
        {
            name: 'Lord Sergor Oberlander',
            player: 'Sean',
            race: Race.Human,
            tags: ['military commander', 'retired soon', 'distains politics', 'noble'],
            relationships: [
                {type: 'Child', who: ['Lord Helmar Oberlander', 'Lady Saska Oberlander, the Younger']}
            ]
        },
        {
            name: 'Master Hager Kitchern',
            player: 'Sean',
            race: Race.Human,
            tags: ['amethyst college', 'battle wizard', 'veteran of sylvania', 'mentor'],
            relationships: [
                {type: 'Associate', who: ['Lord Sergor Oberlander']}
            ]
        },
        {
            name: 'Miss Brooke',
            player: 'Sean',
            race: Race.Human,
            tags: ['head cook', 'maker of pastries'],
            relationships: [
                {type: 'Liege', who: ['Lord Sergor Oberlander']}
            ]
        },
        {
            name: 'Neithart Durrbeiner',
            player: 'Sean',
            race: Race.Human,
            tags: ['duelist'],
            relationships: [
                {type: 'Rival', who: ['Helga Flussboot']}
            ]
        },
        {
            name: 'Sir Hrodbert de Pleisy',
            player: 'Euan_R',
            race: Race.Human,
            tags: ['brettonian', 'knight', 'noble'],
            relationships: [
                {type: 'Mount', who: ['Buttercup']}

            ]
        },
        {
            name: 'Ul-Sariour',
            player: 'Euan_T',
            tags: ['AKA Moonshadow', 'sylvan', 'mighty'],
            race: Race.Stag
        },
        {
            name: 'Wilbert Schneider',
            player: 'Sean',
            tags: ['surgeon', 'imperial academy alumni'],
            race: Race.Human
        },
        {
            name: 'Vard',
            player: 'Sean',
            tags: ['scholar', 'eldrich', 'terrible'],
            race: Race.Vampire
        },
    ],
    episodes: [
        {
            id: 1,
            name: 'There and Back Again',
            cast: [],
            scenes: []
        }
    ]
};

export default campaign;
