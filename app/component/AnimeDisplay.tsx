import Image from 'next/image'
import { Button } from "./ui/button"

interface AnimeDisplayProps {
  data: {
    name: string;
    outfit: string;
    accessory: string;
    message: string;
    imageUrl: string;
  };
  onReset: () => void;
}

export function AnimeDisplay({ data, onReset }: AnimeDisplayProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-square relative overflow-hidden rounded-lg">
        <Image 
          src={data.imageUrl} 
          alt="Generated Anime Character" 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">{data.name}&apos;s New Year Spirit</h2>
        <p>Outfit: {data.outfit}</p>
        <p>Accessory: {data.accessory}</p>
        <p className="italic">&quot;{data.message}&quot;</p>
      </div>
      <Button onClick={onReset} className="w-full">Generate Another</Button>
    </div>
  )
}

