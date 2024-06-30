import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

const testimonials = [
  {
    image: "",
    quote: "",
    name: "Prime",
    company: "Prime",
  },
];
export default function TestimonialSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  return (
    <section
      id="testimonial"
      className="pt-10 w-full flex flex-row items-center justify-center"
    >
      <div className="lg:w-2/3 p-4">
        <h1 className="scroll-m-20 text-3xl md:text-4xl tracking-tight font-semibold text-center">
          What do our customers say?
        </h1>
        <Carousel
          className=""
          // @ts-ignore: mismatch type error
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              return (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="mt-5 text-center border p-6 rounded-md bg-white dark:bg-black flex flex-col items-center justify-center gap-4">
                    <div className="w-24 h-24 bg-black dark:bg-white rounded-full">
                      {testimonial.image}
                    </div>
                    <p className="text-gray-400">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* <div className="w-3/4 px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-10 w-28 px-2"
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div> */}
    </section>
  );
}
