import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MeteorsDiv from "./Test";

export default function SpringModal({detail, title, date}) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="">
            <button 
                onClick={() => setIsOpen(true)}
                className="mt-1 font-medium"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20v-5h1v3.292l3.6-3.6l.708.708l-3.6 3.6H9v1zM15.4 9.308l-.708-.708l3.6-3.6H15V4h5v5h-1V5.708z"/></svg>
            </button>

            
            <ModalContent 
              isOpen={isOpen} 
              setIsOpen={setIsOpen} 
              detail={detail}
              title={title}
              date={date}
            />
        </div>
    );
};

const ModalContent = ({ isOpen, setIsOpen, detail, title, date }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-[7] grid place-items-center overflow-y-scroll"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg"
                    >
                        <MeteorsDiv>
                        <button 
                                onClick={() => setIsOpen(false)}
                                className="absolute end-2 top-2 font-medium"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 72 72"><path fill="#ea5a47" d="m58.14 21.78l-7.76-8.013l-14.29 14.22l-14.22-14.22l-8.013 8.013L28.217 36l-14.36 14.22l8.014 8.013l14.22-14.22l14.29 14.22l7.76-8.013L43.921 36z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m58.14 21.78l-7.76-8.013l-14.29 14.22l-14.22-14.22l-8.013 8.013L28.207 36l-14.35 14.22l8.014 8.013l14.22-14.22l14.29 14.22l7.76-8.013L43.921 36z"/></svg>
                            </button>

                            <div className="relative z-10">
                                
                                <time className="text-sm font-medium">
                                    {date}
                                </time>

                                <div 
                                className="text-sm font-normal text-gray-100"
                                dangerouslySetInnerHTML={{__html: title}}
                                ></div>

                                <ul 
                                className="text-sm space-y-2 my-3 list-disc ps-4" 
                                dangerouslySetInnerHTML={{__html: detail}}
                                ></ul>

                            </div>
                        </MeteorsDiv>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};