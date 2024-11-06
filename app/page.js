import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AboutSection from "@/app/components/AboutSection";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <div className="container mt-24 mx-auto px-12 py-4">
                <HeroSection />
                <AboutSection/>
                <ContactSection/>
                <Footer/>
                </div>
        </main>

    );
}
