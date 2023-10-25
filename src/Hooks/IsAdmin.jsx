import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider';

export default function IsAdmin() {
    const { user } = useContext(AuthContext);
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(`https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/users/admin/${user?.email}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch isAdmin status');
                }
                const data = await res.json();
                return data.admin; // Directly return the admin property
            } catch (error) {
                console.error('Error fetching isAdmin status:', error);
                throw error;
            }
        }
    });

    return [isAdmin, isAdminLoading]
}
