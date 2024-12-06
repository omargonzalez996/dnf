import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const embla__slide = "flex-0 shrink-0 basis-full min-w-0";

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="relative">
      <div
        className="bg-slate-200 w-full h-64 overflow-hidden flex items-center justify-center "
        ref={emblaRef}
      >
        <div className="flex">
          <div className={embla__slide}>
            <img
              class="w-full h-auto object-cover"
              src="/carousel/land2.jpg"
              alt="img2"
            />
          </div>
          <div className={embla__slide}>
            <img
              class="w-full h-auto object-cover"
              src="/carousel/land3.jpg"
              alt="img3"
            />
          </div>
          <div className={embla__slide}>
            <img
              class="w-full h-auto object-cover"
              src="/carousel/land4.jpg"
              alt="img4"
            />
          </div>
        </div>
      </div>
      <div class="absolute inset-0 flex items-center justify-center mx-10">
        <p class="p-5 bg-white bg-opacity-80 text-center text-slate-900 text-xl font-bold">
          Gardening, Landscaping & Integration Services
        </p>
      </div>
    </div>
  );
};

export default Carousel;
