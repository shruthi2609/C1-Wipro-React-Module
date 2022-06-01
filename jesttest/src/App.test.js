import { render,screen } from "@testing-library/react";
import App from "./App";
import UserEvent from "@testing-library/user-event"
/*test("check the app is rendered or not",()=>{
  render(<App></App>)
})
test("check tagline",()=>{
  render(<App></App>)
  expect(screen.getByText(/Hello /)).toBeInTheDocument()
})*/
beforeAll(()=>console.log("test has started ...."))
afterAll(()=>console.log("test has ended ...."))
test("rendered or not",()=>{
  render(<App></App>)
  const counter=screen.getByTestId("counter")
  const incrementButton=screen.getByText("+")
  UserEvent.click(incrementButton)
  UserEvent.click(incrementButton)
  UserEvent.click(incrementButton)
  UserEvent.click(incrementButton)
  expect(counter.textContent).toEqual("4")
})
