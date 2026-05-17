// import React from 'react'
// import Style from './Welcome.module.css';
// import { useNavigate } from 'react-router-dom';
// import welcomePhoto from "../../assets/Images/femaledocter.jpg";

// export default function Welcome() {

//   let navigate = useNavigate();

//   return (
//     <>
//       <div>

//         {/* Hero Section */}

//         <section className={`${Style.section} flex items-center justify-center`}>

//           <div className={Style.overlay}></div>

//           {/* floating shapes */}
//           <div className={Style.circle1}></div>
//           <div className={Style.circle2}></div>

//           <div className='flex items-center flex-col z-40 justify-center w-3xl'>

//             <h1 className={`font-bold text-center text-white text-5xl ${Style.welcome}`}>
//               Welcome To Our Application
//             </h1>

//             <p className={Style.subtitle}>
//               AI powered lung cancer detection helping doctors diagnose faster
//               and save more lives.
//             </p>

//             <button
//               className={`${Style.btn} mt-6`}
//               onClick={() => { navigate('/register') }}
//             >
//               Get Started
//             </button>

//           </div>

//         </section>


//         {/* Second Section */}

//         <section className={`${Style.section2} py-16 flex items-center justify-center`}>

//           <div className='container mx-auto flex py-3 items-center gap-[90px]'>

//             <div className='flex-1'>

//               <h2 className={Style.title}>
//                 About Our Application
//               </h2>

//               <p className='text-lg leading-relaxed mb-4 py-4'>
//                 Early detection is key in the fight against lung cancer.
//                 Our AI-powered platform analyzes medical imaging with precision,
//                 helping healthcare professionals identify potential signs at the
//                 earliest stages.
//               </p>

//               <p className='text-lg leading-relaxed'>
//                 With intelligent algorithms and a clean medical interface,
//                 our system enables faster diagnosis, improves treatment planning,
//                 and enhances patient outcomes.
//               </p>

//               <div className={Style.features}>

//                 <div className={Style.card}>
//                   <h3>⚡ Fast AI</h3>
//                   <p>Instant scan analysis</p>
//                 </div>

//                 <div className={Style.card}>
//                   <h3>🎯 Accurate</h3>
//                   <p>High precision detection</p>
//                 </div>

//                 <div className={Style.card}>
//                   <h3>🔒 Secure</h3>
//                   <p>Protected medical data</p>
//                 </div>

//               </div>

//             </div>

//             <div className='flex-1 flex justify-center'>
//               <img
//                 src={welcomePhoto}
//                 alt="About Us"
//                 className={Style.image}
//               />
//             </div>

//           </div>

//         </section>


//         {/* ABOUT SECTION */}

//    {/* ABOUT SECTION */}

// <section className={Style.aboutSection}>

//   <div className="container mx-auto flex items-center gap-16 py-20">

//     <div className="flex-1">

//       <h2 className={Style.aboutTitle}>
//         About Our Application
//       </h2>

//       <p className={Style.aboutText}>
//         Early detection is the most critical factor in improving survival
//         rates for lung cancer patients. Our platform leverages artificial
//         intelligence to analyze medical images with exceptional accuracy.
//       </p>

//       <p className={Style.aboutText}>
//         The system integrates seamlessly into medical workflows and provides
//         fast, reliable insights that assist radiologists and physicians in
//         making better clinical decisions.
//       </p>

//       <div className={Style.stats}>

//         <div>
//           <h3>95%</h3>
//           <p>Detection Accuracy</p>
//         </div>

//         <div>
//           <h3>Fast</h3>
//           <p>AI Analysis</p>
//         </div>

//         <div>
//           <h3>Secure</h3>
//           <p>Medical Data</p>
//         </div>

//       </div>

//     </div>

//     <div className="flex-1">

//       <img
//         src={welcomePhoto}
//         alt="Doctor"
//         className={Style.aboutImage}
//       />

//     </div>

//   </div>

// </section>
//       </div>
//     </>
//   )
// }

import React from 'react'
import Style from './Welcome.module.css';
import { useNavigate } from 'react-router-dom';
import welcomePhoto from "../../assets/Images/femaledocter.jpg";

export default function Welcome() {
  let navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}

      <div>
        {/* <section className={`${Style.section} flex items-center justify-center`}>
          <div className={Style.overlay}></div>

          <div className='flex items-center flex-col z-40 justify-center w-3xl'>
            <h1 className={`font-bold text-center text-white text-5xl ${Style.welcome}`}>
              Welcome To Our Application
            </h1>

            <button
              className={`${Style.btn} mt-5`}
              onClick={() => { navigate('/register') }}
            >
              Click
            </button>
          </div>
        </section> */}

        <section className={`${Style.section} flex items-center justify-center`}>

          <div className={Style.overlay}></div>

          {/* floating shapes */}
          <div className={Style.circle1}></div>
          <div className={Style.circle2}></div>

          <div className='flex items-center flex-col z-40 justify-center w-3xl'>

            <h1 className={`font-bold text-center text-white text-5xl ${Style.welcome}`}>
              Welcome To Our Application
            </h1>

            <p className={Style.subtitle}>
              AI powered lung cancer detection helping doctors diagnose faster
              and save more lives.
            </p>

            <button
              className={`${Style.btn} `}
              onClick={() => { navigate('/register') }}
            >
              Get Started
            </button>

          </div>

        </section>
        {/* Second Section */}
        <section className={`${Style.section2} py-7 flex items-center justify-center`}>

          <div className='container mx-auto flex py-3 items-center gap-[90px]'>

            <div className='flex-1'>
              <h2 className='text-3xl font-bold mb-6'>About Our Application</h2>

              <p className='text-lg leading-relaxed mb-4 py-4'>
                Early detection is key in the fight against lung cancer. Our AI-powered platform analyzes medical imaging with precision, helping healthcare professionals identify potential signs at the earliest stages. By combining advanced technology with intuitive design, it delivers fast, reliable results to support timely clinical decisions. The system seamlessly integrates into existing workflows, making it easy for doctors and radiologists to use. With accurate insights and actionable data, we aim to improve patient outcomes and save lives.
              </p>
            </div>

            <div className='flex-1'>
              <img
                src={welcomePhoto}
                alt="About Us"
                className='w-[500px] rounded-xl shadow-lg'
              />
            </div>

          </div>

        </section>

      </div>
    </>
  )
}