// import React from 'react';
// import './Developer.css';
// import { motion } from 'framer-motion';
// import { useRef, useEffect, useState } from 'react';
// import styled from 'styled-components';
// import images from '../../images';

// const Carousel = styled.div`
//   margin: 0 5%;
// `;

// const Word = styled.p`
//   text-align: center;
//   margin: 4vw 0 2vw 0;
// `;

// export default function Developer() {
//   const [width, setWidth] = useState(0);
//   const carousel = useRef();

//   useEffect(() => {
//     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//   }, []);

//   return (
//     <>
//       <Word>Developers</Word>
//       <Carousel>
//         <motion.div
//           ref={carousel}
//           className="carousel2"
//           whileTap={{ cursor: 'grabbing' }}
//         >
//           <motion.div
//             drag="x"
//             dragConstraints={{ right: 0, left: -width }}
//             className="inner-carousel"
//           >
//             {images.map((image) => {
//               return (
//                 <motion.div className="item" key={image}>
//                   <img src={image} alt="" />
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </motion.div>
//       </Carousel>
//     </>
//   );
// }
