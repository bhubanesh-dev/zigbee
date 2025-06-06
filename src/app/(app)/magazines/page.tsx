"use client";

import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useFetchMagazines } from "@/lib/SWRhooks/useSWR"; // Import the custom hook for fetching magazines
import InfoSection from "@/components/common/InfoSection";
import Title from "@/components/ui/title";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import MotionDivProvider from "@/components/provider/MotionDivProvider";

const Magazines = () => {
  // Fetching the magazine data using SWR
  const { magazineList, isLoading, error } = useFetchMagazines();

  if (isLoading) {
    return (
      <div className="container mx-auto flex items-center justify-center py-16">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-16">
        <p>Failed to load magazines. Please try again later.</p>
      </div>
    );
  }

  return (
    <MotionDivProvider>
      <div className="container mx-auto px-4">
        <InfoSection
          imageSrc="/magazines.webp"
          heading="Magazines"
          text="Take a quick sneak peek into our Department's Annual Magazine, which embraces a plethora of humbly royal memories and celebrations of the various feats accomplished throughout the recent past"
          background="bg-orange-200"
          darkBackground="dark:bg-orange-600"
          imageHeight={500}
          imageWidth={200}
          placedImage={false}
        />

        {/* Magazine Cards Section */}
        <div className="container mx-auto my-16 grid max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {magazineList?.map((data, index: number) => (
            <Link href={data?.url} target="_blank" key={index}>
              <Card className="group shadow-md transition-shadow hover:shadow-lg">
                <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={data?.image}
                    alt={data?.title || "Magazine Image"}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="mt-2 text-center">
                  <Title
                    size="small"
                    className="text-xl font-semibold"
                  >{` ${data?.title || "Untitled"}`}</Title>{" "}
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </MotionDivProvider>
  );
};

export default Magazines;
