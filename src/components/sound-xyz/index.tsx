import React, { useState, useRef } from "react";

const Item = ({ soundURL, id }: { soundURL: string; id?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef(null);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-tl from-black rounded-lg w-72 h-48" />
      <iframe
        ref={iframeRef}
        src={soundURL}
        onLoad={() => setIsLoaded(true)}
        id={id}
        className={`rounded-lg w-72 h-48 ${
          !isLoaded && "bg-[url('/src/assets/images/icons/loading.svg')]"
        } bg-no-repeat bg-center relative`}
        allow="clipboard-write"
        sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
};

// TODO: figure out why suspense isn't working ?
// https://arc.net/l/quote/yurqdzxu
// const Loading = () => {
//   return <h2>⏲ Loading...</h2>;
// };

const SoundXYZGallery = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div id="sound-xyz-releases" className="p-5 md:px-28">
      <h1 className="p-5">digital collectibles</h1>
      <div
        className="flex flex-wrap justify-center mx-auto w-fit 
               p-5 bg-gray-500 rounded-lg bg-opacity-25 content-between gap-10"
      >
        {React.Children.map(children, (child, i) => {
          console.log(child);
          return React.cloneElement(child, { i });
        })}
      </div>
    </div>
  );
};

SoundXYZGallery.Item = Item;

export default SoundXYZGallery;
