import React from 'react'
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

const Chat = () => {
    
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [generatingAnswer, setGeneratingAnswer] = useState(false);
  
    async function generateAnswer(e) {
      setGeneratingAnswer(true);
      e.preventDefault();
      setAnswer("Loading your answer... \n It might take upto 10 seconds");
      try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBQ9lo58BfUcTuSG7zFG2I9I_EFdlgmAjc`,
          method: "post",
          data: {
            contents: [{ parts: [{ text: question }] }],
          },
        });
  
        setAnswer(
          response["data"]["candidates"][0]["content"]["parts"][0]["text"]
        );
      } catch (error) {
        console.log(error);
        setAnswer("Sorry - Something went wrong. Please try again!");
      }
  
      setGeneratingAnswer(false);
    }
  
  return (
    <>
    <div className="bg-white h-screen p-3">
      <form
        onSubmit={generateAnswer}
        className="w-full md:w-2/3 m-auto text-center rounded bg-gray-50 py-2"
      >
        <a href="" target="_blank">
          <h1 className="amazing">Cultivator Pridictor</h1>
        </a>
        <textarea
          required
          className="textareaone"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your Soil Type ,Temperature,State,District"
        ></textarea>
        <button
          type="submit"
          className="buttons"
          disabled={generatingAnswer}
        >
          Generate answer
        </button>
      </form>
      <div className="answer-container">
        <ReactMarkdown className="p-4">{answer}</ReactMarkdown>
      </div>
    </div>
  </>
  )
}

export default Chat
