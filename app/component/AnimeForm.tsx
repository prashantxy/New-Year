import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface AnimeFormProps {
  onSubmit: (data: { name: string; outfit: string; accessory: string; message: string }) => void;
}

export function AnimeForm({ onSubmit }: AnimeFormProps) {
  const [name, setName] = useState('')
  const [outfit, setOutfit] = useState('')
  const [accessory, setAccessory] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, outfit, accessory, message })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="outfit">Outfit</Label>
        <Select value={outfit} onValueChange={setOutfit} required>
          <SelectTrigger id="outfit">
            <SelectValue placeholder="Select an outfit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kimono">Kimono</SelectItem>
            <SelectItem value="yukata">Yukata</SelectItem>
            <SelectItem value="formal">Formal Wear</SelectItem>
            <SelectItem value="casual">Casual</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="accessory">Accessory</Label>
        <Select value={accessory} onValueChange={setAccessory} required>
          <SelectTrigger id="accessory">
            <SelectValue placeholder="Select an accessory" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hat">Party Hat</SelectItem>
            <SelectItem value="glasses">2024 Glasses</SelectItem>
            <SelectItem value="balloon">Balloon</SelectItem>
            <SelectItem value="noisemaker">Noisemaker</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">New Year's Message</Label>
        <Input id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <Button type="submit" className="w-full">Generate Anime Character</Button>
    </form>
  )
}

