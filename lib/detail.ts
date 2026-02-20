export type CutStepImage = {
    steps: string[];
};

export type CookingItem = {
    id: number;
    title: string;
    image: string;
    ingredients: string[];
    steps?: ("cut" | "mix" | "flip")[];
    cutSteps?: CutStepImage[];
    mixImages?: string[];
    flipImages?: {
        pot: string[][];
        dish: string[][];
        ladle: string[][];
    };
    completeImage?: string;
    tutorial?: boolean; //チュートリアル用
};

const cookingList: CookingItem[] = [
    {
        id: 1,
        title: "「きる」",
        image: "/image/cookingList/list_cut.svg",
        ingredients: [],
        cutSteps: [
            {
                steps: [
                    "/image/game/ingredients/potato_1.png",
                    "/image/game/ingredients/potato_2.png",
                    "/image/game/ingredients/potato_3.png",
                    "/image/game/ingredients/potato_4.png"
                ]
            },
            {
                steps: [
                    "/image/game/ingredients/onion_1.png",
                    "/image/game/ingredients/onion_2.png",
                    "/image/game/ingredients/onion_3.png",
                    "/image/game/ingredients/onion_4.png",
                    "/image/game/ingredients/onion_5.png"
                ]
            },
            {
                steps: [
                    "/image/game/ingredients/carrot_1.png",
                    "/image/game/ingredients/carrot_2.png",
                    "/image/game/ingredients/carrot_3.png",
                    "/image/game/ingredients/carrot_4.png",
                    "/image/game/ingredients/carrot_5.png"
                ]
            },
        ],
        steps:["cut"],
        completeImage:"/image/game/cut_complete.svg",
        tutorial:true
    },
    {
        id: 2,
        title: "「まぜる」",
        image: "/image/cookingList/list_mix.svg",
        ingredients: [],
        steps:["mix"],
        mixImages: [
            "/image/game/meat_potato_mix1.png", "/image/game/meat_potato_mix2.png", "/image/game/meat_potato_mix3.png"
        ],
        completeImage:"/image/game/mix_complete.svg",
        tutorial:true
    },
    {
        id: 3,
        title: "「ひっくりかえす」",
        image: "/image/cookingList/list_flip.svg",
        ingredients: [],
        steps:["flip"],
        flipImages:{
            pot:[
                ["meat_potato_pot1", "meat_potato_pot1"],
                ["meat_potato_pot2", "meat_potato_pot2"],
                ["meat_potato_pot3", "meat_potato_pot3"],
                ["meat_potato_pot3", "meat_potato_pot3"],
            ],
            dish:[
                ["meat_potato_dish1", "meat_potato_dish1"],
                ["meat_potato_dish2", "meat_potato_dish2"],
                ["meat_potato_dish3", "meat_potato_dish3"],
                ["meat_potato_dish4", "meat_potato_dish4"],
            ],
            ladle:[
                ["meat_potato_ladle1", "meat_potato_ladle2"],
                ["meat_potato_ladle1", "meat_potato_ladle2"],
                ["meat_potato_ladle1", "meat_potato_ladle2"],
                ["ladle", "ladle"],
            ],
        },
        completeImage:"/image/game/meat_potato.svg",
        tutorial:true
    },
    {
        id: 4,
        title: "にくじゃが",
        image: "/image/cookingList/meat_potato.svg",
        ingredients: [
            "/image/cookingList/onion.svg",
            "/image/cookingList/potato.svg",
            "/image/cookingList/carrot.svg",
            "/image/cookingList/meat.svg"
        ],
        cutSteps: [
            {
                steps: [
                    "/image/game/ingredients/onion_1.png",
                    "/image/game/ingredients/onion_2.png",
                    "/image/game/ingredients/onion_3.png",
                    "/image/game/ingredients/onion_4.png",
                    "/image/game/ingredients/onion_5.png"
                ]
            },
            {
                steps: [
                    "/image/game/ingredients/potato_1.png",
                    "/image/game/ingredients/potato_2.png",
                    "/image/game/ingredients/potato_3.png",
                    "/image/game/ingredients/potato_4.png"
                ]
            },
            {
                steps: [
                    "/image/game/ingredients/carrot_1.png",
                    "/image/game/ingredients/carrot_2.png",
                    "/image/game/ingredients/carrot_3.png",
                    "/image/game/ingredients/carrot_4.png",
                    "/image/game/ingredients/carrot_5.png"
                ]
            },
            {
                steps: [
                    "/image/game/ingredients/meat_1.png",
                    "/image/game/ingredients/meat_2.png",
                    "/image/game/ingredients/meat_3.png",
                    "/image/game/ingredients/meat_4.png",
                    "/image/game/ingredients/meat_5.png"
                ]
            }
        ],
        steps: ["cut", "mix", "flip"],
        mixImages: [
            "/image/game/meat_potato_mix1.png", "/image/game/meat_potato_mix2.png", "/image/game/meat_potato_mix3.png"
        ],
        flipImages:{
            pot:[
                ["meat_potato_pot1", "meat_potato_pot1"],
                ["meat_potato_pot2", "meat_potato_pot2"],
                ["meat_potato_pot3", "meat_potato_pot3"],
                ["meat_potato_pot3", "meat_potato_pot3"],
            ],
            dish:[
                ["meat_potato_dish1", "meat_potato_dish1"],
                ["meat_potato_dish2", "meat_potato_dish2"],
                ["meat_potato_dish3", "meat_potato_dish3"],
                ["meat_potato_dish4", "meat_potato_dish4"],
            ],
            ladle:[
                ["meat_potato_ladle1", "meat_potato_ladle2"],
                ["meat_potato_ladle1", "meat_potato_ladle2"],
                ["meat_potato_ladle1", "meat_potato_ladle2"],
                ["ladle", "ladle"],
            ],
        },
        completeImage:"/image/game/meat_potato.svg"
    },
    {
        id: 5,
        title: "かれーらいす",
        image: "/image/cookingList/curry_rice.svg",
        ingredients: [
            "/image/cookingList/potato.svg",
            "/image/cookingList/carrot.svg",
            "/image/cookingList/meat.svg"
        ],
        cutSteps: [
            {
                steps: [
                    "/image/game/ingredients/potato_1.png",
                    "/image/game/ingredients/potato_2.png",
                    "/image/game/ingredients/potato_3.png",
                    "/image/game/ingredients/potato_4.png"
                ]
            },
            {
                steps: [
                    "/image/game/ingredients/carrot_1.png",
                    "/image/game/ingredients/carrot_2.png",
                    "/image/game/ingredients/carrot_3.png",
                    "/image/game/ingredients/carrot_4.png",
                    "/image/game/ingredients/carrot_5.png"
                ]
            },
            {
                steps: [
                    "/image/game/ingredients/meat_1.png",
                    "/image/game/ingredients/meat_2.png",
                    "/image/game/ingredients/meat_3.png",
                    "/image/game/ingredients/meat_4.png",
                    "/image/game/ingredients/meat_5.png"
                ]
            }
        ],
        steps: ["cut", "mix", "flip"],
        mixImages:[
            "/image/game/curry_rice_mix1.png","/image/game/curry_rice_mix2.png","/image/game/curry_rice_mix3.png"
        ],
        flipImages:{
            pot:[
                ["curry_rice_pot1", "curry_rice_pot1"],
                ["curry_rice_pot2", "curry_rice_pot2"],
                ["curry_rice_pot3", "curry_rice_pot3"],
                ["curry_rice_pot3", "curry_rice_pot3"],
            ],
            dish:[
                ["curry_rice_dish1", "curry_rice_dish1"],
                ["curry_rice_dish2", "curry_rice_dish2"],
                ["curry_rice_dish3", "curry_rice_dish3"],
                ["curry_rice_dish4", "curry_rice_dish4"],
            ],
            ladle:[
                ["curry_rice_ladle3", "curry_rice_ladle4"],
                ["curry_rice_ladle3", "curry_rice_ladle4"],
                ["curry_rice_ladle3", "curry_rice_ladle4"],
                ["ladle", "ladle"],
            ],
        },
        completeImage:"/image/game/curry_rice.svg"
    }
];
export default cookingList;