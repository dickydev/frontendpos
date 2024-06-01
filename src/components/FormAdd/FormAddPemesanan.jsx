// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddPemesanan = () => {
//   const [tglOrder, setTglOrder] = useState("");
//   const [noOrder, setNoOrder] = useState("");
//   const [kodeAgen, setKodeAgen] = useState("");
//   const [namaAgen, setNamaAgen] = useState("");
//   const [jumlah, setJumlah] = useState("");
//   const [tanggalKirim, setTanggalKirim] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [pembayaran, setPembayaran] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Ambil data produk terakhir dari server saat komponen dimuat
// //     const fetchLastProduct = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:5000/products");
// //         const lastProduct = response.data[response.data.length - 1]; // Ambil produk terakhir dari array
// //         if (lastProduct) {
// //           // Jika ada produk terakhir, tentukan kode produk berikutnya
// //           const lastKodeProduct = lastProduct.kodeProduct;
// //           const nextKodeProduct = getNextKodeProduct(lastKodeProduct);
// //         //   setKodeProduct(nextKodeProduct);
// //         } else {
// //           // Jika tidak ada produk sebelumnya, set kode produk menjadi default
// //         //   setKodeProduct("KD001");
// //         }
// //       } catch (error) {
// //         console.error("Error fetching last product:", error);
// //       }
// //     };

// //     fetchLastProduct();
// //   }, []);

// //   const getNextKodeProduct = (lastKodeProduct) => {
// //     // Ubah kode produk terakhir menjadi nomor, tambahkan 1, lalu kembalikan sebagai string
// //     const lastNumber = parseInt(lastKodeProduct.replace(/\D/g, ""), 10);
// //     const nextNumber = lastNumber + 1;
// //     return `KD${nextNumber.toString().padStart(3, "0")}`; // Format kode produk berikutnya
// //   };

//   const savePemesanan = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/order", {
//         tglOrder : tglOrder,
//         noOrder : noOrder,
//         kodeAgen : kodeAgen,
//         namaAgen : namaAgen,
//         jumlah : jumlah,
//         tanggalKirim : tanggalKirim,
//         keterangan : keterangan,
//         pembayaran: pembayaran
//       });
//       navigate("/pemesanan");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };
//   console.log(tglOrder);

//   return (
//   //   <div>
//   //     <h1 className="title">Products</h1>
//   //     <h2 className="subtitle">Add New Product</h2>
//   //     <div className="card is-shadowless">
//   //       <div className="card-content">
//   //         <div className="content">
//   //           <form onSubmit={saveProduct}>
//   //             <p className="has-text-centered">{msg}</p>
//   //             <div className="field">
//   //               <label className="label">Kode Product</label>
//   //               <div className="control">
//   //                 <input
//   //                   type="text"
//   //                   className="input"
//   //                   value={kodeProduct}
//   //                   onChange={(e) => setKodeProduct(e.target.value)}
//   //                   placeholder="Kode Product"
//   //                 />
//   //               </div>
//   //             </div>
//   //             <div className="field">
//   //               <label className="label">Nama Product</label>
//   //               <div className="control">
//   //                 <input
//   //                   type="text"
//   //                   className="input"
//   //                   value={namaProduct}
//   //                   onChange={(e) => setNamaProduct(e.target.value)}
//   //                   placeholder="Product Name"
//   //                 />
//   //               </div>
//   //             </div>
//   //             <div className="field">
//   //               <label className="label">Price</label>
//   //               <div className="control">
//   //                 <input
//   //                   type="text"
//   //                   className="input"
//   //                   value={harga}
//   //                   onChange={(e) => setHarga(e.target.value)}
//   //                   placeholder="Price"
//   //                 />
//   //               </div>
//   //             </div>

