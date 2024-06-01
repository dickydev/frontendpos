// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const SuratJalanList = () => {
//   const [suratJalan, setSuratJalan] = useState([]);

//   useEffect(() => {
//     getSuratJalan();
//   }, []);

//   const getSuratJalan = async () => {
//     const response = await axios.get("http://localhost:5000/suratjalan");
//     setSuratJalan(response.data);
//   };

//   const deleteSuratJalan = async (sjId) => {
//     await axios.delete(`http://localhost:5000/suratjalan/${sjId}`);
//     getSuratJalan();
//   };

//   return (
//     <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">List of Surat Jalan</h2>
//       <Link to="/products/add" className="button is-primary mb-2">
//         Add New
//       </Link>
//       <table className="table is-striped is-fullwidth">
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>Tanggal</th>
//             <th>No Surat Jalan</th>
//             <th>Kode Product</th>
//             <th>Nama Product</th>
//             <th>Jumlah Product</th>
//             <th>Harga Satuan</th>
//             <th>Total Harga</th>
//             <th>No Mobil</th>
//             <th>Nama Sopir</th>
//             <th>Keterangan</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {suratJalan.map((sj, index) => (
//             <tr key={sj.uuid}>
//               <td>{index + 1}</td>
//               <td>{sj.tanggal}</td>
//               <td>{sj.noSuratJalan}</td>
//               <td>{sj.kodeProduct}</td>
//               <td>{sj.namaProduct}</td>
//               <td>{sj.jumlahProduct}</td>
//               <td>{sj.hargaSatuan}</td>
//               <td>{sj.totalHarga}</td>
//               <td>{sj.noMobil}</td>
//               <td>{sj.namaSopir}</td>
//               <td>{sj.keterangan}</td>
//               <td>
//                 <Link
//                   to={`/suratjalan/edit/${sj.uuid}`}
//                   className="button is-small is-info"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   onClick={() => deleteSuratJalan(sj.uuid)}
//                   className="button is-small is-danger"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => {}}
//                   className="button is-small is-success"
//                 >
//                   Cetak
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SuratJalanList;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import SuratJalanDetailList from "./SuratJalanDetailList";

