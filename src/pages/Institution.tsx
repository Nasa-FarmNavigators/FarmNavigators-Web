import { Routes, Route } from "react-router-dom";
import NotFound from "./Inst/OtherPage/NotFound";
import UserProfiles from "./Inst/UserProfiles";
import Videos from "./Inst/UiElements/Videos";
import Images from "./Inst/UiElements/Images";
import Alerts from "./Inst/UiElements/Alerts";
import Badges from "./Inst/UiElements/Badges";
import Avatars from "./Inst/UiElements/Avatars";
import Buttons from "./Inst/UiElements/Buttons";
import LineChart from "./Admin/Charts/LineChart";
import BarChart from "./Admin/Charts/BarChart";
import Map from "./Inst/Map";
import BasicTables from "./Inst/Tables/BasicTables";
import FormElements from "./Inst/Forms/FormElements";
import Relatorio from "./Inst/Relatorio";
import AppLayout from "../layout/Inst/AppLayout";
import { ScrollToTop } from "../components/Admin/common/ScrollToTop";
import Home from "./Admin/Dashboard/Home";
import Avisos from "./Inst/Forms/Avisos";
import UssdReports from "./Inst/Tables/UssdReports";

export default function Institution() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Dashboard Layout */}
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />

          {/* Others Page */}
          <Route path="profile" element={<UserProfiles />} />
          <Route path="map" element={<Map />} />
          <Route path="relatorio" element={<Relatorio />} />

          {/* Forms */}
          <Route path="form-elements" element={<FormElements />} />
          <Route path="avisos" element={<Avisos />} />

          {/* Tables */}
          <Route path="events" element={<BasicTables />} />
          <Route path="ussd-reports" element={<UssdReports />} />

          {/* Ui Elements */}
          <Route path="alerts" element={<Alerts />} />
          <Route path="avatars" element={<Avatars />} />
          <Route path="badge" element={<Badges />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="images" element={<Images />} />
          <Route path="videos" element={<Videos />} />

          {/* Charts */}
          <Route path="line-chart" element={<LineChart />} />
          <Route path="bar-chart" element={<BarChart />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
