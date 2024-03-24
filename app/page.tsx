import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  const query = `*[_type == 'item'] | order(_createdAt desc)`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: itemCard[] = await getData();
  return (
    <div className="grid grid-cols-4 gap-20 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {data.map((post, idx) => (
        <Card key={idx}>
          <HoverCard>
            <HoverCardTrigger className="hover:cursor-pointer">
              <HoverCardContent className="w-50 text-left text-gray-600">
                {post.smallDescription}
                <div>Purchased: {post.timestamp}</div>
              </HoverCardContent>
              <Image
                src={urlFor(post.itemImage).url()}
                alt="item image"
                width={400}
                height={400}
                className="object-contain w-full h-full hover:scale-105 duration-300 ease-in-out"
              />
            </HoverCardTrigger>
          </HoverCard>
          <div className="text-left flex mt-3">
            <CardTitle>{post.title}</CardTitle>
          </div>
        </Card>
      ))}
    </div>
  );
}
