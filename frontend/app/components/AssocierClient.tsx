'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { UserPlus, Check, X } from "lucide-react"

export default function AssocierClient({ animal }: { animal: any }) {
    const router = useRouter();
    const [isClicked, setIsClicked] = useState(false);
    const [selectedClientId, setSelectedClientId] = useState('');
    const [clients, setClients] = useState<any[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await fetch('http://localhost:3000/clients');
                const data = await res.json();
                setClients(data);
            } catch (error) {
                console.error("Erreur lors du chargement des clients", error);
            }
        };
        fetchClients();
    }, []);

    const handleSave = async () => {
        if (!selectedClientId) return;
        setIsSubmitting(true);
        try {
            const res = await fetch(`http://localhost:3000/animaux/${animal.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ client: parseInt(selectedClientId) }),
            });
            if (res.ok) {
                router.refresh();
                setIsClicked(false);
            }
        } catch (error) {
            console.error("Erreur :", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <style>{`
                @keyframes apparition {
                    from { opacity: 0; transform: translateY(-8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .anime { animation: apparition 0.2s ease-out; }
            `}</style>

            <div className="flex flex-col gap-3 mt-8 w-fit">
                {!isClicked ? (
                    <button
                        onClick={() => setIsClicked(true)}
                        className="anime flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-600 transition-colors"
                    >
                        <UserPlus className="w-4 h-4" />
                        Associer à un client
                    </button>
                ) : (
                    <div className="anime flex flex-col gap-3 p-4 border border-gray-200 rounded-2xl bg-white">
                        <p className="text-gray-800 font-semibold text-sm">
                            Associer {animal.prenom} à un client :
                        </p>
                        <select
                            value={selectedClientId}
                            onChange={(e) => setSelectedClientId(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                        >
                            <option value="" disabled>--- Choisir un client ---</option>
                            {clients.map((client: any) => (
                                <option key={client.id} value={client.id}>
                                    {client.prenom} {client.nom}
                                </option>
                            ))}
                        </select>
                        <div className="flex gap-2">
                            <button
                                onClick={handleSave}
                                disabled={selectedClientId === '' || isSubmitting}
                                className="flex items-center gap-2 flex-1 justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-200 disabled:cursor-not-allowed font-medium text-sm transition-colors"
                            >
                                <Check size={16} /> {isSubmitting ? "Enregistrement..." : "Enregistrer"}
                            </button>
                            <button
                                onClick={() => setIsClicked(false)}
                                className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 font-medium text-sm transition-colors"
                            >
                                <X size={16} /> Annuler
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}