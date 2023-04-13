import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormComponent from "../components/form";

describe("Form", () => {
  test("renders Form component", () => {
    render(<FormComponent />);
    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Mobile Phone")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Company")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Link us to something")).toBeInTheDocument();
    expect(screen.getByText("I'm interested in learning about")).toBeInTheDocument();
    expect(screen.getByText("Summit Junto")).toBeInTheDocument();
    expect(screen.getByText("Summit Series Events")).toBeInTheDocument();
    expect(screen.getByText("I agree")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("displays error messages when required fields are empty and form is submitted", async () => {
    render(<FormComponent />);
    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(await screen.findByText("First name is required")).toBeInTheDocument();
    expect(await screen.findByText("Last name is required")).toBeInTheDocument();
    expect(await screen.findByText("Mobile phone is required")).toBeInTheDocument();
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(await screen.findByText("Company is required")).toBeInTheDocument();
    expect(await screen.findByText("Title is required")).toBeInTheDocument();
    expect(await screen.findByText("Please select an interest")).toBeInTheDocument();
    expect(await screen.findByText("You must accept the terms")).toBeInTheDocument();
  });

  test("submits form with valid data", async () => {
    const mockSubmit = jest.fn();
    render(<FormComponent onSubmit={mockSubmit} />);

    userEvent.type(screen.getByPlaceholderText("First Name"), "John");
    userEvent.type(screen.getByPlaceholderText("Last Name"), "Doe");
    userEvent.type(screen.getByPlaceholderText("Mobile Phone"), "1234567890");
    userEvent.type(screen.getByPlaceholderText("Email"), "john.doe@example.com");
    userEvent.type(screen.getByPlaceholderText("Company"), "My Company");
    userEvent.type(screen.getByPlaceholderText("Title"), "CEO");
    userEvent.type(screen.getByPlaceholderText("Link us to something"), "https://www.example.com");
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "1" } });
    userEvent.click(screen.getByText("Summit Junto"));
    userEvent.click(screen.getByText("I agree"));

    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(mockSubmit).toHaveBeenCalled();
  });
});
