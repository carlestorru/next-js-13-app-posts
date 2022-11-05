import '../styles/globals.css'
import { font } from './font.js'
import { Navigation } from '../components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
