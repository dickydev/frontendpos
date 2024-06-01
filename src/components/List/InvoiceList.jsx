import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import {saveAs} from 'file-saver'

const InvoiceList = () => {
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    getInvoice();
  }, []);

  const getInvoice = async () => {
    const response = await axios.get("http://localhost:5000/invoice");
    setInvoice(response.data);
  };

  const deleteInvoice = async (invoiceId) => {
    await axios.delete(`http://localhost:5000/invoice/${invoiceId}`);
    getInvoice();
  };

  const cetakInvoice = (invoice) => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [["Nama Customer", "No Invoice", "Tanggal Invoice", "Kode Product", "Jumlah", "Harga", "Keterangan"]],
      body: [[
        invoice.namaCust,
        invoice.noInvoice,
        invoice.tglInvoice,
        invoice.kodeProduct,
        invoice.jumlah,
        invoice.harga,
        invoice.keterangan,
      ]],
    });
    doc.save(`invoice${invoice.noInvoice}.pdf`);
  };

  const cetakInvoiceExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(invoice);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([excelBuffer], {type: 'application/octet-stream'}), 'invoice.xlsx');
  };

  const cetakSemuaInvoiceExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(invoice);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([excelBuffer], {type: 'application/octet-stream'}), 'semua_invoice.xlsx');
  };

  return (
    <div>
      <h1 className="title">Invoice</h1>
      <h2 className="subtitle">List of Invoice</h2>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", marginRight: "20px" }}>
        <button onClick={cetakSemuaInvoiceExcel} className="button is-success">
          Cetak Semua Invoice
        </button>
        {/* <Link to="/suratjln/add" className="button is-primary">
          Add New
        </Link> */}
      <Link to="/invoice/add" className="button is-primary mb-2">
        Add New
      </Link>
      </div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Customer</th>
            <th>No Invoice</th>
            <th>Tanggal Invoice</th>
            <th>No Surat Jalan</th>
            <th>No KTP</th>
            <th>Tanggal Surat Jalan</th>
            <th>Kode Product</th>
            <th>Jumlah</th>
            <th>Harga</th>
            <th>Keterangan</th>
            <th>Action</th>
            {/* namaCust	noInvoice	tglInvoice	noSJ	noKTP	tglSJ	kodeProduct	jumlah	harga	keterangan */}
          </tr>
        </thead>
        <tbody>
          {invoice.map((invoice, index) => (
            
            <tr key={invoice.uuid}>
              <td>{index + 1}</td>
              <td>{invoice.namaCust}</td>
              <td>{invoice.noInvoice}</td>
              <td>{invoice.tglInvoice}</td>
              <td>{invoice.noSJ}</td>
              <td>{invoice.noKTP}</td>
              <td>{invoice.tglSJ}</td>
              <td>{invoice.kodeProduct}</td>
              <td>{invoice.jumlah}</td>
              <td>{invoice.harga}</td>
              <td>{invoice.keterangan}</td>
              <td>
                <Link
                  to={`/invoice/edit/${invoice.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteInvoice(invoice.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
                <button
                  onClick={() => cetakInvoice(invoice)}
                  className="button is-small is-success"
                >
                  Cetak
                </button>
                <button
                  onClick={cetakInvoiceExcel}
                  className="button is-small is-success"
                >
                  Cetak Excel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;
