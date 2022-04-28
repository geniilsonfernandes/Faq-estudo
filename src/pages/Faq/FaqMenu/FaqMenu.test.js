import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FaqMenu from "./index";

const dataMock = [
  {
    id: 0,
    subject: "sub0",
    quenstios: [
      {
        id: 0,
        ask: "ask 0",
        answer: "answer 0",
      },
    ],
  },
  {
    id: 1,
    subject: "sub1",
    quenstios: [
      {
        id: 1,
        ask: "ask 1",
        answer: "answer 1",
      },
    ],
  },
];

let mockIsMatch = true;

jest.mock("../../../hooks/useMedia", () => {
  return jest.fn(() => ({
    match: mockIsMatch,
  }));
});

describe("<FaqMenu  />", () => {
  it("dever renderizar o componente em formato desktop", () => {
    render(<FaqMenu data={dataMock} />);
    const mMenu = screen.getByTestId("desktop");
  });
});
