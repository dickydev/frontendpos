import React, { useEffect } from "react";
import Layout from "../Layout";
// import FormAddProduct from "../../components/FormAdd/FormAddProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import FormAddSuratJalan from "../../components/FormAdd/FormAddSuratJalan";

const AddSuratJalan = () => {
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
      {/* <FormAddProduct /> */}
      <FormAddSuratJalan />
    </Layout>
  );
};

export default AddSuratJalan;
