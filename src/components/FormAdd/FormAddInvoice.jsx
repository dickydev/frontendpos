// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddInvoice = () => {
//   const [namaCust, setNamaCust] = useState("");
//   const [noInvoice, setNoInvoice] = useState("");
//   const [tglInvoice, setTglInvoice] = useState("");
//   const [noSJ, setNoSJ] = useState("");
//   const [noKTP, setNoKTP] = useState("");
//   const [tglSJ, setTglSJ] = useState("");
//   const [kodeProduct, setKodeProduct] = useState("");
//   const [jumlah, setJumlah] = useState("");
//   const [harga, setHarga] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   const saveInvoice = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/invoice", {
//         namaCust:namaCust,
//         noInvoice:noInvoice,
//         tglInvoice:tglInvoice,
//         noSJ:noSJ,
//         noKTP : noKTP,
//         tglSJ : tglSJ,
//         kodeProduct : kodeProduct,
//         jumlah : jumlah,
//         harga : harga,
//         keterangan : keterangan
//       });
//       navigate("/invoice");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Invoice</h1>
//       <h2 className="subtitle">Add New Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveInvoice}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Nama Customer</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaCust}
//                     onChange={(e) => setNamaCust(e.target.value)}
//                     placeholder="Nama Customer"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Invoice</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noInvoice}
//                     onChange={(e) => setNoInvoice(e.target.value)}
//                     placeholder="No Invoice"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Tanggal Invoice</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tglInvoice}
//                     onChange={(e) => setTglInvoice(e.target.value)}
//                     placeholder="No Invoice"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No SJ</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noSJ}
//                     onChange={(e) => setNoSJ(e.target.value)}
//                     placeholder="No SJ"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No KTP</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noKTP}
//                     onChange={(e) => setNoKTP(e.target.value)}
//                     placeholder="No KTP"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Tanggal SJ</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tglSJ}
//                     onChange={(e) => setTglSJ(e.target.value)}
//                     placeholder="Tanggal SJ"
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
//                 <label className="label">Jumlah</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={jumlah}
//                     onChange={(e) => setJumlah(e.target.value)}
//                     placeholder="Jumlah"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Harga</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={harga}
//                     onChange={(e) => setHarga(e.target.value)}
//                     placeholder="Harga"
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

// export default FormAddInvoice;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddInvoice = () => {
//   const [namaCust, setNamaCust] = useState("");
//   const [noInvoice, setNoInvoice] = useState("");
//   const [tglInvoice, setTglInvoice] = useState("");
//   const [noSJ, setNoSJ] = useState("");
//   const [noKTP, setNoKTP] = useState("");
//   const [tglSJ, setTglSJ] = useState("");
//   const [kodeProduct, setKodeProduct] = useState("");
//   const [jumlah, setJumlah] = useState("");
//   const [harga, setHarga] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLastInvoice = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/invoice");
//         const lastInvoice = response.data[response.data.length - 1];
//         if (lastInvoice) {
//           const lastNoInvoice = lastInvoice.noInvoice;
//           const nextNoInvoice = getNextInvoiceNumber(lastNoInvoice);
//           setNoInvoice(nextNoInvoice);
//         } else {
//           setNoInvoice("INV001");
//         }
//       } catch (error) {
//         console.error("Error fetching last invoice:", error);
//       }
//     };

//     fetchLastInvoice();
//   }, []);

//   const getNextInvoiceNumber = (lastNoInvoice) => {
//     const lastNumber = parseInt(lastNoInvoice.replace(/\D/g, ""), 10);
//     const nextNumber = lastNumber + 1;
//     return `INV${nextNumber.toString().padStart(3, "0")}`;
//   };

