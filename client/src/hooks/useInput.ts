import {ChangeEventHandler, useState} from "react";

export const useInput = ({initialValue = ""} = {}) => {
    const [value, setValue] = useState(initialValue);
    const handleChange: ChangeEventHandler<HTMLInputElement> = ({target}) => setValue(target.value);
    return {
        value,
        handleChange
    }
}
