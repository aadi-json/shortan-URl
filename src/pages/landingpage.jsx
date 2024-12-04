import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [inputVal, setInputVal] = useState();
  const navigate = useNavigate();

  const handleInput = (e) => {
    e.preventDefault();
    if (inputVal) return navigate(`/auth/createnew${inputVal}`);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-center mt-5 text-3xl sm:text-4xl md:text-5xl font-bold">
        The only URL shortener <br /> you'll ever need 👇
      </h1>
      <div>
        <form
          className="flex justify-center items-center flex-wrap mt-6"
          onSubmit={handleInput}
        >
          <Input
            placeholder="Enter your URL...."
            className="h-full flex-1 my-4 mx-4 sm:my-6 sm:mx-6 lg:my-6 lg:mx-8"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <Button variant="destructive" type="submit" className="my-4 sm:my-6">
            Shorten!!
          </Button>
        </form>

        <div className="flex justify-center mb-10">
          <img
            src="/banner.jpeg"
            alt="URL shortener banner"
            className="w-full max-w-3xl mx-4 sm:mx-6 lg:mx-8"
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full mb-10">
        <Accordion
          type="multiple"
          collapsible
          className="w-full max-w-3xl mx-4 sm:mx-6 lg:mx-8"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What analytics are available for my shortened URLs?
            </AccordionTrigger>
            <AccordionContent className="mt-3 text-sm sm:text-base">
              You can view the number of clicks, geolocation data of the clicks
              and device types (mobile/desktop) for each of your shortened URLs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How does the Trimrr URL shortener work?
            </AccordionTrigger>
            <AccordionContent className="mt-3 text-sm sm:text-base">
              When you enter a long URL, our system generates a shorter version
              of that URL. This shortened URL redirects to the original long URL
              when accessed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do I need an account to use the app?
            </AccordionTrigger>
            <AccordionContent className="mt-3 text-sm sm:text-base">
              Yes. Creating an account allows you to manage your URLs, view
              analytics, and customize your short URLs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default LandingPage;
