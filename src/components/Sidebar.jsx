import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  IoPerson,
  IoPricetag,
  IoHome,
  IoLogOut,
  IoCart,
  IoClipboard,
  IoDocumentText,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow ">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          {user && user.role === "produksi" && (
            <>
            <p className="menu-label">Produksi</p>
            <li>
              <NavLink to={"/products"}>
                <IoPricetag /> Products
              </NavLink>
            </li>
            </>
          )}
          {user && user.role === "marketing" && (
            <>
            <p className="menu-label">Marketing</p>
            <ul className="menu-list">

              <li>
                <NavLink to={"/pemesanan"}>
                  <IoCart /> Pemesanan
                </NavLink>
                <ul>
                  <li>
                    <NavLink to={"/detailpemesanan"}>
                      <IoCart /> Detail Pemesanan                  
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to={"/suratjln"}>
                  <IoDocumentText /> Surat Jalan
                </NavLink>
                <ul>
                  <li>
                    <NavLink to={"/detailsuratjln"}>
                      <IoDocumentText /> Detail SJ                  
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to={"/invoice"}>
                  <IoCart /> Invoice
                </NavLink>
                <ul>
                  <li>
                    <NavLink to={"/detailinvoice"}>
                      <IoCart /> Detail Invoice                  
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            </>
          )}
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              
                {/* <li>
                  <NavLink to={"/products"}>
                    <IoPricetag /> Products
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to={"/dashboard"}>
                    <IoHome /> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/invoice"}>
                    <IoClipboard /> Invoice
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to={"/pemesanan"}>
                    <IoCart /> Pemesanan
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to={"/suratjln"}>
                    <IoDocumentText /> Surat Jalan
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/invoice"}>
                    <IoClipboard /> Invoice
                  </NavLink>
                </li>
              {/* </li> */}
              <li>
                <NavLink to={"/customer"}>
                  <IoPerson /> Customer
                </NavLink>
              </li>
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}
    
        {user && user.role === "master" && (
          <>
          <ul className="menu-list">
            
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
          </ul>
          </>
        )}

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
