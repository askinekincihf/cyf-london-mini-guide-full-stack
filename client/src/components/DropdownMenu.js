import React from 'react'

const DropdownMenu = ({ option, setOption }) => {

    const handleOption = (e) => {
        setOption(e.target.value);
    }

    console.log(option)

    return (
        <div className="option mx-5 my-3 d-flex align-items-center">
            <label className="mx-2">Choose a city:</label>
            <select
                className="form-select my-3" aria-label="Default select example"
                onChange={handleOption}
            >
                <option value="harrow">Harrow</option>
                <option value="heathrow">Heathrow</option>
                <option value="stratford">Stratford</option>
            </select>
        </div>
    )
}

export default DropdownMenu
