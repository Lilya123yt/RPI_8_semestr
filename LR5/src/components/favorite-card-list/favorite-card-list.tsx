import { OffersList } from "../../types/offer";
import CitiesCard from '../cities-card/favorites-cities-card';
import { FavoriteOffer } from "../../types/offer";

type FavoriteCardListProps = {
    offersList: FavoriteOffer[];
};

function FavoriteCardList ({ offersList }: FavoriteCardListProps) {
    return (
        <div className="favorites__places">
            {Array.from(offersList ?? [], (item) =>
            <CitiesCard key={ item.id } id={ item.id } title={ item.title } type={ item.type } price={ item.price } 
            previewImage={item.previewImage}  isPremium={ item.isPremium } rating={ item.rating } />)}
        </div>
    );
}

export { FavoriteCardList };