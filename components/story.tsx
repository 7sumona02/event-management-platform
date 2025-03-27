import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Compare } from "./compare";

function Story() {
  return (
    <div className="w-full py-10 lg:py-20 px-10 lg:px-40">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col gap-8 justify-between">
          <div className="flex gap-4 flex-col pt-0">
            {/* <div>
              <Badge variant="outline">We&apos;re live!</Badge>
            </div> */}
            <div className="flex gap-4 flex-col">
              <p className="text-md md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Remember those late nights spent piecing together vendor contracts? The endless email chains trying to confirm attendee numbers? The constant worry about staying within budget?
              </p>
              <p className="text-md md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              For too long, event planning has been a fragmented, frustrating experience. You're likely juggling multiple tools: spreadsheets for budgeting, separate platforms for ticketing, countless emails for communication... It's time-consuming, inefficient, and leaves room for costly errors.
              </p>
              <h1 className="text-xl md:text-2xl max-w-lg tracking-tighter text-left font-regular">
               Sound familiar?              
              </h1> 
            </div>
          </div>
          <div className="">
            <Compare
                firstImage="https://assets.aceternity.com/code-problem.png"
                secondImage="https://assets.aceternity.com/code-solution.png"
                firstImageClassName="object-cover object-left-top"
                secondImageClassname="object-cover object-left-top"
                className="h-[250px] w-full md:h-[500px] md:w-[500px]"
                slideMode="hover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Story };