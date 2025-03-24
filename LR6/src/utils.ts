import { SortOffersType } from "./const";
import { CityOffer, OffersList } from "./types/offer";
import { SortOffer } from "./types/sort";

export const getCity = (cityName: string, cities: CityOffer[]): CityOffer | undefined => {
    return cities.find(city => city.name === cityName);
};

export const getOffersForCity = (city: CityOffer, offers: OffersList[]): OffersList[] => {
    return offers.filter(offer => offer.city.name === city.name);
};

function SortOffersByType (offers: OffersList[], type: SortOffer): OffersList[] {
    switch (type) {
        case SortOffersType.PriceToHigh:
            return offers.sort((a,b) => a.price - b.price);
        case SortOffersType.PriceToLow:
            return offers.sort((a,b) => b.price - a.price);
        case SortOffersType.TopRated:
            return offers.sort((a,b) => b.rating - a.rating);
        default:
            return offers;
    }
}

export {SortOffersByType};