//   const saveInvoice = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/invoice", {
//         namaCust: namaCust,
//         noInvoice: noInvoice,
//         tglInvoice: tglInvoice,
//         noSJ: noSJ,
//         noKTP: noKTP,
//         tglSJ: tglSJ,
//         kodeProduct: kodeProduct,
//         jumlah: jumlah,
//         harga: harga,
//         keterangan: keterangan
//       });
//       navigate("/invoice");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Invoice</h1>
//       <h2 className="subtitle">Add New Invoice</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveInvoice}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Nama Customer</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaCust}
//                     onChange={(e) => setNamaCust(e.target.value)}
//                     placeholder="Nama Customer"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Invoice</label>
//                 <div className="control">
//                   <input
//                     disabled
//                     type="text"
//                     className="input"
//                     value={noInvoice}
//                     onChange={(e) => setNoInvoice(e.target.value)}
//                     placeholder="No Invoice"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Tanggal Invoice</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tglInvoice}
//                     onChange={(e) => setTglInvoice(e.target.value)}
//                     placeholder="Tanggal Invoice"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No SJ</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noSJ}
//                     onChange={(e) => setNoSJ(e.target.value)}
//                     placeholder="No SJ"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No KTP</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noKTP}
//                     onChange={(e) => setNoKTP(e.target.value)}
//                     placeholder="No KTP"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Tanggal SJ</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tglSJ}
//                     onChange={(e) => setTglSJ(e.target.value)}
//                     placeholder="Tanggal SJ"
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
//                 <label className="label">Jumlah</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={jumlah}
//                     onChange={(e) => setJumlah(e.target.value)}
//                     placeholder="Jumlah"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Harga</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={harga}
//                     onChange={(e) => setHarga(e.target.value)}
//                     placeholder="Harga"
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

// export default FormAddInvoice;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddInvoice = () => {
//   // const [namaCust, setNamaCust] = useState("");
//   const [noInvoice, setNoInvoice] = useState("");
//   const [tglInvoice, setTglInvoice] = useState("");
//   const [selectedCustomer, setSelectedCustomer] = useState("");
//   const [selectedNoSJ, setSelectedNoSJ] = useState("");
//   const [selectedKodeProduct, setSelectedKodeProduct] = useState("");
//   // const [selectedProductUUID, setSelectedProductUUID] = useState("");
//   const [kodeProductOptions, setKodeProductOptions] = useState([]);
//   // const [kodeProduct, setKodeProduct] = useState("");
//   const [customers, setCustomers] = useState([]);
//   const [noSJ, setNoSJ] = useState([]);
//   const [noKTP, setNoKTP] = useState("");
//   const [tglSJ, setTglSJ] = useState("");
//   const [jumlah, setJumlah] = useState("");
//   const [harga, setHarga] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/customers");
//         setCustomers(response.data);
//         // setHarga
//         console.log(response.data)
//       } catch (error) {
//         console.error("Error fetching customers:", error);
//       }
//     };

//     fetchCustomers();
//   }, []);

//   useEffect(() => {
//     const fetchNoSJ = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/suratjalan");
//         setNoSJ(response.data);
//         // console.log(response.data)
//       } catch (error) {
//         console.error("Error fetching customers:", error);
//       }
//     };

//     fetchNoSJ();
//   }, []);

//   useEffect(() => {
//     const fetchLastInvoice = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/invoice");
//         const lastInvoice = response.data[response.data.length - 1];
//         if (lastInvoice) {
//           const lastNoInvoice = lastInvoice.noInvoice;
//           const nextNoInvoice = getNextInvoiceNumber(lastNoInvoice);
//           setNoInvoice(nextNoInvoice);
//         } else {
//           setNoInvoice("INV001");
//         }
//       } catch (error) {
//         console.error("Error fetching last invoice:", error);
//       }
//     };

//     fetchLastInvoice();
//   }, []);

//   const getNextInvoiceNumber = (lastNoInvoice) => {
//     const lastNumber = parseInt(lastNoInvoice.replace(/\D/g, ""), 10);
//     const nextNumber = lastNumber + 1;
//     return `INV${nextNumber.toString().padStart(3, "0")}`;
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

//   // useEffect(() => {
//   //   const fetchSJOptions = async () => {
//   //     try {
//   //       const response = await axios.get("http://localhost:5000/suratjalan");
//   //       const sj = response.data;
//   //       const options = sj.map((sj) => sj.noSuratJalan);
//   //       setNoSJ(options);
//   //     } catch (error) {
//   //       console.error("Error fetching product options:", error);
//   //     }
//   //   };

//   //   fetchSJOptions();
//   // }, []);

//   // useEffect(() => {
//   //   const fetchProductDetails = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         `http://localhost:5000/products/${selectedKodeProduct}`
//   //       );
//   //       const product = response.data;
//   //       setSelectedProductUUID(product.kodeProduct);
//   //       setNamaProduct(product.namaProduct);
//   //     } catch (error) {
//   //       console.error("Error fetching product details:", error);
//   //     }
//   //   };

//   //   if (selectedKodeProduct) {
//   //     fetchProductDetails();
//   //   }
//   // }, [selectedKodeProduct]);

