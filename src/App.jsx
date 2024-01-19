import { Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Locations from "./pages/Locations";
import Address from "./pages/Address";
import RequestDelivery from "./pages/RequestDelivery";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index={true} path="/" element={<Homepage />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<Address />} />
        <Route path="/locations/:id/request-delivery" element={<RequestDelivery />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Route>
      <Route path="/sign-in" element={<Login />} />
    </Routes>
  );
}

export default App;

{
  /* <Route path="/new-order" element={} />
   */
}
