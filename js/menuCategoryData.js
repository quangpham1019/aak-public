const menuCategories = {
    'alo signature': {
        'items': {
            'Signature Pho': {
                'imgSrc': 'assets/img/item-1.jpg',
                'imgAlt': 'a bowl of pho',
                'details': 'Flavorful cut of filet mignon served with cilantro, jalapeno, and meatball',
                'price': 18,
            },
            'Banh Mi': {
                'imgSrc': 'assets/img/item-1.jpg',
                'imgAlt': 'a bowl of pho',
                'details': 'Flavorful cut of filet mignon served with cilantro, jalapeno, and meatball',
                'price': 18,
            },
            'Filet Mignon Noodle': {
                'imgSrc': 'assets/img/item-1.jpg',
                'imgAlt': 'a bowl of pho',
                'details': 'Flavorful cut of filet mignon served with cilantro, jalapeno, and meatball',
                'price': 18,
            },
        }
    },
    'rice & bun': {
        'items': {
            'Grilled Pork Vermicelli': {
                'imgSrc': 'assets/img/bun-thit-nuong-h2-1.jpg',
                'imgAlt': 'a bowl of grilled pork and vermicelli',
                'details': 'grilled pork vermicelli',
                'price': 17,
            }
        }
    },
    'ice-cream': {
        'items': {}
    },
    'drink': {
        'items': {}

    },
    'catering': {
        'items': {}

    }
}

export function getData() {
    return menuCategories;
}