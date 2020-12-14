import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./components/common/Navbar";
import Home from "./containers/homePage/Home";
import DocumentsPage from "./containers/DocumentsPage";
import DocumentInfo from "./containers/documentInfoPage/DocumentInfo";
import ManageNewDocumentsPage from "./containers/ManageNewDocumentsPage";
import PageNotFound from "./components/common/PageNotFound";

const GeneralStyles = styled.div`
  padding: 10px 30px;
  text-align: center;

  @media (min-width: 560px) {
    padding: 30px 100px;
    text-align: left;
  }

  @media (min-width: 980px) {
    padding: 30px 300px;
  }
`;

function App() {
  return (
    <GeneralStyles>
      <Navbar />
      <Switch>
        <Route path="/documents/:documentId" exact component={DocumentInfo} />
        <Route path="/documents" component={DocumentsPage} />
        <Route path="/newdocument" component={ManageNewDocumentsPage} />
        <Route path="/" exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </GeneralStyles>
  );
}

export default App;
