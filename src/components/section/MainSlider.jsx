import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainSlider({ attr }) {
  return (
    <section id="sliderType" className={`slider__wrap ${attr[1]}`}>
      <div className="slider__inner">
        <div className="mainSlide__con">
          <Slider
            className="mySlide"
            autoplay={true}
            dots={true}
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            <div>
              <img
                src="assets/img/main_slide_bg1.jpg"
                alt="메인 슬라이드 이미지1"
              />
            </div>
            <div>
              <img
                src="assets/img/main_slide_bg2.jpg"
                alt="메인 슬라이드 이미지2"
              />
            </div>
            <div>
              <img
                src="assets/img/main_slide_bg3.jpg"
                alt="메인 슬라이드 이미지3"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default MainSlider;
