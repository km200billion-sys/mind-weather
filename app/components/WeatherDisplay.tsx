'use client';

import { Paper, Title, Text, Button, Stack, ThemeIcon } from '@mantine/core';
import { IconSun, IconCloud, IconCloudRain, IconBolt, IconSnowflake, IconRefresh } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export type WeatherType = 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'snowy';

interface WeatherDisplayProps {
    weather: WeatherType;
    title: string;
    description: string;
    onReset: () => void;
}

const weatherConfig = {
    sunny: { icon: IconSun, color: 'orange', label: '화창함' },
    cloudy: { icon: IconCloud, color: 'gray', label: '흐림' },
    rainy: { icon: IconCloudRain, color: 'blue', label: '비' },
    stormy: { icon: IconBolt, color: 'yellow', label: '천둥번개' },
    snowy: { icon: IconSnowflake, color: 'cyan', label: '눈' },
};

export default function WeatherDisplay({ weather, title, description, onReset }: WeatherDisplayProps) {
    const config = weatherConfig[weather] || weatherConfig.sunny;
    const Icon = config.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full"
        >
            <Paper
                p="xl"
                radius="xl"
                className="bg-white/60 backdrop-blur-md border border-white/50 shadow-inner text-center"
            >
                <Stack align="center" gap="lg">
                    <ThemeIcon
                        size={80}
                        radius="100%"
                        variant="light"
                        color={config.color}
                        className="bg-white/80 shrink-0 shadow-sm"
                    >
                        <Icon size={48} stroke={1.5} />
                    </ThemeIcon>

                    <div>
                        <Text c="dimmed" size="sm" mb={4} className="uppercase tracking-wider font-semibold">Mind Weather</Text>
                        <Title order={2} className="text-indigo-900 font-serif">{title}</Title>
                    </div>

                    <Text className="text-indigo-800 leading-relaxed text-balance">
                        {description}
                    </Text>

                    <Button
                        variant="subtle"
                        color="indigo"
                        onClick={onReset}
                        leftSection={<IconRefresh size={16} />}
                        className="mt-4 hover:bg-white/50"
                    >
                        다시 기록하기
                    </Button>
                </Stack>
            </Paper>
        </motion.div>
    );
}
