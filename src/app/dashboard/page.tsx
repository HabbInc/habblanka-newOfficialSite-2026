import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import DashboardClient from './DashboardClient'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  const isAdmin = session?.user?.email === (process.env.ADMIN_EMAIL || 'habblanka@gmail.com')

  if (!isAdmin) {
    redirect('/signin')
  }

  return <DashboardClient />
}
