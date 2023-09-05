import Image from 'next/image'
import Homepage from "./Home/page";
import Navbar from "../components/layout/Navbar"
import About from "../app/About/page";
import Roadmap from "../app/Roadmap/page";
import Footer from "../components/layout/Footer"
import HowTobuy from './How_to_buy/page';
import Totonomic from './Tokonomic/page';
export default function Home() {
  return (
    <main className="">
      <Homepage />
      <About />
      <HowTobuy />
      <Totonomic />
      <Roadmap />
    </main>
  )
}
