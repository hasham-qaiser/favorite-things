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

        <div>
          <Card>
            <CardContent className="flex flex-col items-center mt-7">
              <Image
                className="rounded-lg"
                src={"/images/tissot-prx.png"}
                alt="Next.js Logo"
                width={120}
                height={120}
              />
            </CardContent>
          </Card>
          <p className="text-center mt-2">Tissot PRX Powermatic 80</p>
        </div>

        <div>
          <Card>
            <CardContent className="flex flex-col items-center mt-7">
              <Image
                className="rounded-lg"
                src={"/images/iphone15-pro.png"}
                alt="Next.js Logo"
                width={200}
                height={200}
              />
            </CardContent>
          </Card>
          <p className="text-center mt-2">Iphone 15 Pro</p>
        </div>

        <div>
          <Card>
            <CardContent className="flex flex-col items-center mt-12">
              <Image
                className="rounded-lg"
                src={"/images/santal-33.png"}
                alt="Next.js Logo"
                width={110}
                height={110}
              />
            </CardContent>
          </Card>
          <p className="text-center mt-2">Santal 33</p>
        </div>

        <div>
          <Card>
            <CardContent className="flex flex-col items-center mt-5">
              <Image
                className="rounded-lg"
                src={"/images/uniqlo-tee.png"}
                alt="Next.js Logo"
                width={200}
                height={200}
              />
            </CardContent>
          </Card>
          <p className="text-center mt-2">Uniqlo U Airism T-Shirt</p>
        </div>

        <div>
          <Card>
            <CardContent className="flex flex-col items-center mt-4">
              <Image
                className="rounded-lg"
                src={"/images/virgil-abloh.png"}
                alt="Next.js Logo"
                width={230}
                height={230}
              />
            </CardContent>
          </Card>
          <p className="text-center mt-2">Virgil Abloh - Figures Of Speech</p>
        </div>

        <div>
          <Card>
            <CardContent className="flex flex-col items-center mt-20">
              <Image
                className="rounded-lg"
                src={"/images/lego-porsche.png"}
                alt="Next.js Logo"
                width={230}
                height={230}
              />
            </CardContent>
          </Card>
          <p className="text-center mt-2">Lego Porsche 911</p>
        </div>
      </div>
    </div>
  );
}
