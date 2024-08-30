


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const NextPage = () => {
//   const location = useLocation();
//   const { screenshotUrl, lat, long } = location.state || {};

//   const [analysisResult, setAnalysisResult] = useState(null);

//   // Function to clean the text by removing unwanted characters
//   const cleanText = (text) => {
//     if (!text) return '';
//     return text.replace(/[**##$$]/g, '').trim();
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       if (screenshotUrl && lat && long) {
//         const data = {
//           lat: lat,
//           long: long,
//           screenshot: screenshotUrl,
//         };

//         try {
//           const response = await axios.post('http://localhost:8000/dash_board', data);
//           const cleanedData = {
//             Map_Analysis: cleanText(response.data.Map_Analysis),
//             'Weather based Analysis': cleanText(response.data['Weather based Analysis']),
//           };

//           setAnalysisResult(cleanedData);
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       }
//     };

//     fetchData();
//   }, [screenshotUrl, lat, long]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg items-center">
//         <h3 className="text-2xl font-bold mb-4 text-center">Screenshot Preview</h3>

//         {screenshotUrl ? (
//           <img src={screenshotUrl} alt="Screenshot" className="rounded shadow-md" />
//         ) : (
//           <p>No screenshot available.</p>
//         )}
//       </div>

//       {analysisResult && (
//         <div className="w-full max-w-6xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg items-center">
//           <h3 className="text-2xl font-bold mb-4 text-center">Analysis Results</h3>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//               <h4 className="font-semibold mb-2">Map Analysis</h4>
//               <p className="font-sans">{analysisResult.Map_Analysis}</p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//               <h4 className="font-semibold mb-2">Weather Based Analysis</h4>
//               <p className="font-sans">{analysisResult['Weather based Analysis']}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NextPage;


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Navbar = () => (
//   <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 shadow-lg z-50">
//     <div className="container mx-auto">
//       <h1 className="text-xl font-bold">My Application</h1>
//     </div>
//   </nav>
// );

// const NextPage = () => {
//   const location = useLocation();
//   const { screenshotUrl, lat, long } = location.state || {};

//   const [analysisResult, setAnalysisResult] = useState(null);

//   const cleanText = (text) => {
//     if (!text) return '';
//     return text.replace(/[**##$$]/g, '').trim();
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       if (screenshotUrl && lat && long) {
//         const data = {
//           lat: lat,
//           long: long,
//           screenshot: screenshotUrl,
//         };

//         try {
//           const response = await axios.post('http://localhost:8000/dash_board', data);
//           const cleanedData = {
//             Map_Analysis: cleanText(response.data.Map_Analysis),
//             'Weather based Analysis': cleanText(response.data['Weather based Analysis']),
//           };

//           setAnalysisResult(cleanedData);
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       }
//     };

//     fetchData();
//   }, [screenshotUrl, lat, long]);

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-20"> {/* Adjust `pt-20` based on your navbar height */}
//         <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg items-center">
//           <h3 className="text-2xl font-bold mb-4 text-center">Screenshot Preview</h3>

//           {screenshotUrl ? (
//             <img src={screenshotUrl} alt="Screenshot" className="rounded shadow-md" />
//           ) : (
//             <p>No screenshot available.</p>
//           )}
//         </div>

//         {analysisResult && (
//           <div className="w-full max-w-6xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg items-center">
//             <h3 className="text-2xl font-bold mb-4 text-center">Analysis Results</h3>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//                 <h4 className="font-semibold mb-2">Map Analysis</h4>
//                 <p className="font-sans">{analysisResult.Map_Analysis}</p>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//                 <h4 className="font-semibold mb-2">Weather Based Analysis</h4>
//                 <p className="font-sans">{analysisResult['Weather based Analysis']}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default NextPage;


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// const Navbar = () => (
//   <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 shadow-lg z-50">
//     <div className="container mx-auto">
//       <h1 className="text-xl font-bold">FINAL PRODUCT</h1>
//     </div>
//   </nav>
const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full bg-transparent p-12 shadow-lg z-50">
      {/* No content inside the navbar, just the transparent background */}
    </nav>
  );


const NextPage = () => {
  const location = useLocation();
  const { screenshotUrl, lat, long } = location.state || {};

  const [analysisResult, setAnalysisResult] = useState(null);

  const cleanText = (text) => {
    if (!text) return '';
    return text.replace(/[**##$$]/g, '').trim();
  };

  useEffect(() => {
    const fetchData = async () => {
      if (screenshotUrl && lat && long) {
        const data = {
          lat: lat,
          long: long,
          screenshot: screenshotUrl,
        };

        try {
          const response = await axios.post('http://localhost:8000/dash_board', data);
          const cleanedData = {
            Map_Analysis: cleanText(response.data.Map_Analysis),
            'Weather based Analysis': cleanText(response.data['Weather based Analysis']),
          };

          setAnalysisResult(cleanedData);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    fetchData();
  }, [screenshotUrl, lat, long]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 mt-32"> {/* Adjust `mt-32` based on your desired space */}
        <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg items-center">
          <h3 className="text-2xl font-bold mb-4 text-center">Screenshot Preview</h3>

          {screenshotUrl ? (
            <img src={screenshotUrl} alt="Screenshot" className="rounded shadow-md" />
          ) : (
            <p>No screenshot available.</p>
          )}
        </div>

        {analysisResult && (
          <div className="w-full max-w-6xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg items-center">
            <h3 className="text-2xl font-bold mb-4 text-center">Analysis Results</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Map Analysis</h4>
                <p className="font-sans">{analysisResult.Map_Analysis}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Weather Based Analysis</h4>
                <p className="font-sans">{analysisResult['Weather based Analysis']}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NextPage;
