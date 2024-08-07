"use client";

import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import Image from "next/image";
import { memberTeam, sou } from "../../../public/assets";
import {
  NextButtonClient,
  PrevButtonClient,
} from "./EmblaCarouselArrowClients";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarouselClients = ({ children, object }) => {
  // const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const tweenFactor = useRef(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <div className="emblaClient">
      <div className="emblaClient__viewport" ref={emblaRef}>
        <div className="emblaClient__container">
          {/* {slides.map((index) => (
            <div className="emblaClient__slide" key={index}>
              <div className="emblaClient__slide__number p-4">
                <div className="client flex flex-col md:flex-row items-center">
                  <div className=" w-[100px] h-[100px] ">
                    <Image src={sou} alt="user" />
                  </div>
                  <div className=" mt-3 flex-1 md:ms-5">
                    <p className=" text-[14px] text-center text-white max-w-[500px] md:text-start font-light">
                      I have found many companies and many agencies, but when
                      dealing with you for the first time I felt that you were
                      the best! That is exactly what happened when I dealt with
                      you.
                    </p>
                    <div className="text-white mt-4 text-center md:text-start">
                      <h5 className=" font-bold">Soufyane Khalfallah</h5>
                      <p className=" font-light">Front-end developer</p>
                    </div>
                  </div>
                </div>

               

              </div>
            </div>
          ))} */}
          {children}
        </div>
      </div>

      <div className="emblaClient__controls">
        <div className="emblaClient__buttons">
          <PrevButtonClient
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButtonClient
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarouselClients;
