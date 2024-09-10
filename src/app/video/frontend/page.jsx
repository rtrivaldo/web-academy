import ParticlesBackground from "@/components/ParticlesBackground";
import YoutubeVideoList from "@/components/YoutubeVideoList";

export default async function Frontend() {
    const API_KEY = process.env.API_KEY;

    /* playlistId dari Belajar TailwindCSS WPU */
    const playlistIdTailwind = "PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h";

    /* fetching data dari Youtube API */
    const tailwindResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistIdTailwind}&part=snippet&maxResults=50`, { next: { revalidate: 86400 * 7 } });
    const tailwindData = await tailwindResponse.json();

    /* playlistId dari Tutorial React Js Bahasa Indonesia VIP CODE STUDIO */
    const playlistIdReact = "PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz";

    /* fetching data dari Youtube API */
    const reactResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistIdReact}&part=snippet&maxResults=50`, { next: { revalidate: 86400 * 7 } });
    const reactData = await reactResponse.json();

    return (
        <main className="px-6 md:px-10 h-max relative">
            <div className="mt-20 md:mt-32 max-w-screen-xl mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Frontend</h1>

                <YoutubeVideoList title="TailwindCSS" data={tailwindData} className="mt-4 md:mt-6" />

                <YoutubeVideoList title="React Js" data={reactData} className="mt-10" />
            </div>

            <ParticlesBackground />
        </main>
    );
}
