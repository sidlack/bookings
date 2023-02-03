import { useRecoilValue } from "recoil"
import { userState } from "../../atoms"
import Booking from "../components/Booking"

export default function Bookings({ user }) {

  // const user = useRecoilValue(userState)

  return <>
    {/* <h1 className="text-2xl font-bold mb-5">Bookings</h1> */}

    <div className="grid gap-3">
      {user?.bookings.map(booking => <Booking key={booking.id} {...booking} />)}
    </div>
  </>
}