// import React, { useState, useEffect } from 'react';
// import { ChevronUp } from 'lucide-react';

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       // Logic: Show button after scrolling down 300px
//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     // Listen for scroll events on the window
//     window.addEventListener('scroll', toggleVisibility);

//     // Clean up listener on unmount
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className="fixed bottom-8 right-8 z-[9999]">
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//           className="bg-red-600 hover:bg-blue-950 text-white p-3 rounded-full shadow-2xl 
//                      transition-all duration-300 transform hover:scale-110 active:scale-90 
//                      flex items-center justify-center border-2 border-white group"
//         >
//           <ChevronUp
//             size={28}
//             strokeWidth={3}
//             className="group-hover:-translate-y-1 transition-transform"
//           />
//         </button>
//       )}
//     </div>
//   );
// };

// export default ScrollToTop;