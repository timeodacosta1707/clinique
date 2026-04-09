import ListeRecherche from "../components/ListeRecherche";

export default async function PageAnimaux() {
    const res = await fetch('http://localhost:3000/animaux');
    const animaux = await res.json();

    if (animaux.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-2xl text-gray-400">Aucun animal trouvé</p>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">

            <h1 className="text-4xl font-bold text-gray-800 mb-2">Animaux</h1>
            <p className="text-gray-400 mb-8">{animaux.length} anima{animaux.length > 1 ? 'ux' : 'l'} enregistré{animaux.length > 1 ? 's' : ''}</p>
            <ListeRecherche items={animaux} type="animaux" />
        </div>
    );
}