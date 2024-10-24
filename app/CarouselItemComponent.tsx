// CarouselItemComponent.tsx
import Image from "next/image";

interface CarouselItemProps {
  src: string;
  alt: string;
}

const CarouselItemComponent: React.FC<CarouselItemProps> = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={180}
        height={200}
        className="object-cover"
      />
    </div>
  );
};

export default CarouselItemComponent;
