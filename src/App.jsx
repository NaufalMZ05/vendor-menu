import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import GetReviews from "./pages/GetReviews";
import Build from "./pages/Build";
import Settings from "./pages/Settings";
import ShowCase from "./pages/ShowCase";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-review" element={<GetReviews />} />
        <Route path="/showcase" element={<ShowCase />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/build/:bID" element={<Build />} />
        <Route path="/analytics/:aID" element={<Analytics />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
