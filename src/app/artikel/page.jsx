import ArticleCard from "@/components/ArticleCard";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Artikel() {
    return (
        <main className="px-6 md:px-10 h-max relative">
            <div className="mt-20 md:mt-32 max-w-screen-xl mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Artikel</h1>

                <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {article.map((article) => (
                        <ArticleCard title={article.title} description={article.description} image={article.image} category={article.category} duration={article.duration} />
                    ))}
                </div>
            </div>

            <ParticlesBackground />
        </main>
    );
}

const article = [
    { title: "10 Advanced JavaScript Tricks You Don’t Know", description: "Enhance your coding skills with these lesser-known JavaScript techniques.", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*PQ2O_-QPWPELuYctLu0o0Q.jpeg", category: "JavaScript", duration: 8 },
    { title: "Why and how you should rate-limit your API", description: "Protect yourself and your users.", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*72XkP8P-ARRI833bCYdC7g.png", category: "API", duration: 5 },
    { title: "CSS Position Sticky - How It Really Works!", description: "CSS position sticky has really good browser support, yet most developers aren’t using it.", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*vv_brCwJNVFsBHQEfYC7zQ.png", category: "CSS", duration: 5 },
    { title: "5 Html Tips Probably You Don’t Know", description: "Html’s secret attriubutes to use anywhere.", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*77tyTjiPlQknRxJL", category: "HTML", duration: 3 },
    { title: "10 Must-Have VSCode Extensions for Web Development 👀💻", description: "Install these powerful VSCode extensions to significantly improve your productivity during web development.", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*LGInzwNfI8hKlJkIVNnwMQ.png", category: "VSCode", duration: 7 },
    { title: "React 19 is Coming, What’s New?", description: "React 19 will be another milestone release after the introduction of hooks!", image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*8eTtb-2RV8YgupT7zqa4tQ.jpeg", category: "React", duration: 7 },
];
