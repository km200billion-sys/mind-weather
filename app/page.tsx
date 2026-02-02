'use client';

import { useState } from 'react';
import MainLayout from "./components/MainLayout";
import { Title, Text } from "@mantine/core";
import WeatherInput from "./components/WeatherInput";
import WeatherDisplay from "./components/WeatherDisplay";
import { analyzeEmotion, AnalysisResult } from "./actions";
import { motion } from 'framer-motion';

export default function Home() {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (text: string) => {
    setLoading(true);
    try {
      const data = await analyzeEmotion(text);
      setResult(data);
    } catch (e) {
      console.error(e);
      // Fallback error handling could go here
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center flex-1 space-y-6 text-center w-full">
        {!result ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <Title order={1} className="font-serif text-3xl mb-3 text-indigo-900 drop-shadow-sm">
                Mind Weather
              </Title>
              <Text className="text-indigo-700/80 font-medium">
                오늘 당신의 마음 날씨는 어떤가요?
              </Text>
            </motion.div>

            <WeatherInput onAnalyze={handleAnalyze} loading={loading} />
          </>
        ) : (
          <WeatherDisplay
            weather={result.weather}
            title={result.title}
            description={result.description}
            onReset={handleReset}
          />
        )}
      </div>
    </MainLayout>
  );
}
