import ListeRecherche from "@/app/components/ListeRecherche";

export default async function PageClients() {
    const res = await fetch('http://dako:3000/clients');
    const clients = await res.json();

    if (clients.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-2xl text-gray-400">Aucun client trouvé</p>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Clients</h1>
            <p className="text-gray-400 mb-8">{clients.length} client{clients.length > 1 ? 's' : ''} enregistré{clients.length > 1 ? 's' : ''}</p>
            <ListeRecherche items={clients} type="clients" />
        </div>
    )
}