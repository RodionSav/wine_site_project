import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { OrderCard } from "./OrderCard";
import './order.scss';
import '../GeneralStyle/Page.scss';
import * as actions from '../features/cartSlicer';
import { useEffect } from "react";

type Props = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

export const NewOrder: React.FC<Props> = ({ isActive, setIsActive }) => {
  const cartProducts = useAppSelector(state => state.cart.items);

  const orders = useAppSelector(state => state.cart.orderItems);

  const dispatch = useAppDispatch();

  const newOrderCode = useAppSelector(state => state.cart.orderSeletedItem);

  const totalAmount = cartProducts.reduce((acc, product) => (
    acc + product.quantity
  ), 0);

  const totalPrice = cartProducts.reduce((acc, product) => (
    acc + (product.price * product.quantity)
  ), 0);

  const orderNumber = newOrderCode?.orderNumber || '';

  const handleCloseForm = () => {
    setIsActive(!isActive);
  }

  useEffect(() => {
    dispatch(actions.cartOrdersGetInit());
    dispatch(actions.cartSelectedOrderInit(orders.length));

    console.log('Количество заказов:', orders);
    console.log('Последний заказ', newOrderCode);
  }, [])

  const handleCopyOrderNumber = () => {
    navigator.clipboard.writeText(orderNumber);
    alert("Successfully copied!");
  }

  return (
    <div className="order" style={{ overflowY: 'auto' }}>
      <div className="order-container">
        <h1 className="order__title">
          Thank you for your <span className="order__name" onClick={handleCopyOrderNumber}>{orderNumber}</span>
        </h1>
        <button
          className="order__button-cross"
          onClick={handleCloseForm}
        >
          <img src="images2/cross.svg" />
        </button>
        <div className="order__card-container">
          {cartProducts.map((product) => (
            <OrderCard key={product.id} product={product} />
          ))}
        </div>
        <div className="order__total-container">
          <h1 className="order__total">Total</h1>
          <h1 className="order__card__amount">{totalAmount}</h1>
          <h1 className="order__card__price">{`${totalPrice}UAH`}</h1>
        </div>
        <div className="order__button-container">
          <h1 className="order__button__subtitle">you can receive an information about the delivery with our automated helper</h1>
          <button className="page__button order__button">
            <img src="images2/plane.png" />
            Connect
          </button>
        </div>
      </div>
    </div>
  )
}
