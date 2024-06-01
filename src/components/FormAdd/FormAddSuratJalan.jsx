// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddSuratJalan = () => {
//   // const [kodeProduct, setKodeProduct] = useState("");
//   // const [namaProduct, setNamaProduct] = useState("");
//   const [tanggal, setTanggal] = useState("");
//   const [noSuratJalan, setNoSuratJalan] = useState("");
//   const [kodeProduct, setKodeProduct] = useState("");
//   const [namaProduct, setNamaProduct] = useState("");
//   const [jumlahProduct, setJumlahProduct] = useState("");
//   const [hargaSatuan, setHargaSatuan] = useState("");
//   const [totalHarga, setTotalHarga] = useState("");
//   const [noMobil, setNoMobil] = useState("");
//   const [namaSopir, setNamaSopir] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   // const [noMobil, setNoMobil] = useState("");

//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   const getNextKodeProduct = (lastKodeProduct) => {
//     // Ubah kode produk terakhir menjadi nomor, tambahkan 1, lalu kembalikan sebagai string
//     const lastNumber = parseInt(lastKodeProduct.replace(/\D/g, ""), 10);
//     const nextNumber = lastNumber + 1;
//     return `KD${nextNumber.toString().padStart(3, "0")}`; // Format kode produk berikutnya
//   };


