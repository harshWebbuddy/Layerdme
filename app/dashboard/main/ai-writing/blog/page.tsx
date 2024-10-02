"use client";

import Image from "next/image";
import React, { useState } from "react";
import Editor from "./Editor";
import Form from "./Form";

export interface ResponseBlog {
	title: string;
	blog: string;
}

export default function page() {
	const [response, setResponse] = useState<ResponseBlog>();
  return (
    <section className="h-full px-3 md:px-10 pb-10 flex-1">
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="w-full bg-[url('/main/ai/background-voice-ai-forms.png')] xl:max-w-[400px] 2xl:max-w-[480px] ring-1 ring-slate-600/80 rounded-2xl bg-center bg-cover bg-no-repeat p-4 md:p-7 space-y-4">
          <div className="flex items-center gap-4">
            <Image
              src="/main/ai/blog-titles.png"
              alt="blog-titles"
              width={50}
              height={50}
            />
            <h1 className="text-white text-2xl font-semibold">Blog Titles</h1>
          </div>
          <p className="text-white/70">
            Nobody wants to read boring blog titles, generate catchy blog titles
            with this tool
          </p>
          <div className="flex items-center">
            <Image
              src="/main/ai/activity.svg"
              alt="speech to text"
              width={28}
              height={28}
            />
            <p>
              Your Balance is{" "}
              <span className="font-semibold text-primary-yellow">1,000</span>{" "}
              Words
            </p>
          </div>
          <Form setResponse={setResponse}/>
        </div>
        <div className="w-full bg-[url('/main/ai/background-voice-ai-space.png')] bg-center bg-no-repeat bg-cover rounded-2xl ring-1 ring-slate-600  p-4 md:p-7">
          <Editor response={response} />
        </div>
      </div>
    </section>
  );
}
