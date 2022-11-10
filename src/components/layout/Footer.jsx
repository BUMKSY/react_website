import React from "react";

function Footer({ attr }) {
  return (
    <footer id="footerType" className={`footer__wrap ${attr[0]} ${attr[1]}`}>
      <h2 className="blind">푸터 영역</h2>
      <div className={`footer__inner ${attr[2]}`}>
        <div className="footer__menu">
          <div className="footer_leftbox">
            <h3>Webstoryboy</h3>
            <p>
              안녕하세요!
              <br />더 다양한 정보 확인
              <br />
              webstoryboy@naver.com
            </p>
            <ul className="footer_iconbox">
              <li className="footer_icon">
                <a href="/">
                  <img src="assets/img/foot_icon1.png" alt="푸터아이콘1" />
                </a>
              </li>
              <li className="footer_icon">
                <a href="/">
                  <img src="assets/img/foot_icon2.png" alt="푸터아이콘2" />
                </a>
              </li>
              <li className="footer_icon">
                <a href="/">
                  <img src="assets/img/foot_icon3.png" alt="푸터아이콘3" />
                </a>
              </li>
              <li className="footer_icon">
                <a href="/">
                  <img src="assets/img/foot_icon4.png" alt="푸터아이콘4" />
                </a>
              </li>
              <li className="footer_icon">
                <a href="/">
                  <img src="assets/img/foot_icon5.png" alt="푸터아이콘5" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_rightbox">
            <div>
              <h3>사이트</h3>
              <ul>
                <li>
                  <a href="/">웹표준 사이트</a>
                </li>
                <li>
                  <a href="/">반응형 사이트</a>
                </li>
                <li>
                  <a href="/">패럴랙스 사이트</a>
                </li>
                <li>
                  <a href="/">포트폴리오 사이트</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>유형</h3>
              <ul>
                <li>
                  <a href="/">이미지 유형</a>
                </li>
                <li>
                  <a href="/">카드 유형</a>
                </li>
                <li>
                  <a href="/">이미지/텍스트 유형</a>
                </li>
                <li>
                  <a href="/">배너 유형</a>
                </li>
                <li>
                  <a href="/">텍스트 유형</a>
                </li>
                <li>
                  <a href="/">푸터 유형</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>스크립트</h3>
              <ul>
                <li>
                  <a href="/">검색 이벤트</a>
                </li>
                <li>
                  <a href="/">퀴즈 이펙트</a>
                </li>
                <li>
                  <a href="/">마우스 이펙트</a>
                </li>
                <li>
                  <a href="/">슬라이드 이펙트</a>
                </li>
                <li>
                  <a href="/">패럴랙스 이펙트</a>
                </li>
                <li>
                  <a href="/">게임 이펙트</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>레퍼런스</h3>
              <ul>
                <li>
                  <a href="/">CSS</a>
                </li>
                <li>
                  <a href="/">FONTS</a>
                </li>
                <li>
                  <a href="/">BLOG</a>
                </li>
                <li>
                  <a href="/">REFERENCE</a>
                </li>
                <li>
                  <a href="/">TUTORIAL</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__right">
          Copyright 2022. All Rights Reserved. - Designed by Webstoryboy
        </div>
      </div>
    </footer>
  );
}

export default Footer;
