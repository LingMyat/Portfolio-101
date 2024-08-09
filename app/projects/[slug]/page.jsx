"use client"

import useFetch from "@/app/hooks/useApi";
import "../../styles/custom-content.css";
import Drawer from "./components/drawer";

export default function Page({ params }) {
    const { 
        data, 
        error, 
        loading,
        success
    } = useFetch(process.env.NEXT_PUBLIC_API_URL+'projects/'+params.slug);

    if (loading) return "Loading....";

    if(success) {
        return (
            <>
                <div className="flex items-center mb-8 justify-between">
                    <div className="w-[18px] h-[2px] bg-white"></div>

                    <h1 className="sm:text-3xl italic text-2xl">
                        {data.name}
                    </h1>

                    <div className="w-[18px] h-[2px] bg-white"></div>
                </div>

                <div 
                  className="mb-5 custom-content"
                  dangerouslySetInnerHTML={{__html: data.description}}
                ></div>

                {
                    data.items.map(item => (
                        <div 
                          key={item.id}
                          className="flex items-center gap-4 mb-5"
                        >
                            <div 
                              style={{ 
                                backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${item.image})`,
                                backgroundSize : 'cover',
                                backgroundPosition: 'center'
                              }}
                              className="min-w-[180px] h-[95px]"
                            >

                            </div>

                            <div>
                                <Drawer
                                  title={item.title}
                                  description={item.description}
                                  image={process.env.NEXT_PUBLIC_API_URL+item.image}
                                  url={item.link}
                                />

                                <p className="text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}