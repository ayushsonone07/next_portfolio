import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
    {
        id: 1,
        image: "https://4kwallpapers.com/images/walls/thumbs/9022.png",
        title: 'Project 1',
        description: 'This is project 1.',
    },
    {
        id: 2,
        image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/colored-circles-abstract-background-free-photo.jpg?w=1024&quality=50",
        title: 'Project 2',
        description: 'This is project 2.',
    },
    {
        id: 3,
        image: "https://thumbs.dreamstime.com/b/abstract-music-background-vinyl-mixer-64824483.jpg",
        title: 'Project 3',
        description: 'This is project 3.',
    },
    {
        id: 4,
        image: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1072-037-c-kvhh08mp.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d1140632e48f03cd69f599fc6433c00a",
        title: 'Project 4',
        description: 'This is project 4.',
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&w=1000&q=80",
        title: 'Project 5',
        description: 'This is project 5.',
    },
    {
        id: 6,
        image: "https://free4kwallpapers.com/uploads/originals/2022/11/14/colorful-abstract-lines-wallpaper.jpg",
        title: 'Project 6',
        description: 'This is project 6.',
    },
    {
        id: 7,
        image: "https://img.freepik.com/free-vector/colourful-spiral-lines-wavy-background_23-2148486090.jpg",
        title: 'Project 7',
        description: 'This is project 7.',
    },
    {
        id: 8,
        image: "https://img.freepik.com/premium-photo/wallpaper-with-dark-dramatic-gradient-colors-ai-generation_201606-3458.jpg",
        title: 'Project 8',
        description: 'This is project 8.',
    },
    {
        id: 9,
        image: "https://4kwallpapers.com/images/walls/thumbs_2t/10298.jpg",
        title: 'Project 9',
        description: 'This is project 9.',
    },
];

const ProjectsPage = () => {
    return (
        <div className="container mx-auto grid h-screen place-items-center">
            <div className="grid h-screen flex flex-start">
                <h1 className="text-7xl from-zinc-700 font-bold text-center lg:text-5xl m-0 flex-start">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Projects
                    </span>
                </h1>
                <p className="text-center">scroll down to see projects</p>
            </div>

            <div className="bg-slate-50 w-4/5	 ">
                <ul className="lg:grid lg:grid-cols-3 lg:gap-6">
                    {projects.map((project) => (
                        <div className="drop-shadow-xl hover:scale-110 transform transition duration-4">
                            <li key={project.id} className="mb-4 item-center border-solid ">
                                <img src={project.image} alt={project.title} className="object-cover h-48 w-96 lg:w-full mb-2 rounded" />
                                <h2 className="text-xl font-bold text-center">{project.title}</h2>
                                <p className="text-center">{project.description}</p>
                                <div className="flex flex-col items-center justify-center mt-4">
                                    <button class="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center ">
                                        View Project</button>
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectsPage;