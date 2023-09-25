import React, { useRef, useState } from "react";
import Mycard from "../components/MyCard";
import "./styles/Imagecarousel.css";

const Imagecarousel = () => {
    const boxRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - boxRef.current.offsetLeft);
        setScrollLeft(boxRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const x = e.pageX - boxRef.current.offsetLeft;
        const walk = x - startX;

        requestAnimationFrame(() => {
            boxRef.current.scrollLeft = scrollLeft - walk;
        });
    };

    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={() => boxRef.current.scrollLeft -= 400}><p>&lt;</p></button>
            <button className="next-btn" onClick={() => boxRef.current.scrollLeft += 400}><p>&gt;</p></button>

            <div
                className="product-container"
                ref={boxRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <Mycard/>
                <Mycard/>
                <Mycard/>
                <Mycard/>
                <Mycard/>

            </div>
        </div>
    );
};

export default Imagecarousel;
