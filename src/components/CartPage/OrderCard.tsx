import { Product } from "../../types/Product";
import './order.scss';

type Props = {
  product: Product;
}

export const OrderCard: React.FC<Props> = ({ product }) => {

  return (
    <div className="order__card">
      <div className="order__card-img-container">
        <img src={`http://localhost:8080/${product.pictureLink}`} className="cart__card-img"/>
        <h1 className="order__card__title">{product.name}</h1>
      </div>
      <div className="order__card__price-container">
        <h1 className="order__card__amount">{product.quantity}</h1>
        <h1 className="order__card__price">{`${product.price}UAH`}</h1>
      </div>
    </div>
  )
}
