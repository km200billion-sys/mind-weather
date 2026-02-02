'use client';

import { Textarea, Button, Stack } from '@mantine/core';
import { IconWand } from '@tabler/icons-react';
import { useState } from 'react';

interface WeatherInputProps {
    onAnalyze: (text: string) => void;
    loading?: boolean;
}

export default function WeatherInput({ onAnalyze, loading }: WeatherInputProps) {
    const [value, setValue] = useState('');

    return (
        <Stack gap="md" w="100%">
            <Textarea
                placeholder="오늘 하루는 어땠나요? 솔직한 감정을 적어주세요..."
                minRows={6}
                autosize
                radius="lg"
                size="md"
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                classNames={{
                    input: "bg-white/50 border-white/40 focus:border-indigo-300 focus:bg-white/70 transition-all text-indigo-900 placeholder:text-indigo-900/40"
                }}
            />
            <Button
                onClick={() => onAnalyze(value)}
                loading={loading}
                disabled={!value.trim()}
                fullWidth
                size="lg"
                color="indigo"
                radius="xl"
                leftSection={<IconWand size={20} />}
                className="bg-indigo-500 hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20"
            >
                마음 날씨 분석하기
            </Button>
        </Stack>
    )
}
