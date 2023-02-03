import { useRecoilValue } from "recoil"
import { userState } from "../../atoms"
import Bookings from "./Bookings"

export default function Details() {

  const user = useRecoilValue(userState)

  return <>
    <h1 className="text-2xl font-bold mb-5">Details</h1>

    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>

    <h2 className="text-xl font-black mb-5">My Bookings</h2>

    <Bookings user={user} />

  </>
}