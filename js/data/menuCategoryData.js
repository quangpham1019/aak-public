import {MenuCategory, MenuItem, Img, MenuComponent} from "../model/menuModels.js";

/////////////////////
// items JSON
/////////////////////
// 'items': {
//     '<item-name>': {
//         'imgSrc': '',
//         'imgAlt': '',
//         'details': '',
//         'price': 0,
//     }
// }

export function getDataAsObjects() {
    let menuData = new MenuCategory("menu", "");
    let spacingBeforeOptions = '\u00A0\u00A0\u00A0———————';

    ////////////////////
    //  CATEGORY      //
    ////////////////////
    let mainMenu = new MenuCategory("main menu", "");
    let beveragesAndDesserts = new MenuCategory("beverages & desserts", "");
    let appetizerCategory = new MenuCategory("appetizer", "");
    let aloSignatureCategory = new MenuCategory("alo's signature", "");
    let phoCategory = new MenuCategory(
        "pho",
        'rice noodle, top with green onion, white onion, cilantro, side of bean sprout, basil, jalapeno, lime' +
            '\n' + spacingBeforeOptions +
            '\n pick your broth:' +
            '\n • beef / chicken / vegetable' +
            '\n' + spacingBeforeOptions +
            '\n optional noodle substitute:' +
            '\n • egg noodle +2' +
            '\n • vermicelli +2' +
            '\n • steamed rice +2' +
            '\n • vegetables +2'
        );
    let vermicelliCategory = new MenuCategory(
        "vermicelli rice noodle",
        "seafood egg roll, roasted peanut, served with lettuce, bean sprout, cucumber, mint, pickled carrots, daikon, and scallion oil, served , roasted peanut, marinated fish sauce"
        );
    let vietnameseHouseBaguetteCategory = new MenuCategory(
        "vietnamese house baguette",
        'pickled carrots, daikon, cucumber, cilantro, and jalapeno'
        );
    let friedRiceCategory = new MenuCategory(
        "fried rice",
        "green peas, carrot, white onion, egg");
    let steamedRiceCategory = new MenuCategory(
        "steamed rice",
        'lettuce, cucumber, pickled carrots, daikon, fried egg, white rice' +
        '\n' + spacingBeforeOptions +
        '\n optional rice sub:' +
        '\n • tomato fried rice +2'
        );
    let garlicNoodleCategory = new MenuCategory(
        "garlic noodle",
        "garlic, butter, parsley flakes");
    let veganCategory = new MenuCategory("vegan & vegetarian", "");

    let drinksCategory = new MenuCategory("drinks", "");
    let houseDrinksCategory = new MenuCategory("house drinks", "");
    let teaCategory = new MenuCategory("tea", "");
    let smoothieCategory = new MenuCategory("smoothies", "");
    let milkshakeCategory = new MenuCategory("milkshake", "");
    let coffeeCategory = new MenuCategory("coffee", "");
    let beveragesCategory = new MenuCategory("beverages", "");
    let toppingCategory = new MenuCategory("topping", "");

    let dessertsCategory = new MenuCategory("desserts", "");

    ////////////////////
    //  ITEM          //
    ////////////////////
    let seafoodEggRolls = new MenuItem(
        "seafood egg rolls (2)",
        "sweet chili sauce",
        5.50);
    let grilledPorkSkewer = new MenuItem(
        "grilled pork skewer",
        "pickled carrots, daikon, and parsley",
        3.85);
    let porkBao = new MenuItem(
        "pork bao",
        spacingBeforeOptions +
        '\n pick an option:' +
        '\n • steam' +
        '\n • fried',
        4.50);
    let eggRollsPlatter = new MenuItem(
        "egg rolls platter (4)",
        'lettuce, pickled carrots, daikon, and mint leaves' +
        '\n' + spacingBeforeOptions +
        '\n pick a filling:' +
        '\n • seafood' +
        '\n • vegan',
        10.95);
    let chickenWings = new MenuItem(
        "chicken wings",
        spacingBeforeOptions +
        '\n pick a sauce:' +
        '\n • garlic butter' +
        '\n • sweet & spicy',
        13.95);
    let garlicButterFries = new MenuItem(
        "garlic butter fries",
        "Crispy fries toss with house garlic butter sauce, served with ranch and ketchup dipping",
        8.25);
    let garlicButterPopcornChicken = new MenuItem(
        "garlic butter popcorn chicken",
        "crispy fried popcorn chicken, toss with garlic butter sauce, served with sweet and sour sauce",
        8.25);
    let springRolls = new MenuItem(
        "spring rolls (2)",
        'rice paper, lettuce, vermicelli noodle, mint leaves' +
        '\n roasted peanut, peanut sauce' +
        '\n' + spacingBeforeOptions +
        '\n pick your protein:' +
        '\n • pork and shrimp (GF) +1' +
        '\n • shrimp (GF)' +
        '\n • chicken' +
        '\n • grilled pork',
        8.95);
    let asianStyleSalad = new MenuItem(
        "asian-style salad",
        'lettuce, cucumber, picked carrots, and daikon, served with homemade sesame dressing' +
        '\n' + spacingBeforeOptions +
        '\n pick one or many:' +
        '\n • plain (GF)' +
        '\n • cube filet mignon +7' +
        '\n • chicken +5' +
        '\n • tofu +5',
        9.95);

    let houseCrispyNoodle = new MenuItem(
        "house crispy noodle",
        "jumbo shrimp, cube filet mignon, mix vegetables served with crispy egg noodle",
        19.95);
    let filetMignonPlatter = new MenuItem(
        "filet mignon platter (dine-in only)",
        'cube filet mignon and fried egg, served with your choice of carb' +
        '\n' + spacingBeforeOptions +
        '\n pick your carb' +
        '\n • steamed rice' +
        '\n • baguette' +
        '\n • tomato fried rice +2',
        19.95);
    let vietnameseChickenCurry = new MenuItem(
        "vietnamese chicken curry (mild spicy)",
        'bone-in dark meat chicken, coconut cream, potato, carrot, white onion, lemongrass in yellow curry, and your choice of carb' +
        '\n' + spacingBeforeOptions +
        '\n pick your carb' +
        '\n • steamed rice' +
        '\n • baguette' +
        '\n • rice noodle' +
        '\n • vermicelli noodle',
        16.95);
    let shakenFiletMignonFries = new MenuItem(
        "shaken filet mignon fries",
        'cube filet mignon, garlic butter fries, served with ranch and ketchup',
        17.95);


    let houseSpecialPho = new MenuItem(
        "house special pho (GF)",
        "rare filet mignon & beef meatball",
        16.95);
    let chickenPho = new MenuItem(
        "chicken pho (GF)",
        "white meat chicken",
        14.95);
    let beefMeatballPho = new MenuItem(
        "beef meatball pho (GF)",
        "",
        14.95
    );
    let brisketPho = new MenuItem(
        "brisket pho (GF)",
        "",
        14.95
    );
    let rareFiletMignonPho = new MenuItem(
        "rare filet mignon pho (GF)",
        "",
        15.95
    );
    let jumboShrimpPho = new MenuItem(
        "jumbo shrimp pho (GF)",
        "",
        15.95
    );
    let grilledPorkPho = new MenuItem(
        "grilled pork pho",
        "",
        15.95
    );
    let grilledBeefBackRibPho = new MenuItem(
        "grilled beef back rib pho",
        "",
        17.95
    );
    let boilBeefBackRibPho = new MenuItem(
        "boil beef back rib pho (GF)",
        "",
        16.95
    );
    let plainPho = new MenuItem(
        "plain pho",
        "",
        11.95
    );

    let grilledChickenVermicelli = new MenuItem(
        "grilled chicken vermicelli",
        "grilled marinated white meat chicken, served with vermicelli rice noodle, chopped lettuce, bean sprout, cucumber, mint leaves, one seafood egg roll and marinated fish sauce",
        15.95
    );
    let grilledPorkVermicelli = new MenuItem(
        "grilled pork vermicelli",
        "grilled marinated pork, served with vermicelli rice noodle, chopped lettuce, bean sprout, cucumber, mint leaves, one seafood egg roll and marinated fish sauce",
        15.95
    );
    let grilledShrimpVermicelli = new MenuItem(
        "grilled jumbo shrimp vermicelli",
        "five garlic butter jumbo shrimp, served with vermicelli rice noodle, chopped lettuce, bean sprout, cucumber, mint leaves, one seafood egg roll and marinated fish sauce",
        17.95
    );
    let comboPorkAndShrimpVermicelli = new MenuItem(
        "combo grilled pork and jumbo shrimp vermicelli",
        "grilled pork and three garlic butter jumbo shrimp, served with vermicelli rice noodle, chopped lettuce, bean sprout, cucumber, mint leaves, one seafood egg roll and marinated fish sauce",
        17.95
    );
    let lemongrassFiletMignonVermicelli = new MenuItem(
        "lemongrass filet mignon vermicelli",
        "filet mignon stir fry with lemongrass and bean sprout, served with vermicelli rice noodle, chopped lettuce, bean sprout, cucumber, mint leaves, one seafood egg roll and marinated fish sauce",
        17.95
    );
    let eggRollVermicelli = new MenuItem(
        "egg roll vermicelli",
        "three seafood egg rolls, served with vermicelli rice noodle, chopped lettuce, bean sprout, cucumber, mint leaves and marinated fish sauce",
        15.95
    );

    let grilledPorkBaguette = new MenuItem(
        "grilled pork baguette",
        "grilled pork in homemade baguette, served with house sauce, pickled carrots and daikon, cucumber, cilantro and jalapeno",
        10.95
    );
    let grilledChickenBaguette = new MenuItem(
        "grilled chicken baguette",
        "grilled marinated white meat chicken in homemade baguette, served with house sauce, pickled carrots and daikon, cucumber, cilantro and jalapeno",
        10.95
    );
    let friedEggBaguette = new MenuItem(
        "fried egg baguette",
        "two scrambled eggs in homemade baguette, served with house sauce, pickled carrots and daikon, cucumber, cilantro and jalapeno",
        10.95
    );
    let grilledBeefBaguette = new MenuItem(
        "grilled beef baguette",
        "grilled marinated filet mignon in homemade baguette, served with house sauce, pickled carrots and daikon, cucumber, cilantro and jalapeno",
        12.45
    );

    let plainFriedRice = new MenuItem(
        "plain fried rice",
        "stir-fried rice, one whole egg, diced white onion, carrots and green peas in house soy sauce",
        10.95
    );
    let chickenFriedRice = new MenuItem(
        "chicken fried rice",
        "diced white meat chicken stir-fried with rice, one whole egg, diced white onion, carrots and green peas in house soy sauce",
        15.95
    );
    let bbqPorkFriedRice = new MenuItem(
        "bbq pork fried rice",
        "diced BBQ pork stir-fried with rice, one whole egg, diced white onion, carrots and green peas in house soy sauce",
        15.95
    );
    let tofuFriedRice = new MenuItem(
        "tofu fried rice",
        "diced premium tofu stir-fried with rice, one whole egg, diced white onion, carrots and green peas in house soy sauce",
        15.95
    );
    let shrimpFriedRice = new MenuItem(
        "shrimp fried rice",
        "five jumbo shrimp stir-fried with rice, one whole egg, diced white onion, carrots and green peas in house soy sauce",
        16.95
    );
    let filetMignonFriedRice = new MenuItem(
        "filet mignon fried rice",
        "filet mignon stir-fried with rice, one whole egg, diced white onion, carrots and green peas in house soy sauce",
        17.95
    );
    let combinationFriedRice = new MenuItem(
        "combination fried rice",
        "three jumbo shrimp, diced white meat chicken and BBQ pork stir-fried with rice, one whole egg, diced white onion, carrots and green peas in house soy sauce",
        17.95
    );

    let cubeFiletMignonWithSteamedRice = new MenuItem(
        "cube filet mignon w/ steamed rice",
        "",
        17.95
    );
    let grilledPorkWithSteamedRice = new MenuItem(
        "grilled pork w/ steamed rice",
        "",
        15.95
    );
    let porkChopWithSteamedRice = new MenuItem(
        "pork chop w/ steamed rice",
        "",
        15.95
    );
    let grilledChickenWithSteamedRice = new MenuItem(
        "grilled chicken w/ steamed rice",
        "",
        15.95
    );
    let vietnameseSpicyFriedChickenWithSteamedRice = new MenuItem(
        "vietnamese crispy fried chicken w/ steamed rice (GF) (Spicy)",
        "",
        15.95
    );
    let grilledTofuWithSteamedRice = new MenuItem(
        "grilled tofu w/ steamed rice",
        "",
        15.95
    );

    let plainGarlicNoodle = new MenuItem(
        "plain garlic noodle",
        "",
        10.95
    );
    let chickenGarlicNoodle = new MenuItem(
        "chicken garlic noodle",
        "",
        15.95
    );
    let grilledPorkGarlicNoodle = new MenuItem(
        "grilled pork garlic noodle",
        "",
        15.95
    );
    let tofuGarlicNoodle = new MenuItem(
        "tofu garlic noodle",
        "",
        15.95
    );
    let shrimpGarlicNoodle = new MenuItem(
        "shrimp garlic noodle",
        "",
        16.95
    );
    let cubeFiletMignonGarlicNoodle = new MenuItem(
        "cube filet mignon garlic noodle",
        "",
        17.95
    );
    let shrimpAndChickenGarlicNoodle = new MenuItem(
        "shrimp and chicken garlic noodle",
        "",
        17.95
    );

    let veganEggRolls = new MenuItem(
        "vegan egg rolls",
        "sweet and sour sauce",
        5.50
    );
    let tofuSpringRolls = new MenuItem(
        "tofu spring rolls (2)",
        'lettuce, vermicelli noodle, mint leaves' +
        '\n roasted peanut, peanut sauce',
        8.95
    );
    let veganFriedTofu = new MenuItem(
        "vegan fried tofu (GF)",
        'deep fried tofu, jalapeno, green onion' +
        '\n sweet and sour sauce',
        13.95
    );
    let grilledTofuBaguette = new MenuItem(
        "grilled tofu baguette",
        "premium marinated tofu in homemade baguette, serve with house sauce, pickle, cucumber, cilantro and jalapeno",
        9.95
    );
    let veganPho = new MenuItem(
        "vegan pho (GF)",
        "tofu, cabbage and bok choy served with rice noodle in vegan broth, garnish with white onion, green onion, and cilantro." +
            "\n Side: bean sprout, basil, lime, jalapeno" +
            "\n Sauce: hoisin and sriracha",
        14.95
    );
    let veganFriedRice = new MenuItem(
        "vegan fried rice",
        "diced premium tofu stir-fried with rice, diced white onion and carrots, green peas in house soy sauce",
        14.95
    );
    let grilledTofuSteamedRice = new MenuItem(
        "grilled tofu steamed rice",
        "lettuce, cucumber, pickled carrots, daikon, and fried egg",
        15.95
    );
    let veganVermicelliNoodle = new MenuItem(
        "vegan vermicelli noodle",
        'lettuce, bean sprout, cucumber, mint, pickled carrots, daikon, and scallion oil' +
        '\n vegan egg roll, roasted peanut, homemade soy sauce',
        15.95
    );
    let vegetableStirFryNoodle = new MenuItem(
        "vegetable stir-fry noodle",
        "yellow egg noodle stir fry with tofu and mix vegetables in homemade special sauce",
        15.95
    );


    let brownSugarMilkBoba = new MenuItem(
        "brown sugar milk boba",
        "",
        6
    );
    let freshPassionFruit = new MenuItem(
        "fresh passion fruit",
        "",
        5.5
    );
    let spicyMango = new MenuItem(
        "spicy mango",
        "",
        5.5
    );
    let strawberryLemonade = new MenuItem(
        "strawberry lemonade",
        "",
        5.5
    );
    let strawberryMatcha = new MenuItem(
        "strawberry matcha",
        "",
        5.50
    );
    let strawberryMilkJelly = new MenuItem(
        "strawberry milk jelly",
        "",
        6
    );
    let peachOrangeLemongrassTea = new MenuItem(
        "peach orange lemongrass tea",
        "",
        6
    );

    let thaiTea = new MenuItem(
        "thai tea",
        "",
        5.5
    );
    let taroMilkTea = new MenuItem(
        "taro milk tea",
        "",
        5.5
    );
    let greenMilkTea = new MenuItem(
        "green milk tea",
        "",
        5.5
    );
    let blackMilkTea = new MenuItem(
        "black milk tea",
        "",
        5.5
    );
    let matchaLatte = new MenuItem(
        "matcha latte",
        "",
        5.5
    );
    let mangoLemonadeTea = new MenuItem(
        "mango lemonade tea",
        "",
        5.5
    );
    let peachLemonadeTea = new MenuItem(
        "peach lemonade tea",
        "",
        5.5
    );

    let mangoSmoothie = new MenuItem(
        "mango",
        "",
        5.5
    );
    let mangoPineappleSmoothie = new MenuItem(
        "mango pineapple",
        "",
        6
    );
    let mangoStrawberrySmoothie = new MenuItem(
        "mango strawberry",
        "",
        6
    );
    let strawberrySmoothie = new MenuItem(
        "strawberry",
        "",
        5.5
    );
    let strawberryBananaSmoothie = new MenuItem(
        "strawberry banana",
        "",
        6
    );
    let pinaColadaSmoothie = new MenuItem(
        "pina colada",
        "",
        5.5
    );
    let avocadoSmoothie = new MenuItem(
        "avocado",
        "",
        6.5
    );

    let taroMilkshake = new MenuItem(
        "taro",
        "",
        5.5
    );
    let bubbleGumMilkshake = new MenuItem(
        "bubble gum",
        "",
        5.5
    );
    let caramelMilkshake = new MenuItem(
        "caramel",
        "",
        5.5
    );
    let chocolateMilkshake = new MenuItem(
        "chocolate",
        "",
        5.5
    );
    let cookieAndCreamMilkshake = new MenuItem(
        "cookie & cream",
        "",
        5.5
    );
    let cottonCandyMilkshake = new MenuItem(
        "cotton candy",
        "",
        5.5
    );
    let honeydewMilkshake = new MenuItem(
        "honeydew",
        "",
        5.5
    );
    let matchaMilkshake = new MenuItem(
        "matcha",
        "",
        5.5
    );

    let iceVietnameseCoffee = new MenuItem(
        "iced vietnamese coffee",
        "",
        5.5
    );
    let cafeFrapp = new MenuItem(
        "cafe frapp",
        "",
        5.5
    );
    let caramelFrapp = new MenuItem(
        "caramel frapp",
        "",
        5.5
    );
    let mochaFrapp = new MenuItem(
        "mocha frapp",
        "",
        5.5
    );
    let coconutFrapp = new MenuItem(
        "coconut cafe frapp",
        "",
        5.5
    );
    let hotVietnameseCoffee = new MenuItem(
        "hot vietnamese coffee",
        "",
        5
    );

    let coke = new MenuItem(
        "coke",
        "",
        3
    );
    let dietCoke = new MenuItem(
        "diet coke",
        "",
        3
    );
    let sprite = new MenuItem(
        "sprite",
        "",
        3
    );
    let hotTea = new MenuItem(
        "hot tea",
        "",
        3
    );
    let icedTea = new MenuItem(
        "iced tea",
        "",
        4
    );

    let honeyBoba = new MenuItem(
        "honey boba",
        "",
        1
    );
    let crystalBoba = new MenuItem(
        "crystal boba",
        "",
        1
    );
    let rainbowJelly = new MenuItem(
        "rainbow jelly",
        "",
        1
    );
    let lycheeJelly = new MenuItem(
        "lychee jelly",
        "",
        1
    );
    let coffeeJelly = new MenuItem(
        "coffee jelly",
        "",
        1
    );

    let macaron = new MenuItem(
        "macaron",
        spacingBeforeOptions +
        '\n • caramel' +
        '\n • chocolate' +
        '\n • coconut' +
        '\n • coffee' +
        '\n • green tea' +
        '\n • hazelnut' +
        '\n • pistachio' +
        '\n • raspberry' +
        '\n • rose petal' +
        '\n • strawberry' +
        '\n • taro' +
        '\n • vanilla'
        ,
        3.25
    );
    let shavedIce = new MenuItem(
        "shaved ice",
        spacingBeforeOptions +
        '\n choose up to 3 flavors:' +
        '\n • blue raspberry' +
        '\n • cherry' +
        '\n • coconut' +
        '\n • cotton candy' +
        '\n • fruit punch' +
        '\n • grape' +
        '\n • lemon-lime' +
        '\n • orange' +
        '\n • pina colada' +
        '\n • pink lemonade' +
        '\n • strawberry' +
        '\n • watermelon'
        ,
        5
    );
    let macaronSandwich = new MenuItem(
        "macaron gelato sandwich",
        "",
        7.5
    );
    let tiramisuCake = new MenuItem(
        "tiramisu cake",
        "",
        5.45
    );
    let strawberryCheesecake = new MenuItem(
        "strawberryCheesecake",
        "",
        5
    );




    appetizerCategory.menuItems = [
        seafoodEggRolls,
        grilledPorkSkewer,
        porkBao,
        eggRollsPlatter,
        chickenWings,
        garlicButterFries,
        garlicButterPopcornChicken,
        springRolls,
        asianStyleSalad
    ];
    aloSignatureCategory.menuItems = [
        houseCrispyNoodle,
        filetMignonPlatter,
        vietnameseChickenCurry,
        shakenFiletMignonFries
    ];
    phoCategory.menuItems = [
        new MenuItem(
            "",
            phoCategory.description,
        0
        ),
        houseSpecialPho,
        chickenPho,
        beefMeatballPho,
        brisketPho,
        rareFiletMignonPho,
        jumboShrimpPho,
        grilledPorkPho,
        grilledBeefBackRibPho,
        boilBeefBackRibPho,
        plainPho
    ];
    vermicelliCategory.menuItems = [
        new MenuItem(
            "",
            vermicelliCategory.description,
            0
        ),
        grilledChickenVermicelli,
        grilledPorkVermicelli,
        grilledShrimpVermicelli,
        comboPorkAndShrimpVermicelli,
        lemongrassFiletMignonVermicelli,
        eggRollVermicelli
    ];
    vietnameseHouseBaguetteCategory.menuItems = [
        grilledPorkBaguette,
        grilledChickenBaguette,
        friedEggBaguette,
        grilledBeefBaguette
    ];
    friedRiceCategory.menuItems = [
        new MenuItem(
            "",
            friedRiceCategory.description,
            0
        ),
        plainFriedRice,
        chickenFriedRice,
        bbqPorkFriedRice,
        tofuFriedRice,
        shrimpFriedRice,
        filetMignonFriedRice,
        combinationFriedRice
    ];
    steamedRiceCategory.menuItems = [
        new MenuItem(
            "",
            steamedRiceCategory.description,
            0
        ),
        cubeFiletMignonWithSteamedRice,
        grilledPorkWithSteamedRice,
        porkChopWithSteamedRice,
        grilledChickenWithSteamedRice,
        vietnameseSpicyFriedChickenWithSteamedRice,
        grilledTofuWithSteamedRice
    ];
    garlicNoodleCategory.menuItems = [
        new MenuItem(
            "",
            garlicNoodleCategory.description,
            0
        ),
        plainGarlicNoodle,
        chickenGarlicNoodle,
        grilledPorkGarlicNoodle,
        tofuGarlicNoodle,
        shrimpGarlicNoodle,
        cubeFiletMignonGarlicNoodle,
        shrimpAndChickenGarlicNoodle
    ];
    veganCategory.menuItems = [
        veganEggRolls,
        tofuSpringRolls,
        veganFriedTofu,
        grilledTofuBaguette,
        veganPho,
        veganFriedRice,
        grilledTofuSteamedRice,
        veganVermicelliNoodle,
        vegetableStirFryNoodle
    ];

    drinksCategory.menuCategories = [
        houseDrinksCategory,
        teaCategory,
        smoothieCategory,
        milkshakeCategory,
        coffeeCategory,
        beveragesCategory,
        toppingCategory
    ];
    houseDrinksCategory.menuItems = [
        brownSugarMilkBoba,
        freshPassionFruit,
        spicyMango,
        strawberryLemonade,
        strawberryMatcha,
        strawberryMilkJelly,
        peachOrangeLemongrassTea
    ];
    teaCategory.menuItems = [
        thaiTea,
        taroMilkTea,
        greenMilkTea,
        blackMilkTea,
        matchaLatte,
        mangoLemonadeTea,
        peachLemonadeTea
    ];
    smoothieCategory.menuItems = [
        mangoSmoothie,
        mangoPineappleSmoothie,
        mangoStrawberrySmoothie,
        strawberrySmoothie,
        strawberryBananaSmoothie,
        pinaColadaSmoothie,
        avocadoSmoothie
    ];
    milkshakeCategory.menuItems = [
        taroMilkshake,
        bubbleGumMilkshake,
        caramelMilkshake,
        chocolateMilkshake,
        cookieAndCreamMilkshake,
        cottonCandyMilkshake,
        honeydewMilkshake,
        matchaMilkshake
    ];
    coffeeCategory.menuItems = [
        iceVietnameseCoffee,
        cafeFrapp,
        caramelFrapp,
        mochaFrapp,
        coconutFrapp,
        hotVietnameseCoffee
    ];
    beveragesCategory.menuItems = [
        coke,
        dietCoke,
        sprite,
        hotTea,
        icedTea
    ];
    toppingCategory.menuItems = [
        honeyBoba,
        crystalBoba,
        rainbowJelly,
        lycheeJelly,
        coffeeJelly
    ];

    dessertsCategory.menuItems = [
        macaron,
        shavedIce,
        macaronSandwich,
        tiramisuCake,
        strawberryCheesecake
    ];

    mainMenu.menuCategories = [
        appetizerCategory,
        aloSignatureCategory,
        phoCategory,
        vermicelliCategory,
        vietnameseHouseBaguetteCategory,
        friedRiceCategory,
        steamedRiceCategory,
        garlicNoodleCategory,
        veganCategory
    ];
    beveragesAndDesserts.menuCategories = [
        drinksCategory,
        dessertsCategory
    ];
    menuData.menuCategories = [
        mainMenu,
        beveragesAndDesserts
    ];

    return menuData;
}