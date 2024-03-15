import './cart.scss';
import '../../components/GeneralStyle/Page.scss';
import { useAppSelector } from '../../app/hooks';
import { CartCard } from './CartCard';

export const CartPage = () => {

  const cartProducts = useAppSelector(state => state.cart.items);

  const productPrice = cartProducts.reduce(
    (total, item) => total + (item.quantity * item.price), 0,
  );

  return (
    <form className="cart form">
      <div className="cart-container">
        <h1 className="cart__title">Checkout</h1>
        <h2 className="cart__subtitle">Personal data</h2>
        <div className='cart__inputs-container'>
          <div className='cart__input-container'>
            <label className="cart__label">Enter Name of the Recepient</label>
            <input className="cart__input" placeholder="Name Surname"></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Enter Telephone Number</label>
            <input className="cart__input" placeholder="+38 000 000 00 00"></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Email</label>
            <input className="cart__input" placeholder="name.surname@mail.com"></input>
          </div>
        </div>
        <h2 className="cart__subtitle">Shipping adress</h2>
        <div className='cart__inputs-container'>
          <div className='cart__input-container'>
            <label className="cart__label">Zip Code</label>
            <input className="cart__input" placeholder="00000"></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Region</label>
            <input className="cart__input" placeholder="Kyiv region"></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">City</label>
            <input className="cart__input" placeholder="Kyiv"></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Street Adress</label>
            <input className="cart__input" placeholder="Lobanovskogo str, 13/1, ap 16"></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Comment</label>
            <input className="cart__input" placeholder="Please, provide any additional info"></input>
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className="cart-container cart-container-second">
        <div className='cart__products-container'>
          <h2 className="cart__subtitle">Your order</h2>
          {cartProducts.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </div>
        <div className='cart__total-container'>
          <h3 className='cart__total'>Total</h3>
          <h1>{`${productPrice} UAH`}</h1>
        </div>
        <div className='cart__radio-container'>
          <label className='cart__radio__label'>
            <input type="radio" className='cart__radio'></input>
            This is order is a Gift
          </label>
          <button className="page__button">
            Confirm order
          </button>
        </div>

      </div>
    </form>
  )
}