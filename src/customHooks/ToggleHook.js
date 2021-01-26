import {useState} from 'react'

export default ToggleHook => {
    const [toggle, setToggle] = useState(false);

    const handleToggleState = () => {
        setToggle(!toggle);
    }
    return [toggle, handleToggleState]
}