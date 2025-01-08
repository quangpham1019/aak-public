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

export function getDataAsJSON() {
    const spacingBeforeOptions = '\u00A0\u00A0\u00A0--------';
    return {
        'appetizers': {
            'items': {
                'seafood egg rolls (2) ': {
                    'imgSrc': 'https://www.seriouseats.com/thmb/U-hWLnDmSZ8_6v07v0yc-8uYxrE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__06__20120629-pho-food-lab-19-c94bfd465387441f83ee8939fdf67dbe.jpg',
                    'imgAlt': '',
                    'details': 'sweet chili sauce',
                    'price': 5.50,
                },
                'grilled pork skewer': {
                    'imgSrc': 'https://www.seriouseats.com/thmb/U-hWLnDmSZ8_6v07v0yc-8uYxrE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__06__20120629-pho-food-lab-19-c94bfd465387441f83ee8939fdf67dbe.jpg',
                    'imgAlt': '',
                    'details': 'pickled carrots, daikon, and parsley',
                    'price': 3.85,
                },
                'pork bao': {
                    'imgSrc': 'https://www.seriouseats.com/thmb/U-hWLnDmSZ8_6v07v0yc-8uYxrE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__06__20120629-pho-food-lab-19-c94bfd465387441f83ee8939fdf67dbe.jpg',
                    'imgAlt': '',
                    'details': spacingBeforeOptions +
                        '\n pick an option:' +
                        '\n + steam' +
                        '\n + fried',
                    'price': 4.50,
                },
                'egg rolls platter (4)': {
                    'imgSrc': 'https://www.seriouseats.com/thmb/U-hWLnDmSZ8_6v07v0yc-8uYxrE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__06__20120629-pho-food-lab-19-c94bfd465387441f83ee8939fdf67dbe.jpg',
                    'imgAlt': '',
                    'details': 'lettuce, pickled carrots, daikon, and mint leaves' +
                        '\n' + spacingBeforeOptions +
                        '\n pick a filling:' +
                        '\n + seafood' +
                        '\n + vegan',
                    'price': 10.95,
                },
                'chicken wings': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': spacingBeforeOptions +
                        '\n pick a sauce:' +
                        '\n + garlic butter' +
                        '\n + sweet & spicy',
                    'price': 13.95,
                },
                'garlic butter fries': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'parsley, ranch, and ketchup',
                    'price': 8.25,
                },
                'garlic button popcorn chicken': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'parsley, sweet and sour sauce',
                    'price': 8.25,
                },
                'spring rolls (2)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'rice paper, lettuce, vermicelli noodle, mint leaves' +
                        '\n roasted peanut, peanut sauce' +
                        '\n' + spacingBeforeOptions +
                        '\n pick your protein:' +
                        '\n + pork and shrimp (GF) +1' +
                        '\n + shrimp (GF)' +
                        '\n + chicken' +
                        '\n + grilled pork',
                    'price': 8.95,
                },
                'asian-style salad': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'lettuce, cucumber, picked carrots, and daikon, served with homemade sesame dressing' +
                        '\n' + spacingBeforeOptions +
                        '\n pick one or many:' +
                        '\n + plain (GF)' +
                        '\n + cube filet mignon +7' +
                        '\n + chicken +5' +
                        '\n + tofu +5',
                    'price': 9.95,
                }
            }
        },
        'alo\'s signature': {
            'items': {
                'house crispy noodle': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'jumbo shrimp, cube filet mignon, mix vegetables served with crispy egg noodle',
                    'price': 19.95,
                },
                'filet mignon platter (dine-in only)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'cube filet mignon and fried egg, served with your choice of carb' +
                        '\n' + spacingBeforeOptions +
                        '\n pick your carb' +
                        '\n + steamed rice' +
                        '\n + baguette' +
                        '\n + tomato fried rice +2',
                    'price': 19.95,
                },
                'vietnamese chicken curry (mild spicy)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'bone-in dark meat chicken, coconut cream, potato, carrot, white onion, lemongrass in yellow curry, and your choice of carb' +
                        '\n' + spacingBeforeOptions +
                        '\n pick your carb' +
                        '\n + steamed rice' +
                        '\n + baguette' +
                        '\n + rice noodle' +
                        '\n + vermicelli noodle',
                    'price': 16.95,
                },
                'shaken filet mignon fries': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'cube filet mignon, garlic butter fries, served with ranch and ketchup',
                    'price': 17.95,
                }
            }
        },
        'pho': {
            // rice noodle, top with green onion, white onion, cilantro
            // side of bean sprout, basil, jalapeno, lime

            // broth: beef / chicken / vegetable
            // noodle substitute: egg noodle 2, vermicelli 2, steamed rice 2, vegetables 2

            'items': {
                'house special pho (GF)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'rare filet mignon & beef meatball',
                    'price': 16.95,
                },
                'chicken pho (GF)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'white meat chicken',
                    'price': 14.95,
                },
                'beef meatball pho (GF)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 14.95,
                },
                'brisket pho (GF)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 14.95,
                },
                'rare filet mignon pho (GF)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'jumbo shrimp pho (GF)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'grilled pork pho': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'grilled beef back rib pho': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 17.95,
                },
                'boil beef back rib pho (GF)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 16.95,
                },
                'plain pho': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 11.95,
                }
            }
        },
        'vermicelli rice noodle': {
            // lettuce, bean sprout, cucumber, mint, pickled carrots, daikon, and scallion oil
            // seafood egg roll, roasted peanut, marinated fish sauce

            'items': {
                'grilled chicken vermicelli': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'grilled pork vermicelli': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'grilled shrimp vermicelli': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 17.95,
                },
                'combo pork and shrimp vermicelli': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 17.95,
                },
                'lemongrass filet mignon vermicelli': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 17.95,
                },
                'egg roll vermicelli': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                }
            }
        },
        'vietnamese house baguette': {
            // pickled carrots, daikon, cucumber, cilantro, and jalapeno
            // grilled beef +1.50
            'items': {
                'grilled pork baguette': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 10.95,
                },
                'grilled chicken baguette': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 10.95,
                },
                'fried egg baguette': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 10.95,
                },
                'grilled beef baguette': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 12.45,
                }
            }

        },
        'fried rice': {
            // green peas, carrot, white onion, egg

            'items': {
                'plain fried rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 10.95,
                },
                'chicken fried rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'bbq pork fried rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'tofu fried rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'shrimp fried rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 16.95,
                },
                'filet mignon fried rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 17.95,
                },
                'combination fried rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 17.95,
                }
            }

        },
        'steamed rice': {
            // lettuce, cucumber, pickled carrots, daikon
            // fried egg, white rice
            // rice sub: tomato fried rice +2

            'items': {
                'cube filet mignon w/ steamed rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 17.95,
                },
                'grilled pork w/ steamed rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'pork chop w/ steamed rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'grilled chicken w/ steamed rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'vietnamese crispy fried chicken w/ steamed rice (GF) (Spicy)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'grilled tofu w/ steamed rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                }
            }
        },
        'garlic noodle': {
            // garlic, butter, parsley flakes

            'items': {
                'plain garlic noodle': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 10.95,
                },
                'chicken garlic noodle': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'grilled pork garlic noodle': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'tofu garlic noodle': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 15.95,
                },
                'shrimp garlic noodle': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 16.95,
                },
                'cube filet mignon garlic noodle': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 17.95,
                },
                'shrimp and chicken garlic noodle': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 17.95,
                }
            }
        },
        'vegan & vegetarian': {
            'items': {
                'vegan egg rolls': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'sweet and sour sauce',
                    'price': 5.50,
                },
                'tofu spring rolls (2)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'lettuce, vermicelli noodle, mint leaves' +
                        '\n roasted peanut, peanut sauce',
                    'price': 8.95,
                },
                'vegan fried tofu (GF)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'deep fried tofu, jalapeno, green onion' +
                        '\n sweet and sour sauce',
                    'price': 13.95,
                },
                'tofu baguette': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'pickled carrots and daikon, cucumber, cilantro, jalapeno',
                    'price': 9.95,
                },
                'vegan pho (GF)': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'vegan broth, bok choy, cabbage, fried tofu' +
                        '\n rice noodle, green onion, white onion, cilantro' +
                        '\n side: bean sprout, basil, jalapeno, and lime',
                    'price': 14.95,
                },
                'vegan fried rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'green peas, carrot, white onion, tofu',
                    'price': 14.95,
                },
                'grilled tofu steamed rice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'lettuce, cucumber, pickled carrots, daikon, and fried egg',
                    'price': 15.95,
                },
                'vegan vermicelli noodle': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'lettuce, bean sprout, cucumber, mint, pickled carrots, daikon, and scallion oil' +
                        '\n vegan egg roll, roasted peanut, homemade soy sauce',
                    'price': 15.95,
                },
                'vegetable stir-fry noodle': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': 'egg noodle, mix vegetables, tofu',
                    'price': 15.95,
                }
            }

        },
        'drinks': {
            'categories': {
                'house drinks': {
                    'items': {
                        'brown sugar milk boba': 6.00,
                        'fresh passion fruit': 5.50,
                        'spicy mango': 5.50,
                        'strawberry lemonade': 5.50,
                        'strawberry matcha': 5.50,
                        'strawberry milk jelly': 6.00,
                        'peach orange lemongrass tea': 6.00,
                    }
                },
                'tea': {
                    'items': {
                        'thai tea': 5.50,
                        'taro milk tea': 5.50,
                        'green milk tea': 5.50,
                        'black milk tea': 5.50,
                        'matcha latte': 5.50,
                        'mango lemonade tea': 5.50,
                        'peach lemonade tea': 5.50,
                    }
                },
                'smoothies': {
                    'items': {
                        'mango': 5.50,
                        'mango pineapple': 6.00,
                        'mango strawberry': 6.00,
                        'strawberry': 5.50,
                        'strawberry banana': 6.00,
                        'pina colada': 5.50,
                        'avocado': 6.50,
                    }
                },
                'milkshake': {
                    'items': {
                        'taro': 5.50,
                        'bubble gum': 5.50,
                        'caramel': 5.50,
                        'chocolate': 5.50,
                        'cookie & cream': 5.50,
                        'cotton candy': 5.50,
                        'honey dew': 5.50,
                        'matcha': 5.50
                    }
                },
                'coffee': {
                    'items': {
                        'iced vietnamese coffee': 5.50,
                        'cafe frapp': 5.50,
                        'caramel frapp': 5.50,
                        'mocha frapp': 5.50,
                        'coconut cafe frapp': 5.50,
                        'hot vietnamese coffee': 5.00
                    }
                },
                'beverages': {
                    'items': {
                        'coke': 3.00,
                        'diet coke': 3.00,
                        'sprite': 3.00,
                        'hot tea': 3.00,
                        'iced tea': 4.00
                    }
                },
                'topping': {
                    'items': {
                        'honey boba': 1.00,
                        'crystal boba': 1.00,
                        'rainbow jelly': 1.00,
                        'lychee jelly': 1.00,
                        'coffee jelly': 1.00
                    }
                }
            }
        },
        'desserts': {
            'items': {
                'macaron': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'flavors':
                        ['caramel', 'chocolate', 'coconut', 'coffee',
                            'green tea', 'hazelnut', 'pistachio', 'raspberry',
                            'rose petal', 'strawberry', 'taro', 'vanilla'],
                    'details': '',
                    'price': 0,
                },
                'shaved ice': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'flavors':
                        ['blue raspberry', 'cherry', 'coconut', 'cotton candy',
                            'fruit punch', 'grape', 'lemon-lime', 'orange',
                            'pina colada', 'pink lemonade', 'strawberry', 'watermelon'],
                    'details': '',
                    'price': 0,
                },
                'macaron sandwich': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 0
                },
                'tiramisu cake': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 0
                },
                'strawberry cheesecake': {
                    'imgSrc': '',
                    'imgAlt': '',
                    'details': '',
                    'price': 0
                }

            }
        }
    };
}
export function getDataAsObjects() {
    let menuData = new MenuCategory("menu", "");
    let spacingBeforeOptions = '\u00A0\u00A0\u00A0--------';

    ////////////////////
    //  CATEGORY      //
    ////////////////////
    let mainMenu = new MenuCategory("main menu", "");
    let beveragesAndDesserts = new MenuCategory("beverages & desserts", "");
    let appetizerCategory = new MenuCategory("appetizer", "");
    let aloSignatureCategory = new MenuCategory("alo's signature", "");
    let phoCategory = new MenuCategory(
        "pho",
        'lettuce, cucumber, picked carrots, and daikon, served with homemade sesame dressing' +
            '\n' + spacingBeforeOptions +
            '\n pick your broth:' +
            '\n + beef / chicken / vegetable' +
            '\n' + spacingBeforeOptions +
            '\n optional noodle substitute:' +
            '\n + egg noodle +2' +
            '\n + vermicelli +2' +
            '\n + steamed rice +2' +
            '\n + vegetables +2'
        );
    let vermicelliCategory = new MenuCategory("vermicelli rice noodle", "");
    let vietnameseHouseBaguette = new MenuCategory("vietnamese house baguette", "");
    let friedRiceCategory = new MenuCategory("fried rice", "");
    let steamedRiceCategory = new MenuCategory("steamed rice", "");
    let garlicNoodleCategory = new MenuCategory("garlic noodle", "");
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
        '\n + steam' +
        '\n + fried',
        4.50);
    let eggRollsPlatter = new MenuItem(
        "egg rolls platter (4)",
        'lettuce, pickled carrots, daikon, and mint leaves' +
        '\n' + spacingBeforeOptions +
        '\n pick a filling:' +
        '\n + seafood' +
        '\n + vegan',
        10.95);
    let chickenWings = new MenuItem(
        "chicken wings",
        spacingBeforeOptions +
        '\n pick a sauce:' +
        '\n + garlic butter' +
        '\n + sweet & spicy',
        13.95);
    let garlicButterFries = new MenuItem(
        "garlic butter fries",
        "parsley, ranch, and ketchup",
        8.25);
    let garlicButtonPopcornChicken = new MenuItem(
        "garlic button popcorn chicken",
        "parsley, sweet and sour sauce",
        8.25);
    let springRolls = new MenuItem(
        "spring rolls (2)",
        'rice paper, lettuce, vermicelli noodle, mint leaves' +
        '\n roasted peanut, peanut sauce' +
        '\n' + spacingBeforeOptions +
        '\n pick your protein:' +
        '\n + pork and shrimp (GF) +1' +
        '\n + shrimp (GF)' +
        '\n + chicken' +
        '\n + grilled pork',
        8.95);
    let asianStyleSalad = new MenuItem(
        "asian-style salad",
        'lettuce, cucumber, picked carrots, and daikon, served with homemade sesame dressing' +
        '\n' + spacingBeforeOptions +
        '\n pick one or many:' +
        '\n + plain (GF)' +
        '\n + cube filet mignon +7' +
        '\n + chicken +5' +
        '\n + tofu +5',
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
        '\n + steamed rice' +
        '\n + baguette' +
        '\n + tomato fried rice +2',
        19.95);
    let vietnameseChickenCurry = new MenuItem(
        "vietnamese chicken curry (mild spicy)",
        'bone-in dark meat chicken, coconut cream, potato, carrot, white onion, lemongrass in yellow curry, and your choice of carb' +
        '\n' + spacingBeforeOptions +
        '\n pick your carb' +
        '\n + steamed rice' +
        '\n + baguette' +
        '\n + rice noodle' +
        '\n + vermicelli noodle',
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

    let thaiTea = new MenuItem("thai tea", "", 5);
    let jasmineTea = new MenuItem("jasmine tea", "", 5);
    let pineappleSmoothie = new MenuItem("pineapple smoothie", "", 5);
    let mangoSmoothie = new MenuItem("mango smoothie", "", 5);

    appetizerCategory.menuItems = [
        seafoodEggRolls,
        grilledPorkSkewer,
        porkBao,
        eggRollsPlatter,
        chickenWings,
        garlicButterFries,
        garlicButtonPopcornChicken,
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
            'lettuce, cucumber, pickled carrots, and daikon, served with homemade sesame dressing' +
            '\n' + spacingBeforeOptions +
            '\n pick your broth:' +
            '\n + beef / chicken / vegetable' +
            '\n' + spacingBeforeOptions +
            '\n optional noodle substitute:' +
            '\n + egg noodle +2' +
            '\n + vermicelli +2' +
            '\n + steamed rice +2' +
            '\n + vegetables +2',
            0),
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

    drinksCategory.menuCategories = [
        houseDrinksCategory,
        teaCategory,
        smoothieCategory,
        milkshakeCategory,
        coffeeCategory,
        beveragesCategory,
        toppingCategory
    ];
    teaCategory.menuItems = [
        thaiTea,
        jasmineTea
    ];
    smoothieCategory.menuItems = [
        pineappleSmoothie,
        mangoSmoothie
    ];

    mainMenu.menuCategories = [
        appetizerCategory,
        aloSignatureCategory,
        phoCategory,
        vermicelliCategory,
        vietnameseHouseBaguette,
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