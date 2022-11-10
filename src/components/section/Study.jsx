import React from "react";

function Study({ attr }) {
  return (
    <section id="studyType" className={`study__wrap ${attr[0]} ${attr[2]}`}>
      <h2>스터디 후기</h2>
      <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.</p>
      <div className={`study__inner ${attr[1]}`}>
        <article className="study">
          <figure className="study__header">
            <p className="desc">
              불과 3달전만해도 여러 원인들로 인해 자존감이 밑바닥이였던 저에게
              이 스터디는 너무 소중한 시간이었어요. 매일 마음속으로 울고싶다를
              외쳤던 저였는데 이제는 조금이나마 이겨 낼 수 있을 것 같네요.
              다음에 선생님 만났을 때는 많이 발전해있는 제가 되었으면
              좋겠네요...
            </p>
          </figure>
          <div className="study__body">
            <div className="study__body_imagebox">
              <img src="assets/img/study_01.jpg" alt="스터디01" />
            </div>
            <a href="/">
              <span className="btn">자세히 보기</span>
            </a>
          </div>
        </article>
        <article className="study">
          <figure className="study__header">
            <p className="desc">
              진심 학교나 학원보다 더 많이 배운거라고 생각하고, 무지하고
              말안듣고 자존감바닥인 저를 팩폭도 해주시고, 버리지 않아주셔서
              감사...합니다 쌤!!!!!!!!!! 회사에서 잘리지않고,,,
              존버하겠습니다!!!!!!!!!!!! 감사...합니다 쌤!!!!!!!!!!
            </p>
          </figure>
          <div className="study__body">
            <div className="study__body_imagebox">
              <img src="assets/img/study_02.jpg" alt="스터디02" />
            </div>
            <a href="/">
              <span className="btn">자세히 보기</span>
            </a>
          </div>
        </article>
        <article className="study">
          <figure className="study__header">
            <p className="desc">
              제가 게을러서 의도치않게 자꾸 말을 안듣는 학생이 되었었지만 정말
              선생님 말씀 틀린거 하나도 없었다는거 잘 알고있습니다,,, ㅎㅎ 아
              그리고 마지막 하고 싶은 말은 저 새벽 5~6시에 자는
              ㄹㅇ올빼미형인간인데... 쌤이랑 두달 공부했다고.....
            </p>
          </figure>
          <div className="study__body">
            <div className="study__body_imagebox">
              <img src="assets/img/study_03.jpg" alt="스터디03" />
            </div>
            <a href="/">
              <span className="btn">자세히 보기</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Study;
