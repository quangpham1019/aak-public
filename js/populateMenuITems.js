
// each menu item has
// - img
// - name
// - details
// - price

let menuCategories = {
    'special': {
        'items': {
            'Signature Pho': {
                'imgSrc': 'assets/img/item-1.jpg',
                'imgAlt': 'a bowl of pho',
                'details': 'Flavorful cut of filet mignon served with cilantro, jalapeno, and meatball',
                'price': 18,
            }
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

    },
    'drink': {

    },
    'catering': {

    }
}
let menuCategoryData = {
    'special': {
        'icon': 'fa-solid fa-star',
        'backgroundColor': '#ffcc80',
        'items': {
            'pho dac biet': 17,
            'tai nam': 15,
            'pho suon bo': 20,
            'hu tieu mi': 16,
            'curry': 17
        }
    },
    'rice': {
        'icon': 'fa-solid fa-bowl-food',
        'backgroundColor': '#81d4fa',
        'items': {
            'banh mi': 8,
            'bun cha gio': 14,
            'filet mignon noodle': 16
        }
    },
    'ice-cream': {
        'icon': 'fa-solid fa-ice-cream',
        'backgroundColor': '#c5e1a5',
        'items': {
            'chocolate': 5,
            'mango': 5,
            'vanilla': 5,
            'coffee': 6,
            'durian': 5,
            'strawberry': 4
        }
    },
    'drink': {
        'icon': 'fa-solid fa-glass-water',
        'backgroundColor': '#ce93d8',
        'items': {
            'boba': 7,
            'smoothies': 7,
            'tea': 6,
            'coffee': 6
        }
    },
    'catering': {
        'icon': 'fa-solid fa-bell-concierge',
        'backgroundColor': '#ce93d8',
        'items': {
            'chicken wings 25pcs': 25,
            'egg rolls 20cps': 20,
        }
    }
}


$(document).ready(function() {

    // add event listeners to menu categories

        // when clicked, replace children of .menu-items-wrapper with corresponding content
    let content = document.querySelector('.menu-items-wrapper');

    let navItems = document.querySelectorAll('.nav-items h3');
    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            let curItem = event.currentTarget;
            let toSwap = curItem.id.slice(0, -'-nav'.length);
            let toSwapEl = document.querySelector(`#${toSwap}`);

            let clone = toSwapEl.cloneNode(true);
            clone.style.visibility = "initial";
            content.replaceChildren(clone);
        })
    });

    let welcomeContent = document.querySelector('#welcome-content');
    let logo = document.querySelector('.logo');
    logo.addEventListener('click', function(event) {
        let curClone = welcomeContent.cloneNode(true);
        content.replaceChildren(curClone);
    })

    logo.click();
});