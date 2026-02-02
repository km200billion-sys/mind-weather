'use client';

import { Container, Paper } from '@mantine/core';
import { motion } from 'framer-motion';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <Container size="xs" p={0} className="min-h-screen flex flex-col justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-[480px] p-4"
            >
                <Paper
                    shadow="xl"
                    radius="xl"
                    className="glass min-h-[80vh] flex flex-col relative overflow-hidden"
                    p="md"
                >
                    {/* Decorative background circle */}
                    <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex-1 flex flex-col">
                        {children}
                    </div>
                </Paper>
            </motion.div>
        </Container>
    );
}
