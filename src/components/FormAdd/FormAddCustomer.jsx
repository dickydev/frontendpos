// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddCustomer = () => {
//   const [kodeCust, setKodeCust] = useState("");
//   const [nama, setNama] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   const saveCustomer = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/customers", {
//         nama: nama,
//         kodeCust: kodeCust,
//       });
//       navigate("/customer");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Products</h1>
//       <h2 className="subtitle">Add New Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveCustomer}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={nama}
//                     onChange={(e) => setNama(e.target.value)}
//                     placeholder="Nama Customer"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Customer</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={kodeCust}
//                     onChange={(e) => setKodeCust(e.target.value)}
//                     placeholder="Kode Customer"
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddCustomer;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddCustomer = () => {
//   const [kodeCust, setKodeCust] = useState("");
//   const [nama, setNama] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Mengambil nilai terakhir dari server saat komponen dimuat
//     fetchLastCode();
//   }, []);

//   const fetchLastCode = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/customers/lastcode");
//       const lastCode = response.data.lastCode; // Anda harus menyesuaikan dengan respon aktual dari server
//       setKodeCust(generateNextCode(lastCode));
//     } catch (error) {
//       console.error("Failed to fetch last code:", error);
//       // Penanganan kesalahan di sini
//     }
//   };

//   const generateNextCode = (lastCode) => {
//     // Logika untuk menghasilkan kode berikutnya
//     const lastNumber = parseInt(lastCode.slice(2));
//     const nextNumber = lastNumber + 1;
//     return "KD" + nextNumber.toString().padStart(3, "0");
//   };

//   const saveCustomer = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/customers", {
//         nama: nama,
//         kodeCust: kodeCust,
//       });
//       navigate("/customer");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Products</h1>
//       <h2 className="subtitle">Add New Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveCustomer}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={nama}
//                     onChange={(e) => setNama(e.target.value)}
//                     placeholder="Nama Customer"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Customer</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={kodeCust}
//                     onChange={(e) => setKodeCust(e.target.value)}
//                     placeholder="Kode Customer"
//                     disabled // agar tidak bisa diubah oleh pengguna
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddCustomer;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddCustomer = () => {
//   const [kodeCust, setKodeCust] = useState("");
//   const [nama, setNama] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchLastCode();
//   }, []);

//   const fetchLastCode = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/customers/lastcode");
//       const lastCode = response.data.lastCode;
//       setKodeCust(generateNextCode(lastCode));
//     } catch (error) {
//       console.error("Failed to fetch last code:", error);
//     }
//   };

//   const generateNextCode = (lastCode) => {
//     const lastNumber = parseInt(lastCode.slice(2));
//     const nextNumber = lastNumber + 1;
//     return "CS" + nextNumber.toString().padStart(3, "0");
//   };

//   const saveCustomer = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/customers", {
//         nama: nama,
//         kodeCust: kodeCust,
//       });
//       navigate("/customer");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Products</h1>
//       <h2 className="subtitle">Add New Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveCustomer}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={nama}
//                     onChange={(e) => setNama(e.target.value)}
//                     placeholder="Nama Customer"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Customer</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={kodeCust}
//                     onChange={(e) => setKodeCust(e.target.value)}
//                     placeholder="Kode Customer"
//                     disabled
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddCustomer;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddCustomer = () => {
//   const [kodeCust, setKodeCust] = useState("");
//   const [nama, setNama] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchLastCode();
//   }, []);

//   const fetchLastCode = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/customers/lastcode");
//       const lastCode = response.data.lastCode;
//       setKodeCust(generateNextCode(lastCode));
//     } catch (error) {
//       console.error("Failed to fetch last code:", error);
//     }
//   };

//   const generateNextCode = (lastCode) => {
//     if (!lastCode) {
//       // Jika tidak ada kode sebelumnya, mulai dari CS001
//       return "CS001";
//     }
//     const lastNumber = parseInt(lastCode.slice(2));
//     const nextNumber = lastNumber + 1;
//     return "CS" + nextNumber.toString().padStart(3, "0");
//   };

//   const saveCustomer = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/customers", {
//         nama: nama,
//         kodeCust: kodeCust,
//       });
//       navigate("/customer");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Products</h1>
//       <h2 className="subtitle">Add New Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveCustomer}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={nama}
//                     onChange={(e) => setNama(e.target.value)}
//                     placeholder="Nama Customer"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Customer</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={kodeCust}
//                     onChange={(e) => setKodeCust(e.target.value)}
//                     placeholder="Kode Customer"
//                     disabled
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddCustomer;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddCustomer = () => {
//   const [kodeCust, setKodeCust] = useState("");
//   const [nama, setNama] = useState("");
//   const [msg, setMsg] = useState("");
//   const [lastCode, setLastCode] = useState("CS001"); // Simpan kode terakhir secara lokal di sini
//   const navigate = useNavigate();

//   const generateNextCode = () => {
//     const lastNumber = parseInt(lastCode.slice(2));
//     const nextNumber = lastNumber + 1;
//     return "CS" + nextNumber.toString().padStart(3, "0");
//   };

//   const saveCustomer = async (e) => {
//     e.preventDefault();
//     try {
//       const nextCode = generateNextCode();
//       await axios.post("http://localhost:5000/customers", {
//         nama: nama,
//         kodeCust: nextCode,
//       });
//       setLastCode(nextCode); // Setel kode terakhir ke kode yang baru saja digunakan
//       navigate("/customer");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Products</h1>
//       <h2 className="subtitle">Add New Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveCustomer}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={nama}
//                     onChange={(e) => setNama(e.target.value)}
//                     placeholder="Nama Customer"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Customer</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={generateNextCode()}
//                     disabled // Kode dihasilkan secara otomatis dan tidak bisa diubah oleh pengguna
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddCustomer;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddCustomer = () => {
//   const [kodeCust, setKodeCust] = useState("");
//   const [nama, setNama] = useState("");
//   const [msg, setMsg] = useState("");
//   const [lastCode, setLastCode] = useState(""); // Simpan kode terakhir secara lokal di sini
//   const navigate = useNavigate();

//   // Fungsi untuk menghasilkan kode berikutnya
//   const generateNextCode = () => {
//     if (!lastCode) {
//       // Jika lastCode belum ada, maka setel ke CS001
//       return "CS001";
//     }
//     const lastNumber = parseInt(lastCode.slice(2));
//     const nextNumber = lastNumber + 1;
//     return "CS" + nextNumber.toString().padStart(3, "0");
//   };

//   const saveCustomer = async (e) => {
//     e.preventDefault();
//     try {
//       const nextCode = generateNextCode();
//       await axios.post("http://localhost:5000/customers", {
//         nama: nama,
//         kodeCust: nextCode,
//       });
//       setLastCode(nextCode); // Setel kode terakhir ke kode yang baru saja digunakan
//       navigate("/customer");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Products</h1>
//       <h2 className="subtitle">Add New Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveCustomer}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={nama}
//                     onChange={(e) => setNama(e.target.value)}
//                     placeholder="Nama Customer"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Customer</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={generateNextCode()}
//                     disabled // Kode dihasilkan secara otomatis dan tidak bisa diubah oleh pengguna
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddCustomer;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddCustomer = () => {
//   const [kodeCust, setKodeCust] = useState("");
//   const [nama, setNama] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Mengambil kode terakhir dari server saat komponen dimuat
//     fetchLastCode();
//   }, []);

//   const fetchLastCode = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/customers/lastcode");
//       const lastCode = response.data.lastCode;
//       if (lastCode) {
//         setKodeCust(generateNextCode(lastCode));
//       } else {
//         setKodeCust("CS001"); // Setel ke "CS001" jika tidak ada kode sebelumnya
//       }
//     } catch (error) {
//       console.error("Failed to fetch last code:", error);
//     }
//   };

//   const generateNextCode = (lastCode) => {
//     const lastNumber = parseInt(lastCode.slice(2));
//     const nextNumber = lastNumber + 1;
//     return "CS" + nextNumber.toString().padStart(3, "0");
//   };

//   const saveCustomer = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/customers", {
//         nama: nama,
//         kodeCust: kodeCust,
//       });
//       setKodeCust(generateNextCode(kodeCust)); // Update kodeCust untuk entri berikutnya
//       navigate("/customer");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Products</h1>
//       <h2 className="subtitle">Add New Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveCustomer}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={nama}
//                     onChange={(e) => setNama(e.target.value)}
//                     placeholder="Nama Customer"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Customer</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={kodeCust}
//                     disabled // Kode dihasilkan secara otomatis dan tidak bisa diubah oleh pengguna
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddCustomer;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddCustomer = () => {
//   const [kodeCust, setKodeCust] = useState("CS001");
//   const [nama, setNama] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchLastCode();
//   }, []);

//   const fetchLastCode = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/customers/lastcode");
//       const lastCode = response.data.lastCode;
//       if (lastCode) {
//         setKodeCust(generateNextCode(lastCode));
//       }
//     } catch (error) {
//       console.error("Failed to fetch last code:", error);
//     }
//   };

//   const generateNextCode = (lastCode) => {
//     const lastNumber = parseInt(lastCode.slice(2));
//     const nextNumber = lastNumber + 1;
//     return "CS" + nextNumber.toString().padStart(3, "0");
//   };

//   const saveCustomer = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/customers", {
//         nama: nama,
//         kodeCust: kodeCust,
//       });
//       setKodeCust(generateNextCode(kodeCust)); // Update kodeCust untuk entri berikutnya
//       navigate("/customer");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Products</h1>
//       <h2 className="subtitle">Add New Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveCustomer}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={nama}
//                     onChange={(e) => setNama(e.target.value)}
//                     placeholder="Nama Customer"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Customer</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={kodeCust}
//                     disabled // Kode dihasilkan secara otomatis dan tidak bisa diubah oleh pengguna
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddCustomer;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddCustomer = () => {
//   const [kodeCust, setKodeCust] = useState("CS001");
//   const [nama, setNama] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchLastCode();
//   }, []);

//   const fetchLastCode = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/customers/lastcode");
//       const lastCode = response.data.lastCode;
//       if (lastCode) {
//         setKodeCust(generateNextCode(lastCode));
//       }
//     } catch (error) {
//       console.error("Failed to fetch last code:", error);
//     }
//   };

//   const generateNextCode = (lastCode) => {
//     const lastNumber = parseInt(lastCode.slice(2));
//     const nextNumber = lastNumber + 1;
//     return "CS" + nextNumber.toString().padStart(3, "0");
//   };

//   const saveCustomer = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/customers", {
//         nama: nama,
//         kodeCust: kodeCust,
//       });
//       setKodeCust(generateNextCode(kodeCust)); // Menggunakan kode terakhir dari server untuk menghasilkan kode berikutnya
//       navigate("/customer");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Products</h1>
//       <h2 className="subtitle">Add New Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveCustomer}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={nama}
//                     onChange={(e) => setNama(e.target.value)}
//                     placeholder="Nama Customer"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Customer</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={kodeCust}
//                     disabled // Kode dihasilkan secara otomatis dan tidak bisa diubah oleh pengguna
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddCustomer;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const FormAddCustomer = () => {
//   const [kodeCust, setKodeCust] = useState("CS001");
//   const [nama, setNama] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchLastCode();
//   }, []);

//   const fetchLastCode = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/customers/lastcode");
//       const lastCode = response.data.lastCode;
//       if (lastCode) {
//         setKodeCust(generateNextCode(lastCode));
//       }
//     } catch (error) {
//       console.error("Failed to fetch last code:", error);
//     }
//   };

//   const generateNextCode = (lastCode) => {
//     const lastNumber = parseInt(lastCode.slice(2));
//     const nextNumber = lastNumber + 1;
//     return "CS" + nextNumber.toString().padStart(3, "0");
//   };

//   const saveCustomer = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/customers", {
//         nama: nama,
//         kodeCust: kodeCust,
//       });
//       fetchLastCode(); // Ambil kode terakhir setelah menambahkan entri baru
//       navigate("/customer");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Products</h1>
//       <h2 className="subtitle">Add New Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={saveCustomer}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={nama}
//                     onChange={(e) => setNama(e.target.value)}
//                     placeholder="Nama Customer"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Kode Customer</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={kodeCust}
//                     disabled // Kode dihasilkan secara otomatis dan tidak bisa diubah oleh pengguna
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormAddCustomer;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddCustomer = () => {
  const [kodeCust, setKodeCust] = useState("");
  const [nama, setNama] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLastCustomer = async () => {
      try {
        const response = await axios.get("http://localhost:5000/customers");
        const lastCustomer = response.data[response.data.length - 1];
        if (lastCustomer) {
          const lastKodeCustomer = lastCustomer.kodeCust;
          const nextKodeCustomer = getNextKodeCustomer(lastKodeCustomer);
          setKodeCust(nextKodeCustomer);
        } else {
          setKodeCust("CS001");
        }
      } catch (error) {
        console.error("Error fetching last customer:", error);
      }
    };

    fetchLastCustomer();
  }, []);

  const getNextKodeCustomer = (lastKodeCustomer) => {
    const numericPart = parseInt(lastKodeCustomer.slice(2)) + 1;
    return `CS${numericPart.toString().padStart(3, "0")}`;
  };

  const saveCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/customers", {
        nama: nama,
        kodeCust: kodeCust,
      });
      const nextKodeCust = getNextKodeCustomer(kodeCust);
      setKodeCust(nextKodeCust);
      navigate("/customer");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Customers</h1>
      <h2 className="subtitle">Add New Customer</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveCustomer}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Customer Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Customer Code</label>
                <div className="control">
                  <input
                    disabled
                    type="text"
                    className="input"
                    value={kodeCust}
                    onChange={(e) => setKodeCust(e.target.value)}
                    placeholder="Customer Code"
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

export default FormAddCustomer;
