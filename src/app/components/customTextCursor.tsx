import React, { useEffect, useState } from "react"
import { throttle } from "lodash"

export interface CustomTextCursorProps {
  text: String
}

export function CustomTextCursor({ text = "" }: CustomTextCursorProps) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY + window.scrollY })
    }, 100)

    const handleMouseOut = () => {
      setIsVisible(false)
    }

    const handleMouseOver = () => {
      setIsVisible(true)
    }

    const handleScroll = () => {
      setIsVisible(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseout", handleMouseOut)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseout", handleMouseOut)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleTextClick = () => {
    setIsVisible(false)
  }

  return (
    <div className="fixed" style={{ left: cursorPosition.x + 14, top: cursorPosition.y, opacity: isVisible ? 0.7 : 0, transition: 'left 400ms, top 400ms, opacity 400ms' }}>
      <div
        className="hidden md:flex pointer-events-none z-50 mix-blend-hard-light relative"
        onClick={handleTextClick}
      >
        <p className="text-white text-xs select-none">
          {text}
        </p>
      </div>
    </div >

  )
}