//   const saveProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/suratjalan", {
//         // name: name,
//         // price: price,
//         tanggal: tanggal,
//         noSuratJalan : noSuratJalan,
//         kodeProduct : kodeProduct,
//         namaProduct : namaProduct,
//         jumlahProduct : jumlahProduct,
//         hargaSatuan : hargaSatuan, 
//         totalHarga : totalHarga,
//         noMobil : noMobil,
//         namaSopir : namaSopir,
//         keterangan : keterangan
//       });
//       console.log(kodeProduct)
//       navigate("/suratjln");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//   <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">Add New Surat Jalan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveProduct}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal</label>
//                 <div className="control">
//                   <input
//                     // disabled
//                     type="date"
//                     className="input"
//                     value={tanggal}
//                     onChange={(e) => setTanggal(e.target.value)}
//                     placeholder="Tanggal"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Surat Jalan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noSuratJalan}
//                     onChange={(e) => setNoSuratJalan(e.target.value)}
//                     placeholder="No Surat Jalan"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Product</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={kodeProduct}
//                     onChange={(e) => setKodeProduct(e.target.value)}
//                     placeholder="Kode Product"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Product</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaProduct}
//                     onChange={(e) => setNamaProduct(e.target.value)}
//                     placeholder="Nama Product"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Jumlah Product</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={jumlahProduct}
//                     onChange={(e) => setJumlahProduct(e.target.value)}
//                     placeholder="Jumlah Product"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Harga Satuan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={hargaSatuan}
//                     onChange={(e) => setHargaSatuan(e.target.value)}
//                     placeholder="Harga Satuan"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Total Harga</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={totalHarga}
//                     onChange={(e) => setTotalHarga(e.target.value)}
//                     placeholder="Total Harga"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Mobil</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noMobil}
//                     onChange={(e) => setNoMobil(e.target.value)}
//                     placeholder="No Mobil"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Sopir</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaSopir}
//                     onChange={(e) => setNamaSopir(e.target.value)}
//                     placeholder="Nama Sopir"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Keterangan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={keterangan}
//                     onChange={(e) => setKeterangan(e.target.value)}
//                     placeholder="Keterangan"
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddSuratJalan;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddSuratJalan = () => {
//   const [tanggal, setTanggal] = useState("");
//   const [noSuratJalan, setNoSuratJalan] = useState("");
//   const [kodeProductOptions, setKodeProductOptions] = useState([]);
//   const [selectedKodeProduct, setSelectedKodeProduct] = useState("");
//   const [namaProduct, setNamaProduct] = useState("");
//   const [jumlahProduct, setJumlahProduct] = useState("");
//   const [hargaSatuan, setHargaSatuan] = useState("");
//   const [totalHarga, setTotalHarga] = useState("");
//   const [noMobil, setNoMobil] = useState("");
//   const [namaSopir, setNamaSopir] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProductOptions = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/products");
//         const products = response.data;
//         const options = products.map(product => product.kodeProduct);
//         setKodeProductOptions(options);
//       } catch (error) {
//         console.error("Error fetching product options:", error);
//       }
//     };

//     fetchProductOptions();
//   }, []);

//   const saveSuratJalan = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/suratjalan", {
//         tanggal,
//         noSuratJalan,
//         kodeProduct: selectedKodeProduct,
//         namaProduct,
//         jumlahProduct,
//         hargaSatuan,
//         totalHarga,
//         noMobil,
//         namaSopir,
//         keterangan
//       });
//       navigate("/suratjln");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">Add New Surat Jalan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveSuratJalan}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tanggal}
//                     onChange={(e) => setTanggal(e.target.value)}
//                     placeholder="Tanggal"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Surat Jalan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noSuratJalan}
//                     onChange={(e) => setNoSuratJalan(e.target.value)}
//                     placeholder="No Surat Jalan"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Product</label>
//                 <div className="control">
//                   <select
//                     className="select"
//                     value={selectedKodeProduct}
//                     onChange={(e) => setSelectedKodeProduct(e.target.value)}
//                   >
//                     <option value="">Select Kode Product</option>
//                     {kodeProductOptions.map((option, index) => (
//                       <option key={index} value={option}>{option}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               {/* Other fields */}
//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddSuratJalan;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddSuratJalan = () => {
//   const [tanggal, setTanggal] = useState("");
//   const [noSuratJalan, setNoSuratJalan] = useState("");
//   const [kodeProductOptions, setKodeProductOptions] = useState([]);
//   const [selectedKodeProduct, setSelectedKodeProduct] = useState("");
//   const [selectedProductUUID, setSelectedProductUUID] = useState(""); // Menyimpan UUID yang sesuai dengan kodeProduct yang dipilih
//   const [jumlahProduct, setJumlahProduct] = useState("");
//   const [namaProduct, setNamaProduct] = useState("");
//   const [hargaSatuan, setHargaSatuan] = useState("");
//   const [totalHarga, setTotalHarga] = useState("");
//   const [noMobil, setNoMobil] = useState("");
//   const [namaSopir, setNamaSopir] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProductOptions = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/products");
//         const products = response.data;
//         const options = products.map(product => product.kodeProduct);
//         setKodeProductOptions(options);
//       } catch (error) {
//         console.error("Error fetching product options:", error);
//       }
//     };

//     fetchProductOptions();
//   }, []);

//   // useEffect(() => {
//   //   const fetchProductName = async () => {
//   //     try {
//   //       const response = await axios.get(`http://localhost:5000/products/${selectedKodeProduct}`);
//   //       const product = response.data;
//   //       setNamaProduct(product.namaProduct); // Set nama produk yang sesuai
//   //       console.log(response)
//   //     } catch (error) {
//   //       console.error("Error fetching product name:", error);
//   //     }
//   //   };
  
//   //   if (selectedKodeProduct) {
//   //     fetchProductName();
//   //   }
//   // }, [selectedKodeProduct]);
  

//   // useEffect(() => {
//   //   const fetchProductUUID = async () => {
//   //     try {
//   //       const response = await axios.get(`http://localhost:5000/products?kodeProduct=${selectedKodeProduct}`);
//   //       const productUUID = response.data.uuid; // Mengambil UUID yang sesuai dengan kodeProduct
//   //       setSelectedProductUUID(productUUID);
//   //     } catch (error) {
//   //       console.error("Error fetching product UUID:", error);
//   //     }
//   //   };

//   //   if (selectedKodeProduct) {
//   //     fetchProductUUID();
//   //   }
//   // }, [selectedKodeProduct]);
//   useEffect(() => {
//     const fetchProductUUID = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/products?kodeProduct=${selectedKodeProduct}`);
//         const productUUID = response.data.uuid; // Mengambil UUID yang sesuai dengan kodeProduct
//         setSelectedProductUUID(productUUID);
//       } catch (error) {
//         console.error("Error fetching product UUID:", error);
//       }
//     };
  
//     if (selectedKodeProduct) {
//       fetchProductUUID();
//     }
//   }, [selectedKodeProduct]);

//   useEffect(() => {
//     const fetchProductName = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/products/${selectedProductUUID}`);
//         const product = response.data;
//         setNamaProduct(product.namaProduct); // Set nama produk yang sesuai
//         console.log(response)
//       } catch (error) {
//         console.error("Error fetching product name:", error);
//       }

//       // console.log(r)
//     };
  
//     if (selectedProductUUID) {
//       fetchProductName();
//     }
//   }, [selectedProductUUID]);
  
  

//   const saveSuratJalan = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/suratjalan", {
//         tanggal,
//         noSuratJalan,
//         kodeProductUUID: selectedProductUUID, // Mengirim UUID ke endpoint
//         jumlahProduct,
//         hargaSatuan,
//         totalHarga,
//         noMobil,
//         namaSopir,
//         keterangan
//       });
//       navigate("/suratjln");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">Add New Surat Jalan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveSuratJalan}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tanggal}
//                     onChange={(e) => setTanggal(e.target.value)}
//                     placeholder="Tanggal"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Surat Jalan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noSuratJalan}
//                     onChange={(e) => setNoSuratJalan(e.target.value)}
//                     placeholder="No Surat Jalan"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Product</label>
//                 <div className="control">
//                   <select
//                     className="select"
//                     value={selectedKodeProduct}
//                     onChange={(e) => setSelectedKodeProduct(e.target.value)}
//                   >
//                     <option value="">Select Kode Product</option>
//                     {kodeProductOptions.map((option, index) => (
//                       <option key={index} value={option}>{option}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="field">
//   <label className="label">Nama Product</label>
//   <div className="control">
//     <input
//       type="text"
//       className="input"
//       value={namaProduct}
//       onChange={(e) => setNamaProduct(e.target.value)}
//       placeholder="Nama Product"
//       disabled // Tidak bisa diedit secara manual
//     />
//   </div>
// </div>

//               <div className="field">
//                 <label className="label">Jumlah Product</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={jumlahProduct}
//                     onChange={(e) => setJumlahProduct(e.target.value)}
//                     placeholder="Jumlah Product"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Harga Satuan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={hargaSatuan}
//                     onChange={(e) => setHargaSatuan(e.target.value)}
//                     placeholder="Harga Satuan"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Total Harga</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={totalHarga}
//                     onChange={(e) => setTotalHarga(e.target.value)}
//                     placeholder="Total Harga"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Mobil</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noMobil}
//                     onChange={(e) => setNoMobil(e.target.value)}
//                     placeholder="No Mobil"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Sopir</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaSopir}
//                     onChange={(e) => setNamaSopir(e.target.value)}
//                     placeholder="Nama Sopir"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Keterangan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={keterangan}
//                     onChange={(e) => setKeterangan(e.target.value)}
//                     placeholder="Keterangan"
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddSuratJalan;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddSuratJalan = () => {
//   const [tanggal, setTanggal] = useState("");
//   const [kodeProductOptions, setKodeProductOptions] = useState([]);
//   const [selectedKodeProduct, setSelectedKodeProduct] = useState("");
//   const [selectedProductUUID, setSelectedProductUUID] = useState("");
//   const [namaProduct, setNamaProduct] = useState("");
//   const [jumlahProduct, setJumlahProduct] = useState("");
//   const [hargaSatuan, setHargaSatuan] = useState("");
//   const [totalHarga, setTotalHarga] = useState("");
//   const [noMobil, setNoMobil] = useState("");
//   const [namaSopir, setNamaSopir] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [selectedNoSuratJalan, setSelectedNoSuratJalan] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLastSuratJalan = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/suratjalan");
//         const lastSuratJalan = response.data[response.data.length - 1]; // Ambil surat jalan terakhir dari array
//         if (lastSuratJalan) {
//           // Jika ada surat jalan terakhir, tentukan nomor surat jalan berikutnya
//           const lastNoSuratJalan = lastSuratJalan.noSuratJalan;
//           setSelectedNoSuratJalan(getNextNoSuratJalan(lastNoSuratJalan));
//         } else {
//           // Jika tidak ada surat jalan sebelumnya, set nomor surat jalan menjadi default
//           setSelectedNoSuratJalan("SJ001");
//         }
//       } catch (error) {
//         console.error("Error fetching last surat jalan:", error);
//       }
//     };

//     fetchLastSuratJalan();
//   }, []);

//   const getNextNoSuratJalan = (lastNoSuratJalan) => {
//     // Ubah nomor surat jalan terakhir menjadi nomor, tambahkan 1, lalu kembalikan sebagai string
//     const lastNumber = parseInt(lastNoSuratJalan.replace(/\D/g, ""), 10);
//     const nextNumber = lastNumber + 1;
//     return `SJ${nextNumber.toString().padStart(3, "0")}`; // Format nomor surat jalan berikutnya
//   };

//   useEffect(() => {
//     const fetchProductOptions = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/products");
//         const products = response.data;
//         const options = products.map((product) => product.kodeProduct);
//         setKodeProductOptions(options);
//       } catch (error) {
//         console.error("Error fetching product options:", error);
//       }
//     };

//     fetchProductOptions();
//   }, []);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/products/${selectedKodeProduct}`
//         );
//         const product = response.data;
//         setSelectedProductUUID(product.kodeProduct);
//         setNamaProduct(product.namaProduct);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };

//     if (selectedKodeProduct) {
//       fetchProductDetails();
//     }
//   }, [selectedKodeProduct]);

//   const saveSuratJalan = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/suratjalan", {
//         tanggal : tanggal,
//         noSuratJalan : selectedNoSuratJalan,
//         kodeProduct: selectedProductUUID,
//         namaProduct :  namaProduct ,
//         jumlahProduct : jumlahProduct,
//         hargaSatuan : hargaSatuan,
//         totalHarga : totalHarga,
//         noMobil : noMobil,
//         namaSopir : namaSopir,
//         keterangan : keterangan
//       });
//       navigate("/suratjln");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   useEffect(() => {
//     // Hitung total harga saat jumlah product atau harga satuan berubah
//     const calculateTotalHarga = () => {
//       const jumlah = parseInt(jumlahProduct);
//       const harga = parseFloat(hargaSatuan);
//       if (!isNaN(jumlah) && !isNaN(harga)) {
//         setTotalHarga((jumlah * harga).toFixed(2));
//       }
//     };

//     calculateTotalHarga();
//   }, [jumlahProduct, hargaSatuan]);
  

//   return (
//     <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">Add New Surat Jalan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveSuratJalan}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tanggal}
//                     onChange={(e) => setTanggal(e.target.value)}
//                     placeholder="Tanggal"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Surat Jalan</label>
//                 <div className="control">
//                   <input
//                     disabled
//                     type="text"
//                     className="input"
//                     value={selectedNoSuratJalan}
//                     onChange={(e) => setSelectedNoSuratJalan(e.target.value)}
//                     placeholder="No Surat Jalan"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Product</label>
//                 <div className="control">
//                   <select
//                     className="select input"
//                     // className="input"
//                     value={selectedKodeProduct}
//                     onChange={(e) => setSelectedKodeProduct(e.target.value)}
//                   >
//                     <option value="">Select Kode Product</option>
//                     {kodeProductOptions.map((option, index) => (
//                       <option key={index} value={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Product</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaProduct}
//                     disabled
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Jumlah Product</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={jumlahProduct}
//                     onChange={(e) => setJumlahProduct(e.target.value)}
//                     placeholder="Jumlah Product"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Harga Satuan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={hargaSatuan}
//                     onChange={(e) => setHargaSatuan(e.target.value)}
//                     placeholder="Harga Satuan"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Total Harga</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     disabled
//                     value={totalHarga}
//                     onChange={(e) => setTotalHarga(e.target.value)}
//                     placeholder="Total Harga"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Mobil</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noMobil}
//                     onChange={(e) => setNoMobil(e.target.value)}
//                     placeholder="No Mobil"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Sopir</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaSopir}
//                     onChange={(e) => setNamaSopir(e.target.value)}
//                     placeholder="Nama Sopir"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Keterangan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={keterangan}
//                     onChange={(e) => setKeterangan(e.target.value)}
//                     placeholder="Keterangan"
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddSuratJalan;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddSuratJalan = () => {
//   const [tanggal, setTanggal] = useState("");
//   const [kodeProductOptions, setKodeProductOptions] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedNoSuratJalan, setSelectedNoSuratJalan] = useState("");
//   const [noMobil, setNoMobil] = useState("");
//   const [namaSopir, setNamaSopir] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLastSuratJalan = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/suratjalan");
//         const lastSuratJalan = response.data[response.data.length - 1];
//         if (lastSuratJalan) {
//           const lastNoSuratJalan = lastSuratJalan.noSuratJalan;
//           setSelectedNoSuratJalan(getNextNoSuratJalan(lastNoSuratJalan));
//         } else {
//           setSelectedNoSuratJalan("SJ001");
//         }
//       } catch (error) {
//         console.error("Error fetching last surat jalan:", error);
//       }
//     };

//     fetchLastSuratJalan();
//   }, []);

//   const getNextNoSuratJalan = (lastNoSuratJalan) => {
//     const lastNumber = parseInt(lastNoSuratJalan.replace(/\D/g, ""), 10);
//     const nextNumber = lastNumber + 1;
//     return `SJ${nextNumber.toString().padStart(3, "0")}`;
//   };

//   useEffect(() => {
//     const fetchProductOptions = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/products");
//         const products = response.data;
//         const options = products.map((product) => product.kodeProduct);
//         setKodeProductOptions(options);
//       } catch (error) {
//         console.error("Error fetching product options:", error);
//       }
//     };

//     fetchProductOptions();
//   }, []);

//   const handleChangeProductField = (index, event) => {
//     const { name, value } = event.target;
//     const newProducts = [...selectedProducts];
//     newProducts[index][name] = value;
//     setSelectedProducts(newProducts);
//   };

//   const handleAddProduct = () => {
//     setSelectedProducts([...selectedProducts, { kodeProduct: "", jumlahProduct: "", hargaSatuan: "", totalHarga: "" }]);
//   };

//   const handleRemoveProduct = (index) => {
//     const newProducts = [...selectedProducts];
//     newProducts.splice(index, 1);
//     setSelectedProducts(newProducts);
//   };

//   const saveSuratJalan = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/suratjalan", {
//         tanggal: tanggal,
//         noSuratJalan: selectedNoSuratJalan,
//         products: selectedProducts,
//         noMobil: noMobil,
//         namaSopir: namaSopir,
//         keterangan: keterangan
//       });
//       navigate("/suratjln");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">Add New Surat Jalan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveSuratJalan}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tanggal}
//                     onChange={(e) => setTanggal(e.target.value)}
//                     placeholder="Tanggal"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Surat Jalan</label>
//                 <div className="control">
//                   <input
//                     disabled
//                     type="text"
//                     className="input"
//                     value={selectedNoSuratJalan}
//                     onChange={(e) => setSelectedNoSuratJalan(e.target.value)}
//                     placeholder="No Surat Jalan"
//                   />
//                 </div>
//               </div>
//               {selectedProducts.map((product, index) => (
//                 <div key={index}>
//                   <div className="field">
//                     <label className="label">Kode Product</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.kodeProduct}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="kodeProduct"
//                         placeholder="Kode Product"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Jumlah Product</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.jumlahProduct}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="jumlahProduct"
//                         placeholder="Jumlah Product"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Harga Satuan</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.hargaSatuan}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="hargaSatuan"
//                         placeholder="Harga Satuan"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Total Harga</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         disabled
//                         value={product.totalHarga}
//                         placeholder="Total Harga"
//                       />
//                     </div>
//                   </div>
//                   <hr />
//                 </div>
//               ))}
//               <div className="field">
//                 <div className="control">
//                   <button
//                     type="button"
//                     className="button is-primary"
//                     onClick={handleAddProduct}
//                   >
//                     Add Product
//                   </button>
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Mobil</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noMobil}
//                     onChange={(e) => setNoMobil(e.target.value)}
//                     placeholder="No Mobil"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Sopir</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaSopir}
//                     onChange={(e) => setNamaSopir(e.target.value)}
//                     placeholder="Nama Sopir"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Keterangan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={keterangan}
//                     onChange={(e) => setKeterangan(e.target.value)}
//                     placeholder="Keterangan"
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default FormAddSuratJalan;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddSuratJalan = () => {
//   const [tanggal, setTanggal] = useState("");
//   const [kodeProductOptions, setKodeProductOptions] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedNoSuratJalan, setSelectedNoSuratJalan] = useState("");
//   const [noMobil, setNoMobil] = useState("");
//   const [namaSopir, setNamaSopir] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLastSuratJalan = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/suratjalan");
//         const lastSuratJalan = response.data[response.data.length - 1];
//         if (lastSuratJalan) {
//           const lastNoSuratJalan = lastSuratJalan.noSuratJalan;
//           setSelectedNoSuratJalan(getNextNoSuratJalan(lastNoSuratJalan));
//         } else {
//           setSelectedNoSuratJalan("SJ001");
//         }
//       } catch (error) {
//         console.error("Error fetching last surat jalan:", error);
//       }
//     };

//     fetchLastSuratJalan();
//   }, []);

//   useEffect(() => {
//     const fetchProductOptions = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/products");
//         const products = response.data;
//         const options = products.map((product) => product.kodeProduct);
//         setKodeProductOptions(options);
//       } catch (error) {
//         console.error("Error fetching product options:", error);
//       }
//     };

//     fetchProductOptions();
//   }, [selectedProducts]); // Menambahkan selectedProducts ke dependency array

//   const handleChangeProductField = (index, event) => {
//     const { name, value } = event.target;
//     const newProducts = [...selectedProducts];
//     newProducts[index][name] = value;
//     setSelectedProducts(newProducts);
//   };

//     const getNextNoSuratJalan = (lastNoSuratJalan) => {
//     const lastNumber = parseInt(lastNoSuratJalan.replace(/\D/g, ""), 10);
//     const nextNumber = lastNumber + 1;
//     return `SJ${nextNumber.toString().padStart(3, "0")}`;
//   };
//   const handleAddProduct = () => {
//     setSelectedProducts([...selectedProducts, { kodeProduct: "", jumlahProduct: "", hargaSatuan: "", totalHarga: "" }]);
//   };

//   const handleRemoveProduct = (index) => {
//     const newProducts = [...selectedProducts];
//     newProducts.splice(index, 1);
//     setSelectedProducts(newProducts);
//   };

//   const saveSuratJalan = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/suratjalan", {
//         tanggal: tanggal,
//         noSuratJalan: selectedNoSuratJalan,
//         products: selectedProducts,
//         noMobil: noMobil,
//         namaSopir: namaSopir,
//         keterangan: keterangan
//       });
//       navigate("/suratjln");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">Add New Surat Jalan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveSuratJalan}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tanggal}
//                     onChange={(e) => setTanggal(e.target.value)}
//                     placeholder="Tanggal"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Surat Jalan</label>
//                 <div className="control">
//                   <input
//                     disabled
//                     type="text"
//                     className="input"
//                     value={selectedNoSuratJalan}
//                     onChange={(e) => setSelectedNoSuratJalan(e.target.value)}
//                     placeholder="No Surat Jalan"
//                   />
//                 </div>
//               </div>
//               {selectedProducts.map((product, index) => (
//                 <div key={index}>
//                   <div className="field">
//                     <label className="label">Kode Product</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.kodeProduct}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="kodeProduct"
//                         placeholder="Kode Product"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Jumlah Product</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.jumlahProduct}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="jumlahProduct"
//                         placeholder="Jumlah Product"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Harga Satuan</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.hargaSatuan}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="hargaSatuan"
//                         placeholder="Harga Satuan"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Total Harga</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         disabled
//                         value={product.totalHarga}
//                         placeholder="Total Harga"
//                       />
//                     </div>
//                   </div>
//                   <hr />
//                 </div>
//               ))}
//               <div className="field">
//                 <div className="control">
//                   <button
//                     type="button"
//                     className="button is-primary"
//                     onClick={handleAddProduct}
//                   >
//                     Add Product
//                   </button>
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Mobil</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noMobil}
//                     onChange={(e) => setNoMobil(e.target.value)}
//                     placeholder="No Mobil"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Sopir</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaSopir}
//                     onChange={(e) => setNamaSopir(e.target.value)}
//                     placeholder="Nama Sopir"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Keterangan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={keterangan}
//                     onChange={(e) => setKeterangan(e.target.value)}
//                     placeholder="Keterangan"
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddSuratJalan;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddSuratJalan = () => {
//   const [tanggal, setTanggal] = useState("");
//   const [kodeProductOptions, setKodeProductOptions] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedNoSuratJalan, setSelectedNoSuratJalan] = useState("");
//   const [noMobil, setNoMobil] = useState("");
//   const [namaSopir, setNamaSopir] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLastSuratJalan = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/suratjalan");
//         const lastSuratJalan = response.data[response.data.length - 1];
//         if (lastSuratJalan) {
//           const lastNoSuratJalan = lastSuratJalan.noSuratJalan;
//           setSelectedNoSuratJalan(getNextNoSuratJalan(lastNoSuratJalan));
//         } else {
//           setSelectedNoSuratJalan("SJ001");
//         }
//       } catch (error) {
//         console.error("Error fetching last surat jalan:", error);
//       }
//     };

//     fetchLastSuratJalan();
//   }, []);

//   useEffect(() => {
//     const fetchProductOptions = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/products");
//         const products = response.data;
//         // Filter produk yang sudah dipilih dari opsi produk
//         const filteredOptions = products.filter(product => 
//           !selectedProducts.find(selectedProduct => selectedProduct.kodeProduct === product.kodeProduct)
//         );
//         setKodeProductOptions(filteredOptions);
//         // console.log(filteredOptions);
//       } catch (error) {
//         console.error("Error fetching product options:", error);
//       }
//     };

//     fetchProductOptions();
//   }, [selectedProducts]); // Gunakan selectedProducts sebagai dependency

//   const handleChangeProductField = (index, event) => {
//     const { name, value } = event.target;
//     const newProducts = [...selectedProducts];
//     newProducts[index][name] = value;
//     setSelectedProducts(newProducts);
//   };

//   const getNextNoSuratJalan = (lastNoSuratJalan) => {
//     const lastNumber = parseInt(lastNoSuratJalan.replace(/\D/g, ""), 10);
//     const nextNumber = lastNumber + 1;
//     return `SJ${nextNumber.toString().padStart(3, "0")}`;
//   };

//   const handleAddProduct = () => {
//     setSelectedProducts([
//       ...selectedProducts,
//       { kodeProduct: "", jumlahProduct: "", hargaSatuan: "", totalHarga: "" }
//     ]);
//   };

//   const handleRemoveProduct = (index) => {
//     const newProducts = [...selectedProducts];
//     newProducts.splice(index, 1);
//     setSelectedProducts(newProducts);
//   };

//   const saveSuratJalan = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/suratjalan", {
//         tanggal: tanggal,
//         noSuratJalan: selectedNoSuratJalan,
//         products: selectedProducts,
//         noMobil: noMobil,
//         namaSopir: namaSopir,
//         keterangan: keterangan
//       });
//       navigate("/suratjln");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   console.log(kodeProductOptions);
//   return (
//     <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">Add New Surat Jalan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveSuratJalan}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tanggal}
//                     onChange={(e) => setTanggal(e.target.value)}
//                     placeholder="Tanggal"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Surat Jalan</label>
//                 <div className="control">
//                   <input
//                     disabled
//                     type="text"
//                     className="input"
//                     value={selectedNoSuratJalan}
//                     onChange={(e) => setSelectedNoSuratJalan(e.target.value)}
//                     placeholder="No Surat Jalan"
//                   />
//                 </div>
//               </div>
//               {selectedProducts.map((product, index) => (
//                 <div key={index}>
//                   <div className="field">
//                     <label className="label">Kode Product</label>
//                     <div className="control">
//                       <select
//                         className="select input"
//                         value={selectedProducts[index].kodeProduct} // Menggunakan kode produk dari state
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="kodeProduct"
//                       >
//                         <option value="">Select Kode Product</option>
//                         {kodeProductOptions.map((option, index) => (
//                           <option key={index} value={option.kodeProduct}>
//                             {option.kodeProduct}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Jumlah Product</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.jumlahProduct}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="jumlahProduct"
//                         placeholder="Jumlah Product"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Harga Satuan</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.hargaSatuan}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="hargaSatuan"
//                         placeholder="Harga Satuan"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Total Harga</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         disabled
//                         value={product.totalHarga}
//                         placeholder="Total Harga"
//                       />
//                     </div>
//                   </div>
//                   <hr />
//                 </div>
//               ))}
//               <div className="field">
//                 <div className="control">
//                   <button
//                     type="button"
//                     className="button is-primary"
//                     onClick={handleAddProduct}
//                   >
//                     Add Product
//                   </button>
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Mobil</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noMobil}
//                     onChange={(e) => setNoMobil(e.target.value)}
//                     placeholder="No Mobil"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Sopir</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaSopir}
//                     onChange={(e) => setNamaSopir(e.target.value)}
//                     placeholder="Nama Sopir"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Keterangan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={keterangan}
//                     onChange={(e) => setKeterangan(e.target.value)}
//                     placeholder="Keterangan"
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddSuratJalan;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddSuratJalan = () => {
//   const [tanggal, setTanggal] = useState("");
//   const [kodeProductOptions, setKodeProductOptions] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedNoSuratJalan, setSelectedNoSuratJalan] = useState("");
//   const [noMobil, setNoMobil] = useState("");
//   const [namaSopir, setNamaSopir] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLastSuratJalan = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/suratjalan");
//         const lastSuratJalan = response.data[response.data.length - 1];
//         if (lastSuratJalan) {
//           const lastNoSuratJalan = lastSuratJalan.noSuratJalan;
//           setSelectedNoSuratJalan(getNextNoSuratJalan(lastNoSuratJalan));
//         } else {
//           setSelectedNoSuratJalan("SJ001");
//         }
//       } catch (error) {
//         console.error("Error fetching last surat jalan:", error);
//       }
//     };

//     fetchLastSuratJalan();
//   }, []);

//   useEffect(() => {
//     const fetchProductOptions = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/products");
//         const products = response.data;
//         console.log(products)
//         // Filter produk yang sudah dipilih dari opsi produk
//         // const filteredOptions = products.filter(product => 
//         //   !selectedProducts.find(selectedProduct => selectedProduct.kodeProduct === product.kodeProduct)
//         // );
//         setKodeProductOptions(products);
//         // console.log("kodeproduct"+kodeProductOptions);
//         // console.log("filter"+filteredOptions)
//         // console.log("selectproduct"+selectedProducts);
//       } catch (error) {
//         console.error("Error fetching product options:", error);
//       }
//     };

//     fetchProductOptions();
//   }, [selectedProducts]); // Gunakan selectedProducts sebagai dependency

//   const handleChangeProductField = (index, event) => {
//     const { name, value } = event.target;
//     const newProducts = [...selectedProducts];
//     newProducts[index][name] = value;
//     setSelectedProducts(newProducts);
//   };

//   const getNextNoSuratJalan = (lastNoSuratJalan) => {
//     const lastNumber = parseInt(lastNoSuratJalan.replace(/\D/g, ""), 10);
//     const nextNumber = lastNumber + 1;
//     return `SJ${nextNumber.toString().padStart(3, "0")}`;
//   };

//   const handleAddProduct = () => {
//     setSelectedProducts([
//       ...selectedProducts,
//       { kodeProduct: "", jumlahProduct: "", hargaSatuan: "", totalHarga: "" }
//     ]);
//   };

//   const handleRemoveProduct = (index) => {
//     const removedProduct = selectedProducts[index];
//     setSelectedProducts(prevProducts =>
//       prevProducts.filter((_, idx) => idx !== index)
//     );
//     // Tambahkan produk yang dihapus kembali ke daftar opsi produk
//     setKodeProductOptions(prevOptions => [
//       ...prevOptions,
//       { kodeProduct: removedProduct.kodeProduct }
//     ]);
//   };

//   const saveSuratJalan = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/suratjalan", {
//         tanggal: tanggal,
//         noSuratJalan: selectedNoSuratJalan,
//         products: selectedProducts,
//         noMobil: noMobil,
//         namaSopir: namaSopir,
//         keterangan: keterangan
//       });
//       navigate("/suratjln");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">Add New Surat Jalan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveSuratJalan}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tanggal}
//                     onChange={(e) => setTanggal(e.target.value)}
//                     placeholder="Tanggal"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Surat Jalan</label>
//                 <div className="control">
//                   <input
//                     disabled
//                     type="text"
//                     className="input"
//                     value={selectedNoSuratJalan}
//                     onChange={(e) => setSelectedNoSuratJalan(e.target.value)}
//                     placeholder="No Surat Jalan"
//                   />
//                 </div>
//               </div>
//               {selectedProducts.map((product, index) => (
//                 <div key={index}>
//                   <div className="field">
//                     <label className="label">Kode Product</label>
//                     <div className="control">
//                       <select
//                         className="select input"
//                         value={product.kodeProduct} // Menggunakan kode produk dari state
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="kodeProduct"
//                       >
//                         <option value="">Select Kode Product</option>
//                         {kodeProductOptions.map((option, idx) => (
//                           <option key={idx} value={option.kodeProduct}>
//                             {option.kodeProduct})
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Jumlah Product</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.jumlahProduct}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="jumlahProduct"
//                         placeholder="Jumlah Product"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Harga Satuan</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.hargaSatuan}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="hargaSatuan"
//                         placeholder="Harga Satuan"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Total Harga</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         disabled
//                         value={product.totalHarga}
//                         placeholder="Total Harga"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <div className="control">
//                       <button
//                         type="button"
//                         className="button is-danger"
//                         onClick={() => handleRemoveProduct(index)}
//                       >
//                         Delete Product
//                       </button>
//                     </div>
//                   </div>
//                   <hr />
//                 </div>
//               ))}
//               <div className="field">
//                 <div className="control">
//                   <button
//                     type="button"
//                     className="button is-primary"
//                     onClick={handleAddProduct}
//                   >
//                     Add Product
//                   </button>
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Mobil</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noMobil}
//                     onChange={(e) => setNoMobil(e.target.value)}
//                     placeholder="No Mobil"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Sopir</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaSopir}
//                     onChange={(e) => setNamaSopir(e.target.value)}
//                     placeholder="Nama Sopir"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Keterangan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={keterangan}
//                     onChange={(e) => setKeterangan(e.target.value)}
//                     placeholder="Keterangan"
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default FormAddSuratJalan;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddSuratJalan = () => {
//   const [tanggal, setTanggal] = useState("");
//   const [kodeProductOptions, setKodeProductOptions] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedNoSuratJalan, setSelectedNoSuratJalan] = useState("");
//   const [noMobil, setNoMobil] = useState("");
//   const [namaSopir, setNamaSopir] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [jumlahProduct, setJumlahProduct] = useState("");
//   const [selectedProductName, setSelectedProductName] = useState("");
//   const [hargaSatuan, setHargaSatuan] = useState("");
//   const [totalHarga, setTotalHarga] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLastSuratJalan = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/suratjalan");
//         const lastSuratJalan = response.data[response.data.length - 1];
//         if (lastSuratJalan) {
//           const lastNoSuratJalan = lastSuratJalan.noSuratJalan;
//           setSelectedNoSuratJalan(getNextNoSuratJalan(lastNoSuratJalan));
//         } else {
//           setSelectedNoSuratJalan("SJ001");
//         }
//       } catch (error) {
//         console.error("Error fetching last surat jalan:", error);
//       }
//     };

//     fetchLastSuratJalan();
//   }, []);

//   useEffect(() => {
//     const fetchProductOptions = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/products");
//         const products = response.data;
//         setKodeProductOptions(products);
//       } catch (error) {
//         console.error("Error fetching product options:", error);
//       }
//     };

//     fetchProductOptions();
//   }, []);

//   const findProductName = (selectedKodeProduct) => {
//     const selectedProduct = kodeProductOptions.find(product => product.kodeProduct === selectedKodeProduct);
//     return selectedProduct ? selectedProduct.namaProduct : "";
//   };

//   const handleChangeProductField = (index, event) => {
//     const { name, value } = event.target;
//     const newProducts = [...selectedProducts];
//     newProducts[index][name] = value;
//     const jumlah = parseFloat(newProducts[index].jumlahProduct);
//   const hargaSatuan = parseFloat(newProducts[index].hargaSatuan);
//   const productName = findProductName(value);
//   setSelectedProductName(productName);
//     newProducts[index][name] = value;
//     setSelectedProducts(newProducts);
//     setJumlahProduct(jumlah);
//     setHargaSatuan(hargaSatuan);
//     setTotalHarga(newProducts[index].totalHarga = (jumlah * hargaSatuan).toFixed(2))
//   };

//   const getNextNoSuratJalan = (lastNoSuratJalan) => {
//     const lastNumber = parseInt(lastNoSuratJalan.replace(/\D/g, ""), 10);
//     const nextNumber = lastNumber + 1;
//     return `SJ${nextNumber.toString().padStart(3, "0")}`;
//   };

//   const handleAddProduct = () => {
//     setSelectedProducts([
//       ...selectedProducts,
//       { kodeProduct: "", jumlahProduct: "", hargaSatuan: "", totalHarga: "" }
//     ]);
//   };

//   const handleRemoveProduct = (index) => {
//     const newProducts = [...selectedProducts];
//     newProducts.splice(index, 1);
//     setSelectedProducts(newProducts);
//   };

//   const saveSuratJalan = async (e) => {
//     e.preventDefault();
//     try {
//       // Konversi array objek produk menjadi string JSON
//       const selectedProductsJSON = JSON.stringify(selectedProducts);
//       await axios.post("http://localhost:5000/suratjalan", {

//         tanggal: tanggal,
//         noSuratJalan: selectedNoSuratJalan,
//         kodeProduct:selectedProducts,
//         namaProduct: selectedProductName,
//         jumlahProduct: jumlahProduct,
//         hargaSatuan:hargaSatuan,
//         totalHarga: totalHarga,
//         noMobil: noMobil,
//         namaSopir: namaSopir,
//         keterangan: keterangan
//       });
//       navigate("/suratjln");
//       console.log(tanggal)
//       console.log(selectedNoSuratJalan)
//       console.log(selectedProducts)
//       console.log(selectedProductsJSON)
//       console.log(jumlahProduct)
//       console.log(hargaSatuan)
//       console.log(totalHarga)
//       console.log(noMobil)
//       console.log(namaSopir)
//       console.log(keterangan)
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">Add New Surat Jalan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveSuratJalan}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tanggal}
//                     onChange={(e) => setTanggal(e.target.value)}
//                     placeholder="Tanggal"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Surat Jalan</label>
//                 <div className="control">
//                   <input
//                     disabled
//                     type="text"
//                     className="input"
//                     value={selectedNoSuratJalan}
//                     onChange={(e) => setSelectedNoSuratJalan(e.target.value)}
//                     placeholder="No Surat Jalan"
//                   />
//                 </div>
//               </div>
//               {selectedProducts.map((product, index) => (
//                 <div key={index}>
//                   <div className="field">
//                     <label className="label">Kode Product</label>
//                     <div className="control">
//                       <select
//                         className="select input"
//                         value={selectedProducts[index].kodeProduct}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="kodeProduct"
//                       >
//                         <option value="">Select Kode Product</option>
//                         {kodeProductOptions.map((option, index) => (
//                           <option key={index} value={option.kodeProduct}>
//                             {option.kodeProduct}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Nama Product</label>
//                     <div className="control">
//                       <input type="text" 
//                         className="input"
//                         value={selectedProductName}
//                         disabled
//                         onChange={(e)=> handleChangeProductField(index, e)}
//                         name="namaProduct"
//                         placeholder="Nama Product"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Jumlah Product</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.jumlahProduct}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="jumlahProduct"
//                         placeholder="Jumlah Product"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Harga Satuan</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.hargaSatuan}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="hargaSatuan"
//                         placeholder="Harga Satuan"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Total Harga</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         disabled
//                         value={product.totalHarga}
//                         placeholder="Total Harga"
//                       />
//                     </div>
//                   </div>
//                   <button
//                     type="button"
//                     className="button is-danger"
//                     onClick={() => handleRemoveProduct(index)}
//                   >
//                     Delete Product
//                   </button>
//                   <hr />
//                 </div>
//               ))}
//               <div className="field">
//                 <div className="control">
//                   <button
//                     type="button"
//                     className="button is-primary"
//                     onClick={handleAddProduct}
//                   >
//                     Add Product
//                   </button>
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Mobil</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noMobil}
//                     onChange={(e) => setNoMobil(e.target.value)}
//                     placeholder="No Mobil"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Sopir</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaSopir}
//                     onChange={(e) => setNamaSopir(e.target.value)}
//                     placeholder="Nama Sopir"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Keterangan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={keterangan}
//                     onChange={(e) => setKeterangan(e.target.value)}
//                     placeholder="Keterangan"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddSuratJalan;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddSuratJalan = () => {
//   const [tanggal, setTanggal] = useState("");
//   const [kodeProductOptions, setKodeProductOptions] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedNoSuratJalan, setSelectedNoSuratJalan] = useState("");
//   const [noMobil, setNoMobil] = useState("");
//   const [namaSopir, setNamaSopir] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [jumlahProduct, setJumlahProduct] = useState("");
//   const [selectedProductName, setSelectedProductName] = useState("");
//   const [hargaSatuan, setHargaSatuan] = useState("");
//   const [totalHarga, setTotalHarga] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLastSuratJalan = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/suratjalan");
//         const lastSuratJalan = response.data[response.data.length - 1];
//         if (lastSuratJalan) {
//           const lastNoSuratJalan = lastSuratJalan.noSuratJalan;
//           setSelectedNoSuratJalan(getNextNoSuratJalan(lastNoSuratJalan));
//         } else {
//           setSelectedNoSuratJalan("SJ001");
//         }
//       } catch (error) {
//         console.error("Error fetching last surat jalan:", error);
//       }
//     };

//     fetchLastSuratJalan();
//   }, []);

//   useEffect(() => {
//     const fetchProductOptions = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/products");
//         const products = response.data;
//         setKodeProductOptions(products);
//       } catch (error) {
//         console.error("Error fetching product options:", error);
//       }
//     };

//     fetchProductOptions();
//   }, []);

//   const findProductName = (selectedKodeProduct) => {
//     const selectedProduct = kodeProductOptions.find(product => product.kodeProduct === selectedKodeProduct);
//     return selectedProduct ? selectedProduct.namaProduct : "";
//   };

//   const handleChangeProductField = (index, event) => {
//     const { name, value } = event.target;
//     const newProducts = [...selectedProducts];
//     newProducts[index][name] = value;
//     const jumlah = parseFloat(newProducts[index].jumlahProduct);
//     const hargaSatuan = parseFloat(newProducts[index].hargaSatuan);
//     const productName = findProductName(value);
//     setSelectedProductName(productName);
//     newProducts[index][name] = value;
//     setSelectedProducts(newProducts);
//     setJumlahProduct(jumlah);
//     setHargaSatuan(hargaSatuan);
//     setTotalHarga(newProducts[index].totalHarga = (jumlah * hargaSatuan).toFixed(2))
//   };

//   const getNextNoSuratJalan = (lastNoSuratJalan) => {
//     const lastNumber = parseInt(lastNoSuratJalan.replace(/\D/g, ""), 10);
//     const nextNumber = lastNumber + 1;
//     return `SJ${nextNumber.toString().padStart(3, "0")}`;
//   };

//   const handleAddProduct = () => {
//     setSelectedProducts([
//       ...selectedProducts,
//       { kodeProduct: "", jumlahProduct: "", hargaSatuan: "", totalHarga: "" }
//     ]);
//   };

//   const handleRemoveProduct = (index) => {
//     const newProducts = [...selectedProducts];
//     newProducts.splice(index, 1);
//     setSelectedProducts(newProducts);
//   };

//   const saveSuratJalan = async (e) => {
//     e.preventDefault();
//     try {
//       // Konversi array objek produk menjadi string JSON
//       const selectedProductsJSON = JSON.stringify(selectedProducts);
//       await axios.post("http://localhost:5000/suratjalan", {
//         tanggal: tanggal,
//         noSuratJalan: selectedNoSuratJalan,
//         kodeProduct: selectedProducts,
//         namaProduct: selectedProductName,
//         jumlahProduct: jumlahProduct,
//         hargaSatuan: hargaSatuan,
//         totalHarga: totalHarga,
//         noMobil: noMobil,
//         namaSopir: namaSopir,
//         keterangan: keterangan
//       });
//       navigate("/suratjln");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">Add New Surat Jalan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveSuratJalan}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tanggal}
//                     onChange={(e) => setTanggal(e.target.value)}
//                     placeholder="Tanggal"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Surat Jalan</label>
//                 <div className="control">
//                   <input
//                     disabled
//                     type="text"
//                     className="input"
//                     value={selectedNoSuratJalan}
//                     onChange={(e) => setSelectedNoSuratJalan(e.target.value)}
//                     placeholder="No Surat Jalan"
//                   />
//                 </div>
//               </div>
//               {selectedProducts.map((product, index) => (
//                 <div key={index}>
//                   <div className="field">
//                     <label className="label">Kode Product</label>
//                     <div className="control">
//                       <select
//                         className="select input"
//                         value={selectedProducts[index].kodeProduct}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="kodeProduct"
//                       >
//                         <option value="">Select Kode Product</option>
//                         {kodeProductOptions.map((option, index) => (
//                           <option key={index} value={option.kodeProduct}>
//                             {option.kodeProduct}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Nama Product</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={selectedProductName}
//                         disabled
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="namaProduct"
//                         placeholder="Nama Product"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Jumlah Product</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.jumlahProduct}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="jumlahProduct"
//                         placeholder="Jumlah Product"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Harga Satuan</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.hargaSatuan}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="hargaSatuan"
//                         placeholder="Harga Satuan"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Total Harga</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         disabled
//                         value={product.totalHarga}
//                         placeholder="Total Harga"
//                       />
//                     </div>
//                   </div>
//                   <button
//                     type="button"
//                     className="button is-danger"
//                     onClick={() => handleRemoveProduct(index)}
//                   >
//                     Delete Product
//                   </button>
//                   <hr />
//                 </div>
//               ))}
//               <div className="field">
//                 <div className="control">
//                   <button
//                     type="button"
//                     className="button is-primary"
//                     onClick={handleAddProduct}
//                   >
//                     Add Product
//                   </button>
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Mobil</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noMobil}
//                     onChange={(e) => setNoMobil(e.target.value)}
//                     placeholder="No Mobil"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Sopir</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaSopir}
//                     onChange={(e) => setNamaSopir(e.target.value)}
//                     placeholder="Nama Sopir"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Keterangan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={keterangan}
//                     onChange={(e) => setKeterangan(e.target.value)}
//                     placeholder="Keterangan"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddSuratJalan;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddSuratJalan = () => {
//   const [tanggal, setTanggal] = useState("");
//   const [kodeProductOptions, setKodeProductOptions] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedNoSuratJalan, setSelectedNoSuratJalan] = useState("");
//   const [noMobil, setNoMobil] = useState("");
//   const [namaSopir, setNamaSopir] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [jumlahProduct, setJumlahProduct] = useState("");
//   const [selectedProductName, setSelectedProductName] = useState("");
//   const [selectedProductNames, setSelectedProductNames] = useState([]);
//   const [hargaSatuan, setHargaSatuan] = useState("");
//   const [totalHarga, setTotalHarga] = useState("");
//   const [testNama, setTestNama] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLastSuratJalan = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/suratjalan");
//         const lastSuratJalan = response.data[response.data.length - 1];
//         if (lastSuratJalan) {
//           const lastNoSuratJalan = lastSuratJalan.noSuratJalan;
//           setSelectedNoSuratJalan(getNextNoSuratJalan(lastNoSuratJalan));
//         } else {
//           setSelectedNoSuratJalan("SJ001");
//         }
//       } catch (error) {
//         console.error("Error fetching last surat jalan:", error);
//       }
//     };

