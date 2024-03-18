import React from 'react';
import '../CSS/Project1.css';

function Project3() {
    return (
    
    <div>
        <div className='pr1_header'>스포츠 데이터 분석을 통한 선수 성적 예측 프로젝트 보고서</div>   
        <div className='pr1_body'>
            <div className='body_div'>
                <div className='container'>
                    <div className='left-box'>프로젝트 개요</div>
                    <div className='right-box'><strong>1.1 목적:</strong> 이 프로젝트의 목적은 스포츠 선수들의 성적을 분석하고, 다양한 변수들을 활용하여 선수의 향후 성적을 예측하는 것입니다.<br></br>
                    <strong>1.2. 배경:</strong> 스포츠 팀은 선수들의 성적을 효과적으로 예측하여 팀 전략을 수립하고 강화하고자 합니다.
                    </div>
                </div> 
            </div>

            <div className='body_div'>
                <div className='container'>
                    <div className='left-box'>분석 방법</div>
                    <div className='right-box'><strong>2.1. 사용된 도구 및 라이브러리: </strong>
                          Python 언어를 사용하였으며, 주로 Pandas, NumPy, Scikit-learn 등의 라이브러리를 활용했습니다.<br></br>
                        <strong>2.2 분석 단계:</strong><br></br>
                        (1) 탐색적 데이터 분석 (EDA): 선수들의 통계, 경기 기록 등을 시각화하고 분석하였습니다.<br></br>
                        (2) 변수 선택 및 특성 공학: 성적 예측에 영향을 미칠 것으로 예상되는 변수들을 선택하고 새로운 특성을 도출하였습니다.<br></br>
                        (3) 예측 모델 구축: 선형 회귀 모델을 사용하여 선수의 향후 성적을 예측하는 모델을 학습하였습니다.
                    </div>
                </div>
            </div>
            <div className='body_div'>
                <div className='container'>
                    <div className='left-box'>결과 해석</div>
                    <div className='right-box'>
                        <strong>4.1. 예측 모델 결과: </strong> 모델의 정확도는 82%로, 특히 훈련량, 건강 상태, 과거 경기 성적 등이 선수의 향후 성적에 영향을 미친 것으로 확인되었습니다.<br></br>
                                
                        <strong>4.2 팀 성적 예측:</strong> 모델을 활용하여 팀 전체의 향후 성적을 예측하였고, 이를 바탕으로 전략을 세우고 팀원을 효과적으로 배치하였습니다.
                        </div>
                </div>
            </div>
            <div className='body_div'>
                <div className='container'>
                    <div className='left-box'>결론</div>
                    <div className='right-box'>이 프로젝트를 통해 선수 성적을 예측하는 데에 효과적인 모델을 구축하고, 이를 활용하여 팀의 전략을 강화하는데 성공하였습니다.</div>
                </div>
            </div>
        </div>
    
    </div>
    );
  }
  
  export default Project3;