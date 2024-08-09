"use client";
import { useEffect, useState } from 'react';
import '../styles/cursor.css';

export default function FollowingCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hover, setHover]       = useState(false);
    const [enter, setEnter]       = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
        const onMouseEnter = () => setHover(true);
        const onMouseLeave = () => setHover(false);

        const docEnter = () => setEnter(true);
        const docLeave = () => setEnter(false);

        document.addEventListener('mouseenter', docEnter);
        document.addEventListener('mouseleave', docLeave);

        document.addEventListener("mousemove", onMouseMove);
        document.querySelectorAll("button, a, .cursor-pointer").forEach((el) => {
            el.addEventListener("mouseenter", onMouseEnter);
            el.addEventListener("mouseleave", onMouseLeave);
        });

        return () => {
            document.removeEventListener('mouseenter', docEnter);
            document.removeEventListener('mouseleave', docLeave);

            document.removeEventListener("mousemove", onMouseMove);
            document.querySelectorAll("button, a, .cursor-pointer").forEach((el) => {
                el.removeEventListener("mouseenter", onMouseEnter);
                el.removeEventListener("mouseleave", onMouseLeave);
            });
        };
    }, []);

    if(enter) {
        return (
            <>
                <div
                    className={`
                        mouseCursor cursor-outer ${hover ? 'cursor-hover' : ''}
                    `}
                    style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
                ></div>
                <div
                    className={`mouseCursor cursor-inner ${hover ? 'cursor-hover' : ''}`}
                    style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
                >
                    <span>Drag</span>
                </div>
            </>
        );
    }
}
