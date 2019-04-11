import expect from "expect"
import React from "react"
import { render, unmountComponentAtNode } from "react-dom"

import FeedbackForm from "src/"

describe("FeedbackForm", () => {
  let node

  beforeEach(() => {
    node = document.createElement("div")
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  //   it("displays a welcome message", () => {
  //     render(<FeedbackForm />, node, () => {
  //       expect(node.innerHTML).toContain("Welcome to React components")
  //     })
  //   })
})
