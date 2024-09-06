import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
    return (
        <main className="px-4 h-max relative">
            <HeroSection />

            <FeatureSection />

            <ParticlesBackground />
        </main>
    );
}
