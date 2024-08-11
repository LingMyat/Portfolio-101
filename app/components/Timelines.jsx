"use client";
import Image from 'next/image';
import clsx from 'clsx';
import SpringModal from './SpringModal';

export default function Timelines() {

    const timelines = [
        {
            id     : 1,
            name   : '528 Health, Beauty And Wellness',
            image  : '/528.jpg',
            current: false,
            href   : 'https://www.facebook.com/528healthbeautyandwellness',
            date   : 'Jan 2022 - Sep 2022',
            html   : `
                <p>
                    First developer job at 
                    <a 
                    target="_blank" 
                    href="https://www.facebook.com/528healthbeautyandwellness" 
                    class="font-semibold text-green-400 hover:underline"
                    >
                        @528 Health, Beauty And Wellness.
                    </a>
                </p>
            `,
            detail  : `
                <li>
                    Developing and maintaining Ecommerce Laravel websites.
                </li>

                <li>
                    Collaborating with senior developers to ensure that websites is developed according to best practices and meet project requirements.
                </li>

                <li>
                    Possessing a comprehensive set of front-end skills, including mastery of HTML, CSS, JavaScript.
                </li>

                <li>
                    Utilized version control systems such as git to manage projects.
                </li>

                <li>
                    Developed web services with RESTful API.
                </li>

                <li>
                    Staying up-to-date with new Laravel features and providing technical support.
                </li>
            `
        },
        {
            id     : 2,
            name   : 'KTK Pharmacy',
            image  : '/ktk.jpg',
            current: false,
            href   : 'https://www.facebook.com/ktkpharmacy',
            date   : 'Sep 2022 - Present',
            html   : `
                <p>
                    Move to Freelance. Joined
                    <a 
                    target="_blank" 
                    href="https://www.facebook.com/ktkpharmacy" 
                    class="font-semibold text-green-400 hover:underline"
                    >
                        @KTK Pharmacy
                    </a>
                    as Backend Developer.
                </p>
            `,
            detail  : `
                <li>
                    Communicating with client for their specific requirements
                    Managing the projects to getting done on schedule and within budget, ensuring clients&apos; goals are met
                </li>

                <li>
                    Designed and developed a CMS website for KTK Pharmacy.
                </li>

                <li>
                    Integrated e-commerce functionality for online medicine sales.
                </li>

                <li>
                    Developed custom backend features for streamlined content and product management.
                </li>
            `
        },
        {
            id     : 3,
            name   : 'Min Shin Saw',
            image  : '/minshinsaw.jpg',
            current: true,
            href   : 'https://www.facebook.com/minshinsaw2023',
            date   : 'Jun 2023 - Present',
            html   : `
                <p>
                    Joined
                    <a 
                    target="_blank" 
                    href="https://www.facebook.com/minshinsaw2023" 
                    class="font-semibold text-green-400 hover:underline"
                    >
                        @Min Shin Saw Co, Ltd.
                    </a>
                    as Fullstack Developer.
                </p>
            `,
            detail  : `
                <li>
                    Designing and developing high-quality software solutions: designing, developing, and deploying software applications using various programming languages, frameworks, and tools.
                </li>

                <li>
                    Leading development projects: working closely with project managers and collaborating with other team members.
                </li>

                <li>
                    Mentoring junior developers: mentoring and coaching them to develop their skills and grow as developers.
                </li>

                <li>
                    Maintaining code quality: ensuring that the codebase is maintained at a high level of quality, including enforcing coding standards, performing code reviews, and ensuring that best practices are followed.
                </li>

                <li>
                    Collaborating with other teams: such as product management, UX/UI design.
                </li>

                <li>
                    Participating in software architecture design: providing insights into technical feasibility and recommending the best architectural solutions.
                </li>
            `
        },
    ];

    return (
        <div className="mb-5">
            <h4 className="text-2xl font-bold mb-10">My Timeline</h4>

            <ol className="relative border-s-2 ms-4">
                {
                    timelines.map((timeline) => (
                        <li 
                        key={timeline.id} 
                        className="mb-10 ms-6 rounded h-16 overflow-hidden"
                        >    
                            <div
                              className="absolute end-1"
                            >
                                <SpringModal 
                                  detail={timeline.detail}
                                  date={timeline.date}
                                  title={timeline.html}
                                />
                            </div>
                            
                            <a 
                            target="_blank" 
                            href={timeline.href} 
                            className={clsx({
                                'absolute flex items-center justify-center rounded-full overflow-hidden': true,
                                '-start-5 w-9 h-9': !timeline.current,
                                '-start-5 w-9 h-9 ring-4': timeline.current
                            })}
                            >
                                <Image width={200} height={200} src={timeline.image} alt={timeline.name}/>
                            </a>

                            <div className="p-2 py-1 rounded shadow-sm bg-gray-700 border border-gray-600 ms-3 timeline-card">
                                <time className="text-sm font-medium">
                                    {timeline.date}
                                </time>

                                <div 
                                className="text-sm font-normal text-gray-100"
                                dangerouslySetInnerHTML={{__html: timeline.html}}
                                ></div>
                            </div>
                        </li>
                    ))
                } 
            </ol>
        </div>
    );
}