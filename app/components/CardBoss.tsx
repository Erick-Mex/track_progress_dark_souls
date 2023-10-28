import Image from "next/image";

interface Boss_info {
  name: string;
  src: string;
  location: string;
}

export default function CardBoss({ name, src, location }: Boss_info) {
  return (
    <li className="bg-blue-400 w-80 sm:w-60 rounded cursor-pointer">
      <div className="relative h-80 w-full">
        <Image
          className="rounded-t object-cover"
          src={src}
          alt={name + " image"}
          fill
          sizes="(min-width: 640px) 10vw, 60vw"
        />
      </div>
      <div className="p-2">
        <span className="font-bold text-xl mb-2">{name}</span>
        <p className="text-gray-700 text-base">{location}</p>
      </div>
    </li>
  );
}
