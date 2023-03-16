import React, { useState } from 'react'

type Props = {
  color?: string
}

const ButtonGroupSocial = (props: Props) => {
  let color = props.color ?? 'dark-100'
  const socials = [
    'bxl-facebook-square',
    'bxl-twitter',
    'bxl-telegram',
    'bxl-tiktok'
  ]
  return (
    <div className='flex gap-x-6 justify-center'>
      {
        socials.map((social) => <i key={social} className={`bx ${social} bx-border-circle bx-tada text-3xl border border-${color} text-${color}`}></i>)

      }
    </div>

  )
}

export default ButtonGroupSocial