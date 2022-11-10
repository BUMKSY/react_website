import React from "react";

function Banner({ attr }) {
  return (
    <section id="bannerType" className="banner__wrap">
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <div className={`banner_text ${attr[1]}`}>
          <h3 className="title">유튜버 웹보이</h3>
          <p className="desc">
            더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
            <br />
            구독과 좋아요! 부탁드립니다.
          </p>
          <span className="small">
            <a href="/">바로가기</a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Banner;
