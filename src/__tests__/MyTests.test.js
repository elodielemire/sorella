import {queryByTestId, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CarePathway from '../Containers/CarePathway/CarePathway';
import Popup from '../Components/Popup/Popup';

test("CarePathway renders successfully", () => {
    render(<CarePathway/>);

    const welcome = screen.getByText(/Suivre ma grossesse/i);

    expect(welcome).toBeInTheDocument();
})

test("CarePathway calculate pregnancy days successfully", async() => {
    const {queryByTestId}  = render(<Popup/>);

    const inputElem = queryByTestId('ovulation-date');
    await userEvent.type(inputElem, '25/01/2024');
    await userEvent.click(screen.getByText(/OK/i))

    render(<CarePathway/>);

    const pregnancyDays = screen.getByText(/119 jours/i);

    expect(pregnancyDays).toBeInTheDocument();
})