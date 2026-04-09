import { Quote, Star } from "lucide-react";

export default function AvisCard({ numero, etoile } : { numero: number, etoile: number }) {
    const note = etoile;

    return (
        <div className="relative w-full bg-sky-100/50 border-4 border-sky-300 rounded-3xl p-8 aspect-[1.5/1] flex flex-col justify-center shadow-lg overflow-hidden">

            <Quote
                className="absolute top-4 left-4 text-sky-200"
                size={60}
                strokeWidth={0.5}
                style={{ transform: 'scaleX(-1)' }}
            />

            <div className="absolute top-6 right-6 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`${i < note ? "text-sky-300 fill-sky-300" : "text-gray-300"}`}
                        size={20}
                        strokeWidth={1.5}
                    />
                ))}
            </div>

            <p className="absolute bottom-6 left-6 text-sm md:text-base text-zinc-900 font-medium tracking-tight">
                de Client le 17/07/2023
            </p>

            <h1 className="text-center text-zinc-950 font-extrabold text-5xl md:text-6xl leading-none z-10">
                Avis n°{numero}
            </h1>
        </div>
    );
}