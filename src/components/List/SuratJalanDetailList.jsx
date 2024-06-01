import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const SuratJalanDetailList = ({ suratJalanUUID }) => {
  const [detailSuratJalan, setDetailSuratJalan] = useState([]);
  const navigate = useNavigate();
//   const history = useHistory();

  useEffect(() => {
    const fetchDetailSuratJalan = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/detailsuratjalan`
        );
        const filteredDetails = response.data.filter(
          (detail) => detail.idSuratJalan === suratJalanUUID
        );
        setDetailSuratJalan(filteredDetails);
      } catch (error) {
        console.error("Error fetching Detail Surat Jalan:", error);
      }
    };

    fetchDetailSuratJalan();
  }, [suratJalanUUID]);

  const handleDelete = async (detailId) => {
    try {
      await axios.delete(`http://localhost:5000/detailsuratjalan/${detailId}`);
      setDetailSuratJalan((prevDetails) =>
        prevDetails.filter((detail) => detail.id !== detailId)
      );
    } catch (error) {
      console.error("Error deleting Detail Surat Jalan:", error);
    }
  };

  const handleEdit = (detailId) => {
    // Redirect ke halaman edit detail surat jalan dengan menggunakan ID detail
    // history.push(`/edit-detail/${detailId}`);
    navigate(`/detailsuratjln/edit/${detailId}`)
  };

  return (
    <div>
      <h2 className="title">Detail Surat Jalan</h2>
      <table className="table is-stripped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Product</th>
            <th>Jumlah Product</th>
            <th>Harga</th>
            <th>Total Harga</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {detailSuratJalan.map((detail, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{detail.namaProduct}</td>
              <td>{detail.jumlahProduct}</td>
              <td>{detail.hargaSatuan}</td>
              <td>{detail.totalHarga}</td>
              <td>
                <button className="button is-small is-warning" onClick={() => handleEdit(detail.idSuratJalan)}>Edit</button>
                <button className="button is-small is-danger" onClick={() => handleDelete(detail.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuratJalanDetailList;
