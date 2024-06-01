import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    const response = await axios.get("http://localhost:5000/customers");
    setCustomers(response.data);
  };

  const deleteCustomers = async (custId) => {
    await axios.delete(`http://localhost:5000/customers/${custId}`);
    getCustomers();
  };

  return (
    <div>
      <h1 className="title">Customer</h1>
      <h2 className="subtitle">List of Customer</h2>
      <Link to="/customer/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Kode Customers</th>
            <th>Nama Customers</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust, index) => (
            <tr key={cust.uuid}>
              <td>{index + 1}</td>
              <td>{cust.kodeCust}</td>
              <td>{cust.nama}</td>
              <td>
                <Link
                  to={`/customer/edit/${cust.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteCustomers(cust.id)}
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

export default CustomerList;
