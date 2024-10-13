// import { ChatWrapper } from "@/components/ChatWrapper";
// import { ragChat } from "@/lib/rag-chat";
// import { redis } from "@/lib/redis";
import { cookies } from "next/headers";

interface PageProps {
  params: {
    dynamicUrl: string | string[] | undefined;
  };
}

function reconstructUrl({ url }: { url: string[] }) {
  const urlComponents = url.map((component) => decodeURIComponent(component));
  return urlComponents.join("/");
}

const Page = async ({ params }: PageProps) => {
  const sessionCookie = cookies().get("sessionId")?.value;
  const url = reconstructUrl({ url: params.dynamicUrl as string[] });

  console.log("the constructued url = " + url);

  // const sessionId = (url + "--" + sessionCookie).replace(/\//g, "");

  // const isIndexed = await redis.sismember("indexed-urls", url);

  // const initialMessages = await ragChat.history.getMessages({
  //   amount: 100,
  //   sessionId,
  // });

  // if (!isIndexed) {
  //   await ragChat.context.add({
  //     type: "html",
  //     source: url,
  //     config: {
  //       chunkOverlap: 50,
  //       chunkSize: 200,
  //     },
  //   });

  //   await redis.sadd("indexed-urls", url);
  // }

  // return (
  //   <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
  // );
};

export default Page;
