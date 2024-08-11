"use client"

import useFetch from "@/app/hooks/useApi";
import "../../styles/custom-content.css";
import Drawer from "./components/drawer";
import Image from 'next/image';

export default function Page({ params }) {
    const {
        data,
        error,
        loading,
        success
    } = useFetch(process.env.NEXT_PUBLIC_API_URL + 'projects/' + params.slug);

    return (
        <div className="md:w-full w-screen">
            <div
                className="fixed hidden md:block right-[5%] sm:right-[10%] lg:right-[15%] top-[2%] sm:top-[10%] z-[-1]"
            >
                <Image
                    src="/astronut-1.gif"
                    alt="astronut-animation"
                    width={110}
                    height={110}
                />
            </div>

            <div
                className="z-[-1] hidden md:block fixed left-[36.4%] md:left-[9%] top-[55.7%] sm:top-[58%]"
            >
                <Image
                    src="/astronut-2.gif"
                    alt="astronut-animation"
                    width={120}
                    height={120}
                />
            </div>

            {loading && "Loading...."}

            {
                success && (
                    <div className="w-full">
                        <div className="flex items-center md:mb-8 mb-7 justify-between">
                            <div className="w-[18px] hidden md:block h-[2px] bg-white"></div>

                            <h1 className="sm:text-3xl italic text-2xl">
                                {data.name}
                            </h1>

                            <div className="w-[18px] hidden md:block h-[2px] bg-white"></div>
                        </div>

                        <div
                            className="mb-7 custom-content"
                            dangerouslySetInnerHTML={{ __html: data.description }}
                        ></div>

                        {
                            data.items.map(item => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-4 mb-6"
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${item.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                        className="md:min-w-[180px] min-w-[160px] h-[85px] md:h-[95px]"
                                    >

                                    </div>

                                    <div>
                                        <Drawer
                                            title={item.title}
                                            description={item.description}
                                            image={process.env.NEXT_PUBLIC_API_URL + item.image}
                                            url={item.link}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}