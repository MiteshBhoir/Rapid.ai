// import { Edit, Eraser, FileText, Hash, Sparkles } from 'lucide-react'
// import React, { useState } from 'react'
// import toast from 'react-hot-toast';
// import axios from 'axios'
// import { useAuth } from '@clerk/clerk-react';
// import Markdown from 'react-markdown';
// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const ReviewResume = () => {

//   const [input, setInput] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [content, setContent] = useState('')
//   const { getToken } = useAuth();
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true)
//       const formData = new FormData();
//       formData.append('resume', input)
//       const { data } = await axios.post('/api/ai/review-resume', formData, {
//         headers: { Authorization: `Bearer ${await getToken()}` }
//       })
//       if (data.success) {
//         setContent(data.content)
//       } else {
//         toast.error(data.message)
//       }
//       setLoading(false)
//     } catch (error) {
//       toast.error(error.message)
//     }
//     setLoading(false)

//   }
//   return (
//     <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
//       {/* left col  */}
//       <form
//         onSubmit={onSubmitHandler}
//         className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 '>
//         <div className='flex items-center gap-3 '>
//           <Sparkles className='w-6 text-[#00DA83]' />
//           <h1 className='text-xl font-semibold'>Resume Review</h1>
//         </div>
//         <p className='mt-6 font-semibold text-sm'>Upload Resume</p>
//         <input
//           onChange={(e) => setInput(e.target.files[0])}
//           type="file"
//           accept="application.pdf"
//           className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600' required />

//         <p className='text-xs text-gray-500 font-light mt-1'>Supports PDf Resume only.</p>

//         <button disabled={loading} className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
//           {loading ? <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span> : <FileText className='w-5' />}

//           Review Resume
//         </button>
//       </form>
//       {/* right col  */}
//       <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-86 max-h-[600px]'>
//         <div className='flex items-center gap-3'>
//           <FileText className='w-5 h-5 text-[#00DA83]' />
//           <h1 className='text-xl font-semibold'>Analysis Result</h1>
//         </div>
//         {
//           !content ? (<div className='flex-1 flex justify-center items-center'>
//             <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
//               <FileText className='w-9 h-9 ' />
//               <p>Upload a resume and click "Review Resume" to get started.</p>
//             </div>
//           </div>) : (
//             <div className='mt-3 h-full overflow-y-scroll text-sm text-slate-600'>
//               <div className='reset-tw'>
//                 <Markdown>
//                   {content}
//                 </Markdown>
//               </div>
//             </div>
//           )
//         }

//       </div>
//     </div>
//   )
// }

// export default ReviewResume

import { FileText, Sparkles, Download, Copy } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import Markdown from "react-markdown";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const ReviewResume = () => {

  const [input, setInput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const { getToken } = useAuth();
  const [previewUrl, setPreviewUrl] = useState(null)

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!input) {
      toast.error("Please upload a resume");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", input);

      const { data } = await axios.post(
        "/api/ai/review-resume",
        formData,
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      );

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  const copyResult = () => {
    navigator.clipboard.writeText(content);
    toast.success("Analysis copied!");
  };

  const downloadReport = () => {
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume-analysis.txt";
    link.click();
  };
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);
  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-6 text-slate-700">

      {/* LEFT COLUMN */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-6 bg-white rounded-lg border border-gray-200"
      >

        {/* Header */}
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">AI Resume Review</h1>
        </div>

        {/* Upload Section */}
        <p className="mt-6 font-semibold text-sm">Upload Resume</p>

        <div className="mt-3 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">

          <input
            type="file"
            accept=".pdf"
            id="resumeUpload"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              setInput(file);
              setPreviewUrl(URL.createObjectURL(file));
            }}
          />

          <label htmlFor="resumeUpload" className="cursor-pointer">
            <FileText className="mx-auto w-8 h-8 text-gray-400" />
            <p className="text-sm mt-2">Click to upload your resume</p>
            <p className="text-xs text-gray-400">PDF only • Max 5MB</p>
          </label>

        </div>

        {input && (
          <>
            <p className="text-xs mt-2 text-gray-500">
              Uploaded: <span className="font-medium">{input.name}</span>
            </p>

            {previewUrl && (
              <div className="mt-4 border rounded-lg overflow-hidden">
                <p className="text-sm font-medium p-2 bg-gray-50 border-b">
                  Resume Preview
                </p>

                <iframe
                  src={previewUrl}
                  title="Resume Preview"
                  className="w-full h-80"
                />
              </div>
            )}
          </>
        )}

        {/* Tips */}
        <div className="mt-6 p-3 bg-gray-50 rounded-lg text-xs text-gray-500">
          <p className="font-medium mb-1">Tips for best results</p>
          <ul className="list-disc ml-4 space-y-1">
            <li>Upload your latest resume</li>
            <li>Ensure text is selectable (not scanned)</li>
            <li>Include projects and achievements</li>
          </ul>
        </div>

        {/* Button */}
        <button
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          {loading ? (
            <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
          ) : (
            <FileText className="w-5" />
          )}

          Review Resume
        </button>
      </form>


      {/* RIGHT COLUMN */}
      <div className="w-full max-w-lg p-6 bg-white rounded-lg flex flex-col border border-gray-200 min-h-[450px] max-h-[650px]">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#00DA83]" />
            <h1 className="text-xl font-semibold">Analysis Result</h1>
          </div>

          {content && (
            <div className="flex gap-3">
              <Copy
                onClick={copyResult}
                className="w-5 h-5 text-gray-500 cursor-pointer hover:text-green-600"
              />
              <Download
                onClick={downloadReport}
                className="w-5 h-5 text-gray-500 cursor-pointer hover:text-green-600"
              />
            </div>
          )}
        </div>


        {/* Content */}
        {!content && !loading && (
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <FileText className="w-10 h-10" />
              <p>Upload a resume and click "Review Resume"</p>
            </div>
          </div>
        )}


        {/* Loading Skeleton */}
        {loading && (
          <div className="mt-6 space-y-3 animate-pulse">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        )}


        {/* AI Result */}
        {content && !loading && (
          <div className="mt-4 h-full overflow-y-scroll text-sm text-slate-600">

            {/* Score UI */}
            <div className="mb-4 p-3 bg-green-50 border rounded-lg flex justify-between">
              <span className="font-medium text-sm">AI Resume Analysis</span>
              <span className="text-green-700 font-semibold">
                Generated
              </span>
            </div>

            <div className="reset-tw">
              <Markdown>{content}</Markdown>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewResume;