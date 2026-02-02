'use server';

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY;

export interface AnalysisResult {
    weather: 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'snowy';
    title: string;
    description: string;
}

export async function analyzeEmotion(text: string): Promise<AnalysisResult> {

    // Simulate delay for dramatic effect
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (!API_KEY) {
        console.warn("GEMINI_API_KEY is missing. Returning mock data.");
        // Fallback mock data for testing without key
        return {
            weather: 'rainy',
            title: '센치한 빗방울',
            description: 'API 키가 설정되지 않아서 테스트 결과를 보여드려요. 오늘은 왠지 차분하고 싶은 기분이시네요. 따뜻한 차 한 잔 어떠세요?'
        };
    }

    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `
            You are an empathetic emotional weather caster. 
            Analyze the following diary entry and output a JSON object.
            
            Diary: "${text}"
            
            Required JSON Structure:
            {
                "weather": "one of: sunny, cloudy, rainy, stormy, snowy",
                "title": "A short, poetic title for this mood (in Korean)",
                "description": "Warm, comforting analysis and advice for a woman in her 20s (in Korean, polite and empathetic tone)"
            }
            
            Output ONLY the valid JSON string.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const textResponse = response.text();

        // Clean up markdown code blocks if present
        const jsonString = textResponse.replace(/^```json\n|\n```$/g, '').trim();

        return JSON.parse(jsonString) as AnalysisResult;

    } catch (error) {
        console.error("Gemini API Error:", error);
        return {
            weather: 'cloudy',
            title: '흐린 마음',
            description: '감정을 분석하는 도중에 구름이 끼었어요. 잠시 후 다시 시도해 주세요.'
        };
    }
}