//   //             <div className="field">
//   //               <div className="control">
//   //                 <button type="submit" className="button is-success">
//   //                   Save
//   //                 </button>
//   //               </div>
//   //             </div>
//   //           </form>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
//   <div>
//       <h1 className="title">Pemesanan</h1>
//       <h2 className="subtitle">Add New Pemesanan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={savePemesanan}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal Pemesanan</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={tglOrder}
//                     onChange={(e) => setTglOrder(e.target.value)}
//                     placeholder="Tanggal Order"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Order</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={noOrder}
//                     onChange={(e) => setNoOrder(e.target.value)}
//                     placeholder="No Order"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Agen</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={kodeAgen}
//                     onChange={(e) => setKodeAgen(e.target.value)}
//                     placeholder="Kode Agen"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Agen</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={namaAgen}
//                     onChange={(e) => setNamaAgen(e.target.value)}
//                     placeholder="Nama Agen"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Jumlah</label>
//                 <div className="control">
//                   <input
//                     type="number"
//                     className="input"
//                     value={jumlah}
//                     onChange={(e) => setJumlah(e.target.value)}
//                     placeholder="Jumlah"
//                   />
//                 </div>
//               </div>
// <div className="field">
//   <label className="label">Tanggal Kirim</label>
//   <div className="control">
//     <input
//       type="text"
//       className="input"
//       value={tanggalKirim}
//       onChange={(e) => setTanggalKirim(e.target.value)}
//       placeholder="Tanggal Kirim"
//     />
//   </div>
// </div>
// <div className="field">
//   <label className="label">Keterangan</label>
//   <div className="control">
//     <input
//       type="text"
//       className="input"
//       value={keterangan}
//       onChange={(e) => setKeterangan(e.target.value)}
//       placeholder="Keterangan"
//     />
//   </div>
// </div>
//               <div className="field">
//                 <label className="label">Pembayaran</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={pembayaran}
//                     onChange={(e) => setPembayaran(e.target.value)}
//                     placeholder="Pembayaran"
//                   />
//                   {/* <select name="" id="" className="input" onChange={(e) => setPembayaran(e.target.value)}>
//                     <option value="cash">Cash</option>
//                     <option value="cod">Cod</option>
//                     <option value="tempo">Tempo</option>
//                   </select> */}
//                 </div>
//               </div>
//               {/* <div className="field">
//                 <label className="label">Tanggal Pengiriman</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={tanggalKirim}
//                     onChange={(e) => setTanggalKirim(e.target.value)}
//                     placeholder="Tanggal Pengiriman"
//                   />
//                 </div>
//               </div> */}
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

// export default FormAddPemesanan;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddPemesanan = () => {
//   const [tglOrder, setTglOrder] = useState("");
//   const [noOrder, setNoOrder] = useState("");
//   const [kodeAgen, setKodeAgen] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState("");
//   const [namaAgen, setNamaAgen] = useState("");
//   const [jumlah, setJumlah] = useState(0); // Default value 0
//   const [tanggalKirim, setTanggalKirim] = useState("");
//   const [keterangan, setKeterangan] = useState("");
//   const [pembayaran, setPembayaran] = useState("cash"); // Default value "cash"
//   const [kodeProductOptions, setKodeProductOptions] = useState([]);
//   const [selectedProductUUID, setSelectedProductUUID] = useState("");
//   const [selectedKodeProduct, setSelectedKodeProduct] = useState("");
//   const [id, setId] = useState();
//   const [namaProduct, setNamaProduct] = useState("");
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   // const [customers, setCustomers] = useState([]);
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLastOrder = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/order");
//         const lastOrder = response.data[response.data.length - 1];
//         if (lastOrder) {
//           const lastNoOrder = lastOrder.noOrder;
//           const nextNoOrder = getNextNoOrder(lastNoOrder);
//           setNoOrder(nextNoOrder);
//         } else {
//           setNoOrder("ORD001");
//         }
//       } catch (error) {
//         console.error("Error fetching last order:", error);
//       }
//     };

//     fetchLastOrder();
//   }, []);

//   console.log("Selected , ", selectedProducts)

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

//   console.log("Kode product options 1, ", kodeProductOptions)

//   const getNextNoOrder = (lastNoOrder) => {
//     const lastNumber = parseInt(lastNoOrder.replace(/\D/g, ""), 10);
//     const nextNumber = lastNumber + 1;
//     return `ORD${nextNumber.toString().padStart(3, "0")}`;
//   };

