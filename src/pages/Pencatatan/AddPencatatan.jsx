import React, { useEffect } from "react";
import Layout from "../Layout";
// import FormAddProduct from "../components/FormAddProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
// import FormAddCustomer from "../../components/FormAdd/FormAddCustomer";
// import FormAddPemesanan from "../../components/FormAdd/FormAddPemesanan";

const AddCustomer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/pencatatan");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      {/* <FormAddPemesanan /> */}
      {/* <FormAddCustomer /> */}
    </Layout>
  );
};

export default AddCustomer;