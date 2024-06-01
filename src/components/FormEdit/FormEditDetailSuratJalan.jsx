import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditDetailSuratJalan= () => {
  const [details, setDetails] = useState([]);
  const [details2, setDetails2] = useState([]);
//   const [namaProduct, setNamaProduct] = useState("");
//   const [jumlahProduct, setJumlahProduct] = useState(0);
//   const [hargaSatuan, setHargaSatuan] = useState(0.0);
//   const [totalHarga, setTotalHarga] = useState(0);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/detailsuratjalan/${id}`);
        setDetails(response.data);
        setDetails2(response.data.products);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    fetchData();
  }, [id]);
  console.log(id);
  console.log(details)
  console.log(details2)

  const updateSuratJalan = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/suratjalan/${id}`, {
        products: details
      });
      navigate("/suratjln");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const handleProductChange = (index, field, value) => {
    const newDetails = [...details];
    newDetails[index][field] = value;
    setDetails(newDetails);

    console.log("NewDetails",newDetails)
  };

  console.log("details ",details)

  return (
    <div>
      <h1 className="title">Detail Surat Jalan</h1>
      <h2 className="subtitle">Update Detail Surat Jalan</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateSuratJalan}>
              <p className="has-text-centered">{msg}</p>
              {details.map((product, index) => (
                <div key={index}>
                  <div className="field">
                    <label className="label">Kode Product</label>
                    <div className="control">
                      <input
                        disabled
                        type="text"
                        className="input"
                        value={product.kodeProduct}
                        onChange={(e) => handleProductChange(index, 'kodeProduct', e.target.value)}
                        placeholder="Kode Product"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Nama Product</label>
                    <div className="control">
                      <input
                        disabled
                        type="text"
                        className="input"
                        value={product.namaProduct}
                        onChange={(e) => handleProductChange(index, 'namaProduct', e.target.value)}
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
                        onChange={(e) => handleProductChange(index, 'jumlahProduct', e.target.value)}
                        placeholder="Jumlah Product"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Harga Satuan</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        value={product.hargaSatuan}
                        onChange={(e) => handleProductChange(index, 'hargaSatuan', e.target.value)}
                        placeholder="Harga Satuan"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Total Harga</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        value={product.totalHarga}
                        onChange={(e) => handleProductChange(index, 'totalHarga', e.target.value)}
                        placeholder="Harga Satuan"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
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

export default FormEditDetailSuratJalan;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const FormEditSuratJalan= () => {
//   const [products, setProducts] = useState([]);
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/suratjalan/${id}`);
//         setProducts(response.data.products);
//       } catch (error) {
//         if (error.response) {
//           setMsg(error.response.data.msg);
//         }
//       }
//     };
//     fetchData();
//   }, [id]);

//   const updateSuratJalan = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.patch(`http://localhost:5000/suratjalan/${id}`, {
//         products: products
//       });
//       navigate("/suratjln");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   const handleProductChange = (index, field, value) => {
//     const newProducts = [...products];
//     newProducts[index][field] = value;
//     setProducts(newProducts);
//   };

//   return (
//     <div>
//       <h1 className="title">Surat Jalan</h1>
//       <h2 className="subtitle">Update Surat Jalan</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={updateSuratJalan}>
//               <p className="has-text-centered">{msg}</p>
//               {products.map((product, index) => (
//                 <div key={index}>
//                   <div className="field">
//                     <label className="label">Kode Product</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.kodeProduct}
//                         onChange={(e) => handleProductChange(index, 'kodeProduct', e.target.value)}
//                         placeholder="Kode Product"
//                       />
//                     </div>
//                   </div>
//                   <div className="field">
//                     <label className="label">Nama Product</label>
//                     <div className="control">
//                       <input
//                         type="text"
//                         className="input"
//                         value={product.namaProduct}
//                         onChange={(e) => handleProductChange(index, 'namaProduct', e.target.value)}
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
//                         onChange={(e) => handleProductChange(index, 'jumlahProduct', e.target.value)}
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
//                         onChange={(e) => handleProductChange(index, 'hargaSatuan', e.target.value)}
//                         placeholder="Harga Satuan"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Update
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

// export default FormEditSuratJalan;