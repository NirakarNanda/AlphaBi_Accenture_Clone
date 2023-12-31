import Image from 'next/image'
import HeroSection from "./components/HeroSection";
import Footer  from "./components/Footer";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";
import Email from "./components/Email";


export default function Home() {
  return (
    <main className="flex mr-4 min-h-screen flex-col bg-[#121212]">
      <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ProjectSection />
        <Email />
      </div>
      <Footer />
    </main>
  )
}
