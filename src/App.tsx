import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardProducts from "./pages/DashboardProducts";
import AutomotiveServices from "./pages/AutomotiveServices";
import Restaurants from "./pages/Restaurants";
import HomeServices from "./pages/HomeServices";
import FoodAndDining from "./pages/FoodAndDining";
import RestaurantsMenu from "./pages/RestaurantsMenu";
import PersonalServices from "./pages/PersonalServices";
import ProfessionalServices from "./pages/ProfessionalServices";
import Dashboard from "./pages/Dashboard";
import RealEstate from "./pages/RealEstate";
import PetsAndAnimals from "./pages/PetsAndAnimals";
import TechnologyAndElectronics from "./pages/TechnologyAndElectronics";
import EventsAndWeddings from "./pages/EventsAndWeddings";
import TravelAndAccommodation from "./pages/TravelAndAccommodation";
import RestaurantsMenuFullView from "./pages/RestaurantsMenuFullView";
import EntertainmentAndRecreation from "./pages/EntertainmentAndRecreation";
import EducationAndTraining from "./pages/EducationAndTraining";
import RetailAndShopping from "./pages/RetailAndShopping";
import DashboardShopDetails from "./pages/DashboardShopDetails";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import HealthAndWellness from "./pages/HealthAndWellness";
import ListYourProductPage from "./pages/ListYourProductPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/automotive-services":
        title = "";
        metaDescription = "";
        break;
      case "/restaurants":
        title = "";
        metaDescription = "";
        break;
      case "/home-services":
        title = "";
        metaDescription = "";
        break;
      case "/food-and-dining":
        title = "";
        metaDescription = "";
        break;
      case "/restaurants-menu":
        title = "";
        metaDescription = "";
        break;
      case "/personal-services":
        title = "";
        metaDescription = "";
        break;
      case "/professional-services":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/real-estate":
        title = "";
        metaDescription = "";
        break;
      case "/pets-and-animals":
        title = "";
        metaDescription = "";
        break;
      case "/technology-and-electronics":
        title = "";
        metaDescription = "";
        break;
      case "/events-and-weddings":
        title = "";
        metaDescription = "";
        break;
      case "/travel-and-accommodation":
        title = "";
        metaDescription = "";
        break;
      case "/restaurants-menu-full-view":
        title = "";
        metaDescription = "";
        break;
      case "/entertainment-and-recreation":
        title = "";
        metaDescription = "";
        break;
      case "/education-and-training":
        title = "";
        metaDescription = "";
        break;
      case "/retail-and-shopping":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-shop-details":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-analytics":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/health-and-wellness":
        title = "";
        metaDescription = "";
        break;
      case "/list-your-product-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<DashboardProducts />} />
      <Route path="/automotive-services" element={<AutomotiveServices />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/home-services" element={<HomeServices />} />
      <Route path="/food-and-dining" element={<FoodAndDining />} />
      <Route path="/restaurants-menu" element={<RestaurantsMenu />} />
      <Route path="/personal-services" element={<PersonalServices />} />
      <Route path="/professional-services" element={<ProfessionalServices />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/real-estate" element={<RealEstate />} />
      <Route path="/pets-and-animals" element={<PetsAndAnimals />} />
      <Route
        path="/technology-and-electronics"
        element={<TechnologyAndElectronics />}
      />
      <Route path="/events-and-weddings" element={<EventsAndWeddings />} />
      <Route
        path="/travel-and-accommodation"
        element={<TravelAndAccommodation />}
      />
      <Route
        path="/restaurants-menu-full-view"
        element={<RestaurantsMenuFullView />}
      />
      <Route
        path="/entertainment-and-recreation"
        element={<EntertainmentAndRecreation />}
      />
      <Route
        path="/education-and-training"
        element={<EducationAndTraining />}
      />
      <Route path="/retail-and-shopping" element={<RetailAndShopping />} />
      <Route
        path="/dashboard-shop-details"
        element={<DashboardShopDetails />}
      />
      <Route path="/dashboard-analytics" element={<DashboardAnalytics />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/health-and-wellness" element={<HealthAndWellness />} />
      <Route path="/list-your-product-page" element={<ListYourProductPage />} />
    </Routes>
  );
}
export default App;
