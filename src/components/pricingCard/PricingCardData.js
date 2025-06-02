const pricingPlans = [
  {
    name: "Free",
    description:
      "For early-stage experimenters curious about brain-to-text technology",
    price: 0,
    tokensPerMonth: "5k neural tokens/month",
    features: [
      "Signal-to-text transcription (EEG/EMG supported)",
      "Real-time neural signal simulation",
      "Access to basic ML inference models",
      "REST API access",
      "3 sample datasets",
    ],
    usage: [
      "Up to 10 neural-to-text sessions/month",
      "2 concurrent decoding streams",
    ],
    buttonLabel: "Get Started",
  },
  {
    name: "Starter",
    description:
      "For students and hobbyists building brain-computer interface (BCI) projects",
    price: 9,
    tokensPerMonth: "25k neural tokens/month",
    features: [
      "Everything in Free, plus",
      "Access to advanced pre-trained models",
      "Model tuning for personalized decoding",
      "Live EEG device integration (Muse, OpenBCI)",
      "Upload custom EEG/EMG data",
    ],
    usage: ["Up to 50 decoding sessions/month", "6 concurrent streams"],
    buttonLabel: "Get Started",
  },
  {
    name: "Creator",
    description:
      "For developers building commercial or academic-grade BCI applications",
    price: 29,
    tokensPerMonth: "100k neural tokens/month",
    discount: "First month 50% off: $14.50",
    popular: true,
    features: [
      "Everything in Starter, plus",
      "Real-time decoding API (low-latency)",
      "Integration with Unity/WebXR/VR apps",
      "Session logging & neural heatmaps",
      "Model export (.onnx, .pb formats)",
      "Priority support",
    ],
    usage: ["200 decoding sessions/month", "Up to 20 parallel user sessions"],
    buttonLabel: "Get Started",
  },
  {
    name: "Pro",
    description:
      "For research labs and enterprise-scale brain interface projects",
    price: 99,
    tokensPerMonth: "500k neural tokens/month",
    features: [
      "Everything in Creator, plus",
      "Team collaboration features",
      "HIPAA/GDPR data security mode",
      "Fine-tune transformer models with private EEG data",
      "Full analytics dashboard",
      "1-on-1 onboarding & ML consulting",
    ],
    usage: ["1000+ decoding sessions/month", "Unlimited concurrent use"],
    buttonLabel: "Get Started",
  },
];

export default pricingPlans;
