import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Welcome from "../components/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import axios from "axios";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const [products, setProducts] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [order, setOrder] = useState([]);
  const [suratJalan, setSuratJalan] = useState([]);
  const [user, setUser] = useState([]);
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    getProducts();
    getInvoice();
    getOrder();
    getCustomer();
    getSuratJalan();
    getUsers();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const getInvoice = async () => {
    const response = await axios.get("http://localhost:5000/invoice");
    setInvoice(response.data);
  };
  const getOrder = async () => {
    const response = await axios.get("http://localhost:5000/order");
    setOrder(response.data);
  };
  const getSuratJalan = async () => {
    const response = await axios.get("http://localhost:5000/suratjalan");
    setSuratJalan(response.data);
  };
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };
  const getCustomer = async () => {
    const response = await axios.get("http://localhost:5000/customers");
    setCustomer(response.data);
  };

  return (
    <Layout>
      <Welcome />
      <hr />
      <div>
        <h1 className="title">Products</h1>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Kode Product</th>
              <th>Nama Product</th>
              <th>Harga</th>
              <th>Created By</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.uuid}>
                <td>{index + 1}</td>
                <td>{product.kodeProduct}</td>
                <td>{product.namaProduct}</td>
                <td>{product.harga}</td>
                <td>{product.user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <div>
        <h1 className="title">Users</h1>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={user.uuid}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <div>
        <h1 className="title">Customers</h1>
        <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Kode Customers</th>
            <th>Nama Customers</th>
          </tr>
        </thead>
        <tbody>
          {customer.map((cust, index) => (
            <tr key={cust.uuid}>
              <td>{index + 1}</td>
              <td>{cust.kodeCust}</td>
              <td>{cust.nama}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <hr />
      <div>
        <h1 className="title">Invoice</h1>
        <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Customer</th>
            <th>No Invoice</th>
            <th>Tanggal Invoice</th>
            <th>No Surat Jalan</th>
            <th>No KTP</th>
            <th>Tanggal Surat Jalan</th>
            <th>Kode Product</th>
            <th>Jumlah</th>
            <th>Harga</th>
            <th>Keterangan</th>
            {/* namaCust	noInvoice	tglInvoice	noSJ	noKTP	tglSJ	kodeProduct	jumlah	harga	keterangan */}
          </tr>
        </thead>
        <tbody>
          {invoice.map((invoice, index) => (
            
            <tr key={invoice.uuid}>
              <td>{index + 1}</td>
              <td>{invoice.namaCust}</td>
              <td>{invoice.noInvoice}</td>
              <td>{invoice.tglInvoice}</td>
              <td>{invoice.noSJ}</td>
              <td>{invoice.noKTP}</td>
              <td>{invoice.tglSJ}</td>
              <td>{invoice.kodeProduct}</td>
              <td>{invoice.jumlah}</td>
              <td>{invoice.harga}</td>
              <td>{invoice.keterangan}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <hr />
      <div>
        <h1 className="title">Orders</h1>
        <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal Order</th>
            <th>No Order</th>
            <th>Kode Agen</th>
            <th>Nama Agen</th>
            <th>Jumlah</th>
            <th>Tanggal Kirim</th>
            <th>Keterangan</th>
            <th>Pembayaran</th>
          </tr>
        </thead>
        <tbody>
          {order.map((order, index) => (
            <tr key={order.uuid}>
              <td>{index + 1}</td>
              <td>{order.tglOrder}</td>
              <td>{order.noOrder}</td>
              <td>{order.kodeAgen}</td>
              <td>{order.namaAgen}</td>
              <td>{order.jumlah}</td>
              <td>{order.tglKirim}</td>
              <td>{order.keterangan}</td>
              <td>{order.pembayaran}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <hr />
      <div>
        <h1 className="title">Surat Jalan</h1>
        <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>No Surat Jalan</th>
            <th>Kode Product</th>
            <th>Nama Product</th>
            <th>Jumlah Product</th>
            <th>Harga Satuan</th>
            <th>Total Harga</th>
            <th>No Mobil</th>
            <th>Nama Sopir</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {suratJalan.map((sj, index) => (
            <tr key={sj.uuid}>
              <td>{index + 1}</td>
              <td>{sj.tanggal}</td>
              <td>{sj.noSuratJalan}</td>
              <td>{sj.kodeProduct}</td>
              <td>{sj.namaProduct}</td>
              <td>{sj.jumlahProduct}</td>
              <td>{sj.hargaSatuan}</td>
              <td>{sj.totalHarga}</td>
              <td>{sj.noMobil}</td>
              <td>{sj.namaSopir}</td>
              <td>{sj.keterangan}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <hr />
    </Layout>
  );
};

export default Dashboard;
