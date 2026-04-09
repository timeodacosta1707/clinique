export default function StatsCard({ name, numero } : { name: string, numero: number } ) {
    return (
        <div className="flex flex-col py-10 bg-white border-3 border-blue-300 rounded-2xl">
            <h1 className="text-3xl font-bold">{ name }</h1>
            <h2 className="text-[15rem] font-black text-blue-300">{ numero }</h2>
        </div>
    )
}