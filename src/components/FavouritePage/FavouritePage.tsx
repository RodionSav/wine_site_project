import './favourite.scss';
import '../AboutPage/About.scss';
import { useAppSelector } from '../../app/hooks';
// import { FavouriteCard } from './FavouriteCard';
import { ProductCard } from '../WineCard/ProductCard';

export const FavouritePage = () => {

  const { items: favouritesProducts } = useAppSelector(state => state.favourite)

  return (
    <div className="favourite">
      <h1 className="favourite__title">Your favourites</h1>
      <div className='favourite-container'>
        {favouritesProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className='story-course-container wine-course-container'>
          <img src='/images2/tastingRoom.jpg' className='wine-course-img' alt='tasting-room'/>
          <div className='story-course__link-container'>
            <h1 className='story-course__title'>Tasting room</h1>
            <a>
              <img src='/images2/arrow.svg' className='story-course-img' />
            </a>
            <p className='story-course__paragraph'>Experience our Wines</p>
          </div>
        </div>
    </div>
  )
}