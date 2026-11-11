import React from 'react'

const COLOURS =["red", "#0b7a6e", "green", "brown", "#e2674a", "lemon", "yellow"];

function Avater({name, size, color}) {
    const getInitials = name.split(' ').filter(Boolean).map((part) => part[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span className={`avatar avatar-${size}`} style={{background: color}}>{getInitials || "?"}</span>
  )
}

export default Avater