import './cart.scss';
import '../../components/GeneralStyle/Page.scss';
import { useAppSelector } from '../../app/hooks';
import { CartCard } from './CartCard';
import { useState } from 'react';

export const CartPage = () => {

  const cartProducts = useAppSelector(state => state.cart.items);

  const productPrice = cartProducts.reduce(
    (total, item) => total + (item.quantity * item.price), 0,
  );

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [comment, setComment] = useState('');

  // const handleCreateOrder = () => {

  // }

  const handleNameUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handlePhoneUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  }

  const handleEmailUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleZipCodeUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
  }

  const handleRegionUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(event.target.value);
  }

  const handleCityUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  }

  const handleStreetUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  }

  const handleCommentUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  }

  return (
    <form className="cart form">
      <div className="cart-container">
        <h1 className="cart__title">Checkout</h1>
        <h2 className="cart__subtitle">Personal data</h2>
        <div className='cart__inputs-container'>
          <div className='cart__input-container'>
            <label className="cart__label">Enter Name of the Recepient</label>
            <input
              type='text'
              className="cart__input"
              placeholder="Name Surname"
              value={name}
              onChange={handleNameUpdate}
            ></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Enter Telephone Number</label>
            <input
              type='tel'
              className="cart__input"
              placeholder="+38 000 000 00 00"
              value={phone}
              onChange={handlePhoneUpdate}
            ></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Email</label>
            <input
              type='email'
              className="cart__input"
              placeholder="name.surname@mail.com"
              value={email}
              onChange={handleEmailUpdate}
            ></input>
          </div>
        </div>
        <h2 className="cart__subtitle">Shipping adress</h2>
        <div className='cart__inputs-container'>
          <div className='cart__input-container'>
            <label className="cart__label">Zip Code</label>
            <input
              type='text'
              className="cart__input"
              placeholder="00000"
              value={zipCode}
              onChange={handleZipCodeUpdate}
              maxLength={5}
            ></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Region</label>
            <input
              className="cart__input"
              placeholder="Kyiv region"
              value={region}
              onChange={handleRegionUpdate}
            ></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">City</label>
            <input
              className="cart__input"
              placeholder="Kyiv"
              value={city}
              onChange={handleCityUpdate}
            ></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Street Adress</label>
            <input
              className="cart__input"
              placeholder="Lobanovskogo str, 13/1, ap 16"
              value={street}
              onChange={handleStreetUpdate}
            ></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Comment</label>
            <input
              className="cart__input"
              placeholder="Please, provide any additional info"
              value={comment}
              onChange={handleCommentUpdate}
            ></input>
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