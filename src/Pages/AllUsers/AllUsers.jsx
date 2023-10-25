import { useQuery } from "@tanstack/react-query"
import Swal from "sweetalert2"



export default function AllUsers() {
    const { isPending, refetch, data: users = [] } = useQuery({
        queryKey: ['addedClass'],
        queryFn: async () => {
            const response = await fetch(`https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/users`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })

    const handleMakeAdmin = (user) => {
        console.log(user);
        fetch(`https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = (user) => {
        fetch(`https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="overflow-x-auto">

            <h1 className="mb-20 text-center mt-20 text-5xl font-bold">All Users Of <span className='text-[#CD1818]'>Music Classes</span></h1>

            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Admin</th>
                        <th>Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin' ? <button className="btn btn-disabled ">Admin</button> : <button onClick={() => handleMakeAdmin(user)} className="btn bg-gray-900 text-white hover:bg-gray-700">Admin</button>}</td>
                            <td>{user.role === 'instructor' ? <button className="btn btn-disabled">Instructor</button> : <button onClick={() => handleMakeInstructor(user)} className="btn bg-gray-900 text-white hover:bg-gray-700">Instructor</button>}</td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    )
}
