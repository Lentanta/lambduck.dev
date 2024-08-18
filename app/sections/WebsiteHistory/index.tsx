'use client'

import { Carousel } from "@material-tailwind/react"

export const WebsiteHistory = () => {
  return (
    <Carousel placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <img className="aspect-video w-full rounded-lg" src="/images/Jan-2-2023.png" alt="img" />
      <img className="aspect-video w-full rounded-lg" src="/images/Jan-25-2023.png" alt="img" />
      <img className="aspect-video w-full rounded-lg" src="/images/Jun-22-2024.png" alt="img" />
    </Carousel>
  )
}
