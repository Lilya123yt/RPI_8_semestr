import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
    {
        id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
        title: 'Wood and stone place',
        description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families',
        type: 'apartment',
        price: 370,
        images: [
            '/img/apartment-01.jpg',
            '/img/apartment-02.jpg',
            '/img/apartment-03.jpg',
            '/img/apartment-small-03.jpg',
            '/img/apartment-small-04.jpg',
            '/img/room.jpg',
        ],
        city: {
            name: 'Paris',
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        location: {
            latitude: 48.868610000000004,
            longitude: 2.342499,
            zoom: 16
        },
        goods: [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        host: {
            isPro: true,
            name: 'Angelina',
            avatarUrl: '/img/avatar-angelina.jpg'
        },
        isPremium: false,
        isFavorite: true,
        rating: 4.9,
        bedrooms: 2,
        maxAdults: 3
    },
    {
        id: 'f9a3b4c6-7d5a-4e2d-8a2b-614fb2ddf6c3',
        title: 'Cozy studio in city center',
        description: 'Perfect for a couple or solo traveler. Close to main attractions and restaurants.',
        type: 'room',
        price: 120,
        images: [
            '/img/room-Amserdam-01.jpg',
            '/img/room-Amserdam-02.jpg',
            '/img/room-Amserdam-03.jpg',
            '/img/room-Amserdam-04.jpg',
            '/img/room-Amserdam-05.jpg',
            '/img/room-Amserdam-06.jpg',
        ],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.37403,
                longitude: 4.88969,
                zoom: 13
            }
        },
        location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 16
        },
        goods: [
            'Wi-Fi',
            'Towels',
            'Laptop friendly workspace',
            'Coffee machine'
        ],
        host: {
            isPro: false,
            name: 'John',
            avatarUrl: '/img/avatar-angelina.jpg'
        },
        isPremium: false,
        isFavorite: false,
        rating: 4.5,
        bedrooms: 1,
        maxAdults: 2
    },
    {
        id: 'a1b2c3d4-5678-9101-1121-314151617181',
        title: 'Luxury house with private pool',
        description: 'A spacious and modern house with a private pool and garden. Perfect for families and groups.',
        type: 'house',
        price: 850,
        images: [
            '/img/room-Brussels-01.jpg',
            '/img/room-Brussels-02.jpg',
            '/img/room-Brussels-03.jpg',
            '/img/room-Brussels-04.jpg',
            '/img/room-Brussels-05.jpg',
            '/img/room-Brussels-06.jpg',
        ],
        city: {
            name: 'Brussels',
            location: {
                latitude: 50.85045,
                longitude: 4.34878,
                zoom: 13
            }
        },
        location: {
            latitude: 50.8476,
            longitude: 4.3572,
            zoom: 16
        },
        goods: [
            'Private pool',
            'Wi-Fi',
            'Air conditioning',
            'Dishwasher',
            'Breakfast',
            'Towels',
            'Washing machine',
            'Heating'
        ],
        host: {
            isPro: true,
            name: 'Maria',
            avatarUrl: '/img/avatar-angelina.jpg'
        },
        isPremium: true,
        isFavorite: true,
        rating: 4.8,
        bedrooms: 4,
        maxAdults: 6
    },
    {
        id: '98765432-1abc-4def-5678-90abcdef1234',
        title: 'Modern hotel room with city view',
        description: 'Comfortable hotel room with great city views, perfect for business or leisure travelers.',
        type: 'hotel',
        price: 250,
        images: [
            '/img/room-Hamburg-01.jpg',
            '/img/room-Hamburg-02.jpg',
            '/img/room-Hamburg-03.jpg',
            '/img/room-Hamburg-04.jpg',
            '/img/room-Hamburg-05.jpg',
            '/img/room-Hamburg-06.jpg',
        ],
        city: {
            name: 'Hamburg',
            location: {
                latitude: 53.551086,
                longitude: 9.993682,
                zoom: 13
            }
        },
        location: {
            latitude: 53.5585,
            longitude: 9.9278,
            zoom: 16
        },
        goods: [
            'Wi-Fi',
            'Breakfast',
            'Air conditioning',
            'Gym',
            'Towels',
            'Laptop friendly workspace'
        ],
        host: {
            isPro: true,
            name: 'Hotel Hamburg',
            avatarUrl: '/img/avatar-angelina.jpg'
        },
        isPremium: true,
        isFavorite: false,
        rating: 4.6,
        bedrooms: 1,
        maxAdults: 2
    },
];

export default offers;
