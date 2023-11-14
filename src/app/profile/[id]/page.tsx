'use client'

import { useParams } from 'next/navigation'

export default function ProfileIdpage() {
    const { id } : any = useParams();

    console.log(id)

    return (
    <div>
        <h1>Profile Page id : {id}</h1>
    </div>
  )
}
