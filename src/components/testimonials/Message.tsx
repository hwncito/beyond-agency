interface MessageProps {
  quote: string;
  author: string;
  role: string;
}

export default function Message({ quote, author, role }: MessageProps) {
  const quoteIcon = (
    <svg
      width="50"
      height="50"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 19.5h6a1.5 1.5 0 0 1 1.5 1.5v4.5A1.5 1.5 0 0 1 27 27h-4.5a1.5 1.5 0 0 1-1.5-1.5v-9c0-4 2-6.5 6-7.5M7.5 19.5h6A1.5 1.5 0 0 1 15 21v4.5a1.5 1.5 0 0 1-1.5 1.5H9a1.5 1.5 0 0 1-1.5-1.5v-9c0-4 2-6.5 6-7.5"
        stroke="#116080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="flex flex-col py-5 px-6 rounded-2xl bg-[#F0F9FD] text-black w-[434px]">
      {quoteIcon}
      <p className="text-2xl mt-2 mb-3">{quote}</p>
      <span className="font-medium text-xl">{author}</span>
      <span className="text-gray-800 text-lg">{role}</span>
    </div>
  );
}