const SuratJalanList = () => {
  const [suratJalan, setSuratJalan] = useState([]);
  const [detailSuratJalan, setDetailSuratJalan] = useState([]);
  const [selectedSuratJalanUUID, setSelectedSuratJalanUUID] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [sortOrder, setSortOrder] = useState("ascending");  

  useEffect(() => {
    getSuratJalan();
    getDetailSuratJalan();
  }, []);

  const getSuratJalan = async () => {
    const response = await axios.get("http://localhost:5000/suratjalan");
    setSuratJalan(response.data);
  };

  const getDetailSuratJalan = async () => {
    const response = await axios.get("http://localhost:5000/detailsuratjalan");
    setDetailSuratJalan(response);
  };

  const deleteSuratJalan = async (sjId) => {
    await axios.delete(`http://localhost:5000/suratjalan/${sjId}`);
    getSuratJalan();
  };

  // const cetakSuratJalan = (sj) => {
  //   const doc = new jsPDF();
  //   // Menambahkan judul surat jalan dan keterangan waktu di halaman pertama
  //   const title = `Surat Jalan - ${sj.noSuratJalan}`;
  //   const dateTime = `Tanggal: ${sj.tanggal}, Waktu: ${sj.waktu}`;
  //   doc.text(title, 105, 15, { align: "center" });

  //   // Menambahkan jarak kosong antara judul dan tabel
  //   // doc.text("", 200, 200); // Sesuaikan koordinat dan jarak yang diinginkan

  //   doc.text(dateTime, 105, 35, { align: "center" });

  //   // Menetapkan garis sebagai pembatas antara judul dan tabel
  //   doc.setLineWidth(0.1);
  //   doc.line(10, 35, 200, 35); // Koordinat (10, 35) hingga (200, 35)

  //   doc.autoTable({
  //     startY: 60,
  //     head: [["Tanggal", "No Surat Jalan", "Kode Product", "Nama Product", "Jumlah Product", "Harga Satuan", "Total Harga", "No Mobil", "Nama Sopir", "Keterangan"]],
  //     body: [[
  //       sj.tanggal,
  //       sj.noSuratJalan,
  //       sj.kodeProduct,
  //       sj.namaProduct,
  //       sj.jumlahProduct,
  //       sj.hargaSatuan,
  //       sj.totalHarga,
  //       sj.noMobil,
  //       sj.namaSopir,
  //       sj.keterangan
  //     ]],
  //   });
  //   doc.save(`surat_jalan_${sj.noSuratJalan}.pdf`);
  // };

  let counter = 0;

  const cetakSuratJalan = (sj, penerima, pengirim) => {
    const doc = new jsPDF();

    // Mendapatkan waktu saat ini
    const waktuCetak = new Date();

    // Format waktu menjadi string yang sesuai
    const waktuFormatted = `${waktuCetak.toLocaleDateString()} ${waktuCetak.toLocaleTimeString()}`;

    // Menambahkan judul surat jalan dan keterangan waktu di halaman pertama

    const title = `Surat Jalan - ${sj.noSuratJalan}${
      counter === 0 ? "" : " Copy"
    }`;
    // const dateTime = `Tanggal: ${sj.tanggal}, Waktu: ${sj.waktu}`;
    const dateTime = `Tanggal: ${sj.tanggal}, Waktu Cetak: ${waktuFormatted}`;

    doc.setFontSize(16);
    doc.setFont("times", "bold");
    doc.text(title, 105, 15, { align: "center" });
    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(dateTime, 105, 25, { align: "center" });

    doc.setFontSize(12);
    doc.text("Penerima:", 20, 60);
    doc.text("penerima.nama", 20, 70);
    doc.text("penerima.alamat", 20, 80);
    doc.text("penerima.kota", 20, 90);

    doc.text("Pengirim:", 105, 60);
    doc.text("pengirim.nama", 105, 70);
    doc.text("pengirim.alamat", 105, 80);
    doc.text("pengirim.kota", 105, 90);

    // Menetapkan garis sebagai pembatas antara judul dan tabel
    doc.setLineWidth(0.1);
    doc.line(20, 100, 190, 100); // Koordinat (10, 35) hingga (200, 35)

    // Membuat tabel data surat jalan
    doc.autoTable({
      startY: 110, // Mulai tabel setelah garis
      head: [["No.", "Kode Product", "Nama Product", "Jumlah"]],
      body: [
        [1, sj.kodeProduct, sj.namaProduct, sj.jumlahProduct],
        [2, sj.kodeProduct, sj.namaProduct, sj.jumlahProduct],
      ],
    });

    // Menyimpan PDF dengan nama yang sesuai
    doc.save(
      `surat_jalan_${sj.noSuratJalan}${counter === 0 ? "" : "_copy"}.pdf`
    );

    // Menambahkan counter setelah cetak pertama
    counter++;
  };

  // const cetakSuratJalanExcel = () => {
  //   const worksheet = XLSX.utils.json_to_sheet(suratJalan);
  //   const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
  //   const excelBuffer = XLSX.write(workbook, {
  //     bookType: "xlsx",
  //     type: "array",
  //   });
  //   saveAs(
  //     new Blob([excelBuffer], { type: "application/octet-stream" }),
  //     "surat_jalan.xlsx"
  //   );
  // };

  // const cetakSemuaSuratJalanExcel = () => {
  //   const worksheet = XLSX.utils.json_to_sheet(suratJalan);
  //   const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
  //   const excelBuffer = XLSX.write(workbook, {
  //     bookType: "xlsx",
  //     type: "array",
  //   });
  //   saveAs(
  //     new Blob([excelBuffer], { type: "application/octet-stream" }),
  //     "semua_surat_jalan.xlsx"
  //   );
  // };

  console.log(detailSuratJalan);
  const detailSuratJalans = async (sjId) => {
    setSelectedSuratJalanUUID(sjId);
    setShowDetailModal(true);
    try {
      // const response = await axios.get(
      //   `http://localhost:5000/suratjalan/${sjId}`
      // );
      // const idSuratJalan = response.data.id; // Ambil idSuratJalan dari data surat jalan
      // setDetailSuratJalan(detailResponse.data); // Simpan data detailSuratJalan yang sesuai
    } catch (error) {
      console.error("Error fetching detail surat jalan:", error);
    }
  };
  
  // Fungsi untuk menutup modal detail
  const handleCloseModal = () => {
    // Kosongkan UUID surat jalan yang dipilih
    setSelectedSuratJalanUUID(null);
    // Tutup modal detail
    setShowDetailModal(false);
  };

  const toggleSortOrder = () => {
    // Jika status pengurutan sebelumnya adalah ascending, ubah menjadi descending, dan sebaliknya
    const newSortOrder = sortOrder === "ascending" ? "descending" : "ascending";
    setSortOrder(newSortOrder);
  };
  
  // Implementasikan fungsi pengurutan berdasarkan status pengurutan saat menekan kolom nomor surat jalan
  const handleSortByNoSuratJalan = () => {
    // Panggil fungsi untuk mengubah status pengurutan
    toggleSortOrder();
  
    // Implementasikan fungsi pengurutan berdasarkan status pengurutan saat ini
    const sortedSuratJalan = suratJalan.slice().sort((a, b) => {
      // Gunakan sortOrder untuk menentukan arah pengurutan
      if (sortOrder === "ascending") {
        return a.noSuratJalan.localeCompare(b.noSuratJalan);
      } else {
        return b.noSuratJalan.localeCompare(a.noSuratJalan);
      }
    });
  
    // Simpan data surat jalan yang sudah diurutkan
    setSuratJalan(sortedSuratJalan);
  };

  return (
    <div>
      <h1 className="title">Surat Jalan</h1>
      <h2 className="subtitle">List of Surat Jalan</h2>
      {/* <button onClick={cetakSemuaSuratJalanExcel} className="button is-success mb-2">
        Cetak Semua Surat Jalan Excel
      </button>
      <Link to="/products/add" className="button is-primary mb-2">
        Add New
      </Link> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          marginRight: "20px",
        }}
      >
        <button
          onClick={cetakSuratJalan}
          className="button is-success"
        >
          Cetak Semua SJ
        </button>
        <Link to="/suratjln/add" className="button is-primary">
          Add New
        </Link>
      </div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th onClick={handleSortByNoSuratJalan} style={{cursor: "pointer"}}>No Surat Jalan</th>
            <th>No Mobil</th>
            <th>Nama Sopir</th>
            <th>Keterangan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suratJalan.map((sj, index) => (
            <tr key={sj.uuid}>
              <td>{index + 1}</td>
              <td>{sj.tanggal}</td>
              <td>{sj.noSuratJalan}</td>
              <td>{sj.noMobil}</td>
              <td>{sj.namaSopir}</td>
              <td>{sj.keterangan}</td>
              <td>
                <Link
                  to={`/suratjln/edit/${sj.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteSuratJalan(sj.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
                <button
                  onClick={() => {}}
                  className="button is-small is-success"
                >
                  Cetak
                </button>
                <button
                  onClick={() => detailSuratJalans(sj.uuid)}
                  className="button is-small is-warning"
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedSuratJalanUUID && (
        <div className={`modal ${showDetailModal ? "is-active" : ""}`}>
          <div className="modal-background" onClick={handleCloseModal}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Detail Surat Jalan</p>
              <button
                className="delete"
                aria-label="close"
                onClick={handleCloseModal}
              ></button>
            </header>
            <section className="modal-card-body">
              <SuratJalanDetailList suratJalanUUID={selectedSuratJalanUUID} />
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuratJalanList;
