import { NextResponse } from 'next/server'
import { getDb, toObjectId } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const isAdmin = async () => {
  const session = await getServerSession(authOptions)
  return session?.user?.email === (process.env.ADMIN_EMAIL || 'habblanka@gmail.com')
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const db = await getDb()
  const doc = await db.collection('blogs').findOne({ _id: toObjectId(id) })
  if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ ...doc, id: doc._id.toString(), _id: undefined })
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = params
  const updates = await req.json()
  delete updates.id
  delete updates._id

  const db = await getDb()
  await db.collection('blogs').updateOne({ _id: toObjectId(id) }, { $set: { ...updates, updatedAt: new Date() } })
  const doc = await db.collection('blogs').findOne({ _id: toObjectId(id) })

  return NextResponse.json({ ...doc, id: doc?._id.toString(), _id: undefined })
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = params
  const db = await getDb()
  await db.collection('blogs').deleteOne({ _id: toObjectId(id) })

  return NextResponse.json({ success: true })
}
