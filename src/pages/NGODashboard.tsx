import { Routes, Route } from "react-router-dom";
import NGOLayout from "../layout/NGO/NGOLayout";
import Home from "./NGO/Dashboard/Home";
import FarmMap from "./NGO/FarmMap";
import Farmers from "./NGO/Farmers";
import FarmReports from "./NGO/FarmReports";
import Videos from "./NGO/Videos";

export default function NGODashboard() {
  return (
    <Routes>
      <Route element={<NGOLayout />}>
        <Route index element={<Home />} />
        <Route path="farm-map" element={<FarmMap />} />
        <Route path="farmers" element={<Farmers />} />
        <Route path="farm-reports" element={<FarmReports />} />
        <Route path="videos" element={<Videos />} />
      </Route>
    </Routes>
  );
}