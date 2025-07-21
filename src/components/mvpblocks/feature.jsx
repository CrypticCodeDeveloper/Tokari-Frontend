import {
  BrainCircuit,
  Rocket,
  Coins,
  Lock,
  PuzzleIcon,
  ToolCase,
} from "lucide-react";
import { cn } from "@/lib/utils";

const leftFeatures = [
  {
    icon: BrainCircuit,
    title: "Built for Developers",
    description:
      "You get clean APIs and smart defaults, so you can integrate AI without reading a research paper.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: Rocket,
    title: "Lightning-Fast Setup ",
    description:
      "You’ll go from “zero to working” in minutes, not hours — whether you’re building a chatbot, smart search, or AI-powered UI.",
    position: "left",
    cornerStyle: "sm:-translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: Coins,
    title: "No Tokens, No Stress",
    description:
      "You won’t be blindsided by usage fees. Our flat pricing means you can scale confidently with no surprise bills.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-tr-[2px]",
  },
];

const rightFeatures = [
  {
    icon: Lock,
    title: "Privacy-First by Default ",
    description:
      "Your data stays yours. We don’t use it to train anything, and you stay fully in control of what goes in and out.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: PuzzleIcon,
    title: "Drop-In Smart Features",
    description:
      "You can use built-in AI capabilities like summarization, auto-reply, and classification without building them from scratch.",
    position: "right",
    cornerStyle: "sm:translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: ToolCase,
    title: "Built to Extend",
    description:
      "Whether you want to bring your own models or stack Tokari with other tools, the system is flexible enough to adapt to your workflow.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-tl-[2px]",
  },
];

// Feature card component
const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          "relative rounded-2xl px-4 pb-4 pt-4 text-sm",
          "bg-secondary/50 ring ring-border",
          feature.cornerStyle
        )}
      >
        <div className="mb-3 text-[2rem] text-blue-500">
          <Icon />
        </div>
        <h2 className="mb-2.5 text-2xl text-blue-800">{feature.title}</h2>
        <p className="text-pretty text-base text-muted-foreground">
          {feature.description}
        </p>

        {/* Bottom gradient line */}
        <span className="absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-70" />

        {/* Radial bottom glow */}
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(217,100%,60%,0.12)_0%,transparent_100%)] opacity-40" />
      </div>
    </div>
  );
};

export default function Feature() {
  return (
    <section className="pb-8 pt-20" id="features">
      <div className="mx-6 max-w-[1120px] pb-16 pt-2 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="mb-4.5 relative mx-auto w-fit rounded-full rounded-bl-[2px] bg-secondary px-4 py-2 text-sm text-foreground ring ring-border">
              <span className="z-1 relative flex items-center gap-2">
                Features
              </span>
              {/* Bottom glowing line */}
              <span className="absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-70" />

              {/* Radial blue spotlight glow */}
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsla(217,100%,60%,0.2)_0%,transparent_100%)] opacity-50" />
            </div>
            <h2 className="mb-2 text-center text-2xl text-foreground sm:mb-2.5 md:text-[2rem]">
              Why Choose Tokari?
            </h2>
            <p className="mx-auto max-w-[18rem] text-pretty text-center text-muted-foreground">
              Tokari Core isn’t just another AI tool — it’s the infrastructure
              that helps you move fast, stay in control, and build smarter
              products without getting buried in complexity.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
