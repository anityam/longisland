import Header from "../../components/Header/Header";
import Donation from "../../components/Donation/Donation"
import Footer from "../../components/Footer/Footer"

export default function Ab() {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <Header/>
      <Donation/>
      <Footer/>
    </main>
  );
}
