import ParticlesBackground from "@/components/ParticlesBackground";
import YoutubeVideoList from "@/components/YoutubeVideoList";

export default async function Fullstack() {
    const API_KEY = process.env.API_KEY;

    /* playlistId dari Belajar Laravel11 WPU */
    const playlistIdLaravel = "PLFIM0718LjIW1Xb7cVj7LdAr32ATDQMdr";

    /* fetching data dari Youtube API */
    const laravelResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistIdLaravel}&part=snippet&maxResults=50`, { next: { revalidate: 86400 * 7 } });
    const laravelData = await laravelResponse.json();

    /* playlistId dari Belajar NextJs VIP CODE STUDIO */
    const playlistIdNextJs = "PLmF_zPV9ZcP2aYRuoEsMla5gqNjxP-V20";

    /* fetching data dari Youtube API */
    const nextJsResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistIdNextJs}&part=snippet&maxResults=50`, { next: { revalidate: 86400 * 7 } });
    const NextJsData = await nextJsResponse.json();

    return (
        <main className="px-6 md:px-10 h-max relative">
            <div className="mt-20 md:mt-32 max-w-screen-xl mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Fullstack</h1>

                <YoutubeVideoList title="Laravel 11" data={laravelData} className="mt-4 md:mt-6" />

                <YoutubeVideoList title="Next Js" data={NextJsData} className="mt-10" />
            </div>

            <ParticlesBackground />
        </main>
    );
}
