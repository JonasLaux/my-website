import React, { useCallback, useEffect } from "react"
import { Button } from "antd"
import { BulbFilled } from "@ant-design/icons"

import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from "darkreader"
import { useLocalStorage } from "../hooks/useLocalStorage"

export enum Mode {
  Light = "light",
  Dark = "dark",
}
function applyMode(mode?: Mode) {
  if (mode === Mode.Dark) {
    // setFetchMethod(window.fetch);
    enableDarkMode({
      brightness: 100,
      contrast: 90,
      sepia: 10,
    })
  } else {
    disableDarkMode()
  }
  // manually trigger storage event
  const event = document.createEvent("Event")
  event.initEvent("storage", true, true)
  window.dispatchEvent(event)
}

export default function DarkModeToggler() {
  const [mode, setMode] = useLocalStorage<string>(
    "[dark-mode-toggle]mode",
    Mode.Light
  )

  // Initial Load
  useEffect(() => {
    if (mode !== null) {
      //@ts-ignore
      applyMode(mode)
    } else {
      applyMode(Mode.Light)
    }
  }, [])

  const handleClick = useCallback(() => {
    const newMode = mode === Mode.Light ? Mode.Dark : Mode.Light
    setMode(newMode)
    applyMode(newMode)
  }, [mode])

  return <Button onClick={handleClick} icon={<BulbFilled />}></Button>
}
