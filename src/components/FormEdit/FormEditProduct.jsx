import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditProduct = () => {
  const [namaProduct, setNamaProduct] = useState("");
  const [harga, setHarga] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   const getProductById = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/products/${id}`
  //       );
  //       // setKodeProduct(response.data.kodeProduct);
  //       // setNamaProduct(response.data.namaProduct);
  //       // setHarga(response.data.harga);
  //       setNamaProduct(response.namaProduct || "");
  //       setHarga(response.harga || "");
  //       console.log(response);
  //       console.log(id);
  //     } catch (error) {
  //       if (error.response) {
  //         setMsg(error.response.data.msg);
  //       }
  //     }
  //   };
  //   getProductById();
  // }, [id]);
  // useEffect(() => {
  //   const getProductById = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5000/products/`);
  //       console.log(response); // Memeriksa respons dari server
  //       const responseData = response.data;
  //       if (responseData && responseData.data) {
  //         setNamaProduct(responseData.data.namaProduct || "");
  //         setHarga(responseData.data.harga || "");
  //       } else {
  //         // Data tidak ditemukan atau tidak sesuai struktur yang diharapkan
  //         setMsg("Data not found or invalid response structure");
  //       }
  //     } catch (error) {
  //       if (error.response) {
  //         setMsg(error.response.data.msg);
  //       }
  //     }
  //   };
  //   getProductById();
  // }, [id]);
  // useEffect(() => {
  //   const getProductById = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5000/products/${id}`);
  //       const response2 = await axios.get(`http://localhost:5000/products/`);
  //       console.log(id); // Memeriksa respons dari server
  //       console.log(response2.data[0].uuid); // Memeriksa respons dari server
  //       const responseData = response.data;
  //       console.log(responseData)
  //       if (responseData == null) {
  //         const { namaProduct, harga } = responseData;
  //         console.log("Nama Product:", namaProduct);
  //         console.log("Harga:", harga);
  //         setNamaProduct(namaProduct || "");
  //         setHarga(harga || "");
  //       } else {
  //         // Data tidak ditemukan atau tidak sesuai struktur yang diharapkan
  //         setMsg("Data not found or invalid response structure");
  //       }
  //     } catch (error) {
  //       if (error.response) {
  //         setMsg(error.response.data.msg);
  //       }
  //     }
  //   };
  //   getProductById();
  // }, [id]);
  

  // const updateProduct = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.patch(`http://localhost:5000/products/${id}`, {
  //       // kodeProduct: kodeProduct,
  //       namaProduct: namaProduct,
  //       harga: harga,
  //     });
  //     console.log(namaProduct);
  //     navigate("/products");
  //   } catch (error) {
  //     if (error.response) {
  //       setMsg(error.response.data.msg);
  //       console.log(namaProduct);
  //     }
  //   }
  // };

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setNamaProduct(response.data.namaProduct);
        setHarga(response.data.harga);
        setJumlah(response.data.jumlah);
        
        console.log(response.data.namaProduct);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
        namaProduct: namaProduct,
        harga: harga,
        jumlah : jumlah,

      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  // console.log(harga);

  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Edit Product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateProduct}>
              <p className="has-text-centered">{msg}</p>
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
                <label className="label">Jumlah</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={parseInt(jumlah)}
                    onChange={(e) => setJumlah(e.target.value)}
                    placeholder="Jumlah Product"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                    placeholder="harga"
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

export default FormEditProduct;
