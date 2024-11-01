import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground mx-auto py-4 px-12">
            <HeroSection />
        </main>
    );
}
