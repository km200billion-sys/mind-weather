import { createTheme, MantineColorsTuple } from "@mantine/core";

// Define custom color palette
const ethereal: MantineColorsTuple = [
    "#F0F4FF", // 0
    "#E0E7FF", // 1
    "#C7D2FE", // 2
    "#A5B4FC", // 3
    "#818CF8", // 4
    "#6366F1", // 5
    "#4F46E5", // 6
    "#4338CA", // 7
    "#3730A3", // 8
    "#312E81"  // 9
];

const warmPeach: MantineColorsTuple = [
    "#FFF7ED",
    "#FFEDD5",
    "#FED7AA",
    "#FDBA74",
    "#FB923C",
    "#F97316",
    "#EA580C",
    "#C2410C",
    "#9A3412",
    "#7C2D12"
];

export const theme = createTheme({
    colors: {
        ethereal,
        warmPeach,
    },
    primaryColor: "ethereal",
    defaultRadius: "xl",
    fontFamily: "var(--font-geist-sans), sans-serif",
    headings: {
        fontFamily: "var(--font-geist-mono), sans-serif", // Using mono for now as 'Serif' placeholder
    },
    components: {
        Button: {
            defaultProps: {
                radius: "xl",
                variant: "light",
            },
        },
        Paper: {
            defaultProps: {
                radius: "lg",
            }
        }
    }
});
