import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import Groups from "./pages/Groups";
import Expenses from "./pages/Expenses";
import Balance from "./pages/Balance";
import Settlement from "./pages/Settlement";
import Members from "./pages/Members";
import Charts from "./pages/Charts";
import SettlementHistory from "./pages/SettlementHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/groups" element={<Groups />} />
<Route path="/expenses" element={<Expenses />} />
<Route path="/balance" element={<Balance />} />
<Route path="/settlement" element={<Settlement />} /> 
<Route path="/members" element={<Members />} />
<Route path="/charts" element={<Charts />} />
<Route
path="/settlement-history"
element={<SettlementHistory/>}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;