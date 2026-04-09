"use client"

import { useState } from "react"
import { ArrowRightIcon, Search } from "lucide-react"
import Link from "next/link"

type Item = {
    id: number
    prenom: string
    nom?: string
    civilite?: string
    espece?: string
}

export default function ListeRecherche({ items, type }: { items: Item[], type: "clients" | "animaux" }) {
    const [recherche, setRecherche] = useState("")

    const itemsFiltres = items.filter((item) => {
        const texte = type === "clients"
            ? `${item.prenom} ${item.nom}`
            : `${item.prenom} ${item.espece}`
        return texte.toLowerCase().includes(recherche.trim().toLowerCase())
    })

    return (
        <>
            <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder={type === "clients" ? "Rechercher un client..." : "Rechercher un animal..."}
                    value={recherche}
                    onChange={(e) => setRecherche(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
            </div>

            {itemsFiltres.length === 0 ? (
                <p className="text-center text-gray-400 py-10">Aucun résultat pour "{recherche}"</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {itemsFiltres.map((item) => (
                        <div key={item.id} className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">

                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                                {type === "clients" ? `${item.prenom[0]}${item.nom![0]}` : item.prenom[0]}
                            </div>

                            <div>
                                {type === "clients" && (
                                    <p className="text-xs text-gray-400 uppercase tracking-wide">{item.civilite}.</p>
                                )}
                                {type === "animaux" && (
                                    <p className="text-xs text-gray-400 uppercase tracking-wide italic">{item.espece}</p>
                                )}
                                <p className="text-lg font-semibold text-gray-800">
                                    {item.prenom} {type === "clients" ? item.nom : ""}
                                </p>
                            </div>

                            <Link
                                href={`/${type}/${item.id}`}
                                className="mt-auto flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium text-sm transition-colors"
                            >
                                Voir le profil
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}