//     fetchLastSuratJalan();
//   }, []);

//   useEffect(() => {
//     const fetchProductOptions = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/products");
//         const products = response.data;
//         setKodeProductOptions(products);
//       } catch (error) {
//         console.error("Error fetching product options:", error);
//       }
//     };

//     fetchProductOptions();
//   }, []);

//   const findProductName = (selectedKodeProduct) => {
//     const selectedProduct = kodeProductOptions.find(product => product.kodeProduct === selectedKodeProduct);
//     return selectedProduct ? selectedProduct.namaProduct : "";
//   };

//   const handleChangeProductField = (index, event) => {
//     // const { name, value } = event.target;
//     // const newProducts = [...selectedProducts];
//     // newProducts[index][name] = value;
//     // const jumlah = parseFloat(newProducts[index].jumlahProduct);
//     // const hargaSatuan = parseFloat(newProducts[index].hargaSatuan);
//     // const productName = findProductName(value);
//     // setSelectedProductName(productName);
//     // newProducts[index].namaProduct = productName;
//     const { name, value } = event.target;
//     const newProducts = [...selectedProducts];
//     newProducts[index][name] = value;
//     const jumlah = parseFloat(newProducts[index].jumlahProduct);
//     const hargaSatuan = parseFloat(newProducts[index].hargaSatuan);
//     const productName = findProductName(value);
//     newProducts[index].namaProduct = productName;
//     setSelectedProducts(newProducts);


