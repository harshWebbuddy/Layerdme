"use client";
import React, { useState } from "react";
import Selection from "../components/Selection";
import Checkbox from "../components/Checkbox";
import Image from "next/image";
import { languages } from "@/app/dashboard/account/defaults/components";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

export default function Form() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [sound, setSound] = useState<string>();
  return (
    <form className="space-y-5 mt-6">
      <div className="flex flex-col xl:flex-row gap-3 w-full">
        <div className="border-bottom-gradient w-full">
          <Selection
            id="auto-detect"
            items={languages}
            label="Language"
            placeholder="English (USA)"
          />
        </div>
        <div className="w-full">
          <Selection
            id="voices"
            items={languages}
            label="Voices"
            placeholder="Choose Your Voice"
          />
        </div>
        <div className="flex items-end">
          <button
            type="button"
            className="bg-gradient-to-br from-primary-red to-primary-yellow p-2 w-[50px] h-[50px] rounded-lg grid place-content-center"
          >
            <Image
              src="/main/ai/volume.svg"
              alt="speech to text"
              width={25}
              height={25}
            />
          </button>
        </div>
        <div className="w-full space-y-2">
          <label>Audio Title</label>
          <div className="bg-[#32323280] rounded-lg ring-[#514E4E] ring-1 focus-within:ring-white/50 transition duration-200 w-full flex justify-center items-center h-[50px] cursor-pointer outline-none px-3">
            <input
              type="text"
              className="w-full h-full  rounded-lg bg-transparent outline-none"
              placeholder="New Audio"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-full">
          <Selection
            id="select-workbook"
            items={[
              {
                value: "Workbook 1",
                label: "Workbook 1",
              },
              {
                value: "Workbook 2",
                label: "Workbook 2",
              },
              {
                value: "Workbook 3",
                label: "Workbook 3",
              },
              {
                value: "Workbook 4",
                label: "Workbook 4",
              },
            ]}
            label="Select"
            placeholder="Workbook Name"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <Checkbox label="MP3" id="mp3" />
        <Checkbox label="WAV" id="WAV" />
        <Checkbox label="OGG" id="OGG" />
        <Checkbox label="WEBM" id="WEBM" />
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap xl:flex-nowrap gap-4 xl:gap-3">
        <div className="w-full sm:max-w-[200px]">
          <Selection
            id="speaking-style"
            items={[
              {
                value: "Fast",
                label: "Fast",
              },
              {
                value: "Medium",
                label: "Medium",
              },
              {
                value: "Slow",
                label: "Slow",
              },
            ]}
            placeholder="Speaking Style"
          />
        </div>
        <div className="w-full sm:max-w-[200px]">
          <Selection
            id="voice-effects"
            items={[
              {
                value: "Reverb",
                label: "Reverb",
              },
              {
                value: "Echo",
                label: "Echo",
              },
              {
                value: "High Pitch",
                label: "High Pitch",
              },
              {
                value: "Auto Tune",
                label: "Auto Tune",
              },
            ]}
            placeholder="Voice Effects"
          />
        </div>
        <div className="w-full sm:max-w-[200px]">
          <Selection
            id="say-as"
            items={[
              {
                value: "Auto Detect",
                label: "Auto Detect",
              },
              {
                value: "Manual Detection",
                label: "Manual Detection",
              },
            ]}
            placeholder="Say as"
          />
        </div>
        <div className="w-full sm:max-w-[200px]">
          <Selection
            id="Emphasis"
            items={[
              {
                value: "Auto Detect",
                label: "Auto Detect",
              },
              {
                value: "Manual Detection",
                label: "Manual Detection",
              },
            ]}
            placeholder="Emphasis"
          />
        </div>
        <div className="w-full sm:max-w-[200px]">
          <Selection
            id="Volume"
            items={[
              {
                value: "High",
                label: "High",
              },
              {
                value: "Medium",
                label: "Medium",
              },
              {
                value: "Low",
                label: "Low",
              },
            ]}
            placeholder="Volume"
          />
        </div>
        <div className="w-full sm:max-w-[200px]">
          <Selection
            id="speed"
            items={[
              {
                value: "Fast",
                label: "Fast",
              },
              {
                value: "Medium",
                label: "Medium",
              },
              {
                value: "Slow",
                label: "Slow",
              },
            ]}
            placeholder="Speed"
          />
        </div>
        <div className="w-full sm:max-w-[200px]">
          <Selection
            id="pitch"
            items={[
              {
                value: "High",
                label: "High",
              },
              {
                value: "Medium",
                label: "Medium",
              },
              {
                value: "Low",
                label: "Low",
              },
            ]}
            placeholder="Pitch"
          />
        </div>
        <div className="w-full sm:max-w-[200px]">
          <Selection
            id="pauses"
            items={[
              {
                value: "Fast",
                label: "Fast",
              },
              {
                value: "Medium",
                label: "Medium",
              },
              {
                value: "Slow",
                label: "Slow",
              },
            ]}
            placeholder="Pauses"
          />
        </div>
      </div>
      <div className="bg-[url('/main/background-speech.png')] bg-center bg-cover bg-no-repeat px-4 md:px-7 pt-6 pb-4 ring-1 ring-slate-700 ring-inset rounded-2xl !mt-10">
        <h1 className="text-xl md:text-2xl font-semibold">Text To Speech</h1>
        <div className="ring-1 ring-white/30 rounded-2xl mt-4 min-h-[380px] flex flex-col">
          <div className="flex  flex-col sm:flex-row sm:items-center gap-5 p-3 md:p-7">
            <div className="flex w-full items-center gap-5">
              <Image
                src="/main/ai/speech-to-text.png"
                alt="speech to text"
                width={50}
                height={50}
              />
              <div className="bg-[#32323280] rounded-lg ring-[#514E4E] ring-2 w-full flex justify-center items-center h-[50px] cursor-pointer outline-none px-3">
                <input
                  type="text"
                  max={1000}
                  className="w-full h-full  rounded-lg bg-transparent outline-none"
                  placeholder="Enter your text here to synthesize..."
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex h-[50px] gap-2">
              {[
                "/main/ai/music-note.svg",
                "/main/ai/time.svg",
                "/main/ai/trash.svg",
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={async () => {
                    if (index === 0) {
                      toast.promise(
                        axios.post(
                          "/ai/voice/text-to-speech",
                          {
                            text,
                            title,
                          },
                          {
                            headers: {
                              Authorization: `Bearer ${localStorage.getItem(
                                "token"
                              )}`,
                            },
                          }
                        ),
                        {
                          loading: "Converting to speech",
                          error: (error) =>
                            error?.response?.data?.stackTrace ?? "Error",
                          success: "Converted to speech",
                        }
                      );
                    }
                  }}
                  className={`bg-[#fdbb142b] h-full w-[50px] px-2 grid place-content-center rounded-lg hover:bg-[#fdbb1446] transition cursor-pointer`}
                >
                  <Image src={item} alt="image" height={25} width={25} />
                </div>
              ))}
            </div>
          </div>

          <div className="h-full flex-1 grid place-content-center mb-20">
            <Image
              src="/main/ai/stack-cards.png"
              alt="image"
              height={40}
              width={40}
              draggable={false}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3">
          <h1> {text.length} Characters</h1>
          <div className="flex flex-col sm:flex-row sm:gap-3">
            <button
              type="button"
              className="underline text-start leading-[200%]"
            >
              Delete All lines
            </button>
            <button
              type="button"
              className="underline text-start leading-[200%]"
            >
              Clear Effects
            </button>
            <button
              type="button"
              onClick={() => {
                setText("");
              }}
              className="underline text-start leading-[200%]"
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <button className="bg-transparent ring-1 ring-white ring-inset rounded-lg py-3 w-[200px] hover:bg-[#47444446] transition duration-300">
          Listen
        </button>
        <button className="bg-gradient-to-br from-primary-red to-primary-yellow rounded-lg py-3 w-[200px]">
          Listen
        </button>
      </div>
    </form>
  );
}
