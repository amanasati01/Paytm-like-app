import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Users() {
    const [User, setUser] = useState([])
    const [filter, setFilter] = useState('')
    const navigate = useNavigate() // Corrected use of useNavigate

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
        .then((res) => {
            setUser(res.data.user)
        })
    }, [filter])

    return (
        <div className="text-black">
            <h1 className="text-5xl mt-6 ml-9 mb-6 font-bold">Users</h1>
            <input
                type="text"
                placeholder="Search user"
                className="mb-4 h-9 pl-3 ml-9 border w-[80%] border-black"
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul className="text-black">
                {User.map((u) => { // Assuming each user has a unique `_id`
                    return (
                        <div key={u._id} className="flex justify-between border">
                            <div className="flex m-8 ">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                    <span className="text-2xl text-black">{u.firstName[0].toUpperCase()}</span>
                                </div>
                                <li className="text-black m-1">{u.firstName}</li>
                            </div>
                            <button
                                onClick={() => {
                                    navigate(`/send?id=${u._id}&name=${u.firstName}`)
                                }}
                                className="border w-32 h-10 rounded-2xl bg-black text-white m-8"
                            >
                                Send money
                            </button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Users
