import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button"
import { TextGlitch } from "./text-glitch";
import { InfiniteSlider } from "./infinite-slider";

function Hero1() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-24 items-center justify-center flex-col md:px-0 px-10">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Read our launch article <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
             <h1 className="text-2xl md:text-5xl max-w-2xl tracking-tighter text-center font-regular animate-text-gradient bg-gradient-to-r from-[#535353] via-[#c9c9c9] to-[#535353] bg-[200%_auto] bg-clip-text font-medium text-transparent dark:from-[#ACACAC] dark:via-[#363636] dark:to-[#ACACAC]">
             Tired of Event Planning Chaos?
            </h1>
            <h1 className="text-lg md:text-2xl max-w-2xl tracking-tighter text-center font-regular">
            Introducing Orchestrate: The all-in-one solution designed to transform your event planning from stressful to seamless.
            </h1>
            <p className="text-sm md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Juggling spreadsheets, emails, and multiple platforms? Feeling overwhelmed by the sheer complexity of event management? We understand. That's why we built Orchestrate – your central hub for planning, managing, and executing exceptional events of any scale.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-3">
            <Button size="lg" className="gap-4" variant="outline">
                <TextGlitch text="Request a Demo" /> <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
                <TextGlitch text="Start a Free Trial" /> <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="w-screen overflow-hidden pt-16">
          <InfiniteSlider durationOnHover={75} gap={24}>
      <img
        src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
        alt="Dean blunt - Black Metal 2"
        className="aspect-square w-[240px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
        alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
        className="aspect-square w-[240px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
        alt="Yung Lean - Stardust"
        className="aspect-square w-[240px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
        alt="Lana Del Rey - Ultraviolence"
        className="aspect-square w-[240px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288"
        alt="A$AP Rocky - Tailor Swif"
        className="aspect-square w-[240px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520"
        alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
        className="aspect-square w-[240px] rounded-[4px]"
      />
    </InfiniteSlider>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero1 };
