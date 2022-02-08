import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative ">
      <div className="absolute w-full xs:h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 " />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/banner_img1.jpg " alt="Banner Image1" />
        </div>
        <div>
          <img loading="lazy" src="/banner_img2.jpg " alt="Banner Image2" />
        </div>
        <div>
          <img loading="lazy" src="/banner_img3.jpg " alt="Banner Image3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
