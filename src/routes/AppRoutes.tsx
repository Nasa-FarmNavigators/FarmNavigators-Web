import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/AuthPages/SignIn";
import Institution from "../pages/Institution";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import RedirectToHTML from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import VideoPublicList from "../pages/Videos";
import Home from "../pages/Home";
import FarmNavigatorsLanding from "../pages/FarmNavigatorsLanding";
import FarmTinderDemo from "../pages/FarmTinderDemo";
import AgriFlixDemo from "../pages/AgriFlixDemo";
import SeriousGameDemo from "../pages/SeriousGameDemo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FarmNavigatorsLanding />} />
      <Route path="/farm-tinder" element={<FarmTinderDemo />} />
      <Route path="/agriflix" element={<AgriFlixDemo />} />
      <Route path="/serious-game" element={<SeriousGameDemo />} />
      <Route path="/old-landing" element={<RedirectToHTML />} />
      <Route path="/teste" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/videos" element={<VideoPublicList />} />
      {/* <Route path="/admin/*" element={<Admin />} /> */}
      {/* <Route path="/institution/*" element={<Institution />} /> */}
       {/* Rotas de Admin */}
       <Route path="/admin/*" element={<ProtectedRoute><Admin/></ProtectedRoute>}>
        <Route index element={<Admin />} />
      </Route>

      {/* Rotas de Instituição */}
      <Route path="/institution/*" element={<ProtectedRoute><Institution /></ProtectedRoute>}>
        <Route index element={<Institution />} />
      </Route>
      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
