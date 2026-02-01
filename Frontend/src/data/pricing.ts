import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Starter",
        price: 99,
        period: "100 credits",
        features: [
            "10 Premium AI Thumbnails",
            "Best for starters",
            "Access to all AI models", 
            "No watermark on downloads",
            "High-quality",
            "Commercial usage allowed",
            "Credits never expire"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 299,
        period: "400 credits",
        features: [
            "Access to all Pro courses",
            "Priority community support",
            "30 practice projects",
            "Course completion certificate",
            "Advance code review",
            "1-on-1 mentoring sessions",
            "Job assistance"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 999,
        period: "1500 credits",
        features: [
            "Access to all courses",
            "Dedicated support",
            "Unlimited projects",
            "Course completion certificate",
            "Premium code review"
        ],
        mostPopular: false
    }
];