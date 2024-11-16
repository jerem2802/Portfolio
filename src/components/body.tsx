import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Body() {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);
	return (
		<>
			<section className="flex-col w-full">
				<div className="flex w-full justify-center lg:justify-evenly gap-4">
					<img
						src="src\assets\images\file.png"
						alt="portrait de Jérémy Tichané"
						className="grayscale w-48 lg:w-96 px-4  "
					/>
					<div className="flex flex-col gap-4 items-center ml-20">
						<div className="bg-zinc-600 w-[2px] h-28" />

						<a href="/" target="_blank" rel="noreferrer">
							<img
								src="src\assets\icons\github.svg"
								alt="logo github"
								className="lg:w-[32px] shadow-sm-color=random "
							/>
						</a>
						<a href="/" target="_blank" rel="noreferrer">
							<img
								src="src\assets\icons\linkedin.svg"
								alt="logo Linkedin"
								className="lg:w-[32px]"
							/>
						</a>
						<a href="/" target="_blank" rel="noreferrer">
							<img
								src="src\assets\icons\gmail.svg"
								alt="logo gmail"
								className="lg:w-[32px]"
							/>
						</a>
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="text-zinc-600 font-serif font-extrabold text-center px-6">
						Hello, I'm Jérémy Tichané, a web developer based in Bordeaux.
						Currently training at Wild Code School, I'm passionate about
						creating beautiful and functional websites using modern
						technologies. I'm currently looking for new opportunities to work on
						exciting projects. Feel free to contact me if you have any questions
					</p>
				</div>
			</section>

			<p className="text-2xl text-zinc-600 font-serif font-extrabold flex justify-center w-full h-10  ">
				My Skills
			</p>

			<section className="flex items-center justify-center w-full gap-4 h-56">
				<img
					src="src\assets\icons\logos--html-5.svg"
					alt="logo html"
					className="w-11"
					data-aos="fade-right"
				/>

				<img
					src="src\assets\icons\css.svg"
					alt=""
					className="w-11"
					data-aos="fade-up"
				/>

				<img
					src="src\assets\icons\devicon--react.svg"
					alt=""
					className="w-11"
					data-aos="slide-up"
				/>
				<img
					src="src\assets\icons\logos--nodejs-icon.svg"
					alt="Logo nodejs"
					className="w-11"
					data-aos="fade-up"
				/>

				<img
					src="src\assets\icons\devicon--javascript.svg"
					alt=""
					className="w-11"
					data-aos="fade-left"
				/>
			</section>
			<section className="flex flex-col justify-center items-center gap-8">
				<div className="w-full flex justify-center ">
					<h1 className="text-zinc-600 text-3xl font-serif font-extrabold">
						Portfolio
					</h1>
				</div>
				<div className="w-[300px] h-[300px] bg-zinc-600 rounded-md flex flex-col items-center">
					<a
						href="https://wildcodeschool-2024-09.github.io/JS-RemoteFR-Vendangeurs-P1-Dominos-Clicker/"
						target="_blank"
						rel="noreferrer"
						className="h-96 "
						data-aos="fade-up data-aos=fade-up data-aos-duration = 400"
					>
						<h2>Titre</h2>
						<div className="w-90 h-90">
							<div className=""> </div>
						</div>
						<p>description</p>
					</a>
				</div>
			</section>
		</>
	);
}
export default Body;
