"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowLeft, PawPrint } from "lucide-react"
import Link from "next/link"

export default function AjouterAnimal() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsSubmitting(true)
        const formData = new FormData(e.currentTarget)
        const data = {
            espece: formData.get('espece'),
            prenom: formData.get('prenom'),
            age: formData.get('age'),
            taille: formData.get('taille'),
            poids: formData.get('poids')
        }
        try {
            await fetch("http://dako:3000/animaux", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            router.push("/animaux")
            router.refresh()
        } finally {
            setIsSubmitting(false)
        }
    }

    const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"

    return (
        <div className="max-w-md mx-auto px-6 py-10">

            <Link href="/animaux" className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium text-sm transition-colors w-fit mb-8">
                <ArrowLeft className="w-4 h-4" />
                Retour aux animaux
            </Link>

            <h1 className="text-2xl font-bold text-gray-800 mb-1">Ajouter un animal</h1>
            <p className="text-sm text-gray-400 mb-8">Remplissez les informations du nouvel animal</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <select name="espece" required className={inputClass}>
                    <option value="" disabled>-- Espèce --</option>
                    <option value="chien">Chien</option>
                    <option value="chat">Chat</option>
                    <option value="hamster">Hamster</option>
                    <option value="tortue">Tortue</option>
                </select>

                <input name="prenom" placeholder="Prénom" required className={inputClass} />

                <div className="flex gap-3">
                    <input name="age" type="number" placeholder="Âge" required className={inputClass} />
                    <input name="taille" type="number" step={0.01} placeholder="Taille (cm)" className={inputClass} />
                    <input name="poids" type="number" step={0.01} placeholder="Poids (kg)" required className={inputClass} />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                    <PawPrint className="w-4 h-4" />
                    {isSubmitting ? "Ajout en cours..." : "Ajouter l'animal"}
                </button>

            </form>
        </div>
    )
}