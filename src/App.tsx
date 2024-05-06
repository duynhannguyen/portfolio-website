import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainSection from "./components/mainSection/MainSection";

function App() {
  return (
    <div className="app-wrap">
      <Header />
      <main className="body-section">
        <MainSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