//     const newProductNames = [...selectedProductNames];
//     newProductNames[index] = productName;
//     setSelectedProductNames(newProductNames);
    
//     // newProducts[index][name] = value;
//     setSelectedProducts(newProducts);
//     setJumlahProduct(jumlah);
//     setHargaSatuan(hargaSatuan);
//     setTotalHarga(newProducts[index].totalHarga = (jumlah * hargaSatuan).toFixed(2))
//   };

//   const getNextNoSuratJalan = (lastNoSuratJalan) => {
//     const lastNumber = parseInt(lastNoSuratJalan.replace(/\D/g, ""), 10);
//     const nextNumber = lastNumber + 1;
//     return `SJ${nextNumber.toString().padStart(3, "0")}`;
//   };

//   const handleAddProduct = () => {
//     setSelectedProducts([
//       ...selectedProducts,
//       { kodeProduct: "",namaProduct:"", jumlahProduct: "", hargaSatuan: "", totalHarga: "" }
//     ]);
//   };

//   const handleRemoveProduct = (index) => {
//     const newProducts = [...selectedProducts];
//     newProducts.splice(index, 1);
//     setSelectedProducts(newProducts);
//   };

//   // const saveSuratJalan = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     // Konversi array objek produk menjadi string JSON
//   //     const selectedProductsJSON = JSON.stringify(selectedProducts);
//   //     await axios.post("http://localhost:5000/suratjalan", {
//   //       tanggal: tanggal,
//   //       noSuratJalan: selectedNoSuratJalan,
//   //       kodeProduct: selectedProducts,
//   //       namaProduct: testNama,
//   //       jumlahProduct: jumlahProduct,
//   //       hargaSatuan: hargaSatuan,
//   //       totalHarga: totalHarga,
//   //       noMobil: noMobil,
//   //       namaSopir: namaSopir,
//   //       keterangan: keterangan
//   //     });
//   //     navigate("/suratjln");
//   //   } catch (error) {
//   //     if (error.response) {
//   //       setMsg(error.response.data.msg);
//   //     }
//   //   }
//   // };

