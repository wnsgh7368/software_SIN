import React from 'react';
import '../CSS/Project1.css';

function Project1() {
    return (
    
    <div>
        <div className='pr1_header'>고객 이탈 예측을 통한 온라인 소매업체의 마케팅 전략 개선</div>   
        <div className='pr1_body'>
            <div className='body_div'>
                <div className='container'>
                    <div className='left-box'>프로젝트 개요</div>
                    <div className='right-box'><strong>1.1 목적:</strong> 이 프로젝트의 목적은 온라인 소매업체의 고객 이탈을 예측하여 효과적인 마케팅 전략을 수립하는 것입니다.<br></br>
                    <strong>1.2. 배경:</strong> 고객 이탈은 온라인 소매업체에 심각한 영향을 미치며, 이를 사전에 예측하고 방지하기 위한 데이터 과학적 접근이 필요합니다.
                    </div>
                </div> 
            </div>

            <div className='body_div'>
                <div className='container'>
                    <div className='left-box'>분석 방법</div>
                    <div className='right-box'><strong>2.1. 사용된 도구 및 라이브러리: </strong>
                        프로젝트에서는 Python 언어를 사용하였으며, 주로 Pandas, NumPy, Scikit-learn 등의 라이브러리를 활용했습니다.<br></br>
                        <strong>2.2 분석 단계:</strong><br></br>
                        (1) 탐색적 데이터 분석 (EDA): 고객의 구매 패턴, 환불 여부, 선호 카테고리 등을 시각화하고 분석했습니다.<br></br>
                        (2) 고객 Segmentation: RFM(Recency, Frequency, Monetary) 기반으로 고객을 세분화하여 그룹화했습니다.<br></br>
                        (3) 예측 모델 구축: Logistic Regression을 사용하여 고객 이탈 여부를 예측하는 모델을 학습했습니다.
                    </div>
                </div>
            </div>
            <div className='body_div'>
                <div className='container'>
                    <div className='left-box'>결과 해석</div>
                    <div className='right-box'>
                        <strong>4.1. 고객 Segmentation 결과: </strong> <br></br>
                                A 세그먼트: 최근 구매가 높고 지속적으로 활동하는 고객<br></br>
                                B 세그먼트: 빈번한 구매가 있지만 최근 활동이 줄어든 고객<br></br>
                                C 세그먼트: 지속적인 활동이 없는 고객<br></br>
                                <strong>4.2 예측 모델 결과:</strong> 모델의 정확도는 88%로, 특히 고객의 활동 빈도와 구매 금액이 이탈 예측에 중요한 역할을 한 것으로 확인되었습니다.
                        </div>
                </div>
            </div>
            <div className='body_div'>
                <div className='container'>
                    <div className='left-box'>결론</div>
                    <div className='right-box'>이 프로젝트를 통해 고객 이탈에 영향을 미치는 주요 요인을 파악하고, 
                    향후 마케팅 전략 수립에 활용할 수 있는 인사이트를 도출했습니다. 
                    이를 통해 이탈 가능성이 높은 고객을 사전에 식별하여 프로모션 등의 전략을 펼치는 것이 효과적임을 확인했습니다.</div>
                </div>
            </div>
        </div>
    
    </div>
    );
  }
  
  export default Project1;