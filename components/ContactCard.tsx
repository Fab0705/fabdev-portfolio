import React from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface ContactCardProps {
  icon?: React.ElementType
  image?: string
}

export default function ContactCard({ icon: Icon, image }: ContactCardProps) {
  return (
    <Card className="p-5 flex items-center justify-center rounded-2xl">
      {Icon && <Icon className="size-7 text-[#7433E5]" />} 
      {!Icon && image && (
        <Image src={image} alt="Icon" className="size-7" />
      )}
    </Card>
  )
}
