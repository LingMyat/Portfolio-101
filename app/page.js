"use client"
import { useQuery } from "@tanstack/react-query";
import SocialLink from "./components/SocialLinks";
import Timelines from "./components/Timelines";
import Project from './components/Project';
import Skills from './components/Skills';
import Image from 'next/image';
import Loader from "./components/RandomLoader";

export default function Home() {

    const getProjects = async () => {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'projects');

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    }

    const {
        data,
        isLoading,
        isSuccess
    } = useQuery({
        queryKey: ['get', 'projects'],
        queryFn: getProjects,
    })

    return (
        <>
            <div
                className="fixed right-[5%] sm:right-[10%] lg:right-[15%] top-[2%] sm:top-[10%] z-[-1]"
            >
                <Image
                    src="/astronut-1.gif"
                    alt="astronut-animation"
                    width={110}
                    height={110}
                />
            </div>

            <div
                className="z-[-1] fixed left-[36.4%] md:left-[9%] top-[55.7%] sm:top-[58%]"
            >
                <Image
                    src="/astronut-2.gif"
                    alt="astronut-animation"
                    width={120}
                    height={120}
                />
            </div>

            {isLoading && <Loader />}

            {
                isSuccess && (
                    <>
                        <div className="flex gap-3 items-center mb-6">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Online.</span>
                        </div>
                        <div className="relative mb-5">
                            <h1 className="sm:text-4xl text-2xl">Hello👋, I&apos;m Ling Myat</h1>

                            <div
                                id="skew"
                                className="absolute sm:w-44 w-32 sm:right-[6.6rem] right-[6.6rem] h-3 bg-green-400 sm:top-8 top-6 opacity-60"
                            ></div>
                        </div>

                        <h1 className="sm:text-4xl text-3xl font-bold sm:mb-8 mb-5">
                            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                                Fullstack Developer
                            </span>
                        </h1>

                        <SocialLink />

                        <div className="mb-5 text-gray-300">
                            <p className="leading-relaxed">
                                Hi I&apos;m Ling Myat Aung. Experienced full-stack developer from Myanmar with over 2 years of job expertise in Php, Laravel and Vue.js. Ready to create innovative web solutions!
                            </p>
                        </div>

                        <Devider />

                        <Timelines />

                        <Devider />

                        <div className="mb-8">
                            <h4 className="text-2xl font-bold mb-8">
                                Projects and Experiences
                            </h4>

                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                                {data &&
                                    data.map((project) => (
                                        <Project
                                            key={project.id}
                                            name={project.name}
                                            slogan={project.slogan}
                                            skills={project.skills}
                                            slug={project.slug}
                                        />
                                    ))
                                }
                            </div>
                        </div>

                        <Devider />

                        <Skills />
                    </>
                )
            }
        </>
    );
}

function Devider() {
    return <div className="bg-gray-400 h-[1.2px] mb-5 z-[0]"></div>
}