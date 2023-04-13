/**
 * Jest unit tests for the Form component.
 */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormComponent from "../components/form";
import '@testing-library/jest-dom';

// We test the form component by checking if the form fields are rendered
/**
 * NOTE: Hard-coded values are definitely a bad idea they must be constants imported from the form.
 * But for simplicity of the example we do it like that
 */
describe("Form", () => {
  test("renders Form component", () => {
    render(<FormComponent />);
    expect(screen.getByPlaceholderText("First Name*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last Name*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Mobile Phone*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Company*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Title*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Link us to something that tells us about you (Linkedin, personal website, company project, etc.)")).toBeInTheDocument();
    expect(screen.getByText("I'm interested in learning about")).toBeInTheDocument();
    expect(screen.getByText("Summit Junto")).toBeInTheDocument();
    expect(screen.getByText("Summit Series Events")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  // TODO: replace hard-coded values with constants
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

  // TODO: replace hard-coded values with constants
  test("submits form with valid data", async () => {
    const mockSubmit = jest.fn();
    render(<FormComponent onSubmit={mockSubmit} />);

    await userEvent.type(screen.getByPlaceholderText("First Name*"), "John");
    await userEvent.type(screen.getByPlaceholderText("Last Name*"), "Doe");
    await userEvent.type(screen.getByPlaceholderText("Mobile Phone*"), "1234567890");
    await userEvent.type(screen.getByPlaceholderText("Email*"), "john.doe@example.com");
    await userEvent.type(screen.getByPlaceholderText("Company*"), "My Company");
    await userEvent.type(screen.getByPlaceholderText("Title*"), "CEO");
    await userEvent.type(screen.getByPlaceholderText("Link us to something that tells us about you (Linkedin, personal website, company project, etc.)"), "https://www.example.com");
    await userEvent.selectOptions(screen.getByRole("combobox"), "1");
    await userEvent.click(screen.getByText("Summit Junto"));
    await userEvent.click(screen.getByText("Summit Series Events"));
    await userEvent.click(screen.getByTestId("agree"));

    await userEvent.click(screen.getByTestId("submitButton"));

    await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
  });
});
