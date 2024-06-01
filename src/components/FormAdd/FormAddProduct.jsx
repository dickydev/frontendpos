import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddProduct = () => {
  const [kodeProduct, setKodeProduct] = useState("");
  const [namaProduct, setNamaProduct] = useState("");
  const [harga, setHarga] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil data produk terakhir dari server saat komponen dimuat
    const fetchLastProduct = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        const lastProduct = response.data[response.data.length - 1]; 
        if (lastProduct) {
          const lastKodeProduct = lastProduct.kodeProduct;
          const nextKodeProduct = getNextKodeProduct(lastKodeProduct);
          setKodeProduct(nextKodeProduct);
        } else {
          setKodeProduct("KD001");
        }
      } catch (error) {
        console.error("Error fetching last product:", error);
      }
    };

    fetchLastProduct();
  }, []);

  const getNextKodeProduct = (lastKodeProduct) => {
    // Ubah kode produk terakhir menjadi nomor, tambahkan 1, lalu kembalikan sebagai string
    const lastNumber = parseInt(lastKodeProduct.replace(/\D/g, ""), 10);
    const nextNumber = lastNumber + 1;
    return `KD${nextNumber.toString().padStart(3, "0")}`; // Format kode produk berikutnya
  };


  console.log(jumlah)
  console.log(typeof jumlah)
  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        kodeProduct : kodeProduct,
        namaProduct : namaProduct,
        harga : harga,
        jumlah : jumlah
      });
      console.log(kodeProduct)
      navigate("/products");
    } catch (error) {
      // console.error("Error saving product:", error); // Tambahkan pesan kesalahan ke konsol untuk pemecahan masalah
      if (error.response) {
        setMsg(error.response.data.msg);
      } else {
        setMsg("An error occurred while saving the product."); // Pesan kesalahan umum jika tidak ada respons dari server
      }
    }
    
  };

  console.log(jumlah)
  console.log(typeof jumlah)



  return (
  <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Add New Product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveProduct}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Kode Product</label>
                <div className="control">
                  <input
                    disabled
                    type="text"
                    className="input"
                    value={kodeProduct}
                    onChange={(e) => setKodeProduct(e.target.value)}
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
                    placeholder="Product Name"
                  />
                </div>
              </div>
              {/* <div className="field">
                <label className="label">Jumlah</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={jumlah}
                    onChange={(e) => setJumlah(e.target.value)}
                    placeholder="Jumlah Product"
                  />
                </div>
              </div> */}
              
              <div className="field">
                <label className="label">Harga</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                    placeholder="Price"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Jumlah</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={(jumlah)}
                    onChange={(e) => setJumlah(e.target.value)}
                    placeholder="Jumlah"
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

export default FormAddProduct;
