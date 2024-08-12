import React, { useState } from "react";
import useMeasure from "react-use-measure";
import clsx from 'clsx';
import Image from 'next/image';

import {
    useDragControls,
    useMotionValue,
    useAnimate,
    motion,
} from "framer-motion";
import { Meteors } from "@/app/components/Meteors";

export default function Drawer({ title, description, image, url }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="">
            <div
                onClick={() => setOpen(true)}
                className="flex items-center gap-4 mb-6 cursor-pointer"
            >
                <div
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className="md:min-w-[180px] min-w-[160px] h-[85px] md:h-[95px]"
                ></div>


                <div className="" >
                    <h3
                        className={clsx({
                            'font-medium hover:text-green-400': true,
                            'mb-1': description
                        })}
                    >
                        {title}
                    </h3>

                    <p className="text-sm">
                        {description}
                    </p>
                </div>
            </div>

            <DragCloseDrawer open={open} setOpen={setOpen}>
                <div className="mx-auto flex flex-col md:grid grid-cols-2 gap-5 max-w-4xl h-full">
                    <div className="w-full h-full relative">
                        <Image
                            src={image}
                            fill
                            objectFit='contain'
                            alt={title}
                        />
                    </div>

                    <div className="relative ps-2 md:ps-4 h-full overflow-hidden rounded-2xl">
                        <div className="space-y-4 pt-5 md:pt-8">
                            <h3 className="text-lg font-medium">
                                {title}
                            </h3>

                            <p>
                                {description}
                            </p>

                            {url &&
                                (
                                    <a
                                        href={url}
                                        target="_blank"
                                        class="relative inline-flex items-center justify-start w-[6rem] py-[0.4rem] overflow-hidden border border-white font-medium transition-all bg-gray-800 rounded-sm hover:bg-gray-900 group"
                                    >
                                        <span
                                            class="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-[-3.5%] -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"
                                        ></span>
                                        <span
                                            class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black flex justify-center gap-1 items-center rounded"
                                        >
                                            <span className="font-semibold">View</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 3.5L3.5 9l6.5 3l7-5l-5 7l3 6.5z" /></svg>
                                        </span>
                                    </a>

                                )
                            }
                        </div>
                        <Meteors number={15} />
                        <Meteors number={2} />
                    </div>

                </div>
            </DragCloseDrawer>
        </div>
    );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
    const [scope, animate] = useAnimate();
    const [drawerRef, { height }] = useMeasure();

    const y = useMotionValue(0);
    const controls = useDragControls();

    const handleClose = async () => {
        animate(scope.current, {
            opacity: [1, 0],
        });

        const yStart = typeof y.get() === "number" ? y.get() : 0;

        await animate("#drawer", {
            y: [yStart, height],
        });

        setOpen(false);
    };

    return (
        <>
            {open && (
                <motion.div
                    ref={scope}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleClose}
                    className="fixed inset-0 z-[7] bg-neutral-950/70"
                >
                    <motion.div
                        id="drawer"
                        ref={drawerRef}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-0 h-[525px] md:h-[50vh] w-full overflow-hidden rounded-t-3xl bg-gray-900"
                        style={{ y }}
                        drag="y"
                        dragControls={controls}
                        onDragEnd={() => {
                            if (y.get() >= 100) {
                                handleClose();
                            }
                        }}
                        dragListener={false}
                        dragConstraints={{
                            top: 0,
                            bottom: 0,
                        }}
                        dragElastic={{
                            top: 0,
                            bottom: 0.5,
                        }}
                    >
                        <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-gray-900 p-4">
                            <button
                                onPointerDown={(e) => {
                                    controls.start(e);
                                }}
                                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
                            ></button>
                        </div>
                        <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};