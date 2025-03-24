import { FullOffer } from '../../types/offer';
import PlaceCard from '../offer/place-card'; 

type NearbyPlacesListProps = {
  offers: FullOffer[];
};

const NearbyPlacesList = ({ offers }: NearbyPlacesListProps) => {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default NearbyPlacesList;
