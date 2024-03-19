import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";
import Tokenomics from "../components/tokenomics.jsx";
import Roadmap from "../components/roadmap.jsx";
import Content from "../components/content.jsx";
import PreHeader from "../components/preheader.jsx";
import PreFooter from "../components/prefooter.jsx";
import '../App.css';

function dwc() {
  return (
    <>
        <main className="main">
            <Header/>
            <PreHeader/>
            <Tokenomics/>
            <Roadmap/>
            <Content/>
            <PreFooter/>
            <Footer/>
        </main>
    </>
  );
}

export default dwc;