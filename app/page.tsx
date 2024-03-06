import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-4 gap-20">
        <div className="flex flex-col items-center">
          <Card className="w-[300px]">
            <CardContent>
              <Image
                src={"/images/nextjs.svg"}
                alt="Next.js Logo"
                width={300}
                height={300}
              />
            </CardContent>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
