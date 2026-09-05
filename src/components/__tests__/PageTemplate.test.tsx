import * as React from "react"
import { render, screen } from "@testing-library/react"
import PageTemplate from "../PageTemplate"

describe("PageTemplate", () => {
  it("renders page title and content", () => {
    render(
      <PageTemplate pageTitle="Test Animal">
        <p>This is test content.</p>
      </PageTemplate>
    )

    expect(screen.getByText("Test Animal")).toBeInTheDocument()
    expect(screen.getByText("This is test content.")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /navigate back to home page/i })).toBeInTheDocument()
  })

  it("renders fun fact when provided", () => {
    render(
      <PageTemplate pageTitle="Test Animal" funFact="Fun fact about test animal">
        <p>This is test content.</p>
      </PageTemplate>
    )

    expect(screen.getByText("Fun fact about test animal")).toBeInTheDocument()
  })

  it("does not render fun fact container when not provided", () => {
    render(
      <PageTemplate pageTitle="Test Animal">
        <p>This is test content.</p>
      </PageTemplate>
    )

    expect(screen.queryByText(/fun fact/i)).not.toBeInTheDocument()
  })
})
