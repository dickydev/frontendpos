import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Layout from '../../pages/Layout';
import { Link } from 'react-router-dom';

const DetailInvoiceList = () => {
  const [detail, setDetail] = useState([]);

  useEffect(()=>{
    getDetail();
  }, [])

  const getDetail = async() => {
    const response = await axios.get("http://localhost:5000/detail-invoice");
    setDetail(response.data);
  }


  const deleteDetail = async (detailId) => {
    await axios.delete(`http://localhost:5000/detail-invoice/${detailId}`);
    getDetail();
  };

  console.log(detail)
  return (
    <div>
      <Layout>
    <div>
      <h1 className="title">Detail Invoice</h1>
      <h2 className="subtitle">List of Detail Invoice</h2>
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
            <th>Invoice Id</th>
            <th>Kode Product</th>
            <th>Jumlah</th>
            <th>Harga</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {detail.map((detail, index) => (
            
            <tr key={detail.detailInvoice_id}>
              <td>{index + 1}</td>
              <td>{detail.invoice_id}</td>
              <td>{detail.kodeProduct}</td>
              <td>{detail.jumlah}</td>
              <td>{detail.harga}</td>
              {/* <td>{detail.invoice}</td> */}

              {/* <td>
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
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
    </div>
  )
}

export default DetailInvoiceList
