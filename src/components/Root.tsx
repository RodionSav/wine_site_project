import { Routes, Route, HashRouter } from "react-router-dom";
import App from "../App";
import { AboutPage } from "./AboutPage/AboutPage";
import { ContactPage } from "./ContactPage/ContactPage";
import { MorePage } from "./MorePage/MorePage";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { WinePage } from "./WinePage/WinePage";
import { ProductDetails } from "./WineCard/ProductDetails";
import { ScrollToTop } from "./ScrollToTop/ScrollToTop";
import { FavouritePage } from "./FavouritePage/FavouritePage";
import { CartPage } from "./CartPage/CartPage";

export const Root = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<AboutPage />} />
            <Route path="/products">
              <Route index element={<WinePage />} />
              <Route path=":productId" element={<ProductDetails />} />
            </Route>
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/more" element={<MorePage />} />
            <Route path="/favourites" element={<FavouritePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </Provider>
    </HashRouter>
  )
}