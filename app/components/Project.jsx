import Link from "next/link";

export default function Project({name, slogan, skills, slug}) {
    return (
        <div className="p-3 bg-[#2E2E34] rounded project-card fade-right flex flex-col">
            <h5 className="text-lg font-semibold mb-2">
                {name}
            </h5>
            <div className="mb-3">
                <p className="text-sm font-medium text-gray-300 leading-relaxed">
                    {slogan}
                </p>
            </div>
            <div className="mt-auto flex justify-between items-center">
                <div 
                className="flex gap-2 items-center"
                >
                    {
                        skills.map((skill) => (
                            <span 
                              key={skill.id} 
                              title={skill.name}
                              dangerouslySetInnerHTML={{__html: skill.svg}}
                            ></span>
                        ))
                    }
                </div>
                
                <span className="link-arrow transition-all duration-200">
                    <Link href={`projects/${slug}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 512 512"><path fill="currentColor" d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256L359.873 121.377z"/></svg>
                    </Link>
                </span>
            </div>
        </div>
    )
}