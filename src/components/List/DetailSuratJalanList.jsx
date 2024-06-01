import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "jspdf-autotable";
import Layout from "../../pages/Layout";

const DetailSuratJalanList = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const response = await axios.get("http://localhost:5000/detailsuratjalan");
    setDetail(response.data);
  };

  const deleteDetail = async (detailId) => {
    await axios.delete(`http://localhost:5000/detailsuratjalan/${detailId}`);
    getDetail();
  };
  return (
    <>
    <Layout>
    <div>
      <h1 className="title">Detail Surat Jalan</h1>
      <h2 className="subtitle">List of Detail Surat Jalan</h2>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", marginRight: "20px" }}>
        {/* <Link to="/suratjln/add" className="button is-primary">
          Add New
        </Link> */}
      <Link to="#" className="button is-primary mb-2">
        Add New
      </Link>
      </div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Kode Product</th>
            <th>Nama Product</th>
            <th>Jumlah Product</th>
            <th>Harga Satuan</th>
            <th>Total Harga</th>
            <th>Create at</th>
            <th>Update at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((detail, index) => (
            
            <tr key={detail.uuid}>
              <td>{index + 1}</td>
              <td>{detail.kodeProduct}</td>
              <td>{detail.namaProduct}</td>
              <td>{detail.jumlahProduct}</td>
              <td>{detail.hargaSatuan}</td>
              <td>{detail.totalHarga}</td>
              <td>{detail.createdAt}</td>
              <td>{detail.updatedAt}</td>
              <td>
                <Link
                  to={`/detailsuratjln/edit/${detail.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteDetail(detail.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
    </>

  );
};

export default DetailSuratJalanList;
