import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button"
import { TextGlitch } from "./text-glitch";
import { InfiniteSlider } from "./infinite-slider";
import { HeroVideoDialog } from "./hero-video-dialog";
import { HeroVideo } from "./hero-video";

function Solutions() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-24 items-center justify-center flex-col md:px-0 px-10">
          {/* <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Read our launch article <MoveRight className="w-4 h-4" />
            </Button>
          </div> */}
          <div className="flex gap-4 flex-col">
             <h1 className="text-2xl md:text-5xl max-w-2xl tracking-tighter text-center font-regular animate-text-gradient bg-gradient-to-r from-[#535353] via-[#c9c9c9] to-[#535353] bg-[200%_auto] bg-clip-text font-medium text-transparent dark:from-[#ACACAC] dark:via-[#363636] dark:to-[#ACACAC]">
             Finally, A Unified Platform That Handles Everything.
            </h1>
            <h1 className="text-lg md:text-2xl max-w-2xl tracking-tighter text-center font-regular">
            Say goodbye to the chaos and hello to streamlined efficiency.             </h1>
            <p className="text-sm md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Orchestrate is more than just software; it's your dedicated event management partner. We've integrated all the essential tools you need into one intuitive platform, empowering you to focus on what truly matters: creating unforgettable experiences for your attendees.
           </p>
          </div>
          <div className="max-w-[80vw] md:pt-24 pt-4">
            <HeroVideo />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Solutions };
