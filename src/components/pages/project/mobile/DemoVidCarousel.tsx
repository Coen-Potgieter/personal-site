import { useRef, useState } from "react";

type DemoVidCarouselProps = {
  demoVids: string[];
};

const DemoVidCarousel: React.FC<DemoVidCarouselProps> = ({ demoVids }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.scrollWidth / demoVids.length;
      const newIndex = Math.round(scrollPosition / itemWidth);
      if (currentIndex === newIndex) return;
      setCurrentIndex(newIndex);
    }
  };

  const noIndicatorDots = demoVids.length <= 1;

  return (
    <div className="md:hidden pt-3">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex max-h-[60vh] max-w-[80vw] overflow-x-auto snap-x snap-mandatory scrollbar-hidden"
      >
        {demoVids.map((link, id) => (
          <img
            src={link}
            className="object-contain snap-center"
            key={id}
            alt={`Demo Gif #${id}`}
          />
        ))}
      </div>

      {/* Indicator Dots */}
      {!noIndicatorDots && (
        <div className="flex justify-center gap-2 mt-1">
          {demoVids.map((_, id) => (
            <div
              key={id}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                id === currentIndex
                  ? "bg-my-orange1 dark:bg-my-green1 w-4"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DemoVidCarousel;
