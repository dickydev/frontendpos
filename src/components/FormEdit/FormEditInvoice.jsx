import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditInvoice = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confPassword, setConfPassword] = useState("");
  // const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const [namaCust, setNamaCust] = useState("");
  const [noInvoice, setNoInvoice] = useState("");
  const [tglInvoice, setTglInvoice] = useState("");
  const [noSJ, setNoSJ] = useState("");
  const [noKTP, setNoKTP] = useState("");
  const [tglSJ, setTglSJ] = useState("");
  const [kodeProduct, setKodeProduct] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [harga, setHarga] = useState("");
  const [keterangan, setKeterangan] = useState("");
  // const [msg, setMsg] = useState("");
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getInvoiceById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/invoice/${id}`);
        setHarga(response.data.harga);
        setJumlah(response.data.jumlah);
        setKeterangan(response.data.keterangan);
        setKodeProduct(response.data.kodeProduct);
        setNamaCust(response.data.namaCust);
        setNoInvoice(response.data.noInvoice);
        setNoKTP(response.data.noKTP);
        setNoSJ(response.data.noSJ);
        setTglInvoice(response.data.tglInvoice);
        setTglSJ(response.data.tglSJ);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getInvoiceById();
  }, [id]);

  const updateInvoice = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/invoice/${id}`, {
        namaCust:namaCust,
        noInvoice:noInvoice,
        tglInvoice:tglInvoice,
        noSJ:noSJ,
        noKTP : noKTP,
        tglSJ : tglSJ,
        kodeProduct : kodeProduct,
        jumlah : jumlah,
        harga : harga,
        keterangan : keterangan
      });
      navigate("/invoice");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Invoice</h1>
      <h2 className="subtitle">Update Invoice</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateInvoice}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Customer</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaCust}
                    onChange={(e) => setNamaCust(e.target.value)}
                    placeholder="Nama Customer"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">No Invoice</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={noInvoice}
                    onChange={(e) => setNoInvoice(e.target.value)}
                    placeholder="Nomor Invoice"
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
                  <input
                    type="text"
                    className="input"
                    value={noSJ}
                    onChange={(e) => setNoSJ(e.target.value)}
                    placeholder="Nomor SJ"
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
                    placeholder="Nomor KTP"
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
                <label className="label">Kode Product</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kodeProduct}
                    onChange={(e) => setKodeProduct(e.target.value)}
                    placeholder="Kode Product"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Jumlah</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={jumlah}
                    onChange={(e) => setJumlah(e.target.value)}
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
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                    placeholder="Harga"
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

export default FormEditInvoice;
