import {useState} from "react";

export default initialState => {
    const [value, setValue] = useState("");
    const [step_1, setStep1] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
    }

    const handleChangeStep1 = e => {
        setStep1(e.target.value)
    }

    const resetInput = () => {
        setValue("");
        setStep1("");
    }

    return [value, step_1, handleChange, handleChangeStep1, resetInput, setValue];
} 