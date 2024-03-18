import React from 'react';
import '../CSS/Contest.css';

const url = "https://data.kostat.go.kr/sbchome/bbs/boardDetail.do"

function Contest() {
  return (
    
    <div>

      <button className='poster' onClick={()=>{window.open(url)}}></button>

      <div className='ex'>
        
      <p>공모전: 통계데이터 분석 및 활용 대회</p>
      <p>일정: 2021.05.25. ~ 06.21</p> 
      <p> 공모 분야: 데이터 분석 보고서</p>
      <p>수상 내역: 대 상 </p>

      <div className='ch'> 자세한 내용은 포스터를 클릭해주세요 </div>
      </div>

    </div>
  );
}

export default Contest;