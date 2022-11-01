import React from 'react';
// import { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Mainpage/Navbar.js';
import RadioGroup from './Radiogroup';
import Radio from './Radio';
import './Study.css';

const Topbox = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: beige;
  display: flex;
  margin-top: 50px;
`;

const Profilebox = styled.div`
  min-width: 500px;
  min-height: 200px;
  background-color: pink;
  margin: 0 auto;
  display: flex;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Profilepic = styled.div`
  min-width: 200px;
  min-height: 200px;
  background-color: skyblue;
`;

const Input = styled.input`
  padding-bottom: 130px;
  /* margin-top: 40px; */
`;

const Profilename = styled.div`
  min-width: 200px;
  min-height: 200px;
  /* background-color: blue; */
`;

const Name = styled.h5`
  margin-top: 70px;
`;

const Nation = styled.h5``;

const Introduction = styled.h5``;

const MainProfile = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: pink; */
  margin-top: 4vw;
`;

const Select = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Profile = styled.a`
  padding: 0 2vw;
  margin-right: 70px;
  background-color: aliceblue;
  text-decoration: none;
  color: black;
  border-radius: 10px;
`;

const Account = styled.a`
  padding: 0 2vw;
  background-color: aliceblue;
  text-decoration: none;
  color: black;
  border-radius: 10px;
`;

const Modifybtn = styled.button`
  height: 40px;
  padding: 0 1vw;
  margin-right: 20px;
  background-color: aliceblue;
  border: 1px solid gray;
  border-radius: 10px;
  margin-left: 1vw;
  min-width: 73px;
`;
const Savebtn = styled.button`
  height: 40px;
  padding: 0 1vw;
  background-color: aliceblue;
  border: 1px solid gray;
  border-radius: 10px;
`;

const Buttons = styled.div``;

const Learn = styled.div`
  min-width: 50%;
  width: 60%;
  padding: 10px 0;
  display: flex;
  margin: 0 auto;
  margin-top: 1vw;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

const LearnWord = styled.div`
  left: 20vw;
`;

export default function Study() {
  return (
    <>
      <Navbar />
      <Topbox>
        <Profilebox>
          <Profilepic>
            <Input />
          </Profilepic>
          <Profilename>
            <Name>이름 :</Name>
            <Nation>국가 :</Nation>
            <Introduction>자기소개 : </Introduction>
          </Profilename>
        </Profilebox>
      </Topbox>

      <MainProfile>
        <Select>
          <Profile href="#">학생 프로필</Profile>
          <Account href="#">계정 설정</Account>
        </Select>

        <Learn>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`${e.target.language.value} 열심히 배워봅시다!`);
            }}
          >
            <LearnWord>원하는 언어</LearnWord>

            <RadioGroup>
              <Radio name="language" value="영어" disabled>
                영어
              </Radio>
              <br />
              <Radio name="language" value="일본어" disabled>
                일본어
              </Radio>
              <br />
              <Radio name="language" value="중국어">
                중국어
              </Radio>
              <br />
              <Radio name="language" value="독일어">
                독일어
              </Radio>
              <br />
              <Radio name="language" value="스페인어">
                스페인어
              </Radio>
              <br />
              <Radio name="language" value="불어">
                불어
              </Radio>
            </RadioGroup>
            <Buttons>
              <Savebtn>저장</Savebtn>
            </Buttons>
          </form>
          <Modifybtn>수정</Modifybtn>
        </Learn>

        <Learn>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`저장되었습니다.`);
            }}
          >
            <LearnWord>현재 레벨</LearnWord>

            <RadioGroup>
              <Radio name="language" value="영어">
                왕초보
              </Radio>
              <br />
              <Radio name="language" value="일본어">
                초보
              </Radio>
              <br />
              <Radio name="language" value="중국어">
                초중급
              </Radio>
              <br />
              <Radio name="language" value="독일어">
                중급
              </Radio>
              <br />
              <Radio name="language" value="스페인어">
                상급
              </Radio>
            </RadioGroup>
            <Buttons>
              <Modifybtn>수정</Modifybtn>
              <Savebtn>저장</Savebtn>
            </Buttons>
          </form>
        </Learn>

        <Learn>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`저장되었습니다.`);
            }}
          >
            <LearnWord>현재 목표</LearnWord>

            <RadioGroup>
              <Radio name="language" type="readonly" value="영어">
                경력 개발
              </Radio>
              <br />
              <Radio name="language" value="일본어">
                해외 여행
              </Radio>
              <br />
              <Radio name="language" value="중국어">
                시험 준비
              </Radio>
              <br />
              <Radio name="language" value="독일어">
                자기 계발
              </Radio>
              <br />
              <Radio name="language" value="스페인어">
                기타
              </Radio>
            </RadioGroup>
            <Buttons>
              <Modifybtn>수정</Modifybtn>
              <Savebtn>저장</Savebtn>
            </Buttons>
          </form>
        </Learn>
      </MainProfile>
    </>
  );
}
