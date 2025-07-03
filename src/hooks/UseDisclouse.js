import React from 'react'
import { useState } from 'react';

const UseDisclouse = () => {
const [isOpen, setopen] = useState(false);


const onOpen = () => {
setopen(true);
}

const onClose = () => {
  setopen(false);
}

  return {onClose, onOpen, isOpen }
}

export default UseDisclouse