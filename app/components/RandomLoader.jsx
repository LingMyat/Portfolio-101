import "../styles/loading-animation.css";

export default function Loader() {
    
    const rand = Math.floor(Math.random() * 8) + 1;

    return (
        <div
        id="loader"    
        className={`loader-${rand}`}
        ></div>
    );
}