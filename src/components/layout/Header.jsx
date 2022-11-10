import React from "react";

function Header(props) {
  return (
    <header id="headerType" className="{props.fonts}">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            web <em>site</em>
          </a>
        </div>

        <nav className="header__menu">
          <ul>
            <li>
              <a href="#headerType">헤더 영역</a>
            </li>
            <li>
              <a href="#sliderType">슬라이드 영역</a>
            </li>
            <li>
              <a href="#imageType">이미지 영역</a>
            </li>
            <li>
              <a href="#bannerType">컨텐츠 영역</a>
            </li>
            <li>
              <a href="#footerType">푸터 영역</a>
            </li>
          </ul>
        </nav>

        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
