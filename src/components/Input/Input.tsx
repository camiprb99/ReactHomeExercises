import { FC, useEffect, useState } from "react";
import { StyledInput } from "./styles";
import { useDispatch } from "react-redux";
import { fetchUser } from "../slices/userDataSlice";

interface Props { }

export const Input: FC<Props> = () => {
    const [number, setNumber] = useState('');
    const dispatch = useDispatch<any>();

    useEffect(() => {
        if (number !== '') {
            dispatch(fetchUser(number));
        }
    }, [number])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Check if the input value is a number using a regular expression
        if (/^\d*$/.test(inputValue)) {
            // Update the state with the new input value if it's a number
            setNumber(inputValue);
        } else {
            alert('Please insert numbers only');
        }
    }

    return <StyledInput onChange={handleChange} value={number} />
}
