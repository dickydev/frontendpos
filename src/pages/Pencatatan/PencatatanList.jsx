import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const PencatatanList = () => {
  const [pencatatan, setPencatatan] = useState([]);

  useEffect(() => {
    getPencatatan();
  }, []);

  const getPencatatan = async () => {
    const response = await axios.get("http://localhost:5000/pencatatan");
    setPencatatan(response.data);
  };

  const deletePencatatan = async (pencatatanId) => {
    await axios.delete(`http://localhost:5000/pencatatan/${pencatatanId}`);
    getPencatatan();
  };


  return (
    <div>
      <h1 className="title">Pencatatan</h1>
      <h2 className="subtitle">List of Pencatatan</h2>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", marginRight: "20px" }}>
        {/* <Link to="/suratjln/add" className="button is-primary">
          Add New
        </Link> */}
      <Link to="/pencatatan/add" className="button is-primary mb-2">
        Add New
      </Link>
      </div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Customer</th>
            <th>No pencatatan</th>
            <th>Tanggal Invoice</th>
            <th>No Surat Jalan</th>
            <th>No KTP</th>
            <th>Tanggal Surat Jalan</th>
            <th>Kode Product</th>
            <th>Jumlah</th>
            <th>Harga</th>
            <th>Keterangan</th>
            <th>Action</th>
            {/* namaCust	noInvoice	tglInvoice	noSJ	noKTP	tglSJ	kodeProduct	jumlah	harga	keterangan */}
          </tr>
        </thead>
        <tbody>
          {pencatatan.map((pencatatan, index) => (
            
            <tr key={pencatatan.uuid}>
              <td>{index + 1}</td>
              <td>{pencatatan.namaCust}</td>
              <td>{pencatatan.nopencatatan}</td>
              <td>{pencatatan.tglpencatatan}</td>
              <td>{pencatatan.noSJ}</td>
              <td>{pencatatan.noKTP}</td>
              <td>{pencatatan.tglSJ}</td>
              <td>{pencatatan.kodeProduct}</td>
              <td>{pencatatan.jumlah}</td>
              <td>{pencatatan.harga}</td>
              <td>{pencatatan.keterangan}</td>
              <td>
                <Link
                  to={`/pencatatan/edit/${pencatatan.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deletePencatatan(pencatatan.id)}
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
  );
};

export default PencatatanList;
