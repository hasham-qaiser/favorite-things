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
      <div className="grid grid-cols-4 gap-8">
        <div>
          <Card>
            <CardContent className="flex flex-col items-center justify-between">
              <Image
                className="rounded-lg mt-4"
                src={"/images/macbook-pro.png"}
                alt="Next.js Logo"
                width={300}
                height={300}
              />
            </CardContent>
          </Card>
          <p className="text-center mt-2">Macbook Pro</p>
        </div>

        <div>
          <Card>
            <CardContent className="flex flex-col items-center">
              <Image
                className="rounded-lg"
                src={"/images/airpod-pro.png"}
                alt="Next.js Logo"
                width={300}
                height={300}
              />
            </CardContent>
          </Card>
          <p className="text-center mt-2">Airpods Pro 2</p>
        </div>
      </div>
    </div>
  );
}
