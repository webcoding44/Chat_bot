'use client'

import { useChat } from '@ai-sdk/react'
// import ReactMarkdown from "react-markdown"

export default function HomePage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className='max-w-6xl mx-auto mt-5 p-4 bg-[#181818] border-2 border-[#343434] rounded-lg'>
      <h1 className='text-xl font-bold mb-4'>Computer-related Q&A chatbot</h1>
      <div className='space-y-4 border border-[#4c4c4c] p-3 rounded-lg h-[500px] overflow-y-auto'>
        {messages.map((item, index) => (
          <div
            key={index}
            className={
              item.role === 'user'
                ? 'flex w-max max-w-[75%] flex-col gap-2 bg-[#e5e5e5] text-[#181818] rounded-lg ml-auto mt-2'
                : 'flex w-max max-w-[75%] flex-col gap-2 bg-[#262626] text-[#fafafa] rounded-lg mr-auto mt-2'
            }
          >
            {/* <ReactMarkdown> */}
              <div className='p-3 text-md'>{item.content}</div>
            {/* </ReactMarkdown> */}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className='mt-4 flex gap-2'>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder='Type your question here...'
          className='flex-1 bg-[#252525] border border-[#4c4c4c] rounded-lg outline-0 px-3 py-2 text-md'
        />
        <button
          type='submit'
          className='bg-[#e5e5e5] text-[#181818] px-4 py-2 rounded-lg text-sm'
        >
          Send
        </button>
      </form>
    </div>
  )
}
