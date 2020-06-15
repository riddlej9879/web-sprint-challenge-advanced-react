import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<Checkout />)
    getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, findAllByText, getByTestId } = render(<CheckoutForm />);

	fireEvent.change(getByLabelText(/first name/i), {target: { value: 'josh' }});
	fireEvent.change(getByLabelText(/last name/i), {target: { value: 'riddle' }});
	fireEvent.change(getByLabelText(/address/i), {target: { value: 'my address' }});
	fireEvent.change(getByLabelText(/city/i), {target: { value: 'some town' }});
	fireEvent.change(getByLabelText(/state/i), {target: { value: 'Alabama' }});
	fireEvent.change(getByLabelText(/zip/i), { target: { value: '35954' } });

	const checkoutButton = getByTestId('checkoutButton');
	fireEvent.click(checkoutButton);

	findAllByText(/ryan/i);

	expect(getByTestId('successMessage')).toBeInTheDocument();
});
