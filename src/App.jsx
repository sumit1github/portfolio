
import { Route, Routes } from "react-router";
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Professional from "./Portfolio/Professional";
import { ProjectDetails } from "./Portfolio/pages/ProjectDetails";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Professional />} />
        <Route path="/project/:project_id" element={<ProjectDetails />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;