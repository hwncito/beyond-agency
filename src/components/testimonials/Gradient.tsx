export default function Gradient() {
  return (
    <div className="absolute inset-0 w-screen h-full pointer-events-none z-10 mx-auto">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgb(249, 250, 251) 0%, rgba(249, 250, 251, 0) 20%, rgba(249, 250, 251, 0) 80%, rgb(249, 250, 251) 100%)',
        }}
      />
    </div>
  );
}
