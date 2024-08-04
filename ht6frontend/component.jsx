/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JN2MFKy5g6E
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4 bg-gray-100">
      <header className="flex justify-between w-full max-w-5xl p-4">
        <span className="text-sm text-gray-600">Team name</span>
        <h1 className="text-4xl font-semibold">FindFountain</h1>
      </header>
      <main className="flex flex-col items-center w-full max-w-5xl p-4">
        <div className="w-full aspect-video bg-gray-300 border border-blue-500 flex items-center justify-center">
          <span className="text-gray-600">Google Maps Embed</span>
        </div>
        <div className="flex items-center w-full mt-4 space-x-2">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Task" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="show">Show</SelectItem>
              <SelectItem value="tag">Tag</SelectItem>
              <SelectItem value="nearest">Nearest</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Category..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="water_fountain">Water Fountain</SelectItem>
              <SelectItem value="bike_rack">Bike Rack</SelectItem>
            </SelectContent>
          </Select>
          <Input type="text" placeholder="Start typing a location..." className="flex-1" />
          <Button variant="outline" size="icon">
            <SearchIcon className="w-5 h-5" />
          </Button>
        </div>
      </main>
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}