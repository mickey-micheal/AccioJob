import { GoogleGenAI } from "@google/genai";
import { useRef, useState } from "react";

const SYSTEM_PROMPT = `You are ChatGPT, a highly intelligent AI assistant.

Answer accurately, clearly, and professionally.

Always:
- Understand the user's intent.
- Think step by step before answering.
- Use headings and bullet points.
- Format code properly.
- Give examples whenever useful.
- Explain difficult concepts in simple language.
- Avoid unnecessary information.
- If the question is coding-related, provide complete working code.
- If there is an error, identify the cause first, then provide the fix.
- Never make up facts.
- If you don't know something, say you don't know instead of guessing.

Your goal is to give the most useful and correct answer possible.`;

const App = () => {
  const [response, setResponse] = useState("");
  const inputRef = useRef(null);

  const aiRef = useRef(
    new GoogleGenAI({
      apiKey: import.meta.env.VITE_API_KEY,
    })
  );

  async function getdata() {
    const userInput = inputRef.current.value.trim();

    if (!userInput) return;

    try {
      const result = await aiRef.current.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: `${SYSTEM_PROMPT}

      User's massage:
      ${userInput}`,
      });

      setResponse(result.text);
      
    } catch (error) {
      console.error(error);
      setResponse("Please try agine");
    }

    inputRef.current.value = ""
  }

  return (
    <div className="min-h-screen bg-[#212121] flex items-center justify-center px-5">

      <div className="w-full max-w-4xl bg-[#2d2d2d] rounded-3xl shadow-2xl border border-gray-700 p-8">

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Mickey'<s></s> AI
        </h1>

        <p className="text-center text-gray-400 mb-10">
          Ask anything and get your answer instantly.
        </p>

        <div className="flex gap-4">

          <input
            ref={inputRef}
            type="text"
            placeholder="Type your question..."
            className="flex-1 bg-[#212121] border border-gray-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={getdata}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-2xl font-semibold transition duration-300"
          >
            Ask Mickey
          </button>

        </div>

        {response && (
          <div className="mt-8 bg-[#212121] border border-gray-700 rounded-2xl p-6">

            <h2 className="text-blue-400 text-lg font-semibold mb-4">
              AI Response
            </h2>

            <p className="text-gray-200 whitespace-pre-wrap leading-8">
              {response}
            </p>

          </div>
        )}

      </div>

    </div>
  );
};

export default App;