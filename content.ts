import $ from "jquery"
import type { PlasmoCSConfig } from "plasmo"

// for https://www.furry-paws.com/game/scramble, let's check #fpaw_layout_column_2 for div.text_large.add_margins centered
export const config: PlasmoCSConfig = {
  matches: ["https://www.furry-paws.com/game/scramble"]
}

document.addEventListener("DOMContentLoaded", function () {
  const targetElement = document.querySelector(
    "#fpaw_layout_column_2 .text_large.add_margins"
  )
  if (targetElement) {
    console.log("Element found:", targetElement.textContent?.trim())
  } else {
    console.log("Element not found.")
  }
})
