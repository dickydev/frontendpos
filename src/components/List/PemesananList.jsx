// // import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// // import axios from "axios";

// const PemesananList = () => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     getProducts();
// //   }, []);

// //   const getProducts = async () => {
// //     const response = await axios.get("http://localhost:5000/products");
// //     setProducts(response.data);
// //   };

// //   const deleteProduct = async (productId) => {
// //     await axios.delete(`http://localhost:5000/products/${productId}`);
// //     getProducts();
// //   };

//   return (
//     <div>
//       <h1 className="title">Pemesanan</h1>
//       <h2 className="subtitle">List of Pemesanan</h2>
//       <Link to="/pemesanan/add" className="button is-primary mb-2">
//         Add New
//       </Link>
//       <table className="table is-striped is-fullwidth">
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>Tanggal Order</th>
//             <th>No Order</th>
//             <th>Kode Agen</th>
//             <th>Nama Agen</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {products.map((product, index) => (
//             <tr key={product.uuid}>
//               <td>{index + 1}</td>
//               <td>{product.kodeProduct}</td>
//               <td>{product.namaProduct}</td>
//               <td>{product.harga}</td>
//               <td>{product.user.name}</td>
//               <td>
//                 <Link
//                   to={`/products/edit/${product.uuid}`}
//                   className="button is-small is-info"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   onClick={() => deleteProduct(product.uuid)}
//                   className="button is-small is-danger"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))} */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PemesananList;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PemesananList = () => {
  const [pemesanan, setPemesanan] = useState([]);

  useEffect(() => {
    getPemesanan();
  }, []);

  const getPemesanan = async () => {
    const response = await axios.get("http://localhost:5000/order");
    setPemesanan(response.data);
  };

  const deletePemesanan = async (pemesananId) => {
    await axios.delete(`http://localhost:5000/order/${pemesananId}`);
    getPemesanan();
  };

  return (
    <div>
      <h1 className="title">Pemesanan</h1>
      <h2 className="subtitle">List of Pemesanan</h2>
      <Link to="/pemesanan/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal Order</th>
            <th>No Order</th>
            <th>Kode Agen</th>
            <th>Nama Agen</th>
            {/* <th>Kode Product</th>
            <th>Nama Product</th>
            <th>Jumlah</th> */}
            <th>Tanggal Kirim</th>
            <th>Keterangan</th>
            <th>Pembayaran</th>
            <th>Id Order</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pemesanan.map((order, index) => (
            <tr key={order.uuid}>
              <td>{index + 1}</td>
              <td>{order.tglOrder}</td>
              <td>{order.noOrder}</td>
              <td>{order.kodeAgen}</td>
              <td>{order.namaAgen}</td>
              {/* <td>{order.kodeAgen}</td>
              <td>{order.namaAgen}</td>
              <td>{order.kodeProduct}</td>
              <td>{order.namaProduct}</td>
              <td>{order.jumlah}</td> */}
              <td>{order.tglKirim}</td>
              <td>{order.keterangan}</td>
              <td>{order.pembayaran}</td>
              <td>{order.id}</td>
              <td>
                <Link
                  to={`/pemesanan/edit/${order.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deletePemesanan(order.id)}
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

export default PemesananList;
