'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 w-full bg-blue-400 text-white p-4 shadow-md z-[1000]">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <Link href="/" className="text-xl font-bold">
                    Clinique Vétérinaire
                </Link>

                <nav className="flex items-center gap-1">
                    <Link
                        href="/clients"
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${pathname.startsWith('/clients')
                                ? "bg-white/20"
                                : "hover:bg-white/10"
                            }`}
                    >
                        Clients
                    </Link>
                    <Link
                        href="/animaux"
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${pathname.startsWith('/animaux')
                                ? "bg-white/20"
                                : "hover:bg-white/10"
                            }`}
                    >
                        Animaux
                    </Link>

                    {pathname.startsWith('/clients') &&
                        <Link
                            href="/clients/ajouter"
                            className={`ml-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${pathname === '/clients/ajouter'
                                    ? "bg-white/50 text-blue-600 cursor-not-allowed"
                                    : "bg-white text-blue-500 hover:bg-blue-50"
                                }`}
                        >
                            + Ajouter un client
                        </Link>
                    }
                    {pathname.startsWith('/animaux') &&
                        <Link
                            href="/animaux/ajouter"
                            className={`ml-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${pathname === '/animaux/ajouter'
                                    ? "bg-white/50 text-blue-600 cursor-not-allowed"
                                    : "bg-white text-blue-500 hover:bg-blue-50"
                                }`}
                        >
                            + Ajouter un animal
                        </Link>
                    }
                </nav>
            </div>
        </header>
    )
}