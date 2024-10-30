import Image from "next/image";
import React from "react";

const Podcast = ({
  title,
  description,
  imgURL,
  podcastId,
}: {
  title: string;
  description: string;
  imgURL: string;
  podcastId: number;
}) => {
  return (
    <div>
      <figure>
        <Image
          src={imgURL}
          width={172}
          height={172}
          alt={title}
          // className="aspect-square h-fit w-fit rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 trancate font-bold text-white-1 ">{title}</h1>
          <h2 className="text-12 trancate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default Podcast;
