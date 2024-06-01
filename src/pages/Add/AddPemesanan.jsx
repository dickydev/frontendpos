import React, { useEffect } from "react";
import Layout from "../Layout";
// import FormAddProduct from "../components/FormAddProduct";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import FormAddPemesanan from "../../components/FormAdd/FormAddPemesanan";

const AddPemesanan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/suratjln");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <FormAddPemesanan />
    </Layout>
  );
};

export default AddPemesanan;
