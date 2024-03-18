import { Link, NavLink, UNSAFE_LocationContext, useLocation, useParams } from "react-router-dom";
import '../../images/LOGO.svg';
import './header.scss';
import classNames from "classnames";
import logoImgMenu from '../../images/logo-menu.png';
import '../AboutPage/About.scss';
import '../ContactPage/Contact.scss';
import '../MorePage/more.scss';
import { useEffect } from "react";

export const Header = () => {
  const location = useLocation();

  const productId = useParams();

  const getActiveClass = ({ isActive }: { isActive: boolean }) =>
    classNames('header__link', {'header__link_active': isActive });

  const getActiveClassHeart = ({ isActive }: { isActive: boolean }) =>
    classNames('header__icon-heart', {'header__icon-heart-active': isActive });

    const getActiveClassCart = ({ isActive }: { isActive: boolean }) =>
    classNames('header__icon-cart', {'header__icon-cart-active': isActive });

  useEffect(() => {
    console.log(productId);
  }, [])

  return (
    <header className={classNames('', {'header-first-container':
    !['/products', '/favourites', '/cart'].includes(location.pathname) && !location.pathname.includes('/' + productId.productId)
  })}>
    {/* <header className={classNames('', {'header-first-container':
    location.pathname !== '/products'
    && location.pathname !== '/favourites'
    && location.pathname !== '/cart'
    && location.pathname !== `/${productId}`
    })}> */}
    <div className="header">
      <div className="header-logo-container">
        <Link to="/" className="header__link">
          <div className="header-logo" />
        </Link>
        <div className="header__main-container">
          <div className="header-container header-container-first">
            <NavLink to="/" className={getActiveClass}>
              <h1 className="header__title">
                About
              </h1>
            </NavLink>
            <NavLink to='products' className={getActiveClass}>
              <h1 className="header__title">
                Wine
              </h1>
            </NavLink>
          </div>
          <img src={logoImgMenu}/>
          <div className="header-container header-container-second">
            <NavLink to='more' className={getActiveClass}>
              <h1 className="header__title">
                More
              </h1>
            </NavLink>
            <NavLink to='contact' className={getActiveClass}>
              <h1 className="header__title">
                Contact
              </h1>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="header-container header-container-third">
      <div className="header__icon-plane"/>
      <NavLink
        to='/favourites'
        className={getActiveClassHeart}
      >
        {/* <div className="header__icon-heart"/> */}
      </NavLink>
      <NavLink
        to='/cart'
        className={getActiveClassCart}
      >
      </NavLink>
      </div>
    </div>
    {(location.pathname === '/about'
      ||
      location.pathname === '/') &&
      <div className='passionate-container'>
        <h1 className="passionate__title">PASSIONATE ABOUT FREEDOM<br/> AND WINE</h1>
        <p className="passionate__subtitle">Trubetskoy chateau, occupied since the war's start, suffers <br></br> daily from Russian ammunition. The third war sparks <br></br> change, leading to renaming—Stoic Winery</p>
        <button className="passionate__button">Try it</button>
      </div>
    }
    {location.pathname === '/contact' &&
      <div className='page-container contact-container'>
        <h1 className='page__title'>8 wine cellar galleries <br></br>10,000 bottles of wine </h1>
        <p className='page__subtitle contact__subtitle'>Stored and aged, including about 7,000 bottles of rare wines <br></br> bottled in the last century.</p>
      </div>
    }
    {location.pathname === '/more' &&
      <div className='more__main-container'>
        <div className='more-container'>
          <p className='page__subtitle more__subtitle'>Nestled near the Black Sea's edge, a winery chateau unveils a panorama where <br></br> sea meets vine, crafting a sensory symphony where the terroir's whisper mingles <br></br> with the maritime melody, birthing wines that embody the essence of this <br></br> coastal haven</p>
        </div>
      </div>
    }
    {/* <img src="/images2/back-about-img.svg" className="header-img" /> */}
    <div
      className={classNames(
        '',
        {
          'header-img-about': (location.pathname === '/about' || location.pathname === '/'),
          'header-img-contact': location.pathname === '/contact',
          'header-img-more': location.pathname === '/more',
          'header-img': !location.pathname.includes('/' + productId.productId),
          'header-img_none': location.pathname === '/products' || location.pathname === '/favourites' || location.pathname === '/cart'
        }
      )}
    />
    </header>
  )
}
