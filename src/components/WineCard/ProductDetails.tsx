import productDetailsImg from '../../images/productDetailsImg.svg';
import './product.scss';
import starImg from '../../images/star.svg';
import penImg from '../../images/pen.svg';
import heartImg from '../../images/heart.svg';
import '../../components/GeneralStyle/Page.scss';
import plusImg from '../../images/plusImg.svg';
import minusImg from '../../images/minusImg.svg';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { ProductList } from './ProductList';
import { useParams } from 'react-router-dom';
import { getSelectedProduct } from '../../api/products';
import { ProductDetailsType } from '../../types/Product';

export const ProductDetails = () => {
  const [toggle, setToggle] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState<ProductDetailsType | null>(null);

  const {productId} = useParams();

  useEffect(() => {
    if (productId) {
      getSelectedProduct(Number(productId))
        .then((response) => {
          setSelectedProduct(JSON.parse(JSON.stringify(response)))
        })
    }
  }, [productId]);

  const capitalizeDescription = (caption: string) => {
    return caption.charAt(0).toUpperCase() + caption.slice(1);
  }

  const color = selectedProduct?.colorDescribing ? capitalizeDescription(selectedProduct.colorDescribing) : '';
  const taste = selectedProduct?.taste ? capitalizeDescription(selectedProduct.taste) : '';
  const aroma = selectedProduct?.aroma ? capitalizeDescription(selectedProduct.aroma) : '';
  const gastronomy = selectedProduct?.gastronomy ? capitalizeDescription(selectedProduct.gastronomy) : '';

  return (
    <><div className='product-details'>
      <div className="product-details-container">
        <ul className='product-details__list'>
          <li className='product-details__item product-details__item-first'>
            <span className='product-details__span'>Stoic Winery</span>
          </li>
          <li className='product-details__item'>
            <span className='product-details__span'>Wine</span>
          </li>
          <li className='product-details__item'>
            <span className='product-details__span'>{selectedProduct?.name}</span>
          </li>
        </ul>
        <div className='product-details__title-container'>
          <h1 className='product-details__title'>{selectedProduct?.name}</h1>

          <h2 className='product-details__mrd'>MRD 2019</h2>
        </div>
        <h2 className='product-details__edition'>Limited Edition Wine</h2>
        <div className='product-details-img-container'>
          {/* <img src={productDetailsImg} /> */}
          <img src={`http://localhost:8080/${selectedProduct?.pictureLink}`} className='product-details-img' />
          <div>
            <div className='product-details__grade__main-container'>
              <div>
                <div className='product-details__grade-container'>
                  <h2 className='product-details__grade'>3.9</h2>
                  <h2 className='product-details__grade'>{selectedProduct?.averageRatingScore}</h2>
                  <div className='product-details__star-container'>
                    <img src={starImg} />
                    <img src={starImg} />
                    <img src={starImg} />
                    <img src={starImg} />
                    <img src={starImg} />
                  </div>
                </div>
                <div className='product-details__review-container'>
                  <h2 className='product-details__grade'>2</h2>
                  <img src={penImg} className='product-details-pen' />
                  <h2 className='product-details__review'>add review</h2>
                </div>
              </div>
              <div>
                <h1 className='product-details__price'>{`${selectedProduct?.price}UAH`}</h1>
              </div>
            </div>
            <div className='product-details__keys-container'>
              <div className='product-details__key-container'>
                <h1 className='product-details__key'>Grape:</h1>
                <h2 className='product-details__value'>{selectedProduct?.grape}</h2>
              </div>
              <div className='product-details__key-container'>
                <h1 className='product-details__key'>Decantation:</h1>
                <h2 className='product-details__value'>{selectedProduct?.isDecantation ? 'Yes' : 'No'}</h2>
              </div>
              <div className='product-details__key-container'>
                <h1 className='product-details__key'>Type:</h1>
                <h2 className='product-details__value'>{selectedProduct?.wineType}</h2>
              </div>
              <div className='product-details__key-container'>
                <h1 className='product-details__key'>Strength:</h1>
                <h2 className='product-details__value'>{`${selectedProduct?.strengthFrom}% - ${selectedProduct?.strengthTo}%`}</h2>
              </div>
              <div className='product-details__key-container'>
                <h1 className='product-details__key'>Colour:</h1>
                <h2 className='product-details__value'>{color}</h2>
              </div>
              <div className='product-details__key-container'>
                <h1 className='product-details__key'>Taste:</h1>
                <h2 className='product-details__value'>{taste}</h2>
              </div>
              <div className='product-details__key-container'>
                <h1 className='product-details__key'>Aroma:</h1>
                <h2 className='product-details__value'>{aroma}</h2>
              </div>
              <div className='product-details__key-container'>
                <h1 className='product-details__key'>Gastronomy:</h1>
                <h2 className='product-details__value'>{gastronomy}</h2>
              </div>
              <div className='product-details__button__main-container'>
                <div className='product-details__heart-container'>
                  <img src={heartImg} />
                </div>
                <div className='product-details__button-container'>
                  <button className='product-details__button product-details__button-minus'>
                    <img src={minusImg} />
                  </button>
                  <h2 className='product-details__number'>1</h2>
                  <button className='product-details__button product-details__button-plus'>
                    <img src={plusImg} />
                  </button>
                </div>
                <button className='page__button'>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='product-details__menu'>
          <h1
            className={cn('product-details__menu__title',
              { 'product-details__menu__title-active': toggle })}
            onClick={() => setToggle(true)}
          >
            Description
          </h1>
          <h1
            className={cn('product-details__menu__title',
              { 'product-details__menu__title-active': !toggle })}
            onClick={() => setToggle(false)}
          >
            Reviews
          </h1>
        </div>
        <div className='product-details__menu__paragraph'>
          {toggle ?
            <p>{selectedProduct?.description}</p>
            :
            <p>There is no reviews. You could be first.</p>}
        </div>
      </div>
    </div>
    <div className='product-details-container-second'>
      <h1 className='product-details__title_ad'>You might also like</h1>
      <ProductList />
    </div>
    </>
  )
}