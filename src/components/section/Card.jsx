import React from "react";

function Card({ attr }) {
  return (
    <section id="cardType" className={`card__wrap ${attr[0]}`}>
      <h2>웹쓰 스터디 멤버</h2>
      <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.</p>
      <div className={`card__inner ${attr[2]}`}>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01_01.jpg" alt="얼굴사진1" />
          </figure>
          <div className="card__body box1">
            <h3 className="tit">웹쓰 24기 전현정</h3>
            <a className="btn" href="/">
              자세히 보기
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01_02.jpg" alt="얼굴사진2" />
          </figure>
          <div className="card__body box2">
            <h3 className="tit">웹쓰 14기 황현정</h3>
            <a className="btn" href="/">
              자세히 보기
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01_03.jpg" alt="얼굴사진3" />
          </figure>
          <div className="card__body box3">
            <h3 className="tit">웹쓰 20기 김현정</h3>
            <a className="btn" href="/">
              자세히 보기
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Card;
