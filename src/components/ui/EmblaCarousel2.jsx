"use client";

import React from "react";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { project, projectDe } from "../../../public/assets";

export const EmblaCarousel2 = ({ children }) => {
  //   const options = OPTIONS;
  const [emblaRef, emblaApi] = useEmblaCarousel({ direction: "rtl" });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla" dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* <div className="embla__slide w-[80%]">
            <Image
              src={projectDe}
              alt="img"
              className="w-[100%] h-[100%] object-cover"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="embla__slide">
            <Image
              src={projectDe}
              alt="img"
              className="w-[100%] h-[100%] object-cover"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="embla__slide">
            <Image
              src={projectDe}
              alt="img"
              className="w-[100%] h-[100%] object-cover"
              width={"100%"}
              height={"100%"}
            />
          </div> */}
          {children}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};
