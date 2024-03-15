import { SetStateAction, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ProductCard } from "./ProductCard";
import './product.scss';
import { getProducts } from "../../api/products";
import * as actions from '../features/productSlicer';
import productsFromServer from '../../api/productsFromServer.json';
// import { Pagination } from "./Pagionation";
import buttonImg from '../../images/button-arrow.svg';
import { Product } from "../../types/Product";

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const { items: products } = useAppSelector(state => state.products);
  // const [products, setProducts] = useState(productsFromServer);
  // const [products, setProducts] = useState([]);
  const [position, setPosition] = useState(1482);

  const nextButtonHandle = () => {
    const distance = 296 + 32;

    if (position === -1470) {
      setPosition(1810);
    }

    setPosition((prevPosition) => prevPosition - distance)

    console.log(position)

  }

  const prevButtonHandle = () => {
    const distance = 296 + 32;

    if (position === 1482) {
      setPosition(-1798)
    }

    setPosition((prevPosition) => prevPosition + distance)

    console.log(position)
  }

  useEffect(() => {
    dispatch(actions.productsInit());

  }, [products])

  return (
    <div className="product__list-container">
      <button
        className="
        product__button
        product__button-arrow
        product__button-arrow-left
        "
        onClick={prevButtonHandle}
      >
        <img src={buttonImg}/>
      </button>
      <div className="product__list">
        {products.map((product: Product) => (
          <li
            key={product.id}
            style={{
              listStyle: 'none',
              transform: `translateX(${position}px)`,
              transition: '0.5s',
            }}
          >
            <ProductCard
              product={product}
            />
          </li>
        ))}
      </div>
      <button
        className="product__button product__button-arrow"
        onClick={nextButtonHandle}
      >
        <img src={buttonImg}/>
      </button>
    </div>
  )
}