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
    id: 1,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Smith",
    company: "Smith Co.",
  },
  {
    image: "",
    id: 2,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Smith",
    company: "Smith Co.",
  },
  {
    image: "",
    id: 3,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Smith",
    company: "Smith Co.",
  },
  {
    image: "",
    id: 4,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Smith",
    company: "Smith Co.",
  },
  {
    image: "",
    id: 5,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Smith",
    company: "Smith Co.",
  },
  {
    image: "",
    id: 6,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Smith",
    company: "Smith Co.",
  },
  {
    image: "",
    id: 7,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Smith",
    company: "Smith Co.",
  },
  {
    image: "",
    id: 8,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Smith",
    company: "Smith Co.",
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
      <div className="w-full lg:w-2/3 p-4">
        <Carousel
          // @ts-ignore: mismatch type error
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              return (
                <CarouselItem className="" key={testimonial.id}>
                  <div className="mt-5 p-6 rounded-md flex flex-row gap-4 justify-center items-center">
                    <div className="w-48 h-48 bg-black dark:bg-white rounded-full">
                      {testimonial.image}
                    </div>
                    <div className="flex flex-col text-2xl gap-4">
                      <p className="text-gray-400">"{testimonial.quote}"</p>
                      <div className="flex flex-row gap-2">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="max-sm:hidden" />
          <CarouselNext className="max-sm:hidden" />
        </Carousel>
      </div>
    </section>
  );
}

// <CarouselItem
//   className="sm:basis-1 md:basis-1/2 lg:basis-1/3"
//   key={testimonial.id}
// >
//   <div className="mt-5 text-center border p-6 rounded-md dark:bg-black flex flex-col items-center justify-center gap-4">
//     <div className="w-24 h-24 bg-black dark:bg-white rounded-full">
//       {testimonial.image}
//     </div>
//     <p className="text-gray-400">"{testimonial.quote}"</p>
//     <div>
//       <p className="font-semibold">{testimonial.name}</p>
//       <p className="text-gray-400">{testimonial.company}</p>
//     </div>
//   </div>
// </CarouselItem>;