//   const savePemesanan = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/order", {
//         tglOrder: tglOrder,
//         noOrder: noOrder,
//         kodeAgen: selectedCustomer,
//         namaAgen: namaAgen,
//         kodeProduct: selectedProductUUID,
//         namaProduct: namaProduct,
//         jumlah: jumlah,
//         tglKirim: tanggalKirim,
//         keterangan: keterangan,
//         pembayaran: pembayaran,
//         productId: id,
//       });
//       navigate("/pemesanan");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.message); // Update to use "message"
//       }
//     }
//   };

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/customers");
//         const reqResponse = response.data;
//         const result = reqResponse.map((hasil) => hasil.kodeCust);
//         console.log(result);
//         setKodeAgen(result);
//       } catch (error) {
//         console.error("Error fetching customers:", error);
//       }
//     };

//     fetchCustomers();
//   }, []);

//   useEffect(() => {
//     const fetchCustomersDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/customers/${selectedCustomer}`
//         );
//         const cust = response.data;
//         setNamaAgen(cust.nama);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };

//     if (selectedCustomer) {
//       fetchCustomersDetails();
//     }
//   }, [selectedCustomer]);

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

//   console.log("Kode product options , ", kodeProductOptions)

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/products/${selectedKodeProduct}`
//         );
//         const product = response.data;
//         setSelectedProductUUID(product.kodeProduct);
//         setId(product.id);
//         setNamaProduct(product.namaProduct);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };

//     if (selectedKodeProduct) {
//       fetchProductDetails();
//     }
//   }, [selectedKodeProduct]);

//   // kodeAgen.map((c)=>console.log(c.kodeCust))

//   // Fungsi untuk menentukan kelas CSS berdasarkan jenis pembayaran
//   // const jumlahClassName = () => {
//   //   if (pembayaran === "cash" || pembayaran === "cod") {
//   //     return "input is-success"; // Hijau untuk pembayaran cash dan cod
//   //   } else if (pembayaran === "kredit" || pembayaran === "tempo") {
//   //     return "input is-warning"; // Kuning untuk pembayaran kredit dan tempo
//   //   } else if (pembayaran === "utang") {
//   //     return "input is-danger"; // Merah untuk pembayaran utang
//   //   }
//   //   return "input";
//   // };

//   const findProductName = (selectedKodeProduct) => {
//     const selectedProduct = kodeProductOptions.find(
//       (product) => product.kodeProduct === selectedKodeProduct
//       );
//       return selectedProduct ? selectedProduct.namaProduct : "";
//     };

//     const handleChangeProductField = (index, event) => {
//       const { name, value } = event.target;
//     const newProducts = [...selectedProducts];
//     const productName = findProductName(value); // Menemukan nama produk berdasarkan kode produk yang dipilih
//     newProducts[index][name] = value; // Memperbarui nilai yang sesuai di dalam array produk yang dipilih
//     newProducts[index].namaProduct = productName; // Memperbarui nama produk

//     setSelectedProducts(newProducts); // Memperbarui state selectedProducts dengan produk yang telah diperbarui
//   };

//   const handleAddProduct = () => {
//     setSelectedProducts([
//       ...selectedProducts,
//       {
//         kodeProduct: "",
//         namaProduct: "",
//         jumlah: 0,
//         tanggalKirim: "",
//         keterangan: "",
//         pembayaran: "cash",
//       },
//     ]);
//   };
//   console.log( "Selected Products" ,selectedProducts)

//   const handleRemoveProduct = (index) => {
//     const newProducts = [...selectedProducts];
//     newProducts.splice(index, 1);
//     setSelectedProducts(newProducts);
//   };

//   return (
//     <div>
//       <h1 className="title">Pemesanan</h1>
//       <h2 className="subtitle">Add New Pemesanan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={savePemesanan}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Tanggal Pemesanan</label>
//                 <div className="control">
//                   <input
//                     type="date" // Changed to type "date" for date input
//                     className="input"
//                     value={tglOrder}
//                     onChange={(e) => setTglOrder(e.target.value)}
//                     placeholder="Tanggal Order"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">No Order</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     disabled
//                     value={noOrder}
//                     onChange={(e) => setNoOrder(e.target.value)}
//                     placeholder="No Order"
//                   />
//                 </div>
//               </div>
//               {/* <div className="field">
//                  <label className="label">Kode Agen</label>
//                  <div className="control">
//                    <input
//                      type="text"
//                      className="input"
//                      value={kodeAgen}
//                      onChange={(e) => setKodeAgen(e.target.value)}
//                      placeholder="Kode Agen"
//                    />
//                  </div>
//                </div> */}
//               <div className="field">
//                 <label className="label">Kode Agen</label>
//                 <div className="control">
//                   <select
//                     value={selectedCustomer}
//                     onChange={(e) => setSelectedCustomer(e.target.value)}
//                     className="input"
//                   >
//                     <option value="">Pilih Customer</option>
//                     {kodeAgen.map((customer, index) => (
//                       <option key={index} value={customer}>
//                         {customer}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Nama Agen</label>
//                 <div className="control">
//                   <input
//                     disabled
//                     type="text"
//                     className="input"
//                     value={namaAgen}
//                     onChange={(e) => setNamaAgen(e.target.value)}
//                     placeholder="Nama Agen"
//                   />
//                 </div>
//               </div>
//               <div className="control">
//                 <button
//                   type="button"
//                   className="button is-primary"
//                   onClick={handleAddProduct}
//                 >
//                   Add Product
//                 </button>
//               </div>
//               {/* <div className="field">
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
//                 <label className="label">Id Product</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={id}
//                     disabled
//                   />
//                 </div>
//               </div> */}
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
//                         value={product.namaProduct}
//                         disabled // Jadikan input tidak dapat diubah
//                         placeholder="Nama Product"
//                       />
//                     </div>
//                   </div>
//                   {/* Tambahkan input fields lainnya seperti jumlah, tanggal kirim, keterangan, dan pembayaran */}
//                   <button
//                     type="button"
//                     className="button is-danger"
//                     onClick={() => handleRemoveProduct(index)}
//                   >
//                     Delete Product
//                   </button>
//                   <div className="field">
//                     <div className="control">
//                       <button
//                         type="button"
//                         className="button is-primary"
//                         onClick={handleAddProduct}
//                       >
//                         Add Product
//                       </button>
//                     </div>
//                   </div>
//                   <hr />
//                 </div>
//               ))}

//               <div className="field">
//                 <label className="label">Tanggal Kirim</label>
//                 <div className="control">
//                   <input
//                     type="date"
//                     className="input"
//                     value={tanggalKirim}
//                     onChange={(e) => setTanggalKirim(e.target.value)}
//                     placeholder="Tanggal Kirim"
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
//               {/* Add other input fields similarly */}
//               <div className="field">
//                 <label className="label">Jumlah</label>
//                 <div className="control">
//                   <input
//                     type="number" // Changed to type "number" for integer input
//                     className="input"
//                     value={jumlah}
//                     onChange={(e) => setJumlah(parseInt(e.target.value))}
//                     placeholder="Jumlah"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Pembayaran</label>
//                 <div className="control">
//                   <select
//                     className="input"
//                     value={pembayaran}
//                     onChange={(e) => setPembayaran(e.target.value)}
//                   >
//                     <option value="cash">Cash</option>
//                     <option value="cod">Cod</option>
//                     <option value="tempo">Tempo</option>
//                   </select>
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

// export default FormAddPemesanan;
// FormAddPemesanan.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddPemesanan = () => {
  const [tglOrder, setTglOrder] = useState("");
  const [noOrder, setNoOrder] = useState("");
  const [kodeAgen, setKodeAgen] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [namaAgen, setNamaAgen] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [tanggalKirim, setTanggalKirim] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [pembayaran, setPembayaran] = useState("cash");
  const [selectedProductUUID, setSelectedProductUUID] = useState("");
  const [id, setId] = useState();
  const [namaProduct, setNamaProduct] = useState("");
  const [productOptions, setProductOptions] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]); //
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLastOrder = async () => {
      try {
        const response = await axios.get("http://localhost:5000/order");
        const lastOrder = response.data[response.data.length - 1];
        if (lastOrder) {
          const lastNoOrder = lastOrder.noOrder;
          const nextNoOrder = getNextNoOrder(lastNoOrder);
          setNoOrder(nextNoOrder);
        } else {
          setNoOrder("ORD001");
        }
      } catch (error) {
        console.error("Error fetching last order:", error);
      }
    };

    fetchLastOrder();
  }, []);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/customers");
        const reqResponse = response.data;
        const result = reqResponse.map((hasil) => hasil.kodeCust);
        // console.log(result);
        setKodeAgen(result);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    const fetchCustomersDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/customers/${selectedCustomer}`
        );
        const cust = response.data;
        setNamaAgen(cust.nama);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (selectedCustomer) {
      fetchCustomersDetails();
    }
  }, [selectedCustomer]);

  useEffect(() => {
    const fetchProductOptions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProductOptions(response.data);
      } catch (error) {
        console.error("Error fetching product options:", error);
      }
    };
    fetchProductOptions();
  }, []);
  console.log(productOptions);

  const getNextNoOrder = (lastNoOrder) => {
    const lastNumber = parseInt(lastNoOrder.replace(/\D/g, ""), 10);
    const nextNumber = lastNumber + 1;
    return `ORD${nextNumber.toString().padStart(3, "0")}`;
  };

  // const findProductName = (selectedKodeProduct) => {
  //   const selectedProduct = selectedProducts.find(
  //     (product) => product.kodeProduct === selectedKodeProduct
  //   );
  //   return selectedProduct ? selectedProduct.namaProduct : "";
  // };

  const handleChangeProductField = async(index, event) => {
    const { name, value } = event.target;
    console.log('NAME', name)
    console.log('VALUE', value)
    
  const newProducts = [...selectedProducts];
  console.log('NEW PRODUCT', newProducts)

  
  // Dapatkan nama produk berdasarkan kode produk dari database
  const productName = await findProductName(value);
  console.log('PRODUCT NAME', productName)
  // Tetapkan nilai kode produk dan nama produk
  newProducts[index][name] = value;
  newProducts[index].namaProduct = productName;
  
  setSelectedProducts(newProducts);
  };

  console.log(handleChangeProductField(1, "KD0001"))

  const findProductName = async (selectedKodeProduct) => {
    const selectedProduct = productOptions.find(product => product.kodeProduct === selectedKodeProduct);
    return selectedProduct ? selectedProduct.namaProduct : "";
  };
  

  const handleChangeJumlahProduct = (index, event) => {
    const { value } = event.target;
    const newProducts = [...selectedProducts];
    newProducts[index].jumlahProduct = value;
    setSelectedProducts(newProducts);
    handleCalculateTotalHarga(index); // Hitung total harga setelah mengubah jumlah product
  };

  const handleAddProduct = () => {
    setSelectedProducts([
      ...selectedProducts,
      {
        kodeProduct: "",
        jumlahProduct: "",
        namaProduct: findProductName(""),
        hargaSatuan: "",
        totalHarga : ""
      },
    ]);
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

  const handleChangeHargaSatuan = (index, event) => {
    const { value } = event.target;
    const newProducts = [...selectedProducts];
    newProducts[index].hargaSatuan = value;
    setSelectedProducts(newProducts);
    handleCalculateTotalHarga(index); // Hitung total harga setelah mengubah harga satuan
  };

  const handleRemoveProduct = (index) => {
    const newProducts = [...selectedProducts];
    newProducts.splice(index, 1);
    setSelectedProducts(newProducts);
  };

  productOptions.map((product)=>{
    return console.log('namaProduct : ',product.namaProduct);
  })

  const savePemesanan = async (e) => {
    e.preventDefault();
    try {
      const pemesanan = {
        tglOrder: tglOrder,
        noOrder: noOrder,
        kodeAgen: selectedCustomer,
        namaAgen: namaAgen,
        // kodeProduct: selectedProductUUID,
        // namaProduct: namaProduct,
        // jumlah: jumlah,
        tglKirim: tanggalKirim,
        keterangan: keterangan,
        pembayaran: pembayaran,
        productId: id,
      };

      const response = await axios.post(
        "http://localhost:5000/order",
        pemesanan
      );
      const pemesesananUUID = response.data.id;

      await Promise.all(
        selectedProducts.map(async (product) => {
          const detailPemesanan = {
            idOrder: pemesesananUUID,
            kodeProduct: product.kodeProduct,
            namaProduct: product.namaProduct,
            jumlahProduct: product.jumlahProduct,
            hargaSatuan: product.hargaSatuan,
            totalHarga: product.hargaSatuan,
          };
          await axios.post("http://localhost:5000/detail-orders", detailPemesanan)
        })
      );

      navigate("/pemesanan");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Pemesanan</h1>
      <h2 className="subtitle">Add New Pemesanan</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={savePemesanan}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Tanggal Pemesanan</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={tglOrder}
                    onChange={(e) => setTglOrder(e.target.value)}
                    placeholder="Tanggal Order"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">No Order</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    disabled
                    value={noOrder}
                    onChange={(e) => setNoOrder(e.target.value)}
                    placeholder="No Order"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Kode Agen</label>
                <div className="control">
                  <select
                    value={selectedCustomer}
                    onChange={(e) => setSelectedCustomer(e.target.value)}
                    className="input"
                  >
                    <option value="">Pilih Customer</option>
                    {kodeAgen.map((customer, index) => (
                      <option key={index} value={customer}>
                        {customer}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="field">
                <label className="label">Nama Agen</label>
                <div className="control">
                  <input
                    disabled
                    type="text"
                    className="input"
                    value={namaAgen}
                    onChange={(e) => setNamaAgen(e.target.value)}
                    placeholder="Nama Agen"
                  />
                </div>
              </div>
              <div className="control">
                <button
                  type="button"
                  className="button is-primary"
                  onClick={handleAddProduct}
                >
                  Add Product
                </button>
              </div>
              {selectedProducts.map((product, index) => (
                <div key={index}>
                  <div className="field">
                    <label className="label">Product</label>
                    <div className="control">
                      <select
                        name="kodeProduct"
                        // value={product.kodeProduct}
                        value={selectedProducts[index].kodeProduct}
                        onChange={(e) => handleChangeProductField(index, e)}
                        className="select input"
                      >
                        <option value="">Pilih Product</option>
                        {productOptions.map((product, index) => (
                          <option key={index} value={product.kodeProduct}>
                            {product.kodeProduct}
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
                        name="jumlah"
                        placeholder="Nama Product"
                        value={product.namaProduct}
                        readOnly
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Jumlah</label>
                    <div className="control">
                      <input
                        type="number"
                        name="jumlah"
                        value={product.jumlahProduct}
                        onChange={(e) => handleChangeJumlahProduct(index, e)}
                        className="input"
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

                  <div className="control">
                    <button
                      type="button"
                      className="button is-danger"
                      onClick={() => handleRemoveProduct(index)}
                    >
                      Remove Product
                    </button>
                  </div>
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
              ))}
              <div className="field">
                <label className="label">Tanggal Kirim</label>
                <div className="control">
                  <input
                    type="date"
                    name="tanggalKirim"
                    value={tanggalKirim}
                    onChange={(e) => setTanggalKirim(e.target.value)}
                    className="input"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Keterangan</label>
                <div className="control">
                  <textarea
                    name="keterangan"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                    className="textarea"
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <label className="label">Pembayaran</label>
                <div className="control">
                  <select
                    name="pembayaran"
                    value={pembayaran}
                    onChange={(e) => setPembayaran(e.target.value)}
                    className="input"
                  >
                    <option value="cash">Cash</option>
                    <option value="transfer">Transfer</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="button is-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddPemesanan;
