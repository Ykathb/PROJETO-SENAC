"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import CarouselItemComponent from "@/app/CarouselItemComponent"; // Ajuste o caminho conforme necessário

const items = [
  {
    src: "https://placehold.co/200x180",
    alt: "Item 1",
  },
  {
    src: "https://placehold.co/200x180",
    alt: "Item 2",
  },
  {
    src: "https://placehold.co/200x180",
    alt: "Item 3",
  },
  {
    src: "https://placehold.co/200x180",
    alt: "Item 4",
  },
  {
    src: "https://placehold.co/200x180",
    alt: "Item 5",
  },
  {
    src: "https://placehold.co/200x180",
    alt: "Item 6",
  },
];

export default function Example() {
  return (
    <Carousel>
      <CarouselContent className="flex">
        {/* Renderizando itens com tamanho ajustado */}
        {items.map((item, index) => (
          <CarouselItemComponent key={index} src={item.src} alt={item.alt} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 z-10" />
      <CarouselNext className="absolute right-2 z-10" />
    </Carousel>
  );
}
