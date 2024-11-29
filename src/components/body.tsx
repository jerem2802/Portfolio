import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./Portfolio";

function Body() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
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

						<a
							href="https://github.com/jerem2802"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="src\assets\icons\github.svg"
								alt="logo github"
								className="lg:w-[32px] shadow-sm-color=random "
							/>
						</a>
						<a
							href="https://www.linkedin.com/feed/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="src\assets\icons\linkedin.svg"
								alt="logo Linkedin"
								className="lg:w-[32px]"
							/>
						</a>
						<a
							href="mailto:jeremytichane.dev@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="src\assets\icons\gmail.svg"
								alt="logo gmail"
								className="lg:w-[32px]"
							/>
						</a>
					</div>
				</div>
				<div className="my-8 w-full">
					<p className="text-zinc-400 font-serif font-extrabold text-center text-xs px-10">
						Bonjour ! Je m'appelle Jérémy Tichané, développeur web basé à
						Bordeaux. Actuellement en formation à la Wild Code School, je suis
						passionné par le développement de sites web à la fois esthétiques et
						fonctionnels, en utilisant les technologies modernes pour créer des
						expériences utilisateur optimales. Au fil de ma formation, j'ai pu
						acquérir des compétences solides en front-end et back-end, avec des
						langages et frameworks tels que JavaScript, HTML/CSS, React, et
						Node.js. J'ai eu l'occasion de travailler sur des projets concrets
						qui m'ont permis de développer mon sens de l'organisation, ma
						capacité à résoudre des problèmes techniques, et ma créativité pour
						répondre aux besoins des utilisateurs. En tant que développeur web,
						je cherche maintenant à rejoindre une équipe dynamique et à
						contribuer à des projets stimulants. Je suis particulièrement
						intéressé par les projets qui permettent d’innover et d’apporter des
						solutions numériques efficaces. N'hésitez pas à me contacter pour
						discuter de potentiels projets, collaborations, ou simplement
						échanger autour du développement web !
					</p>
				</div>
			</section>

			<section className="flex flex-col items-center justify-center w-full gap-4 h-20 my-20">
				<h2 className="text-2xl text-zinc-600 font-serif font-extrabold flex justify-center w-full h-10 mt-10  ">
					My Skills
				</h2>

				<div className="flex gap-4">
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
				</div>
			</section>
			<Portfolio />
		</>
	);
}
export default Body;
