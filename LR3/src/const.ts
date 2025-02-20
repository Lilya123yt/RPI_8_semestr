const Setting = {
    rentOffersCount: 312,
    otherPlaces: 1,
} as const;

export {Setting};

export const AppRoute = {
    Main : '/',
    Login : '/login',
    Favorites : '/favorites',
    Offer : '/offer/:id',
} as const;

export const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknow: 'UNKNOWN',
}