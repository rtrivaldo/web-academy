import ParticlesBackground from "@/components/ParticlesBackground";
import YoutubeVideoList from "@/components/YoutubeVideoList";

export default async function Backend() {
    const API_KEY = process.env.API_KEY;

    /* playlistId dari Belajar NodeJs WPU */
    const playlistIdNodeJs = "PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD";

    /* fetching data dari Youtube API */
    const nodeJsResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistIdNodeJs}&part=snippet&maxResults=50`, { next: { revalidate: 86400 * 7 } });
    const nodeJsData = await nodeJsResponse.json();

    return (
        <main className="px-6 md:px-10 h-max relative">
            <div className="mt-20 md:mt-32 max-w-screen-xl mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Backend</h1>

                <YoutubeVideoList title="Node.js" data={nodeJsData} className="mt-4 md:mt-6" />
            </div>

            <ParticlesBackground />
        </main>
    );
}
