import heartImg from '../../images/heart.svg';
import '../../components/GeneralStyle/Page.scss';
import plusImg from '../../images/plusImg.svg';
import minusImg from '../../images/minusImg.svg';
import { Product } from '../../types/Product';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as favouriteActions from '../features/favouriteSlicer';
import * as cartActions from '../features/cartSlicer';
import classNames from 'classnames';


type Props = {
  product: Product | null;
}

export const ProductCardDetailsAction: React.FC<Props> = ({ product }) => {

  const dispatch = useAppDispatch();

  const favouriteProducts = useAppSelector(state => state.favourite.items);
  const cartProducts = useAppSelector(state => state.cart.items);

  if (!product) {
    return null; // или вернуть заглушку или ничего не возвращать
  }

  const isFavourite = favouriteProducts.some(
    (favProduct) => favProduct.id === product?.id,
  );

  const isCartProduct = cartProducts.some(
    (cartProduct) => cartProduct.id === product?.id
  );

  const handleAddFavourite = (newProduct: Product) => {
    if (isFavourite) {
      dispatch(favouriteActions.deleteFavouritesProducts(newProduct.id));
    } else {
      dispatch(favouriteActions.setFavouritesProducts(newProduct));
    }
  };

  const handleAddCartProduct = (newProduct: Product) => {
    if (isCartProduct) {
      dispatch(cartActions.deleteCartProducts(newProduct.id));
    } else {
      dispatch(cartActions.setCartProducts(newProduct));
    }
  };

  const handleAddProductQuantity = (newProduct: Product) => {
    dispatch(cartActions.increaseQuantity(newProduct.id));
  }

  const handleDecreaseProductQuantity = (newProduct: Product) => {
    dispatch(cartActions.decreaseQuantity(newProduct.id));
  }



  return (
    <div className='product-details__button__main-container'>
      <div
        className='product-details-heart-container'
      >
        <button
          // className='product-details__button-heart'
          className={classNames('product-details__button-heart',
          {'product-details__button-heart_active': isFavourite })}
          onClick={() => handleAddFavourite(product)}
        >
        {/* <img src={heartImg} /> */}

        </button>
      </div>
      <div className='product-details__button-container'>
        <button
          className='product-details__button product-details__button-minus'
          onClick={() => handleDecreaseProductQuantity(product)}
        >
          <img src={minusImg} />
        </button>
        <h2 className='product-details__number'>{product.quantity}</h2>
        <button
          className='product-details__button product-details__button-plus'
          onClick={() => handleAddProductQuantity(product)}
        >
          <img src={plusImg} />
        </button>
      </div>
      <button
        // className='page__button'
        className={classNames('page__button',
        {'page__button_active': isCartProduct })}
        onClick={() => handleAddCartProduct(product)}
      >
        Add to cart
      </button>
    </div>
  )
}