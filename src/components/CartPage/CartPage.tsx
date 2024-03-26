import './cart.scss';
import '../../components/GeneralStyle/Page.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CartCard } from './CartCard';
import { FormEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as actions from '../features/cartSlicer';
import { NewOrder } from './NewOrder';
import { OrderError } from '../../Enums/OrderError';

export const CartPage = () => {

  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector(state => state.cart.items);

  const cartItemProducts = useAppSelector(state => state.cart.itemsCart);

  const productPrice = cartProducts.reduce(
    (total, item) => total + (item.quantity * item.price), 0,
  );

  const orders = useAppSelector(state => state.cart.orderItems);
  const selectedOrder = useAppSelector(state => state.cart.orderSeletedItem);

  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [comment, setComment] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleCreateOrder = async () => {
    const purchaseObjects = cartItemProducts.map(product => ({
      ...product,
      wineId: product.wineId,
      quantity: product.quantity
    }));

    const newOrder = {
      userFirstAndLastName: name,
      email,
      phoneNumber: phone,
      createShoppingCardDto: {
        purchaseObjects: purchaseObjects
      },
      createOrderDeliveryInformationDto: {
        zipCode: zipCode,
        region: region,
        city: city,
        street: street,
        comment: comment
      }
    }

    try {
      if (
        name.trim() &&
        email.trim() &&
        phone.trim() &&
        zipCode.trim() &&
        region.trim() &&
        city.trim() &&
        street.trim() &&
        comment.trim()
      ) {
        const response: any = await dispatch(actions.cartOrdersInit(newOrder));

        if (response.payload.status === 400) {
          setError(OrderError.WrongData);
          setIsError(true);
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          setIsActive(true);
        }
      } else {
        setError("Please fill out all required fields.");
      }
    } catch (error) {
      setError(OrderError.WrongData);
      setIsError(true);
    }
  }

  const handleNameUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handlePhoneUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const regex = /^[0-9+]*$/;

    if (regex.test(value)) {
      setPhone(value);
    }
  }

  const handleEmailUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleZipCodeUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!isNaN(value as any)) {
      setZipCode(value);
    }
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

  const handleErrorClose = () => {
    setIsError(false);
  }

  useEffect(() => {
    dispatch(actions.cartOrdersGetInit());
    dispatch(actions.cartSelectedOrderInit(orders.length));

    console.log('Количество заказов:', orders);
    console.log('Последний заказ', selectedOrder);
  }, [])

  return (
  <>
    {cartProducts.length ?
      <form
        onSubmit={handleSubmit}
        className="cart form">
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
              required
            ></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Enter Telephone Number</label>
            <input
              type='tel'
              className="cart__input"
              placeholder="+38 000 000 00 00"
              maxLength={13}
              value={phone}
              onChange={handlePhoneUpdate}
              required
            ></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Email</label>
            <input
              type='email'
              className="cart__input"
              placeholder="name.surname@email.com"
              value={email}
              onChange={handleEmailUpdate}
              required
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
              required
            ></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Region</label>
            <input
              className="cart__input"
              placeholder="Kyiv region"
              value={region}
              onChange={handleRegionUpdate}
              required
            ></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">City</label>
            <input
              className="cart__input"
              placeholder="Kyiv"
              value={city}
              onChange={handleCityUpdate}
              required
            ></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Street Adress</label>
            <input
              className="cart__input"
              placeholder="Lobanovskogo str, 13/1, ap 16"
              value={street}
              onChange={handleStreetUpdate}
              required
            ></input>
          </div>
          <div className='cart__input-container'>
            <label className="cart__label">Comment</label>
            <input
              className="cart__input"
              placeholder="Please, provide any additional info"
              value={comment}
              onChange={handleCommentUpdate}
              required
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
          <button
            className="page__button"
            onClick={handleCreateOrder}
          >
            Confirm order
          </button>
        </div>
        {isError &&
        <div className='error'>
          <button
            className='error__button'
            onClick={handleErrorClose}
          >
            <img src='images2/cross.svg' />
          </button>
          <h1 className='error__title'>{error}</h1>
        </div>
        }

      </div>
    </form>
    :
    <div className='cart-empty'>
      <div className='cart-empty-container'>
        <img src='images2/cart-empty.png' className='cart-empty-img' />
        <div className='cart-empty__title-container'>
          <h1 className='cart-empty__title'>Your cart is empty</h1>
          <h2 className='cart-empty__subtitle'>Let`s try with the Home Page again!</h2>
          <NavLink to="/products" className='cart-empty__button'>
            <img src='images2/cart-img.svg' />Shop now</NavLink>
        </div>
      </div>
    </div>
    }
    {isActive && <NewOrder isActive={isActive} setIsActive={setIsActive}/>}

  </>
  )
}