//   const saveInvoice = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/invoice", {
//         namaCust: selectedCustomer,
//         noInvoice: noInvoice,
//         tglInvoice: tglInvoice,
//         noSJ: selectedNoSJ,
//         noKTP: noKTP,
//         tglSJ: tglSJ,
//         kodeProduct: selectedKodeProduct,
//         jumlah: jumlah,
//         harga: harga,
//         keterangan: keterangan
//       });
//       navigate("/invoice");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Invoice</h1>
//       <h2 className="subtitle">Add New Invoice</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveInvoice}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Nama Customer</label>
//                 <div className="control">
//                   <select
//                     value={selectedCustomer}
//                     onChange={(e) => setSelectedCustomer(e.target.value)}
//                     className="input"
//                   >
//                     <option value="">Pilih Customer</option>
//                     {customers.map((customer) => (
//                       <option key={customer.id} value={customer.id}>
//                         {customer.nama}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Invoice</label>
//                 <div className="control">
//                   <input
//                     disabled
//                     type="text"
//                     className="input"
//                     value={noInvoice}
//                     onChange={(e) => setNoInvoice(e.target.value)}
//                     placeholder="No Invoice"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Tanggal Invoice</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tglInvoice}
//                     onChange={(e) => setTglInvoice(e.target.value)}
//                     placeholder="Tanggal Invoice"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No SJ</label>
//                 <div className="control">
//                   <select
//                     value={selectedNoSJ}
//                     onChange={(e) => setSelectedNoSJ(e.target.value)}
//                     className="input"
//                   >
//                     <option value="">Pilih No SJ</option>
//                     {Array.isArray(noSJ) &&
//                       noSJ.map((sj) => (
//                         <option key={sj.id} value={sj.noSuratJalan}>
//                           {sj.noSuratJalan}
//                           {console.log(sj.noSuratJalan)}
//                         </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="field">
//                 <label className="label">No KTP</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noKTP}
//                     onChange={(e) => setNoKTP(e.target.value)}
//                     placeholder="No KTP"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Product</label>
//                 <div className="control">
//                   {/* <input
//                     type="text"
//                     className="input"
//                     value={kodeProduct}
//                     onChange={(e) => setKodeProduct(e.target.value)}
//                     placeholder="Kode Product"
//                   /> */}
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
//                 <label className="label">Tanggal SJ</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tglSJ}
//                     onChange={(e) => setTglSJ(e.target.value)}
//                     placeholder="Tanggal SJ"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Jumlah</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={jumlah}
//                     onChange={(e) => setJumlah(e.target.value)}
//                     placeholder="Jumlah"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Harga</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={harga}
//                     onChange={(e) => setHarga(e.target.value)}
//                     placeholder="Harga"
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

