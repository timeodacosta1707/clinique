"use client";

import { useState } from "react";
import { Trash, Check, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id, name, type }: { id: number; name: string; type: "clients" | "animaux" }) {
    const [isConfirming, setIsConfirming] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`http://localhost:3000/${type}/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                router.push(`/${type}`);
                router.refresh();
            }
        } catch (error) {
            console.error("Erreur lors de la suppression:", error);
        } finally {
            setIsLoading(false)
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
                {!isConfirming ? (
                    <button
                        onClick={() => setIsConfirming(true)}
                        className="anime flex items-center gap-2 bg-red-500 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-600 transition-colors"
                    >
                        <Trash className="w-4 h-4" />
                        Supprimer {name}
                    </button>
                ) : (
                    <div className="anime flex flex-col gap-3 p-4 border-2 border-red-200 rounded-2xl bg-red-50">
                        <p className="text-red-700 font-semibold text-sm">Êtes-vous sûr de vouloir supprimer {name} ?</p>
                        <div className="flex gap-2">
                            <button
                                onClick={handleDelete}
                                disabled={isLoading}
                                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 disabled:bg-gray-200 disabled:cursor-not-allowed font-medium text-sm transition-colors"
                            >
                                <Check size={16} /> {isLoading ? "Suppression..." : "Oui, supprimer"}
                            </button>
                            <button
                                onClick={() => setIsConfirming(false)}
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