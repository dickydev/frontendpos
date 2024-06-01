import React, { useEffect } from "react";
import Layout from "../Layout";
// import FormAddProduct from "../components/FormAddProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import FormAddInvoice from "../../components/FormAdd/FormAddInvoice";
// import FormAddCustomer from "../../components/FormAdd/FormAddCustomer";
// import FormAddPemesanan from "../../components/FormAdd/FormAddPemesanan";

const AddInvoice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <FormAddInvoice />
    </Layout>
  );
};

export default AddInvoice;
