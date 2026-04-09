import AssocierClient from '@/app/components/AssocierClient';
import DeleteButton from '@/app/components/DeleteBouton';
import { ArrowLeft, Weight, Ruler, CalendarDays, PawPrint, User, Edit } from 'lucide-react'
import Link from 'next/link';

export default async function PageAnimal({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const { id } = await params;
    const res = await fetch(`http://localhost:3000/animaux/${id}`);
    const animal = await res.json();

    return (
        <div className="max-w-xl mx-auto px-6 py-10">

            <Link href="/animaux" className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium text-sm transition-colors w-fit mb-8">
                <ArrowLeft className="w-4 h-4" />
                Retour aux animaux
            </Link>

            <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {animal.prenom[0]}
                </div>
                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide italic">{animal.espece}</p>
                    <h1 className="text-2xl font-bold text-gray-800">{animal.prenom}</h1>
                    <p className="text-xs text-gray-400">Animal n°{animal.id}</p>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100">
                <div className="flex items-center gap-3 px-5 py-4">
                    <CalendarDays className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-sm text-gray-500 w-24 shrink-0">Âge</span>
                    <span className="text-sm font-medium text-gray-800">{animal.age} an{animal.age > 1 ? "s" : ""}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-4">
                    <Ruler className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-sm text-gray-500 w-24 shrink-0">Taille</span>
                    <span className="text-sm font-medium text-gray-800">{animal.taille} cm</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-4">
                    <Weight className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-sm text-gray-500 w-24 shrink-0">Poids</span>
                    <span className="text-sm font-medium text-gray-800">{animal.poids} kg</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-4">
                    <PawPrint className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-sm text-gray-500 w-24 shrink-0">Espèce</span>
                    <span className="text-sm font-medium text-gray-800">{animal.espece}</span>
                </div>
                {animal.client && (
                    <div className="flex items-center gap-3 px-5 py-4">
                        <User className="w-4 h-4 text-blue-400 shrink-0" />
                        <span className="text-sm text-gray-500 w-24 shrink-0">Propriétaire</span>
                        <Link href={`/clients/${animal.client.id}`} className="text-sm font-medium text-blue-500 hover:underline">
                            {animal.client.civilite}. {animal.client.nom}
                        </Link>
                    </div>
                )}
            </div>

            <div className="flex gap-3">
                {!animal.client && <AssocierClient animal={animal} />}
                <DeleteButton id={animal.id} name={animal.prenom} type='animaux' />
            </div>
        </div>
    );
}