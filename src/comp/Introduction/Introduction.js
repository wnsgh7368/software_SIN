import React from 'react';
import '../CSS/Resume.css';
function Introduction() {
  return (
    
  <div>
    <div className='head'>
      
      <div className='profile_img'></div>

      <div className='intro'>
        <div className='intro_name'>신준호</div>
        <div className='intro_j'>충청남도 천안시 서북구 쌍용동</div>
      </div>

      <div className='phoneNumber'>+82-10-9402-7368
      <div>sin010820@naver.com</div>
      </div>
  
    </div>
      <div className='body'>

        <div className='body_left'>
          <div className='resume'>
            
            <div className='bord'> 자기소개 </div>
            <div>안녕하세요, 신준호 입니다. 데이터 과학에 빠져있는 열정적인 학습자입니다. 
              수학과 프로그래밍을 통한 분석 능력과 끊임없는 학습 태도로 데이터의 이면에서 의미를 찾고, 
              현실 세계의 문제에 데이터로 접근하여 해결하는 것을 즐깁니다. 새로운 도전과 학습 기회에 열려 있으며, 
              데이터 과학의 다양한 영역에서 성장하고 싶습니다. 감사합니다.
            </div>

          </div>

          <div className='tech'>
          <div className='bord'> 숙련기술 </div>
            <div>
            <li>빅데이터</li> 
            <li>클라우드 컴퓨팅</li> 
            <li>자연어 처리</li>
            </div>
          </div>

        </div>
        <div className='body_right'>
          <div className='school'>           
          <div className='bord'>학력</div>
          <h3><strong>가천대학교</strong></h3>

          성남시<br></br>
          컴퓨터 공학 학사, 컴퓨터 공학 전공<br></br>
          2024년 졸업<br></br>
          최우수 학생으로 졸업<br></br> 
          <br></br>

          <h3><strong>서울대학교 대학원</strong></h3>
          서울<br></br>
          컴퓨터 공학 석사<br></br>
          데이터과학 전문과정 수료<br></br>
          2027년 졸업<br></br>
          스포츠 데이터 사이언스 관련 특허 논문 작성<br></br> 

        </div>
          </div>
      </div>
  </div>
  );

}

export default Introduction;