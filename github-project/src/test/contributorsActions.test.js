import React from "react";
import { render, screen } from "@testing-library/react";
import { loadContributors } from "../logic/contributorsActions";

describe("contributorsActions", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));

  xit("should call an api", async () => {
    const dataRepo = {
      ownerName: "SkylabCoders",
      repoName: "skylab-bootcamp-202007",
    };

    const fakeData = [
      { login: "Celeritas", id: 14 },
      { login: "Bombasto", id: 13 },
    ];

    const response = {
      json: () => {
        fakeData;
      },
    };

    window.fetch.mockReturnValue(
      new Promise((resolve) => resolve({ fakeData }))
    );

    const apiCall = await loadContributors({ dataRepo });

    expect(apiCall).toHaveBeenCalledWith(
      `https://api.github.com/repos/${dataRepo.ownerName}/${dataRepo.repoName}/contributors`
    );
  });
});
