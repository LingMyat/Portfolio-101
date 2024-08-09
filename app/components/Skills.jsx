"use client"

import useFetch from "../hooks/useApi";

export default function Skills() {
    const { 
        data, 
        error, 
        loading 
    } = useFetch(process.env.NEXT_PUBLIC_API_URL+'skills');

    if (loading) return 'Loading......';

    return (
        <div className="mb-5">
            <h4 className="text-2xl font-bold mb-8">Skills</h4>

            <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 ">
                {
                    data.map((skill) => (
                        <div 
                        key={skill.id}
                        className="flex bg-[#2E2E34] hover:bg-[#1f2024] flex-col justify-center items-center h-32 rounded transition-all duration-200"
                        >
                           <p dangerouslySetInnerHTML={{__html: skill.svg}}></p>

                            <span>{skill.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}