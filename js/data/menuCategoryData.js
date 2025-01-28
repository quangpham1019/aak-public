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
    let springRollCategory = new MenuCategory("spring roll", "");
    let saladCategory = new MenuCategory("salads", "");
    let aloSignatureCategory = new MenuCategory("alo's signature", "");
    let phoCategory = new MenuCategory(
        "pho",
        'rice noodle, top with green onion, white onion, cilantro, side of bean sprout, basil, jalapeno, lime' +
            '\n' + spacingBeforeOptions +
            '\n available broth options:' +
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
        "seafood egg roll, roasted peanut, served with lettuce, bean sprout, cucumber, mint, pickled carrots, daikon, and scallion oil , roasted peanut, marinated fish sauce"
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
        spacingBeforeOptions +
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
        "two pieces of crispy fried seafood (shrimp and crab) egg roll served with sweet and sour sauce",
        5.50);
    let grilledPorkSkewer = new MenuItem(
        "grilled pork skewer",
        "grilled pork meat on the stick, served with pickled carrots and daikon, parsley flakes for garnish",
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
        'four pieces of crispy fried egg roll served with lettuce, mint leaves, pickled carrots, daikon, dipping sauce, and your choice of filling' +
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
        "crispy fries toss with house garlic butter sauce, served with ranch and ketchup dipping",
        8.25);
    let garlicButterPopcornChicken = new MenuItem(
        "garlic butter popcorn chicken",
        "crispy fried popcorn chicken, toss with garlic butter sauce, served with sweet and sour sauce",
        8.25);

    let porkAndShrimpSpringRoll = new MenuItem(
        "pork & shrimp spring roll (GF)(2)",
        'pork and shrimp in fresh rice paper wrap with lettuce, vermicelli rice noodle, mint leaves, served with roasted peanut and peanut dipping sauce',
        9.95);
    let shrimpSpringRoll = new MenuItem(
        "shrimp spring roll (GF)(2)",
        'shrimp in fresh rice paper wrap with lettuce, vermicelli rice noodle, mint leaves, served with roasted peanut and peanut dipping sauce',
        8.95);
    let grilledChickenSpringRoll = new MenuItem(
        "grilled chicken spring roll (2)",
        'grilled marinated white meat chicken in fresh rice paper wrap with lettuce, vermicelli rice noodle, mint leaves, served with roasted peanut and peanut dipping sauce',
        8.95);
    let grilledPorkSpringRoll = new MenuItem(
        "grilled pork spring roll",
        'grilled marinated pork in fresh rice paper wrap with lettuce, vermicelli rice noodle, mint leaves, served with roasted peanut and peanut dipping sauce',
        8.95);

    let filetMignonSteakSalad = new MenuItem(
        "filet mignon steak salad",
        '6oz premium cube filet mignon stir fry in house sauce with white onion, on bed of lettuce, cucumber, served with sesame salad dressing',
        16.95);
    let asianChickenSalad = new MenuItem(
        "asian chicken salad",
        'grilled marinated white meat chicken on bed of lettuce, cucumber, served with sesame salad dressing',
        14.95);
    let asianTofuSalad = new MenuItem(
        "asian tofu salad",
        'grilled marinated premium tofu on bed of lettuce, cucumber, served with sesame salad dressing',
        14.95);
    let plainAsianSalad = new MenuItem(
        "plain asian salad (GF)",
        'lettuce, cucumber, served with sesame salad dressing',
        9.95);

    let houseSpecialCrispyNoodle = new MenuItem(
        "house special crispy noodle",
        "five jumbo shrimp and cube filet mignon stir fry with mix vegetables in house sauce, served in crispy egg noodle",
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
        'bone-in dark meat chicken marinated with house spices, cooked with carrots, potatoes, coconut cream, in curry flavored, served with your choice of carb. Garnish with cilantro, salt and pepper for dipping' +
        '\n' + spacingBeforeOptions +
        '\n pick your carb' +
        '\n • steamed rice' +
        '\n • baguette' +
        '\n • rice noodle' +
        '\n • vermicelli noodle',
        16.95);
    let shakenFiletMignonFries = new MenuItem(
        "shaken filet mignon fries",
        '6oz of premium cube filet mignon in house special sauce, stir fry with green and white onion, on top of garlic butter fries',
        17.95);


    let houseSpecialPho = new MenuItem(
        "house special pho (GF)",
        "4oz of finely chopped premium rare filet mignon and beef meatball served with rice noodle in beef broth, garnish with white onion, green onion, cilantro, and side of bean sprout, basil, lime, jalapeno",
        16.95);
    let chickenPho = new MenuItem(
        "chicken pho (GF)",
        "white meat chicken breast served with rice noodle in chicken broth, garnish with white onion, green onion, cilantro, and side of bean sprout, basil, lime, jalapeno",
        14.95);
    let beefMeatballPho = new MenuItem(
        "beef meatball pho (GF)",
        "beef meatball served with rice noodle in beef broth, garnish with white onion, green onion, cilantro, and side of bean sprout, basil, lime, jalapeno",
        14.95
    );
    let brisketPho = new MenuItem(
        "brisket pho (GF)",
        "",
        14.95
    );
    let rareFiletMignonPho = new MenuItem(
        "rare filet mignon pho (GF)",
        "4oz of finely chopped premium filet mignon served with rice noodle in beef broth, garnish with white onion, green onion, cilantro, and side of bean sprout, basil, lime, jalapeno",
        15.95
    );
    let jumboShrimpPho = new MenuItem(
        "jumbo shrimp pho (GF)",
        "five jumbo shrimp served with rice noodle in chicken broth, garnish with white onion, green onion, cilantro, and side of bean sprout, basil, lime, jalapeno",
        15.95
    );
    let grilledPorkPho = new MenuItem(
        "grilled pork pho",
        "grilled pork served with rice noodle in broth of your choice, garnish with white onion, green onion, cilantro, and side of bean sprout, basil, lime, jalapeno",
        15.95
    );
    let grilledBeefBackRibPho = new MenuItem(
        "grilled beef back rib pho",
        "grilled marinated beef back rib served with rice noodle in beef broth and a fried egg, garnish with white onion, green onion, cilantro, and side of bean sprout, basil, lime, jalapeno",
        17.95
    );
    let boilBeefBackRibPho = new MenuItem(
        "boil beef back rib pho (GF)",
        "",
        16.95
    );
    let plainPho = new MenuItem(
        "plain pho",
        "rice noodle serve in broth of your choice, garnish with white onion, green onion, cilantro, and side of bean sprout, basil, lime, jalapeno",
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
        "6oz premium cube filet mignon marinated in house sauce, stir fry with white onion, green onion, bell pepper, served with steamed rice, lettuce, cucumber, pickled carrots, daikon, and a fried egg",
        17.95
    );
    let grilledPorkWithSteamedRice = new MenuItem(
        "grilled pork w/ steamed rice",
        "grilled pork served with steamed rice, lettuce, cucumber, pickled carrots and daikon, a fried egg and marinated fish sauce",
        15.95
    );
    let porkChopWithSteamedRice = new MenuItem(
        "pork chop w/ steamed rice",
        "grilled pork chop served with steamed rice, lettuce, cucumber, pickled carrots and daikon, a fried egg and marinated fish sauce",
        15.95
    );
    let grilledChickenWithSteamedRice = new MenuItem(
        "grilled chicken w/ steamed rice",
        "",
        15.95
    );
    let vietnameseSpicyFriedChickenWithSteamedRice = new MenuItem(
        "vietnamese crispy fried chicken w/ steamed rice (GF) (Spicy)",
        "half cornish hen crispy fried, dip in special spicy sauce served with steamed rice, lettuce, cucumber, pickled carrots, daikon, a fried egg",
        15.95
    );
    let grilledTofuWithSteamedRice = new MenuItem(
        "grilled tofu w/ steamed rice",
        "",
        15.95
    );

    let plainGarlicNoodle = new MenuItem(
        "plain garlic noodle",
        "stir fried garlic spaghetti noodle topped with parsley flakes and garnish with cilantro",
        10.95
    );
    let chickenGarlicNoodle = new MenuItem(
        "chicken garlic noodle",
        "garlic butter white meat chicken breast in stir fried garlic spaghetti noodle topped with parsley flakes and garnish with cilantro",
        15.95
    );
    let grilledPorkGarlicNoodle = new MenuItem(
        "grilled pork garlic noodle",
        "grilled pork in stir fried garlic spaghetti noodle topped with parsley flakes and garnish with cilantro",
        15.95
    );
    let grilledTofuGarlicNoodle = new MenuItem(
        "grilled tofu garlic noodle",
        "garlic butter tofu in stir fried garlic spaghetti noodle topped with parsley flakes and garnish with cilantro",
        15.95
    );
    let jumboShrimpGarlicNoodle = new MenuItem(
        "jumbo shrimp garlic noodle",
        "five garlic butter shrimps in stir fried garlic spaghetti noodle topped with parsley flakes and garnish with cilantro",
        16.95
    );
    let shakenFiletMignonGarlicNoodle = new MenuItem(
        "shaken filet mignon garlic noodle",
        "marinated cube filet mignon stir fried in garlic spaghetti noodle along with white onion, green onion",
        17.95
    );
    let shrimpAndChickenGarlicNoodle = new MenuItem(
        "jumbo shrimp & chicken garlic noodle",
        "garlic butter chicken and jumbo shrimp in stir fried garlic spaghetti noodle topped with parsley flakes and garnish with cilantro",
        17.95
    );

    let veganEggRolls = new MenuItem(
        "vegan egg rolls (2)",
        "mushroom, carrots, glass noodle, jicama, served with sweet chilli dipping sauce",
        5.50
    );
    let tofuSpringRolls = new MenuItem(
        "tofu spring rolls (2)",
        'premium marinated tofu in fresh rice paper wrap with lettuce, vermicelli rice noodle, mint leaves, and peanut dipping sauce',
        8.95
    );
    let veganFriedTofu = new MenuItem(
        "vegan fried tofu (GF)",
        'premium crispy fried tofu toss with house spice, green onion, jalapeno, sweet and sour sauce for dipping',
        13.95
    );
    let grilledTofuBaguette = new MenuItem(
        "grilled tofu baguette",
        "premium marinated tofu in homemade baguette, serve with house sauce, pickle, cucumber, cilantro and jalapeno",
        9.95
    );
    let veganPho = new MenuItem(
        "vegan pho (GF)",
        "tofu, cabbage and bok choy served with rice noodle in vegan broth, garnish with white onion, green onion, cilantro, and side of bean sprout, basil, lime, jalapeno",
        14.95
    );
    let veganFriedRice = new MenuItem(
        "vegan fried rice",
        "diced premium tofu stir-fried with rice, diced white onion and carrots, green peas in house soy sauce",
        14.95
    );
    let grilledTofuSteamedRice = new MenuItem(
        "grilled tofu steamed rice",
        "",
        15.95
    );
    let veganVermicelliNoodle = new MenuItem(
        "vegan vermicelli noodle",
        '',
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
    ];
    appetizerCategory.menuCategories = [
        springRollCategory,
        saladCategory
    ];
    springRollCategory.menuItems = [
        porkAndShrimpSpringRoll,
        shrimpSpringRoll,
        grilledChickenSpringRoll,
        grilledPorkSpringRoll
    ];
    saladCategory.menuItems = [
        filetMignonSteakSalad,
        asianChickenSalad,
        asianTofuSalad,
        plainAsianSalad
    ];

    aloSignatureCategory.menuItems = [
        houseSpecialCrispyNoodle,
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
        plainGarlicNoodle,
        chickenGarlicNoodle,
        grilledPorkGarlicNoodle,
        grilledTofuGarlicNoodle,
        jumboShrimpGarlicNoodle,
        shakenFiletMignonGarlicNoodle,
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