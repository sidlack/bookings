import { useRecoilValue } from "recoil"
import { flightsState } from "../atoms"
import Flight from "../components/Flight"

export default function Flights() {

  const flights = useRecoilValue(flightsState)

  return <>
    <h1 className="text-2xl font-bold mb-5">Flights</h1>

    <div className="grid gap-3">
      {flights.map(flight => <Flight key={flight.id} {...flight} />)}
    </div>
  </>
}