// export default FormAddInvoice;


  // import React, { useState, useEffect } from "react";
  // import axios from "axios";
  // import { useNavigate } from "react-router-dom";

  // const FormAddInvoice = () => {
  //   const [noInvoice, setNoInvoice] = useState("");
  //   const [tglInvoice, setTglInvoice] = useState("");
  //   const [selectedCustomer, setSelectedCustomer] = useState("");
  //   const [selectedNoSJOption, setSelectedNoSJOption] = useState("");
  //   const [selectedKodeProduct, setSelectedKodeProduct] = useState("");
  //   const [kodeProductOptions, setKodeProductOptions] = useState([]);
  //   const [customers, setCustomers] = useState([]);
  //   const [noSJOptions, setNoSJOptions] = useState([]);
  //   const [noKTP, setNoKTP] = useState("");
  //   const [tglSJ, setTglSJ] = useState("");
  //   const [jumlah, setJumlah] = useState("");
  //   const [harga, setHarga] = useState("");
  //   const [keterangan, setKeterangan] = useState("");
  //   const [selectedProducts, setSelectedProducts] = useState([])
  //   const [msg, setMsg] = useState("");
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     const fetchCustomers = async () => {
  //       try {
  //         const response = await axios.get("http://localhost:5000/customers");
  //         setCustomers(response.data);
  //       } catch (error) {
  //         console.error("Error fetching customers:", error);
  //       }
  //     };

  //     fetchCustomers();
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
  //   }, []);

  //   useEffect(() => {
  //     const fetchNoSJ = async () => {
  //       try {
  //         const response = await axios.get("http://localhost:5000/suratjalan");
  //         setNoSJOptions(response.data);
  //       } catch (error) {
  //         console.error("Error fetching No SJ:", error);
  //       }
  //     };

  //     fetchNoSJ();
  //   }, []);

  //   useEffect(() => {
  //     const fetchLastInvoice = async () => {
  //       try {
  //         const response = await axios.get("http://localhost:5000/invoice");
  //         const lastInvoice = response.data[response.data.length - 1];
  //         if (lastInvoice) {
  //           const lastNoInvoice = lastInvoice.noInvoice;
  //           const nextNoInvoice = getNextInvoiceNumber(lastNoInvoice);
  //           setNoInvoice(nextNoInvoice);
  //         } else {
  //           setNoInvoice("INV001");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching last invoice:", error);
  //       }
  //     };

  //     fetchLastInvoice();
  //   }, []);

  //   const handleAddProduct = () => {
  //     setSelectedProducts([
  //       ...selectedProducts,
  //       {
  //         invoice_id : "",
  //         kodeProduct : "",
  //         jumlah : "",
  //         harga : ""
  //       }
  //     ])
  //   }

  //   const findProductName = (selectedKodeProduct) => {
  //     const selectedProduct = kodeProductOptions.find(product => product.kodeProduct === selectedKodeProduct);
  //     return selectedProduct ? selectedProduct.namaProduct : "";
  //   };

  //   const handleCalculateTotalHarga = (index) => {
  //     const newProducts = [...selectedProducts];
  //     const jumlah = parseFloat(newProducts[index].jumlahProduct);
  //     const hargaSatuan = parseFloat(newProducts[index].hargaSatuan);

  //     if (!isNaN(jumlah) && !isNaN(hargaSatuan)) {
  //       const newTotalHarga = (jumlah * hargaSatuan).toFixed(2);
  //       newProducts[index].totalHarga = newTotalHarga;
  //       setSelectedProducts(newProducts);
  //     }
  //   };

  //   const handleChangeProductField = (index, event) => {
  //     const { name, value } = event.target;
  //     const newProducts = [...selectedProducts];
  //     const productName = findProductName(value);
  //     newProducts[index][name] = value;
  //     newProducts[index].namaProduct = productName;

  //     setSelectedProducts(newProducts);
  //   };

  //   const handleChangeJumlahProduct = (index, event) => {
  //     const { value } = event.target;
  //     const newProducts = [...selectedProducts];
  //     newProducts[index].jumlahProduct = value;
  //     setSelectedProducts(newProducts);
  //     handleCalculateTotalHarga(index); // Hitung total harga setelah mengubah jumlah product
  //   };

  //   const handleChangeHargaSatuan = (index, event) => {
  //     const { value } = event.target;
  //     const newProducts = [...selectedProducts];
  //     newProducts[index].hargaSatuan = value;
  //     setSelectedProducts(newProducts);
  //     handleCalculateTotalHarga(index); // Hitung total harga setelah mengubah harga satuan
  //   };

  //   useEffect(() => {
  //     const fetchSuratJalanData = async () => {
  //       if (selectedNoSJOption) {
  //         try {
  //           const response = await axios.get(`http://localhost:5000/suratjalan/detail/${selectedNoSJOption}`);
  //           const suratJalan = response.data;
  //           setSelectedCustomer(suratJalan.namaCust);
  //           setNoKTP(suratJalan.noKTP);
  //           setTglSJ(suratJalan.tglSJ);
  //           setJumlah(suratJalan.jumlah);
  //           setHarga(suratJalan.harga);
  //           setKeterangan(suratJalan.keterangan);
  //         } catch (error) {
  //           console.error("Error fetching surat jalan data:", error);
  //         }
  //       }
  //     };

  //     fetchSuratJalanData();
  //   }, [selectedNoSJOption]);

  //   const getNextInvoiceNumber = (lastNoInvoice) => {
  //     const lastNumber = parseInt(lastNoInvoice.replace(/\D/g, ""), 10);
  //     const nextNumber = lastNumber + 1;
  //     return `INV${nextNumber.toString().padStart(3, "0")}`;
  //   };

  //   const saveInvoice = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const invoice = {
  //         namaCust: selectedCustomer,
  //         noInvoice: noInvoice,
  //         tglInvoice: tglInvoice,
  //         noSJ: selectedNoSJOption,
  //         noKTP: noKTP,
  //         tglSJ: tglSJ,
  //         keterangan: keterangan
  //       }

  //       const response = await axios.post("http://localhost:5000/invoice", invoice);
  //       const invoiceId = response.data.id;
  //       // Check if all required fields are filled
  //       if (!selectedCustomer || !tglInvoice || !selectedNoSJOption || !selectedKodeProduct || !jumlah || !harga) {
  //         throw new Error("Please fill in all required fields.");
  //       }
  //       await Promise.all(selectedProducts.map(async(invoice)=>{
  //         const detailInvoice = {
  //           invoice_id: invoiceId,
  //           kodeProduct: invoice.kodeProduct,
  //           jumlah : invoice.jumlah,
  //           harga : invoice.harga
  //         }
  //         await axios.post('http://localhost:5000/detail-invoice/', detailInvoice);
  //       }))
  //       navigate("/invoice");
  //     } catch (error) {
  //       if (error.response) {
  //         setMsg(error.response.data.msg);
  //       } else {
  //         setMsg(error.message);
  //       }
  //     }
  //   };

  //   const handleRemoveProduct = (index) => {
  //     const newProducts = [...selectedProducts];
  //     newProducts.splice(index, 1);
  //     setSelectedProducts(newProducts);
  //   };

  // console.log('ISI',selectedProducts)

  //   return (
  //     <div>
  //       <h1 className="title">Invoice</h1>
  //       <h2 className="subtitle">Add New Invoice</h2>
  //       <div className="card is-shadowless">
  //         <div className="card-content">
  //           <div className="content">
  //             <form onSubmit={saveInvoice}>
  //               <p className="has-text-centered">{msg}</p>
  //               <div className="field">
  //                 <label className="label">Nama Customer</label>
  //                 <div className="control">
  //                   <select
  //                     value={selectedCustomer}
  //                     onChange={(e) => setSelectedCustomer(e.target.value)}
  //                     className="input"
  //                   >
  //                     <option value="">Pilih Customer</option>
  //                     {customers.map((customer) => (
  //                       <option key={customer.id} value={customer.nama}>
  //                         {customer.nama}
  //                       </option>
  //                     ))}
  //                   </select>
  //                 </div>
  //               </div>
  //               <div className="field">
  //                 <label className="label">No Invoice</label>
  //                 <div className="control">
  //                   <input
  //                     disabled
  //                     type="text"
  //                     className="input"
  //                     value={noInvoice}
  //                     onChange={(e) => setNoInvoice(e.target.value)}
  //                     placeholder="No Invoice"
  //                   />
  //                 </div>
  //               </div>
  //               <div className="field">
  //                 <label className="label">Tanggal Invoice</label>
  //                 <div className="control">
  //                   <input
  //                     type="date"
  //                     className="input"
  //                     value={tglInvoice}
  //                     onChange={(e) => setTglInvoice(e.target.value)}
  //                     placeholder="Tanggal Invoice"
  //                   />
  //                 </div>
  //               </div>
  //               <div className="field">
  //                 <label className="label">No SJ</label>
  //                 <div className="control">
  //                   <select
  //                     value={selectedNoSJOption}
  //                     onChange={(e) => setSelectedNoSJOption(e.target.value)}
  //                     className="input"
  //                   >
  //                     <option value="">Pilih No SJ</option>
  //                     {noSJOptions.map((sj) => (
  //                       <option key={sj.id} value={sj.noSuratJalan}>
  //                         {sj.noSuratJalan}
  //                       </option>
  //                     ))}
  //                   </select>
  //                 </div>
  //               </div>
  //               <div className="field">
  //                 <label className="label">No KTP</label>
  //                 <div className="control">
  //                   <input
  //                     type="text"
  //                     className="input"
  //                     value={noKTP}
  //                     onChange={(e) => setNoKTP(e.target.value)}
  //                     placeholder="No KTP"
  //                   />
  //                 </div>
  //               </div>
                
  //               <div className="field">
  //                 <label className="label">Kode Product</label>
  //                 <div className="control">
  //                   <select
  //                     className="select input"
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
  //                 <label className="label">Jumlah</label>
  //                 <div className="control">
  //                   <input
  //                     type="text"
  //                     className="input"
  //                     value={jumlah}
  //                     onChange={(e) => setJumlah(e.target.value)}
  //                     placeholder="Jumlah"
  //                   />
  //                 </div>
  //               </div>
  //               <div className="field">
  //                 <label className="label">Harga</label>
  //                 <div className="control">
  //                   <input
  //                     type="text"
  //                     className="input"
  //                     value={harga}
  //                     onChange={(e) => setHarga(e.target.value)}
  //                     placeholder="Harga"
  //                   />
  //                 </div>
  //               </div>
  //               {/* {selectedProducts.map((product, index) => (
  //                 <div key={index}>
  //                   <div className="field">
  //                     <label className="label">Invoice ID</label>
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
  //                     <label className="label">Kode Product</label>
  //                     <div className="control">
  //                       <input
  //                         type="text"
  //                         className="input"
  //                         value={product.namaProduct}
  //                         // disabled // Jadikan input tidak dapat diubah
  //                         placeholder="Nama Product"
  //                       />
  //                     </div>
  //                   </div>
  //                   <div className="field">
  //                     <label className="label">Jumlah</label>
  //                     <div className="control">
  //                       <input
  //                         type="text"
  //                         className="input"
  //                         value={product.jumlahProduct}
  //                         onChange={(e) => handleChangeJumlahProduct(index, e)}
  //                         name="jumlahProduct"
  //                         placeholder="Jumlah Product"
  //                       />
  //                     </div>
  //                   </div>
  //                   <div className="field">
  //                     <label className="label">Harga</label>
  //                     <div className="control">
  //                       <input
  //                         type="text"
  //                         className="number"
  //                         value={product.hargaSatuan}
  //                         onChange={(e) => handleChangeHargaSatuan(index, e)}
  //                         name="hargaSatuan"
  //                         placeholder="Harga Satuan"
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
  //               ))} */}
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
  //                 <label className="label">Tanggal SJ</label>
  //                 <div className="control">
  //                   <input
  //                     type="date"
  //                     className="input"
  //                     value={tglSJ}
  //                     onChange={(e) => setTglSJ(e.target.value)}
  //                     placeholder="Tanggal SJ"
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

  // export default FormAddInvoice;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddInvoice = () => {
  const [noInvoice, setNoInvoice] = useState("");
  const [tglInvoice, setTglInvoice] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedNoSJOption, setSelectedNoSJOption] = useState("");
  const [kodeProductOptions, setKodeProductOptions] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [noSJOptions, setNoSJOptions] = useState([]);
  const [noKTP, setNoKTP] = useState("");
  const [tglSJ, setTglSJ] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [idSuratJalan, setIdSuratJalan] = useState();
  const [orderId, setOrderId] = useState(0);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/customers");
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    const fetchProductOptions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setKodeProductOptions(response.data);
      } catch (error) {
        console.error("Error fetching product options:", error);
      }
    };

    fetchProductOptions();
  }, []);

  useEffect(() => {
    const fetchNoSJ = async () => {
      try {
        const response = await axios.get("http://localhost:5000/suratjalan");
        setNoSJOptions(response.data);
        setIdSuratJalan(response.data.uuid)
      } catch (error) {
        console.error("Error fetching No SJ:", error);
      }
    };

    fetchNoSJ();
  }, []);

  const handleNoSJChange = (event) => {
    const selectedNoSJ = event.target.value;
    setSelectedNoSJOption(selectedNoSJ);
  
    const selectedSJ = noSJOptions.find((sj) => sj.noSuratJalan === selectedNoSJ);
    if (selectedSJ) {
      setIdSuratJalan(selectedSJ.uuid);
      console.log(selectedSJ)
      setOrderId(selectedSJ.orderId);
    } else {
      setIdSuratJalan("");
      setOrderId("");
    }
  };

  useEffect(() => {
    const fetchLastInvoice = async () => {
      try {
        const response = await axios.get("http://localhost:5000/invoice");
        const lastInvoice = response.data[response.data.length - 1];
        if (lastInvoice) {
          const lastNoInvoice = lastInvoice.noInvoice;
          const nextNoInvoice = getNextInvoiceNumber(lastNoInvoice);
          setNoInvoice(nextNoInvoice);
        } else {
          setNoInvoice("INV001");
        }
      } catch (error) {
        console.error("Error fetching last invoice:", error);
      }
    };

    fetchLastInvoice();
  }, []);

  const getNextInvoiceNumber = (lastNoInvoice) => {
    const lastNumber = parseInt(lastNoInvoice.replace(/\D/g, ""), 10);
    const nextNumber = lastNumber + 1;
    return `INV${nextNumber.toString().padStart(3, "0")}`;
  };

  const handleAddProduct = () => {
    setSelectedProducts([
      ...selectedProducts,
      {
        kodeProduct: "",
        jumlah: "",
        harga: ""
      }
    ]);
  };

  const handleChangeProductField = (index, event) => {
    const { name, value } = event.target;
    const newProducts = [...selectedProducts];
    newProducts[index][name] = value;
    setSelectedProducts(newProducts);
  };

  const handleRemoveProduct = (index) => {
    const newProducts = [...selectedProducts];
    newProducts.splice(index, 1);
    setSelectedProducts(newProducts);
  };

  const saveInvoice = async (e) => {
    e.preventDefault();
    try {
      const invoice = {
        namaCust: selectedCustomer,
        noInvoice: noInvoice,
        tglInvoice: tglInvoice,
        noSJ: selectedNoSJOption,
        noKTP: noKTP,
        tglSJ: tglSJ,
        keterangan: keterangan,
        orderId: orderId,
        suratjalan_id: idSuratJalan,
        products: selectedProducts,
      };

      const response = await axios.post("http://localhost:5000/invoice", invoice);
      const invoiceId = response.data.id;

      await Promise.all(
       
        selectedProducts.map(async (product) => {
          const detailInvoice = {
            invoice_id: invoiceId,
            kodeProduct: product.kodeProduct,
            jumlah: product.jumlah,
            harga: product.harga
          };
          await axios.post("http://localhost:5000/detail-invoice", detailInvoice);
        })
      );

      navigate("/invoice");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      } else {
        setMsg(error.message);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Invoice</h1>
      <h2 className="subtitle">Add New Invoice</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveInvoice}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Customer</label>
                <div className="control">
                  <select
                    value={selectedCustomer}
                    onChange={(e) => setSelectedCustomer(e.target.value)}
                    className="input"
                  >
                    <option value="">Pilih Customer</option>
                    {customers.map((customer) => (
                      <option key={customer.id} value={customer.nama}>
                        {customer.nama}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="field">
                <label className="label">No Invoice</label>
                <div className="control">
                  <input
                    disabled
                    type="text"
                    className="input"
                    value={noInvoice}
                    placeholder="No Invoice"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Invoice</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={tglInvoice}
                    onChange={(e) => setTglInvoice(e.target.value)}
                    placeholder="Tanggal Invoice"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">No SJ</label>
                <div className="control">
                <select
                    value={selectedNoSJOption}
                    onChange={handleNoSJChange}
                    className="input"
                  >
                    <option value="">Pilih No SJ</option>
                    {noSJOptions.map((sj, index) => (
                      <option key={index} value={sj.noSuratJalan}>
                        {sj.noSuratJalan}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="field">
                <label className="label">Surat Jalan Id</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    disabled
                    value={idSuratJalan}
                    // onChange={(e) => setNoKTP(e.target.value)}
                    placeholder="No KTP"
                  />
                </div>
              </div>
              
              <div className="field">
                <label className="label">Order Id</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    disabled
                    value={orderId}
                    // onChange={(e) => setOrderId(e.target.value)}
                    placeholder="No KTP"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">No KTP</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={noKTP}
                    onChange={(e) => setNoKTP(e.target.value)}
                    placeholder="No KTP"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal SJ</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={tglSJ}
                    onChange={(e) => setTglSJ(e.target.value)}
                    placeholder="Tanggal SJ"
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
              
              <hr />
              {selectedProducts.map((product, index) => (
                <div key={index}>
                  <div className="field">
                    <label className="label">Kode Product</label>
                    <div className="control">
                      <select
                        className="select input"
                        name="kodeProduct"
                        value={product.kodeProduct}
                        onChange={(e) => handleChangeProductField(index, e)}
                      >
                        <option value="">Select Kode Product</option>
                        {kodeProductOptions.map((option) => (
                          <option key={option.kodeProduct} value={option.kodeProduct}>
                            {option.kodeProduct}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Jumlah</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        name="jumlah"
                        value={product.jumlah}
                        onChange={(e) => handleChangeProductField(index, e)}
                        placeholder="Jumlah"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Harga</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        name="harga"
                        value={product.harga}
                        onChange={(e) => handleChangeProductField(index, e)}
                        placeholder="Harga"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button is-danger"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    Remove Product
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

export default FormAddInvoice;
