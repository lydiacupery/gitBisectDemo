import { render } from "test/utils"

import Home from "./index"

test("renders the main page", () => {
  const { getByText } = render(<Home />)
  const welcomeText = getByText(/Welcome to this app!/i)
  expect(welcomeText).toBeInTheDocument()
})
