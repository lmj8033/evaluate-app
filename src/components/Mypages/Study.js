import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../Mainpage/Navbar.js';
import './Study.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Avatar from 'react-avatar-edit';
import { Button } from 'react-bootstrap';
import img from './img.webp';

const Topbox = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: beige;
  display: flex;
  margin-top: 50px;
  overflow: hidden;
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
  float: inline-start;
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

const Savebtn = styled.button`
  height: 40px;
  padding: 0 1vw;
  background-color: aliceblue;
  border: 1px solid gray;
  border-radius: 10px;
  float: right;
  margin-top: 95px;
  margin-right: 10px;

  @media only screen and (max-width: 900px) {
    width: 70px;
  }
`;

const Select = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 5vw;
`;

//***********************************************************************************8 */

const MainProfile = styled.div`
  width: 900px;
  height: 400px;
  margin: 0 auto;
  margin-top: 3vw;

  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 8vw;
  }
`;

const Word = styled.h6`
  float: left;
  margin-top: 100px;
`;

const Word2 = styled.h6`
  float: left;
  margin-top: 100px;
  margin-right: 62px;
`;

const Word3 = styled.h6`
  float: left;
  margin-top: 100px;
  margin-right: 29px;
`;

const Form = styled.div`
  max-width: 880px;
  height: 250px;
  margin-left: 10px;
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #c8c8c8;
`;

export default function Study() {
  useEffect(() => {});
  return (
    <>
      <Navbar />
      <Topbox>
        <Profilebox>
          <Profilepic>
            <Input type="file" />
          </Profilepic>

          <Profilename>
            <Name>?????? :</Name>
            <Nation>?????? :</Nation>
            <Introduction>???????????? : </Introduction>
          </Profilename>
        </Profilebox>
      </Topbox>

      <Select>
        <Profile href="#">?????? ?????????</Profile>
        <Account href="#">?????? ??????</Account>
      </Select>

      <MainProfile>
        <Form>
          <Word>????????? ??????</Word>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Language</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="language"
              name="radio-buttons-group"
            >
              <FormControlLabel value="??????" control={<Radio />} label="??????" />
              <FormControlLabel
                value="?????????"
                control={<Radio />}
                label="?????????"
              />
              <FormControlLabel
                value="?????????"
                control={<Radio />}
                label="?????????"
              />
              <FormControlLabel
                value="?????????"
                control={<Radio />}
                label="?????????"
              />
              <FormControlLabel
                value="?????????"
                control={<Radio />}
                label="?????????"
              />
            </RadioGroup>
          </FormControl>
          <Savebtn>??????</Savebtn>
        </Form>

        <Form>
          <Word2>??????</Word2>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Level</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="level"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="?????????"
                control={<Radio />}
                label="?????????"
              />
              <FormControlLabel value="??????" control={<Radio />} label="??????" />
              <FormControlLabel
                value="?????????"
                control={<Radio />}
                label="?????????"
              />
              <FormControlLabel value="??????" control={<Radio />} label="??????" />
              <FormControlLabel value="??????" control={<Radio />} label="??????" />
            </RadioGroup>
          </FormControl>
          <Savebtn>??????</Savebtn>
        </Form>

        <Form>
          <Word3>?????? ??????</Word3>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Goal</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="?????? ??????"
                control={<Radio />}
                label="?????? ??????"
              />
              <FormControlLabel
                value="?????? ??????"
                control={<Radio />}
                label="?????? ??????"
              />
              <FormControlLabel
                value="?????? ??????"
                control={<Radio />}
                label="?????? ??????"
              />
              <FormControlLabel
                value="?????? ??????"
                control={<Radio />}
                label="?????? ??????"
              />
              <FormControlLabel value="??????" control={<Radio />} label="??????" />
            </RadioGroup>
          </FormControl>
          <Savebtn>??????</Savebtn>
        </Form>
      </MainProfile>
    </>
  );
}

// import React from 'react';
// // import { useState } from 'react';
// import styled from 'styled-components';
// import Navbar from '../Mainpage/Navbar.js';
// import RadioGroup from './Radiogroup';
// import Radio from './Radio';
// import './Study.css';

// const Topbox = styled.div`
//   width: 100%;
//   min-height: 200px;
//   background-color: beige;
//   display: flex;
//   margin-top: 50px;
// `;

// const Profilebox = styled.div`
//   min-width: 500px;
//   min-height: 200px;
//   background-color: pink;
//   margin: 0 auto;
//   display: flex;

//   @media only screen and (max-width: 900px) {
//     flex-direction: column;
//   }
// `;

// const Profilepic = styled.div`
//   min-width: 200px;
//   min-height: 200px;
//   background-color: skyblue;
// `;

// const Input = styled.input`
//   padding-bottom: 130px;
//   /* margin-top: 40px; */
// `;

// const Profilename = styled.div`
//   min-width: 200px;
//   min-height: 200px;
//   /* background-color: blue; */
// `;

// const Name = styled.h5`
//   margin-top: 70px;
// `;

// const Nation = styled.h5``;

