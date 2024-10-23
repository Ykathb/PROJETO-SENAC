import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start", // Mantém o alinhamento à esquerda
        loop: true,
      }}
      className="w-full max-w-sm" // Mantenha isso para garantir que o carrossel use a largura total
    >
      <CarouselContent className="flex justify-start">
        {" "}
        {/* Alinhado à esquerda */}
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-start p-6">
                  {" "}
                  {/* Alinhado à esquerda */}
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
