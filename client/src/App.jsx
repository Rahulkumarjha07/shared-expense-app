import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Import from "./pages/Import";


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
      <Route path="/import" element={<Import/>}/>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/groups"
        element={
          <ProtectedRoute>
            <Groups />
          </ProtectedRoute>
        }
      />

      <Route
        path="/members"
        element={
          <ProtectedRoute>
            <Members />
          </ProtectedRoute>
        }
      />

      <Route
        path="/expenses"
        element={
          <ProtectedRoute>
            <Expenses />
          </ProtectedRoute>
        }
      />

      <Route
        path="/balance"
        element={
          <ProtectedRoute>
            <Balance />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settlement"
        element={
          <ProtectedRoute>
            <Settlement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/charts"
        element={
          <ProtectedRoute>
            <Charts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settlement-history"
        element={
          <ProtectedRoute>
            <SettlementHistory />
          </ProtectedRoute>
        }
      />

    </Routes>
  </BrowserRouter>
);
}

export default App;