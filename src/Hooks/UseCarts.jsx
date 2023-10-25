import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProvider'
export default function UseCarts() {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    const { isPending, refetch, data: cart = [] } = useQuery({
        queryKey: ['addedClass', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/addedClass?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })
    return [cart, refetch, isPending]
}
