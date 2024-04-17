import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { client, urlFor } from "./lib/sanity";
import { itemCard } from "./lib/interface";
import Image from "next/image";
import { format } from "date-fns";

import {
  HoverCardTrigger,
  HoverCard,
  HoverCardContent,
} from "@/components/ui/hover-card";

export const revalidate = 30; // revalidate at most every 30 seconds

async function getData() {
  const query = `*[_type == 'item'] | order(timestamp desc)
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: itemCard[] = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 container">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.itemImage).url()}
            alt="item image"
            width={400}
            height={400}
            className="object-contain w-full h-full hover:scale-105 duration-300 ease-in-out container"
          />
          <CardDescription>{post.title}</CardDescription>
        </Card>
      ))}
    </div>
  );
}
