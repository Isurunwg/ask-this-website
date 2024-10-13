"use client";

import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import { Button, Textarea } from "@nextui-org/react";
import { SendHorizontal } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const baseUrl = "http://localhost:3000/";
    const newUrl = `${baseUrl}${url}`;

    setIsLoading(true);
    router.push(newUrl);
  };

  return isLoading ? (
    <div className="flex items-center h-full w-full justify-center ">
      <TailSpin color="#48CFCB" height={80} width={80} />
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>URL Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-[30vw]">
        <h1 className="text-3xl font-bold text-center mb-4">
          Enter any <span className=" text-[#229799] font-bold">URL</span> to
          ask questions
        </h1>
        <form className="relative " onSubmit={handleSubmit}>
          <Textarea
            type="text"
            minRows={1}
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            autoFocus
            placeholder="Enter URL..."
            className=" resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
          />
          <Button
            size="sm"
            type="submit"
            className=" absolute z-10 border border-border bg-[#229799] right-2 bottom-1"
          >
            <SendHorizontal className="size-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
