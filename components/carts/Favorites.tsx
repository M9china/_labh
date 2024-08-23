"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "./PolicyData";

export const Favorites = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section aria-labelledby="category-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-24 sm:mt-[12rem] sm:px-6 sm:py-32 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="category-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Our Favourites
          </h2>
        </div>
        <div className="slider-container mt-8">
          <Slider {...settings}>
            {slides.map((value: any) => (
              <Link
                href={"/#"}
                key={value.alt}
                className="flex flex-col justify-center pb-2"
              >
                <div className="relative flex justify-center">
                  <Image
                    width={500}
                    height={500}
                    className="object-cover rounded-md object-center group-hover:opacity-75"
                    src={value.src}
                    alt="avatar"
                  />
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
