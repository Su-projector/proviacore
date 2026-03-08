"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectImageProps {
    images: string | string[];
    alt: string;
}

const ProjectImage = ({ images, alt }: ProjectImageProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isSlideshow = Array.isArray(images) && images.length > 1;

    useEffect(() => {
        if (!isSlideshow) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
        }, 2000); // 2 seconds

        return () => clearInterval(interval);
    }, [isSlideshow, images.length]);

    // Single image fast path
    if (!isSlideshow) {
        const src = Array.isArray(images) ? images[0] : images;
        return (
            <div className="relative w-full h-full">
                {src.startsWith('http') ? (
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={alt === "School Website"} // Priority load first project
                    />
                )}
            </div>
        );
    }

    // Slideshow path
    return (
        <div className="relative w-full h-full overflow-hidden">
            {images.map((src, index) => {
                const isActive = index === currentIndex;
                const isUrl = src.startsWith('http');
                
                return (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    >
                        {isUrl ? (
                            <img
                                src={src}
                                alt={`${alt} - Slide ${index + 1}`}
                                className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? "group-hover:scale-105" : ""}`}
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                        ) : (
                            <Image
                                src={src}
                                alt={`${alt} - Slide ${index + 1}`}
                                fill
                                className={`object-cover transition-transform duration-500 ${isActive ? "group-hover:scale-105" : ""}`}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={index === 0} // Load first image immediately
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectImage;
