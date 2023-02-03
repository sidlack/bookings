import { useRecoilValue } from "recoil"
import { hotelsState } from "../atoms"
import Hotel from "../components/Hotel"

export default function Hotels() {

  const hotels = useRecoilValue(hotelsState)

  return <>
    <h1 className="text-2xl font-bold mb-5">Hotels</h1>

    <div className="grid gap-3">
      {hotels.map(hotel => <Hotel key={hotel.id} {...hotel} />)}
    </div>
  </>
}