//   const saveSuratJalan = async (e) => {
//     e.preventDefault();
//     try {
//       const suratJalanData = {
//         tanggal: tanggal,
//         noSuratJalan: selectedNoSuratJalan,
//         noMobil: noMobil,
//         namaSopir: namaSopir,
//         keterangan: keterangan
//       };
  
//       const response = await axios.post("http://localhost:5000/suratjalan", {tanggal: tanggal,
//       noSuratJalan: selectedNoSuratJalan,
//       noMobil: noMobil,
//       namaSopir: namaSopir,
//       keterangan: keterangan});
//       const suratJalanId = response.data.idSuratJalan;

//       console.log(suratJalanId);
  
//       // Simpan detail produk untuk setiap produk yang dipilih
//       await Promise.all(selectedProducts.map(async (product) => {
//         const detailSuratJalanData = {
//           idSuratJalan: suratJalanId,
//           kodeProduct: product.kodeProduct,
//           namaProduct: product.namaProduct,
//           jumlahProduct: product.jumlahProduct,
//           hargaSatuan: product.hargaSatuan,
//           totalHarga: product.totalHarga
//         };
//         await axios.post("http://localhost:5000/detailsuratjalan", detailSuratJalanData);
//       }));
  
//       navigate("/suratjln");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   console.log(selectedProducts);
  