// const Introduction = styled.h5``;

// const MainProfile = styled.div`
//   width: 100%;
//   height: 500px;
//   /* background-color: pink; */
//   margin-top: 4vw;
// `;

// const Select = styled.div`
//   width: 100%;
//   min-height: 30px;
//   display: flex;
//   justify-content: center;
//   text-align: center;
// `;

// const Profile = styled.a`
//   padding: 0 2vw;
//   margin-right: 70px;
//   background-color: aliceblue;
//   text-decoration: none;
//   color: black;
//   border-radius: 10px;
// `;

// const Account = styled.a`
//   padding: 0 2vw;
//   background-color: aliceblue;
//   text-decoration: none;
//   color: black;
//   border-radius: 10px;
// `;

// const Modifybtn = styled.button`
//   height: 40px;
//   padding: 0 1vw;
//   margin-right: 20px;
//   background-color: aliceblue;
//   border: 1px solid gray;
//   border-radius: 10px;
//   margin-left: 1vw;
//   min-width: 73px;
// `;
// const Savebtn = styled.button`
//   height: 40px;
//   padding: 0 1vw;
//   background-color: aliceblue;
//   border: 1px solid gray;
//   border-radius: 10px;
// `;

// const Buttons = styled.div``;

// const Learn = styled.div`
//   min-width: 50%;
//   width: 60%;
//   padding: 10px 0;
//   display: flex;
//   margin: 0 auto;
//   margin-top: 1vw;
//   align-items: center;
//   justify-content: space-between;
//   border-bottom: 1px solid gray;
// `;

// const LearnWord = styled.div`
//   left: 20vw;
// `;

// export default function Study() {
//   return (
//     <>
//       <Navbar />
//       <Topbox>
//         <Profilebox>
//           <Profilepic>
//             <Input />
//           </Profilepic>
//           <Profilename>
//             <Name>?????? :</Name>
//             <Nation>?????? :</Nation>
//             <Introduction>???????????? : </Introduction>
//           </Profilename>
//         </Profilebox>
//       </Topbox>

//       <MainProfile>
//         <Select>
//           <Profile href="#">?????? ?????????</Profile>
//           <Account href="#">?????? ??????</Account>
//         </Select>

//         <Learn>
//           <form>
//             <LearnWord>????????? ??????</LearnWord>

//             <RadioGroup>
//               <Radio name="language" value="??????" disabled>
//                 ??????
//               </Radio>
//               <br />
//               <Radio name="language" value="?????????" disabled>
//                 ?????????
//               </Radio>
//               <br />
//               <Radio name="language" value="?????????">
//                 ?????????
//               </Radio>
//               <br />
//               <Radio name="language" value="?????????">
//                 ?????????
//               </Radio>
//               <br />
//               <Radio name="language" value="????????????">
//                 ????????????
//               </Radio>
//               <br />
//               <Radio name="language" value="??????">
//                 ??????
//               </Radio>
//             </RadioGroup>
//             <Buttons>
//               <Savebtn
//                 onClick={(e) => {
//                   e.preventDefault();
//                   alert(`${e.target.language.value} ????????? ???????????????!`);
//                 }}
//               >
//                 ??????
//               </Savebtn>
//             </Buttons>
//           </form>
//           <Modifybtn>??????</Modifybtn>
//         </Learn>

//         <Learn>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert(`?????????????????????.`);
//             }}
//           >
//             <LearnWord>?????? ??????</LearnWord>

//             <RadioGroup>
//               <Radio name="language" value="??????">
//                 ?????????
//               </Radio>
//               <br />
//               <Radio name="language" value="?????????">
//                 ??????
//               </Radio>
//               <br />
//               <Radio name="language" value="?????????">
//                 ?????????
//               </Radio>
//               <br />
//               <Radio name="language" value="?????????">
//                 ??????
//               </Radio>
//               <br />
//               <Radio name="language" value="????????????">
//                 ??????
//               </Radio>
//             </RadioGroup>
//             <Buttons>
//               <Modifybtn>??????</Modifybtn>
//               <Savebtn>??????</Savebtn>
//             </Buttons>
//           </form>
//         </Learn>

//         <Learn>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert(`?????????????????????.`);
//             }}
//           >
//             <LearnWord>?????? ??????</LearnWord>

//             <RadioGroup>
//               <Radio name="language" type="readonly" value="??????">
//                 ?????? ??????
//               </Radio>
//               <br />
//               <Radio name="language" value="?????????">
//                 ?????? ??????
//               </Radio>
//               <br />
//               <Radio name="language" value="?????????">
//                 ?????? ??????
//               </Radio>
//               <br />
//               <Radio name="language" value="?????????">
//                 ?????? ??????
//               </Radio>
//               <br />
//               <Radio name="language" value="????????????">
//                 ??????
//               </Radio>
//             </RadioGroup>
//             <Buttons>
//               <Modifybtn>??????</Modifybtn>
//               <Savebtn>??????</Savebtn>
//             </Buttons>
//           </form>
//         </Learn>
//       </MainProfile>
//     </>
//   );
// }
