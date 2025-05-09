export interface Experience {
	company: string
	position: string
	date: string
	imagePath: string
	fullImagePath?: string
	altText: string
	imageClass: string
	description: string[]
}

export interface Education {
	institution: string
	degree: string
	date: string
	imagePath: string
	fullImagePath?: string
	altText: string
	imageClass: string
	marks?: string
	description: string[]
}

export interface Project {
	title: string
	description: string
	imagePath: string
	altText: string
	href?: string
}

export interface OpenSource {
	project: string
	contribution: string
	date?: string
	imagePath: string
	altText: string
	imageClass: string
	href: string
	description: string[]
}

export interface Certification {
	title: string
	description: string
	date: string
	href: string
}

export const experience: Experience[] = [
	{
		company: 'Fenado.ai',
		position: 'Software Developer',
		date: 'Feb 2025 - Current',
		imagePath: '/src/assets/fenado.png',
		fullImagePath: '/src/assets/fenado.png',
		altText: 'Fenado Logo',
		imageClass: 'h-11 w-auto md:-left-[4.5rem] md:rounded-full',
		description: [
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis recusandae, ut molestiae laboriosam pariatur!',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, pariatur!'
		]
	},
	{
		company: 'Conduent',
		position: 'Asociate Software Developer',
		date: 'Aug 2024 - Feb 2025',
		imagePath: '/src/assets/Conduent_logo.png',
		fullImagePath: '/src/assets/Conduent_logo_full.png',
		altText: 'Conduent Logo',
		imageClass: 'h-11 w-auto md:-left-[4.5rem] md:rounded-full',
		description: [
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis recusandae, ut molestiae laboriosam pariatur!',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, pariatur!'
		]
	},
	{
		company: 'Datachannel',
		position: 'Software Developer Intern',
		date: 'Oct 2023 - June 2024',
		imagePath: '/src/assets/datachannel.png',
		fullImagePath: '/src/assets/datachannel_full.png',
		altText: 'Datachannel logo',
		imageClass: 'h-11 w-auto md:-left-[4.5rem] md:rounded-full',
		description: [
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis recusandae, ut molestiae laboriosam pariatur!',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, pariatur!'
		]
	}
]

export const education: Education[] = [
	{
		institution: 'Noida Institute of Engineering & Technology',
		degree: 'Computer Science',
		date: 'Dec 2020 - June 2024',
		imagePath: '/src/assets/Niet.png',
		fullImagePath: '/src/assets/Niet_full.png',
		altText: 'NIET logo',
		imageClass: 'h-11 w-auto md:-left-16',
		marks: 'Grade : 7.94 / 10',
		description: [
			'Gained comprehensive knowledge in computer science fundamentals, software development, and data structures.',
			'Participated in various coding competitions and hackathons, securing top positions.'
		]
	},
	{
		institution: 'Pt Deen Dayal Vidyalaya Saraswati Vidya Mandir Inter College',
		degree: 'High School',
		date: 'Apr 2017 - Mar 2019',
		imagePath: '/src/assets/pddusvm.png',
		altText: 'School logo',
		imageClass: 'h-10 w-auto md:-left-16',
		marks: 'Grade : 9.40 / 10',
		description: [
			'Excelled in subjects like Mathematics, Physics, and Computer Science.',
			"Active member of the school's science club and participated in various inter-school competitions."
		]
	}
]

export const projects: Project[] = [
	{
		title: 'Befikarestore',
		description: 'Full Stack E-commerce Platform',
		imagePath: '/src/assets/coming-soon.png',
		altText: 'Befikarestore',
		href: 'https://befikarestore.in'
	},
	{
		title: 'Spotify Stats',
		description: 'Music Analytics App',
		imagePath: '/src/assets/coming-soon.png',
		altText: 'Spotify Stats',
		href: 'https://github.com/Yashasewi/spotify-portfolio'
	}
]

export const openSource: OpenSource[] = [
	{
		project: 'The Coding Train',
		contribution: 'Added dark mode feature to thecodingtrain.com',
		imagePath: '/src/assets/codingtrain.png',
		altText: 'Coding Train logo',
		imageClass: 'h-10 w-10 md:-left-16 object-contain',
		href: 'https://github.com/CodingTrain/thecodingtrain.com/pull/1554',
		description: [
			'Implemented dark mode using CSS variables and theming classes for improved user experience.',
			'Updated existing styles to ensure seamless adaptation to both light and dark themes.',
			'Addressed potential issues and collaborated with the team to ensure feature completeness.'
		]
	},
	{
		project: 'PearAI',
		contribution: 'Responsive design improvements and bug fixes',
		date: 'Month Year',
		imagePath: '/src/assets/pear.png',
		altText: 'PearAI logo',
		imageClass: 'h-11 w-auto md:-left-16',
		href: 'https://github.com/trypear/pear-landing-page/pull/193',
		description: [
			'Enhanced website responsiveness for small devices, improving user experience on mobile and tablet screens.',
			'Fixed various bugs and made adjustments to the layout and functionality of the site.'
		]
	}
]

export const certifications: Certification[] = [
	{
		title: 'The Bits and Bytes of Computer Networking (Google)',
		description:
			'Learned computer networking, network architecture, network security, and cloud computing.',
		date: 'October 23, 2022',
		href: 'https://coursera.org/share/d14020d2d68a111280f4fc82d7d033a7'
	},
	{
		title: 'Developing Cloud Apps with Node.js and React (IBM)',
		description:
			'Create server-side applications with Node.js and Express. Deploy to IBM Cloud. Develop front-end interfaces with React.',
		date: 'December 9, 2023',
		href: 'https://coursera.org/share/a3f8e0b6128d79d49250cfe886d66a45'
	}
]

export const skills = {
	languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'Go', 'Zig', 'Rust'],
	frontend: [
		'React',
		'Next.js',
		'Vite',
		'Lit',
		'Tailwind CSS',
		'Redux',
		'React Router',
		'Framer Motion',
		'GSAP',
		'Astro',
		'Sass',
		'Material-UI'
	],
	backend: [
		'Node.js',
		'Express',
		'NestJS',
		'Firebase',
		'Prisma',
		'Drizzel',
		'MySQL',
		'PostgreSQL',
		'MongoDB',
		'Django',
		'Flask',
		'Drizzel'
	],
	others: ['Git/Github', 'Docker', 'Figma', 'Linux', 'CI/CD', 'AWS', 'Arch(btw)']
}
