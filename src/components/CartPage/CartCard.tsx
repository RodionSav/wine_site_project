import { Product } from "../../types/Product";
import plusImg from '../../images/plusImg.svg';
import minusImg from '../../images/minusImg.svg';
import { useAppDispatch } from "../../app/hooks";
import * as cartActions from '../features/cartSlicer';
import { CartItem } from "../features/cartSlicer";

type Props = {
  product: Product;
}

export const CartCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddCartProduct = (newProduct: Product) => {
    dispatch(cartActions.deleteCartProducts(newProduct.id));
  }

  const handleAddProductQuantity = (newProduct: Product) => {
    dispatch(cartActions.increaseQuantity(newProduct.id));
  }

  const handleDeleteProductQuantity = (newProduct: Product) => {
    dispatch(cartActions.decreaseQuantity(newProduct.id));
  }

  return (
    <div className="cart__card">
      <div className="cart__card-img-container">
        <img src={`http://localhost:8080/${product.pictureLink}`} className="cart__card-img"/>
        <h1 className="cart__card__title">{product.name}</h1>
      </div>
      <div className='cart__card__button-container'>
        <button
          className='cart__card__button cart__card__button-minus'
          onClick={() => handleDeleteProductQuantity(product)}
        >
          <img src={minusImg} />
        </button>
        <h2 className='cart__card__number'>{product.quantity}</h2>
        <button
          className='cart__card__button cart__card__button-plus'
          onClick={() => handleAddProductQuantity(product)}
        >
          <img src={plusImg} />
        </button>
      </div>
      <div >
        <h2 className="cart__card__price">
          {`${product.price} UAH`}
        </h2>
      </div>
      <button
        onClick={() => handleAddCartProduct(product)}
        className="cart__card__button__cross"
      >
        <img src="/images2/cross.svg" />
      </button>
    </div>
  )
}
