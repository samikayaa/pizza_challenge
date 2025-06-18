


export default function CheckBox(
    {
        changeFn,
        isChecked,
        fieldName,
        value
    }
) {

    return (

        <label className="label-radioToppings">
            <input
                /*
                type="checkbox"
                onChange={handleChange}
                checked={formData.toppings.includes}
                name="toppings"
                value="Pepperoni"
                */
                type="checkbox"
                onChange={changeFn}
                checked={isChecked}
                name={fieldName}
                value={value}
            />{' '}
            {value}
        </label>

    )
}