//   return (
//     <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">Add New Surat Jalan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveSuratJalan}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tanggal}
//                     onChange={(e) => setTanggal(e.target.value)}
//                     placeholder="Tanggal"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Surat Jalan</label>
//                 <div className="control">
//                   <input
//                     disabled
//                     type="text"
//                     className="input"
//                     value={selectedNoSuratJalan}
//                     onChange={(e) => setSelectedNoSuratJalan(e.target.value)}
//                     placeholder="No Surat Jalan"
//                   />
//                 </div>
//               </div>
//               {selectedProducts.map((product, index) => (
//               <div key={index}>
//                 <div className="field">
//                   <label className="label">Kode Product</label>
//                   <div className="control">
//                     <select
//                       className="select input"
//                       value={selectedProducts[index].kodeProduct}
//                       onChange={(e) => handleChangeProductField(index, e)}
//                       name="kodeProduct"
//                     >
//                       <option value="">Select Kode Product</option>
//                       {kodeProductOptions.map((option, index) => (
//                         <option key={index} value={option.kodeProduct}>
//                           {option.kodeProduct}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label">Nama Product</label>
//                   <div className="control">
//                     <input
//                       type="text"
//                       className="input"
//                       value={selectedProductNames[index] || ""} // Gunakan selectedProductNames untuk menampilkan nama produk
//                       disabled // Jadikan input tidak dapat diubah
//                       placeholder="Nama Product"
//                     />
//                   </div>
//                 </div>
//                   <div className="field">
//                     <label className="label">Jumlah Product</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.jumlahProduct}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="jumlahProduct"
//                         placeholder="Jumlah Product"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Harga Satuan</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.hargaSatuan}
//                         onChange={(e) => handleChangeProductField(index, e)}
//                         name="hargaSatuan"
//                         placeholder="Harga Satuan"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Total Harga</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         disabled
//                         value={product.totalHarga}
//                         placeholder="Total Harga"
//                       />
//                     </div>
//                   </div>
//                   <button
//                     type="button"
//                     className="button is-danger"
//                     onClick={() => handleRemoveProduct(index)}
//                   >
//                     Delete Product
//                   </button>
//                   <hr />
//                 </div>
//               ))}
//               <div className="field">
//                 <div className="control">
//                   <button
//                     type="button"
//                     className="button is-primary"
//                     onClick={handleAddProduct}
//                   >
//                     Add Product
//                   </button>
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Mobil</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noMobil}
//                     onChange={(e) => setNoMobil(e.target.value)}
//                     placeholder="No Mobil"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Sopir</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaSopir}
//                     onChange={(e) => setNamaSopir(e.target.value)}
//                     placeholder="Nama Sopir"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Keterangan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={keterangan}
//                     onChange={(e) => setKeterangan(e.target.value)}
//                     placeholder="Keterangan"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddSuratJalan;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddSuratJalan = () => {
  const [tanggal, setTanggal] = useState("");
  const [kodeProductOptions, setKodeProductOptions] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedNoSuratJalan, setSelectedNoSuratJalan] = useState("SJ001");
  const [noMobil, setNoMobil] = useState("");
  const [namaSopir, setNamaSopir] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [id, setTestId] = useState("");
  const [idOrder, setIdOrder] = useState("");
  const [orderOptions, setOrderOptions] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLastSuratJalan = async () => {
      try {
        const response = await axios.get("http://localhost:5000/suratjalan");
        console.log("response : ",response.data[0].uuid);
        const nilaiIdSuratJalan = response.data[response.data.length - 1];
        const lastSuratJalan = response.data[response.data.length - 1]; // ambil nilai last 
        console.log("nilai uuid",nilaiIdSuratJalan.uuid)
        setTestId(nilaiIdSuratJalan.uuid)
        console.log(lastSuratJalan);
        console.log("id surat jalan",nilaiIdSuratJalan);
        if (lastSuratJalan) {
          const lastNoSuratJalan = lastSuratJalan.noSuratJalan;
          console.log(lastNoSuratJalan);
          setSelectedNoSuratJalan(getNextNoSuratJalan(lastNoSuratJalan));
        } else {
          setSelectedNoSuratJalan("SJ001");
        }
      } catch (error) {
        console.error("Error fetching last surat jalan:", error);
      }
    };

    fetchLastSuratJalan();
  }, []);

  useEffect(() => {
    const fetchProductOptions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        const products = response.data;
        setKodeProductOptions(products);
      } catch (error) {
        console.error("Error fetching product options:", error);
      }
    };

    fetchProductOptions();
  }, []);

  useEffect(()=> {
    const fetchIdOrder = async() => {
      try {
        const response = await axios.get("http://localhost:5000/order");
        const orders = response.data
        setOrderOptions(orders)  
      } catch (error) {
        console.error(error)
      }
    }

    fetchIdOrder();
  }, [])

  const findProductName = (selectedKodeProduct) => {
    const selectedProduct = kodeProductOptions.find(product => product.kodeProduct === selectedKodeProduct);
    return selectedProduct ? selectedProduct.namaProduct : "";
  };

  const handleCalculateTotalHarga = (index) => {
    const newProducts = [...selectedProducts];
    const jumlah = parseFloat(newProducts[index].jumlahProduct);
    const hargaSatuan = parseFloat(newProducts[index].hargaSatuan);

    if (!isNaN(jumlah) && !isNaN(hargaSatuan)) {
      const newTotalHarga = (jumlah * hargaSatuan).toFixed(2);
      newProducts[index].totalHarga = newTotalHarga;
      setSelectedProducts(newProducts);
    }
  };

  const handleChangeProductField = (index, event) => {
    const { name, value } = event.target;
    const newProducts = [...selectedProducts];
    const productName = findProductName(value);
    newProducts[index][name] = value;
    newProducts[index].namaProduct = productName;

    setSelectedProducts(newProducts);
  };

  const handleChangeJumlahProduct = (index, event) => {
    const { value } = event.target;
    const newProducts = [...selectedProducts];
    newProducts[index].jumlahProduct = value;
    setSelectedProducts(newProducts);
    handleCalculateTotalHarga(index); // Hitung total harga setelah mengubah jumlah product
  };

  const handleChangeHargaSatuan = (index, event) => {
    const { value } = event.target;
    const newProducts = [...selectedProducts];
    newProducts[index].hargaSatuan = value;
    setSelectedProducts(newProducts);
    handleCalculateTotalHarga(index); // Hitung total harga setelah mengubah harga satuan
  };

  const getNextNoSuratJalan = (lastNoSuratJalan) => {
    console.log(lastNoSuratJalan);
    const lastNumber = parseInt(lastNoSuratJalan.replace(/\D/g, ""), 10);
    console.log(lastNumber);
    const nextNumber = lastNumber + 1;
    return `SJ${nextNumber.toString().padStart(3, "0")}`;
  };

  const handleAddProduct = () => {
    setSelectedProducts([
      ...selectedProducts,
      { kodeProduct: "", namaProduct: "", jumlahProduct: "", hargaSatuan: "", totalHarga: "" }
    ]);
  };

  const handleRemoveProduct = (index) => {
    const newProducts = [...selectedProducts];
    newProducts.splice(index, 1);
    setSelectedProducts(newProducts);
  };

  const saveSuratJalan = async (e) => {
      e.preventDefault();
      try {
        const suratJalanData = {
          tanggal: tanggal,
          noSuratJalan: selectedNoSuratJalan,
          noMobil: noMobil,
          namaSopir: namaSopir,
          keterangan: keterangan,
          selectedProducts: selectedProducts,
          
        };

        const response = await axios.post("http://localhost:5000/suratjalan", suratJalanData);
        const suratJalanId = response.data.uuid;

        console.log("TEST ID",suratJalanId);

        // Simpan detail produk untuk setiap produk yang dipilih
        await Promise.all(selectedProducts.map(async (product) => {
          const detailSuratJalanData = {
            idSuratJalan: suratJalanId,
            kodeProduct: product.kodeProduct,
            namaProduct: product.namaProduct,
            jumlahProduct: product.jumlahProduct,
            hargaSatuan: product.hargaSatuan,
            totalHarga: product.totalHarga
          };
          await axios.post("http://localhost:5000/detailsuratjalan", detailSuratJalanData);
        }));

        navigate("/suratjln");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
  };

  // kodeProductOptions.map((product)=>{
  //   return console.log('namaProduct : ',product.namaProduct);
  // })
  // // console.log(idSuratJalan);
  // console.log("id",id);
  

  // console.log(selectedProducts.map(product => product.kodeProduct));

  return (
    <div>
      <h1 className="title">Surat Jalan</h1>
      <h2 className="subtitle">Add New Surat Jalan</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveSuratJalan}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Tanggal</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    placeholder="Tanggal"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Pilih Id Order</label>
                <div className="control">
                  <select name="" id="" value={idOrder} onChange={(e) => setIdOrder(e.target.value)} className="input">
                    <option value="" key="">Pilih Id Order</option>
                    {
                      orderOptions.map((order) => {
                        return <option value={order.id} key={order.id}>{order.id}</option>
                      })
                    }
                  </select>
                </div>
              </div>
              <div className="field">
                <label className="label">No Surat Jalan</label>
                <div className="control">
                  <input
                    disabled
                    type="text"
                    className="input"
                    value={selectedNoSuratJalan}
                    onChange={(e) => setSelectedNoSuratJalan(e.target.value)}
                    placeholder="No Surat Jalan"
                  />
                </div>
              </div>
              {selectedProducts.map((product, index) => (
                <div key={index}>
                  <div className="field">
                    <label className="label">Kode Product</label>
                    <div className="control">
                      <select
                        className="select input"
                        value={selectedProducts[index].kodeProduct}
                        onChange={(e) => handleChangeProductField(index, e)}
                        name="kodeProduct"
                      >
                        <option value="">Select Kode Product</option>
                        {kodeProductOptions.map((option, index) => (
                          <option key={index} value={option.kodeProduct}>
                            {option.kodeProduct}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Nama Product</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        value={product.namaProduct}
                        disabled // Jadikan input tidak dapat diubah
                        placeholder="Nama Product"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Jumlah Product</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        value={product.jumlahProduct}
                        onChange={(e) => handleChangeJumlahProduct(index, e)}
                        name="jumlahProduct"
                        placeholder="Jumlah Product"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Harga Satuan</label>
                    <div className="control">
                      <input
                        type="text"
                        className="number"
                        value={product.hargaSatuan}
                        onChange={(e) => handleChangeHargaSatuan(index, e)}
                        name="hargaSatuan"
                        placeholder="Harga Satuan"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Total Harga</label>
                    <div className="control">
                      <input
                        type="number"
                        className="input"
                        disabled
                        value={product.totalHarga}
                        placeholder="Total Harga"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button is-danger"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    Delete Product
                  </button>
                  <hr />
                </div>
              ))}
              <div className="field">
                <div className="control">
                  <button
                    type="button"
                    className="button is-primary"
                    onClick={handleAddProduct}
                  >
                    Add Product
                  </button>
                </div>
              </div>
              <div className="field">
                <label className="label">No Mobil</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={noMobil}
                    onChange={(e) => setNoMobil(e.target.value)}
                    placeholder="No Mobil"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nama Sopir</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaSopir}
                    onChange={(e) => setNamaSopir(e.target.value)}
                    placeholder="Nama Sopir"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Keterangan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                    placeholder="Keterangan"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddSuratJalan;
