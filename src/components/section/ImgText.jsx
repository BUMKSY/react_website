import React from "react";

function ImgText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[3]}`}
    >
      <h2 className="blind">유용한 사이트 살펴보기</h2>
      <div className={`imgText__inner ${attr[2]}`}>
        <div className="imgText__txt">
          <span>FRONTEND</span>
          <h3>
            프론트엔드
            <br />
            전문과정
          </h3>
          <p>
            프론트앤드 개발자로 취업하기 위한
            <br />
            전문 과정입니다.
            <br />
            여러분들도 도전해보세요!
          </p>
        </div>
        <div className="imgText_text_Box">
          <div className="imgText_text t1">
            <h3 className="imgText_text__title">웹 디자인</h3>
            <p className="imgText_text__desc">
              웹디자이너가 포함된 웹 및 멀티미디어 디자이너는 다른 직업과
              비교하여 임금과 복리후생이 낮은 퍼블리싱은 웹 사이트를 제작할
            </p>
          </div>
          <div className="imgText_text t2">
            <h3 className="imgText_text__title">웹 퍼블리셔</h3>
            <p className="imgText_text__desc">
              퍼블리싱은 웹 사이트를 제작할 때, 웹 디자이너가 디자인한 것을 웹
              표준성과 접근성에 부합하도록 재정하였다.
            </p>
          </div>
          <div className="imgText_text t3">
            <h3 className="imgText_text__title">프론트엔드 개발자</h3>
            <p className="imgText_text__desc">
              사이트와 상호작용하는 모든 부분에 대한 개발, 관리, 유지 보수를
              하는 것 솔루션의 프로세스를 개발합니다.
            </p>
          </div>
          <div className="imgText_text t4">
            <h3 className="imgText_text__title">백엔드 개발자</h3>
            <p className="imgText_text__desc">
              용어 자체에서 알 수 있듯이, 백엔드는 웹사이트나 웹 애플리케이션
              또는 모바일 솔루션의 프로세스와 관련된입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImgText;
