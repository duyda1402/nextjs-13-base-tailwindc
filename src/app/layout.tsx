import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
