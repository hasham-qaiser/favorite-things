import { Card, CardContent } from "@/components/ui/card";

import { client, urlFor } from "./lib/sanity";
import { itemCard } from "./lib/interface";
import Image from "next/image";

export const revalidate = 30; // revalidate at most every 30 seconds

async function getData() {
  const query = `*[_type == 'item'] | order(_createdAt desc)`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: itemCard[] = await getData();
  return (
    <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {data.map((post, idx) => (
        <Card key={idx} className="flex justify-center items-center">
          <Image
            src={urlFor(post.itemImage).url()}
            alt="item image"
            width={400}
            height={400}
            className="object-contain w-full h-full"
          />
        </Card>
      ))}
    </div>
  );
}
