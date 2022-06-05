import { render } from "test/utils"

import Home from "./index"

test("renders the main page", () => {
  const { getByText } = render(<Home />)
  const linkElement = getByText(/Documentation/i)
  expect(linkElement).toBeInTheDocument()
})
