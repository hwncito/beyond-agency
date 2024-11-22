import '@fontsource/bebas-neue';

export default function Preload() {

  return (
    <>
      <div
        id="preload-background"
        className="absolute bg-white w-full h-full z-10"
      ></div>
      <div id='preload-container' className="absolute w-full h-full flex items-center justify-center">
        <div className="absolute overflow-hidden z-20">
          <h2
            id="preload-title"
            className="text-3xl text-black tracking-wider leading-none translate-y-full"
            style={{ fontFamily: 'Bebas Neue' }}
          >
            Never Stop Exploring
          </h2>
        </div>
      </div>
    </>
  );
}
