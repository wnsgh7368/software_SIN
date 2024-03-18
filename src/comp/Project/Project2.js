import React from 'react';
import '../CSS/Project1.css';

function Project2() {
    return (
    
    <div>
        <div className='pr1_header'>AI 기반 고객 서비스 향상 프로젝트 보고서</div>   
        <div className='pr1_body'>
            <div className='body_div'>
                <div className='container'>
                    <div className='left-box'>프로젝트 개요</div>
                    <div className='right-box'><strong>1.1 목적:</strong> 이 프로젝트의 목적은 인공 지능 기술을 활용하여 고객 서비스의 품질을 향상시키는 것입니다.<br></br>
                    <strong>1.2. 배경:</strong> 고객 서비스는 기업의 핵심 요소 중 하나로, 효율적이고 스마트한 서비스를 제공하기 위해 AI 기술을 적용하는 것이 필요합니다.
                    </div>
                </div> 
            </div>

            <div className='body_div'>
                <div className='container'>
                    <div className='left-box'>분석 방법</div>
                    <div className='right-box'><strong>2.1. 사용된 도구 및 라이브러리: </strong>
                      Python 언어를 사용하였으며, 주로 Natural Language Processing (NLP)를 위한 NLTK, Scikit-learn 등의 라이브러리를 활용했습니다.<br></br>
                        <strong>2.2 분석 단계:</strong><br></br>
                        (1) 텍스트 데이터 전처리: 불필요한 문자 제거, 어간 추출 등을 통해 텍스트 데이터를 정제하였습니다.<br></br>
                        (2) 감정 분석 모델 구축: 감정 분석을 위한 딥러닝 모델을 구축하여 고객 피드백의 감정을 분류하였습니다.<br></br>
                        (3) 자동 응답 시스템 구현: 자연어 처리 모델을 활용하여 자동 응답 시스템을 구현하였습니다.
                    </div>
                </div>
            </div>
            <div className='body_div'>
                <div className='container'>
                    <div className='left-box'>결과 해석</div>
                    <div className='right-box'>
                        <strong>4.1. 감정 분석 결과: </strong> <br></br>
                                긍정적인 피드백: 75%<br></br>
                                부정적인 피드백: 25%<br></br>
                                중립적인 피드백: 10%<br></br>
                                <strong>4.2 자동 응답 시스템 성능:</strong> 자동 응답 시스템은 정확도 80%를 기록하였으며, 특히 감정 분석 결과에 따라 적절한 응답을 선택하는 데에 성공했습니다.
                        </div>
                </div>
            </div>
            <div className='body_div'>
                <div className='container'>
                    <div className='left-box'>결론</div>
                    <div className='right-box'>이 프로젝트를 통해 인공 지능을 활용한 고객 서비스 향상의 가능성을 확인하였습니다.
                     특히, 감정 분석을 통한 피드백 이해와 자동 응답 시스템의 구현으로 고객 응대의 효율성을 높일 수 있었습니다.</div>
                </div>
            </div>
        </div>
    
    </div>
    );
  }
  
  export default Project2;