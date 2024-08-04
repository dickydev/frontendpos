import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Invoice from "./pages/Invoice";
import Pemesanan from "./pages/Pemesanan";
import SuratJalan from "./pages/SuratJalan";
import AddUser from "./pages/Add/AddUser";
import EditUser from "./pages/Edit/EditUser";
import AddProduct from "./pages/Add/AddProduct";
import EditProduct from "./pages/Edit/EditProduct";
import Customer from "./pages/Customer";
import AddPemesanan from "./pages/Add/AddPemesanan";
import EditPemesanan from "./pages/Edit/EditPemesanan";
import AddSuratJalan from "./pages/Add/AddSuratJalan";
import EditSuratJalan from "./pages/Edit/EditSuratJalan.jsx";
import AddCustomer from "./pages/Add/AddCustomer";
import EditCustomer from "./pages/Edit/EditCustomer";
import AddInvoice from "./pages/Add/AddInvoice";
import EditInvoice from "./pages/Edit/EditInvoice";
import DashboardPencatatan from "./pages/Pencatatan/DashboardPencatatan";
import DetailSuratJalan from "./pages/DetailSuratJalan.jsx";
import AddDetailSuratJalan from "./pages/Add/AddDetailSuratJalan.jsx";
import EditDetailSuratJalan from "./pages/Edit/EditDetailSuratJalan.jsx";
import DetailSuratJalanList from "./components/List/DetailSuratJalanList.jsx";
import DetailPemesananList from "./components/List/DetailPemesananList.jsx";
import DetailInvoiceList from "./components/List/DetailInvoiceList.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/pemesanan" element={<Pemesanan />} />
          <Route path="/pemesanan/add" element={<AddPemesanan />} />
          <Route path="/pemesanan/edit/:id" element={<EditPemesanan />} />

          {/* DETAIL PEMESANAN */}
          <Route path="/detailpemesanan/" element={<DetailPemesananList />} />
          <Route path="/detailpemesanan/add" element={<EditPemesanan />} />
          <Route path="/detailpemesanan/edit/:id" element={<EditPemesanan />} />
          {/* DETAIL PEMESANAN */}

          <Route path="/suratjln" element={<SuratJalan />} />
          <Route path="/suratjln/add" element={<AddSuratJalan />} />
          <Route path="/suratjln/edit/:id" element={<EditSuratJalan />} />
          <Route path="/detailsuratjln" element={<DetailSuratJalanList />} />
          <Route
            path="/detailsuratjln/edit/:id"
            element={<EditDetailSuratJalan />}
          />
          {/* <Route path="/detailsuratjln/add" element={<DetailSuratJalanList />} /> */}
          <Route
            path="/suratjln/detail/:id/add"
            element={<AddDetailSuratJalan />}
          />
          <Route path="/suratjln/detail/:id" element={<DetailSuratJalan />} />
          <Route
            path="/suratjln/detail/:id/edit"
            element={<EditDetailSuratJalan />}
          />

          <Route path="/invoice" element={<Invoice />} />
          <Route path="/invoice/add" element={<AddInvoice />} />
          <Route path="/invoice/edit/:id" element={<EditInvoice />} />

          {/* DETAIL INVOICE */}
          <Route path="/detailinvoice/" element={<DetailInvoiceList />} />
          <Route path="/detailinvoice/add" element={<EditPemesanan />} />
          <Route path="/detailinvoice/edit/:id" element={<EditPemesanan />} />
          {/* DETAIL INVOICE */}

          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/add" element={<AddCustomer />} />
          <Route path="/customer/edit/:id" element={<EditCustomer />} />
          {/* <Route path="/products/edit/:id" element={<EditProduct />} /> */}
          {/* PENCATATAN */}
          <Route path="/pencatatan" element={<DashboardPencatatan />} />
          <Route path="/pencatatan/add" element={<DashboardPencatatan />} />
          <Route path="/pencatatan/edit:id" element={<DashboardPencatatan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
