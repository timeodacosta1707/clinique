import DeleteBouton from '@/app/components/DeleteBouton';
import { ArrowLeft, Mail, Phone, PawPrint } from 'lucide-react'
import Link from 'next/link';

export default async function PageClient({
    params,
}: {
    params: Promise<{ id: number }>;
}) {
    const { id } = await params;
    const res = await fetch(`http://dako:3000/clients/${id}`);
    const client = await res.json();

    return (
        <div className="max-w-xl mx-auto px-6 py-10">

            <Link href="/clients" className="group flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium text-sm transition-colors w-fit mb-8">
                <ArrowLeft className="w-4 h-4" />
                Retour aux clients
            </Link>

            <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {client.prenom[0]}{client.nom[0]}
                </div>
                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{client.civilite === "M" ? "Monsieur" : "Madame"}</p>
                    <h1 className="text-2xl font-bold text-gray-800">{client.prenom} {client.nom}</h1>
                    <p className="text-xs text-gray-400">Client n°{client.id}</p>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100">
                <div className="flex items-center gap-3 px-5 py-4">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-sm text-gray-500 w-24 shrink-0">Email</span>
                    <span className="text-sm font-medium text-gray-800">{client.mail}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-4">
                    <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-sm text-gray-500 w-24 shrink-0">Téléphone</span>
                    <span className="text-sm font-medium text-gray-800">{client.tel}</span>
                </div>
                {client.animaux && client.animaux.length > 0 && (
                    <div className="flex items-center gap-3 px-5 py-4">
                        <PawPrint className="w-4 h-4 text-blue-400 shrink-0" />
                        <span className="text-sm text-gray-500 w-24 shrink-0">Animaux</span>
                        <div className="flex flex-wrap gap-2">
                            {client.animaux.map((animal: any, index: number) => (
                                <Link key={animal.id} href={`/animaux/${animal.id}`} className="text-sm text-blue-500 hover:underline font-medium">
                                    {animal.prenom}{index < client.animaux.length - 1 ? "," : ""}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8">
                <DeleteBouton id={client.id} name={client.prenom} type='clients' />
            </div>
        </div>
    );
}