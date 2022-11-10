import React from "react";

function Image(props) {
  return (
    <section id="imageType" className={`image__wrap ${props.attr}`}>
      <h2>포트폴리오 구경하기</h2>
      <p>
        웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 강의 사이트입니다.
      </p>
      <div className="image__inner">
        <ul className="image__box">
          <li className="image__imagecon">
            <div className="iamge_imagebox1"></div>
            <div className="image_text">
              <h3 className="image__title">김현정 포폴!</h3>
              <p className="image__desc">
                사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
                익히고, 웹 표준을 준수하면서......
              </p>
            </div>
          </li>
          <li className="image__imagecon">
            <div className="iamge_imagebox2"></div>
            <div className="image_text">
              <h3 className="image__title">장현정 포폴!</h3>
              <p className="image__desc">
                사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
                익히고, 웹 표준을 준수하면서......
              </p>
            </div>
          </li>
          <li className="image__imagecon">
            <div className="iamge_imagebox3"></div>
            <div className="image_text">
              <h3 className="image__title">박현정 포폴!</h3>
              <p className="image__desc">
                사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
                익히고, 웹 표준을 준수하면서......
              </p>
            </div>
          </li>
          <li className="image__imagecon">
            <div className="iamge_imagebox4"></div>
            <div className="image_text">
              <h3 className="image__title">송현정 포폴!</h3>
              <p className="image__desc">
                사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
                익히고, 웹 표준을 준수하면서......
              </p>
            </div>
          </li>
          <li className="image__imagecon">
            <div className="iamge_imagebox5"></div>
            <div className="image_text">
              <h3 className="image__title">이현정 포폴!</h3>
              <p className="image__desc">
                사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
                익히고, 웹 표준을 준수하면서......
              </p>
            </div>
          </li>
          <li className="image__imagecon">
            <div className="iamge_imagebox6"></div>
            <div className="image_text">
              <h3 className="image__title">마현정 포폴!</h3>
              <p className="image__desc">
                사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
                익히고, 웹 표준을 준수하면서......
              </p>
            </div>
          </li>
          <li className="image__imagecon">
            <div className="iamge_imagebox7"></div>
            <div className="image_text">
              <h3 className="image__title">우현정 포폴!</h3>
              <p className="image__desc">
                사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
                익히고, 웹 표준을 준수하면서......
              </p>
            </div>
          </li>
          <li className="image__imagecon">
            <div className="iamge_imagebox8"></div>
            <div className="image_text">
              <h3 className="image__title">최현정 포폴!</h3>
              <p className="image__desc">
                사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을
                익히고, 웹 표준을 준수하면서......
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Image;
