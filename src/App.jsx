import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero, NosActivites, NosInnovations, NosSolutions, Partenaires, Footer } from "./Sections";
import Nav from "./Components/Nav";
import About from "./Pages/About"; // Import About page
import Contact from "./Pages/Contact";
import Verifidsn from "./Pages/Verifidsn";
import VerifidsnPlus from "./Pages/VerifidsnPlus";
import { SynchHr } from "./Pages/SynchHr";
import Soldesk from "./Pages/Soldesk";
import SolwayHR from "./Pages/SolwayHR";
import SolwayInvoice from "./Pages/SolwayInvoice";
import SolwayAssociation from "./Pages/SolwayAssociation";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <main className="p-0">
              <section>
                <Hero />
              </section>
              <section className="bg-[url('/src/assets/images/container.png')] bg-cover bg-no-repeat padding small-screen-bg md:bg-gray-50 bg-gray-50">
                <NosActivites />
              </section>
              <section className="bg-[url('/src/assets/images/cover.png')] bg-cover bg-no-repeat padding small-screen-bg md:bg-gray-50 bg-gray-50">
                <NosInnovations />
              </section>
              <section className="bg-[url('/src/assets/images/containerrr.png')] bg-cover bg-no-repeat padding small-screen-bg md:bg-gray-50 bg-gray-50">
                <NosSolutions />
              </section>
              <section className="bg-[url('/src/assets/images/grayBack.png')] bg-cover bg-no-repeat padding small-screen-bg md:bg-gray-50 bg-gray-50">
                <Partenaires />
              </section>
              <section className="bg-[url('/src/assets/images/footerBack.png')] bg-cover bg-no-repeat padding small-screen-bg md:bg-gray-50 bg-gray-50">
                <Footer />
              </section>
            </main>
          }
        />
        
        {/* About Page */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verifi-dsn" element={<Verifidsn />} />
        <Route path="/verifi-dsn-plus" element={<VerifidsnPlus />} />
        <Route path="/solway-synchronisation-hr" element={< SynchHr/>} />
        <Route path="/soldesk" element={< Soldesk/>} />
        <Route path="/solway-hr" element={< SolwayHR/>} />
        <Route path="/solway-invoice" element={<SolwayInvoice/>} />
        <Route path="/association-solway" element={<SolwayAssociation/>} />
      </Routes>
    </Router>
  );
}

export default App;
