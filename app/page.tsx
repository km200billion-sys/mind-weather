"use client";

import { useState } from "react";

export default function Home() {
  const [diary, setDiary] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [bgColor, setBgColor] = useState("#F8F9FA"); // 기본: 연한 회색

  const handleAnalyze = () => {
    if (!diary.trim()) return;

    setLoading(true);
    setResult(null);

    // Mock Logic: 2초 후 결과 도출 및 배경 변경
    setTimeout(() => {
      setLoading(false);
      setBgColor("#FFF9C4"); // 파스텔 옐로우
      setResult("행복");
    }, 2000);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-colors duration-1000 ease-in-out px-4"
      style={{ backgroundColor: bgColor }}
    >
      <main className="w-full max-w-2xl flex flex-col items-center gap-8">
        {/* Title */}
        <header className="text-center space-y-2">
          <h1 className="text-2xl font-medium text-gray-800 tracking-tight">
            오늘의 마음 날씨
          </h1>
          <p className="text-sm text-gray-500 font-light">
            당신의 하루를 가만히 들여다봅니다.
          </p>
        </header>

        {/* Input Area */}
        <div className="w-full relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl opacity-50 blur transition duration-1000 group-hover:duration-200 group-hover:opacity-75"></div>
          <textarea
            className="relative w-full h-64 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 text-gray-700 text-lg leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-gray-200 transition-all placeholder:text-gray-300"
            placeholder="오늘 하루는 어땠나요? 편안하게 털어놓으세요."
            value={diary}
            onChange={(e) => setDiary(e.target.value)}
            disabled={loading}
          />
        </div>

        {/* Action Button */}
        <button
          onClick={handleAnalyze}
          disabled={loading || !diary.trim()}
          className={`
            px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 transform
            ${loading || !diary.trim()
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-900 text-white shadow-lg hover:scale-105 hover:shadow-xl active:scale-95"
            }
          `}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-75"></span>
              <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
              <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
            </span>
          ) : (
            "마음 날씨 분석하기"
          )}
        </button>

        {/* Result Area */}
        <div
          className={`w-full transition-all duration-1000 ${result ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {result && (
            <div className="text-center space-y-4 mt-8">
              <div className="inline-block px-6 py-2 bg-white/50 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                <span className="text-gray-800 font-medium">분석 결과: </span>
                <span className="text-indigo-600 font-bold">{result}</span>
              </div>
              <p className="text-gray-600 font-light text-sm animate-pulse">
                당신의 마음이 밝게 빛나고 있어요.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
