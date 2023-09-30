import React, { ReactNode } from 'react'

export const metadata = {
  title: "About"
}

const layout = ({ children  }: {children: ReactNode}) => {
  return (
    <div>{ children }</div>
  )
}

export default layout