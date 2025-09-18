import React from 'react'
import Image from 'next/image'

type IconTextProps = {
  icon: string;
  name: string;
};

const IconTech: React.FC<IconTextProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-row items-center gap-4">
        <div className="relative size-18">
            <Image src={icon} alt={name} fill className={name == "Next.js" ? `object-contain dark:filter dark:invert dark:brightness-0 dark:contrast-100` : ""} />
        </div>
        <span className="text-2xl">{name}</span>
    </div>
  )
}

export default IconTech