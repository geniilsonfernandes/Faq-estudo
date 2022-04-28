import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Question from "./index";

const mock = {
  id: 0,
  ask: "ask 1",
  answer: "answer 1",
};

describe("<Question />", () => {
  it("dever renderizar o componente corretamente com a ask na tela", () => {
    render(<Question answer={mock.answer} ask={mock.ask} />);

    const ask = screen.getByRole("heading", { name: mock.ask });

    expect(ask).toHaveTextContent(mock.ask);
  });

  it("dever mostrar a answer depois de clicado", () => {
    render(<Question answer={mock.answer} ask={mock.ask} />);
    const ask = screen.getByText(mock.ask);

    fireEvent.click(ask);

    const answer = screen.getByText(mock.answer);
    expect(answer).toHaveTextContent(mock.answer);
  });

  it("dever oculta a answer depois de clicado duas vezes", () => {
    render(<Question answer={mock.answer} ask={mock.ask} />);
    const ask = screen.getByText(mock.ask);

    fireEvent.click(ask);
    fireEvent.click(ask);

    const answer = screen.queryByText(mock.answer);
    expect(answer).not.toBeInTheDocument();
  });
});
