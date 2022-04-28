import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FaqAccordion from "./index";

const mock = [
  {
    id: 0,
    ask: "ask 1",
    answer: "answer 1",
  },
  {
    id: 1,
    ask: "ask 2",
    answer: "answer 3",
  },
];

describe("<FaqAccordion />", () => {
  it("dever renderizar o componente corretamente  na tela", () => {
    render(<FaqAccordion data={mock} />);

    const ask0 = screen.getByRole("heading", { name: mock[0].ask });
    const ask1 = screen.getByRole("heading", { name: mock[1].ask });

    expect(ask0).toHaveTextContent(mock[0].ask);
    expect(ask1).toHaveTextContent(mock[1].ask);
  });

  it("dever mostrar a answer[0] depois de clicado", () => {
    render(<FaqAccordion data={mock} />);
    const ask0 = screen.getByRole("heading", { name: mock[0].ask });

    fireEvent.click(ask0);

    const answer = screen.getByText(mock[0].answer);

    expect(answer).toHaveTextContent(mock[0].answer);
  });
});
