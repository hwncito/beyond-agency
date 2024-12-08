import Message from './Message';

interface BannerProps {
  data: { quote: string; author: string; role: string }[];
}

export default function Banner({ data }: BannerProps) {
  return (
    <div className="flex gap-5 overflow-x-hidden relative">
      <div className="absolute inset-0 w-screen h-full pointer-events-none z-10 mx-auto">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgb(249, 250, 251) 0%, rgba(249, 250, 251, 0) 20%, rgba(249, 250, 251, 0) 80%, rgb(249, 250, 251) 100%)',
          }}
        />
      </div>
      {data.map((testimonial, index) => {
        const { quote, author, role } = testimonial;
        return (
          <Message key={index} quote={quote} author={author} role={role} />
        );
      })}
    </div>
  );
}
