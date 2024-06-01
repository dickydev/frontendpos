import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditPemesanan = () => {
  const [tglOrder, setTglOrder] = useState("")
  const [noOrder, setNoOrder] = useState("")
  const [kodeAgen, setKodeAgen] = useState("")
  const [namaAgen, setNamaAgen] = useState("")
  const [jumlah, setJumlah] = useState("")
  const [tglKirim, setTglKirim] = useState("")
  const [keterangan, setKeterangan] = useState("")
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id)
  useEffect(() => {
    const getOrderById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/order/${id}`);
        setTglOrder(response.data.tglOrder);
        setNoOrder(response.data.noOrder);
        setKodeAgen(response.data.kodeAgen);
        setNamaAgen(response.data.namaAgen);
        setJumlah(response.data.jumlah);
        setTglKirim(response.data.tglKirim);
        setKeterangan(response.data.keterangan);
        console.log(response.data.tglOrder);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getOrderById();
  }, [id]);

  const updateOrder = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        // name: name,
        // email: email,
        // password: password,
        // confPassword: confPassword,
        // role: role,
        tglOrder : tglOrder,
        noOrder : noOrder,
        kodeAgen : kodeAgen,
        namaAgen: namaAgen,
        jumlah:jumlah,
        tglKirim: tglKirim,
        keterangan : keterangan
      });
      navigate("/pemesanan");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Pemesanan</h1>
      <h2 className="subtitle">Update Pemesanan</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateOrder}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Tanggal Order</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={tglOrder}
                    onChange={(e) => setTglOrder(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">No Order</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={noOrder}
                    onChange={(e) => setNoOrder(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Kode Agen</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kodeAgen}
                    onChange={(e) => setKodeAgen(e.target.value)}
                    placeholder="Kode Agen"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nama Agen</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaAgen}
                    onChange={(e) => setNamaAgen(e.target.value)}
                    placeholder="Nama Agen"
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
                    placeholder="Nama Agen"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Kirim</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={tglKirim}
                    onChange={(e) => setTglKirim(e.target.value)}
                    placeholder="Nama Agen"
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

export default FormEditPemesanan;
