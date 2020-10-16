import React from "react";
import renderer from "react-test-renderer";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Contributor from "../components/Contributor";

describe("Contributor", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render a user__login contributor", () => {
    const fakeContributor = { login: "Bombasto" };

    act(() => {
      render(<Contributor user={fakeContributor} />, container);
    });

    expect(
      container.querySelector('[data-testid="user__login"]').textContent
    ).toBe(fakeContributor.login);
  });

  it("should render a avatar__image contributor", () => {
    const fakeContributor = { avatar_url: "http://tour-of-heroes/" };

    act(() => {
      render(<Contributor user={fakeContributor} />, container);
    });

    expect(container.querySelector('[data-testid="avatar_url"]').src).toBe(
      fakeContributor.avatar_url
    );
  });

  it("should render a number of contributor user", () => {
    const fakeContributor = { contributions: 1 };

    act(() => {
      render(<Contributor user={fakeContributor} />, container);
    });

    expect(
      container.querySelector('[data-testid="contributions"]').textContent
    ).toBe(`Number of contributions: ${fakeContributor.contributions}`);
  });

  it("should render a link linked with the corresponding profile user", () => {
    const fakeContributor = { html_url: "http://localhost/www.github/" };

    act(() => {
      render(<Contributor user={fakeContributor} />, container);
    });

    expect(container.querySelector('[data-testid="html_url"]').href).toBe(
      fakeContributor.html_url
    );
  });

  it("should match Contributor component", () => {
    const fakeContributor = { login: "Bombasto", id: 14 };
    const contributorTree = renderer.create(
      <Contributor user={fakeContributor} key={fakeContributor.id} />
    );

    expect(contributorTree).toMatchSnapshot();
  });
});
