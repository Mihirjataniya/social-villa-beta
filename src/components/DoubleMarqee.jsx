import {
  Video,
  Edit3,
  ImageIcon,
  ArrowRightLeft,
  PenTool,
  Film,
  Type,
  BadgeCheck,
  Palette,
  Brush,
  Crop,
  Layers,
  Zap,
  Code,
  Search,
  Sparkles,
  Share2,
  Layout,
  BarChart3,
  ShieldCheck,
  Globe,
  MousePointerClick,
  Squirrel,
  Workflow
} from "lucide-react"

const services1 = [
  { name: "Video & Motion Graphics", icon: Video },
  { name: "Copywriting", icon: Edit3 },
  { name: "Poster Design", icon: ImageIcon },
  { name: "Framer Migration", icon: ArrowRightLeft },
  { name: "Logo Design", icon: PenTool },
  { name: "Short-Form Video", icon: Film },
  { name: "Brand Messaging", icon: Type },
  { name: "Visual Identity", icon: BadgeCheck },
  { name: "Creative Direction", icon: Palette },
  { name: "Illustration & Artwork", icon: Brush },
  { name: "Image Editing", icon: Crop },
  { name: "Brand Asset System", icon: Layers }
]

const services2 = [
  { name: "Performance Optimization", icon: Zap },
  { name: "Custom Code Snippets", icon: Code },
  { name: "Technical SEO", icon: Search },
  { name: "Icon System Design", icon: Sparkles },
  { name: "Social Media Strategy", icon: Share2 },
  { name: "Landing Page Design", icon: Layout },
  { name: "Analytics & Reporting", icon: BarChart3 },
  { name: "Web Accessibility", icon: ShieldCheck },
  { name: "Multilingual Sites", icon: Globe },
  { name: "Conversion Optimization", icon: MousePointerClick },
  { name: "Interactive Prototypes", icon: Squirrel },
  { name: "Automation Workflows", icon: Workflow }
]

export default function DoubleMarquee() {
  const renderMarqueeContent = (services) =>
    [...services, ...services].map((service, index) => {
      const Icon = service.icon
      return (
        <div
          key={index}
          className="flex items-center mx-4 bg-[#FF9000] text-black px-6 py-3 rounded-full whitespace-nowrap"
        >
          <Icon className="w-5 h-5 mr-3" />
          <span className="text-sm font-medium">{service.name}</span>
        </div>
      )
    })

  return (
    <div className="w-full bg-black py-10 space-y-8">
      <div className="marquee-wrapper">
        <div className="marquee">{renderMarqueeContent(services1)}</div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee reverse">{renderMarqueeContent(services2)}</div>
      </div>
    </div>
  )
}
