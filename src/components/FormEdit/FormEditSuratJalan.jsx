import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditSuratJalan= () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confPassword, setConfPassword] = useState("");
  // const [role, setRole] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [noSJ, setNoSJ] = useState("");
  // const [kdProduct, setKdProduct] = useState("");
  // const [namaProduct, setNamaProduct] = useState("");
  // const [jumlahProduct, setJumlahProduct] = useState("");
  // const [hargaSatuan, setHargaSatuan] = useState("");
  // const [totalHarga, setTotalHarga] = useState("");
  const [noMobil, setNoMobil] = useState("");
  const [namaSopir, setNamaSopir] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getSJById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/suratjalan/${id}`);
        // setName(response.data.name);
        // setEmail(response.data.email);
        // setRole(response.data.role);
        setTanggal(response.data.tanggal);
        setNoSJ(response.data.noSuratJalan);
        // setKdProduct(response.data.kodeProduct);
        // setNamaProduct(response.data.namaProduct);
        // setJumlahProduct(response.data.jumlahProduct);
        // setHargaSatuan(response.data.hargaSatuan);
        // setTotalHarga(response.data.totalHarga);
        setNoMobil(response.data.noMobil);
        setNamaSopir(response.data.namaSopir);
        setKeterangan(response.data.keterangan);

      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getSJById();
  }, [id]);

  const updateSuratJalan = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/suratjalan/${id}`, {
        // name: name,
        // email: email,
        // password: password,
        // confPassword: confPassword,
        // role: role,
        tanggal: tanggal,
        noSuratJalan: noSJ,
        // kodeProduct: kdProduct,
        // namaProduct: namaProduct,
        // jumlahProduct: jumlahProduct,
        // hargaSatuan: hargaSatuan,
        // totalHarga: totalHarga,
        noMobil: noMobil,
        namaSopir: namaSopir,
        keterangan: keterangan
      });
      navigate("/suratjln");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Surat Jalan</h1>
      <h2 className="subtitle">Update Surat Jalan</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateSuratJalan}>
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
                <label className="label">No Surat Jalan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={noSJ}
                    onChange={(e) => setNoSJ(e.target.value)}
                    placeholder="No Surat Jalan"
                  />
                </div>
              </div>
              {/* <div className="field">
                <label className="label">Kode Product</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kdProduct}
                    onChange={(e) => setKdProduct(e.target.value)}
                    placeholder="Kode Product"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nama Product</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaProduct}
                    onChange={(e) => setNamaProduct(e.target.value)}
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
                    value={jumlahProduct}
                    onChange={(e) => setJumlahProduct(e.target.value)}
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
                    value={hargaSatuan}
                    onChange={(e) => setHargaSatuan(e.target.value)}
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
                    value={totalHarga}
                    onChange={(e) => setTotalHarga(e.target.value)}
                    placeholder="Total Harga"
                  />
                </div>
              </div> */}
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

export default FormEditSuratJalan;

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
