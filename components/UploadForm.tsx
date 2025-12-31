import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

interface UploadFormProps {
  onUploadSuccess?: (url: string) => void;
}

const UploadForm: React.FC<UploadFormProps> = ({ onUploadSuccess }) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);

  // --- File Handling ---
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (uploadedFile: File) => {
    const validTypes = ['audio/mpeg', 'audio/wav', 'video/mp4', 'image/png', 'image/jpeg'];
    if (validTypes.includes(uploadedFile.type)) {
      setFile(uploadedFile);
      setUploadStatus('idle');
      setAiAnalysis('');
    } else {
      alert("Invalid file type. Please upload MP3, WAV, MP4, PNG, or JPG.");
    }
  };

  // --- Actions ---
  const handleUpload = async () => {
    if (!file) return;

    setUploadStatus('uploading');
    
    // Simulate File Upload Progress (Mocking Firebase Storage / API Route)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + 5;
      });
    }, 200);

    // Mock API Delay
    setTimeout(async () => {
      clearInterval(interval);
      setProgress(100);
      setUploadStatus('success');
      
      // --- SEND EMAIL USING GOOGLE APPS SCRIPT ---
      try {
        await fetch("https://script.google.com/macros/s/AKfycbzM_6uwR8JErOY8CcMNt2Y9FiZgNhEawjGdStlY3R5Psm4sa1yuS-8Rahcfh4S1LkPH1Q/exec", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify({
            name: file.name,
            type: file.type,
            size: (file.size / 1024 / 1024).toFixed(2),
            message: "A new user uploaded a file"
          })
        });
        console.log("Email notification sent via Google Script");
      } catch (error) {
        console.error("Failed to send email", error);
      }
      // -------------------------------------------

      // Track Event (Mocking GA)
      console.log(`[Analytics] Event: file_upload | File: ${file.name}`);
      
      if (onUploadSuccess) {
        onUploadSuccess("https://mock-storage.firebase.com/your-file-url");
      }
    }, 2500);
  };

  const handleAnalyzeWithAI = async () => {
    if (!file || !process.env.API_KEY) {
        if(!process.env.API_KEY) {
             setAiAnalysis("Please configure your API Key to use Gemini AI analysis.");
        }
        return;
    }
    
    setIsAnalyzing(true);
    setAiAnalysis('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = ai.models.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = `I am uploading a file named "${file.name}" of type "${file.type}". 
      Suggest 3 creative titles and a short marketing description for this content piece. 
      Keep it professional yet catchy for a digital brand.`;

      const result = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt
      });

      setAiAnalysis(result.text);

    } catch (error) {
      console.error("AI Error:", error);
      setAiAnalysis("Could not analyze file at this time. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xl mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Upload Your Assets</h3>
      <p className="text-sm text-gray-500 mb-6">Supported formats: MP3, WAV, MP4, JPG, PNG</p>

      {/* Drop Zone */}
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ease-in-out
          ${dragActive ? "border-purple-600 bg-purple-50" : "border-gray-300 bg-gray-50"}
          ${uploadStatus === 'success' ? "border-green-500 bg-green-50" : ""}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleChange}
          accept="audio/mpeg,audio/wav,video/mp4,image/png,image/jpeg"
        />

        {file ? (
          <div className="flex flex-col items-center">
             <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-3">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
               </svg>
             </div>
             <p className="text-sm font-medium text-gray-800 break-all">{file.name}</p>
             <p className="text-xs text-gray-500 mb-4">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
             
             {uploadStatus === 'idle' && (
               <div className="flex gap-2">
                 <button 
                   onClick={() => setFile(null)}
                   className="text-xs text-red-500 hover:text-red-700 underline"
                 >
                   Remove
                 </button>
               </div>
             )}
          </div>
        ) : (
          <div className="flex flex-col items-center cursor-pointer" onClick={() => inputRef.current?.click()}>
            <svg className="w-10 h-10 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-sm font-medium text-gray-700">
              <span className="text-purple-600">Click to upload</span> or drag and drop
            </p>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {uploadStatus === 'uploading' && (
        <div className="mt-4">
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">Uploading... {progress}%</p>
        </div>
      )}

      {/* Actions */}
      {file && uploadStatus === 'idle' && (
        <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={handleUpload}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Upload & Start Project
            </button>
            
            {/* Gemini Integration Feature */}
            <button
              onClick={handleAnalyzeWithAI}
              disabled={isAnalyzing}
              className="w-full bg-white border border-purple-200 text-purple-700 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                 <span className="animate-pulse">Thinking...</span>
              ) : (
                 <>
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                   Generate AI Content Ideas
                 </>
              )}
            </button>
        </div>
      )}

      {/* Success State */}
      {uploadStatus === 'success' && (
        <div className="mt-4 text-center p-4 bg-green-50 rounded-lg border border-green-100">
          <p className="text-green-700 font-medium">Upload Complete!</p>
          <p className="text-xs text-green-600">Our team has received your file.</p>
        </div>
      )}

      {/* AI Result */}
      {aiAnalysis && (
        <div className="mt-6 bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h4 className="text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                AI Suggestions
            </h4>
            <div className="text-sm text-slate-600 whitespace-pre-line">
                {aiAnalysis}
            </div>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
