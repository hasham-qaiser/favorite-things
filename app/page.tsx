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
            <CardContent className="h-48 object-cover">
              <Image
                className="rounded-lg mt-4"
                src={"/images/macbookpro.jpeg"}
                alt="Next.js Logo"
                width={300}
                height={300}
              />
            </CardContent>
            <CardHeader>
              <CardTitle>Macbook Pro 14 - Inch</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <div className="flex flex-col items-center">
          <Card className="w-[300px]">
            <CardContent className="h-48 object-cover">
              <Image
                className="rounded-lg mt-4 object-cover"
                src={"/images/airpodspro.jpeg"}
                alt="Next.js Logo"
                width={300}
                height={300}
              />
            </CardContent>
            <CardHeader>
              <CardTitle>Airpods Pro</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <div className="flex flex-col items-center">
          <Card className="w-[300px]">
            <CardContent className="h-48 object-cover">
              <Image
                className="rounded-lg mt-4 object-cover"
                src={"/images/iphone15pro.jpeg"}
                alt="Next.js Logo"
                width={400}
                height={400}
              />
            </CardContent>
            <CardHeader>
              <CardTitle>Airpods Pro</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
