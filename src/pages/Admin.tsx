import { Routes, Route } from "react-router-dom";
import NotFound from "./Admin/OtherPage/NotFound";
import UserProfiles from "./Admin/UserProfiles";
import Videos from "./Admin/UiElements/Videos";
import Images from "./Admin/UiElements/Images";
import Alerts from "./Admin/UiElements/Alerts";
import Badges from "./Admin/UiElements/Badges";
import Avatars from "./Admin/UiElements/Avatars";
import Buttons from "./Admin/UiElements/Buttons";
import LineChart from "./Admin/Charts/LineChart";
import BarChart from "./Admin/Charts/BarChart";
import Calendar from "./Admin/Calendar";
import BasicTables from "./Admin/Tables/BasicTables";
import FormElements from "./Admin/Forms/FormElements";
import Blank from "./Admin/Blank";
import AppLayout from "../layout/Admin/AppLayout";
import { ScrollToTop } from "../components/Admin/common/ScrollToTop";
import InstForm from "./Admin/Forms/InstForm";
import InstSee from "./Admin/Tables/InstSee";
import AdminForm from "./Admin/Forms/AdminForm";
import VideoForm from "./Admin/Forms/VideoForm";
import VideoSee from "./Admin/Tables/VideoSee";

export default function Admin() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Dashboard Layout */}
        <Route element={<AppLayout />}>
          <Route index path="/" element={<UserProfiles  />} />

          {/* Others Page */}
          <Route path="profile" element={<UserProfiles />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="blank" element={<Blank />} />

          {/* Forms */}
          <Route path="form-elements" element={<FormElements />} />
          <Route path="create-inst" element={<InstForm />} />
          <Route path="create-admin" element={<AdminForm />} />
          <Route path="create-video" element={<VideoForm />} />

          {/* Tables */}
          <Route path="basic-tables" element={<BasicTables />} />
          <Route path="see-inst" element={<InstSee />} />
          <Route path="see-video" element={<VideoSee />} />

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
