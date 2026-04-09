import AvisCard from "./components/AvisCard";
import FAQ from "./components/FAQ";
import StatsCard from "./components/StatsCard";

export default async function Home() {
	const resAnimaux = await fetch("http://localhost:3000/animaux");
	const dataAnimaux = await resAnimaux.json();
	const resClients = await fetch("http://localhost:3000/clients");
	const dataClients = await resClients.json();
	const nbAnimaux = dataAnimaux.length;
	const nbClients = dataClients.length;
	return (
		<main>

			<section id="hero" className="relative h-[92vh] w-full overflow-hidden">
				<img
					src="/image.png"
					alt="Image de fond"
					className="absolute inset-0 h-full w-full object-cover"
				/>

				<div className="absolute inset-0 flex flex-col justify-center items-start p-20 bg-black/10">
					<h1 className="flex flex-col text-white text-9xl font-bold drop-shadow-lg leading-none">
						<span>Cabinet</span>
						<span>Vétérinaire</span>
					</h1>
					<p className="text-blue-300 text-4xl font-bold mt-4 drop-shadow-md">
						Depuis 1972
					</p>
				</div>

				<div className="absolute bottom-10 left-0 w-full flex justify-center">
					<a href="#stats" className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 px-8 py-3 rounded-full font-semibold transition-all">
						Découvrez nos statistiques
					</a>
				</div>
			</section>


			<section id="stats" className="py-20 px-10 text-gray-800">
				<h2 className="text-6xl font-black mb-6 text-center">Nos statistiques</h2>

				<div className="grid grid-cols-3 gap-8 mt-12 text-center">
					<StatsCard name="Vétérinaires" numero={4} />
					<StatsCard name="Animaux" numero={nbAnimaux} />
					<StatsCard name="Clients" numero={nbClients} />
				</div>
			</section>

			<section id="about" className="flex gap-10 bg-blue-100 py-30 px-10 text-gray-800 justify-center items-center">
				<img src="/image2.png" alt="" className="h-100 w-auto rounded-2xl" />
				<div className="w-full h-fit">
					<h2 className="text-6xl font-black mb-6 text-center">A propos de nous</h2>
					<p className="font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi necessitatibus iure itaque quas quis facere enim dolorem ullam nesciunt nostrum quasi dicta, quidem, tenetur natus aspernatur? Cupiditate perferendis sunt illo!
						Ullam suscipit laboriosam nemo dolorem quam soluta ratione commodi non, assumenda inventore reprehenderit eligendi similique repudiandae exercitationem sapiente quis nesciunt recusandae! Ratione cumque hic earum inventore fugit excepturi est impedit!
						Animi ab tempore accusantium repellendus consequuntur. Iusto unde iure molestiae voluptas in veniam perferendis voluptatibus animi minima officiis explicabo saepe, iste distinctio, atque quas. Iusto nulla voluptas doloribus tempora error.
						Illum maxime enim voluptatum nemo rem eveniet quisquam odio ex. Consequuntur id sit illo quas libero molestiae deleniti, debitis numquam repellendus quisquam asperiores veniam eius in nulla qui beatae? Consequatur.</p>
				</div>
			</section>

			<section id="avis" className="bg-blue-200 py-30 px-10 text-gray-800">
				<h2 className="text-6xl font-black mb-6 text-center">Avis clients</h2>

				<div className="grid grid-cols-3 gap-8 mt-12 text-center">
					<AvisCard numero={1} etoile={4} />
					<AvisCard numero={2} etoile={5} />
					<AvisCard numero={3} etoile={5} />
				</div>
			</section>

			<section id="faq" className="bg-blue-300 py-30 px-10 text-gray-800">
				<h2 className="text-6xl font-black mb-6 text-center">Moment FAQ</h2>
				<FAQ />
			</section>

		</main>
	);
}