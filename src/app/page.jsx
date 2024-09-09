import ArticleSection from "@/components/ArticleSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import RecommendedVideoSection from "@/components/RecommendedVideoSection";

export default function Home() {
    return (
        <main className="px-6 md:px-10 h-max relative">
            <HeroSection />

            <FeatureSection />

            <RecommendedVideoSection />

            <ArticleSection />

            <ParticlesBackground />
        </main>
    );
}
