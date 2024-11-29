function Portfolio() {
	return (
		<section className="my-28 flex flex-col gap-8 items-center ">
			<h2 className="text-zinc-600 text-3xl font-serif font-extrabold">
				Portfolio
			</h2>
			<article className="flex flex-col justify-center items-center  ">
				<div className="w-40 h-40 bg-zinc-600 rounded-md flex flex-col items-center bg-gradient-to-r from-red-950 -500 to-yellow-500">
					<a
						href="https://wildcodeschool-2024-09.github.io/JS-RemoteFR-Vendangeurs-P1-Dominos-Clicker/"
						target="_blank"
						rel="noreferrer"
						className=""
						data-aos="fade-up data-aos=fade-up data-aos-duration = 400"
					>
						<h3
							data-aos="slide-right"
							className="text-black font-serif font-extrabold text-xl flex justify-center"
						>
							Dominos
						</h3>
						<div className="w-90 h-90" />
						<p
							data-aos="slide-left"
							className="text-black font-serif font-extrabold text-xl flex justify-center"
						>
							Cliker
						</p>
						<div className="w-28 h-24 flex justify-center  ">
							<img
								className=""
								src="src\assets\icons\pizza.svg"
								alt="logo pizza"
							/>
						</div>
					</a>
				</div>
			</article>
			<article className="flex flex-col justify-center items-center gap-8  ">
				<div className="w-full flex justify-center "> </div>
				<div className="w-40 h-40 bg-zinc-600 rounded-md flex flex-col items-center bg-gradient-to-r from-pink-500 to-slate-200">
					<a
						href="/"
						target="_blank"
						rel="noreferrer"
						className=""
						data-aos="fade-up data-aos=fade-up data-aos-duration = 400"
					>
						<h3
							data-aos="slide-right"
							className="text-black font-serif font-extrabold text-xl flex justify-center"
						>
							Welcome
						</h3>
						<div className="w-90 h-90">
							<div className=""> </div>
						</div>
						<p
							data-aos="slide-left"
							className="text-black font-serif font-extrabold text-xl flex justify-center"
						>
							On Board
						</p>
						<div className="w-28 h-24 flex justify-center  ">
							<img className="" src="src\assets\icons\avatar.png" alt="" />
						</div>
					</a>
				</div>
			</article>
			<article className="flex flex-col justify-center items-center gap-8  ">
				<div className="w-full flex justify-center "> </div>
				<div className="w-40 h-40 bg-zinc-600 rounded-md flex flex-col items-center bg-gradient-to-r from-orange-600 to-purple-950">
					<a
						href="https://jam-music-client-vojs.vercel.app/"
						target="_blank"
						rel="noreferrer"
						className=""
						data-aos="fade-up data-aos=fade-up data-aos-duration = 400"
					>
						<h3
							data-aos="slide-right"
							className="text-black font-serif font-extrabold text-xl flex justify-center"
						>
							JAM
						</h3>
						<div className="w-90 h-90">
							<div className=""> </div>
						</div>
						<div className="w-28 h-24 flex justify-center  ">
							<img
								className="flex items-center mt-3"
								src="src\assets\icons\LogoJamOrange.png"
								alt="Logo JAM"
							/>
						</div>
					</a>
					<p className="font-serif font-extrabold text-xl animate-pulse ">
						Music
					</p>
				</div>
			</article>
		</section>
	);
}

export default Portfolio;
