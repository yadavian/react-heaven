import React, { useEffect, useState } from 'react';

const FormValidationPage = () => {

    const initialValues = {
        name: "",
        email: "",
        password: "",
        country: "select country",
        gender: "male",
        agree: false
    }

    const [formData, setformData] = useState(initialValues)
    const [formErrors, FormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name } = e.target;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setformData({ ...formData, [name]: value })
        console.log(formData)
        setIsSubmit(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        FormErrors(validate(formData))
    }

    const validate = (values) => {
        console.log(values)
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const errors = {};
        if (!values.name) {
            errors.name = "name required."
        }

        if (!values.email) {
            errors.email = "email required."
        } else if (!regex.test(values.email)) {
            errors.email = "Please enter correct format."
        }

        if (!values.password) {
            errors.password = "password required"
        } else if (values.password.length < 4) {
            errors.password = "password should be greater than 4."
        } else if (values.password.length > 10) {
            errors.password = "password should be less than 10."
        }

        if (values.country == "select country") {
            errors.country = "country required."
        }

        if (values.agree == false) {
            errors.agree = "agree required."
        }

        return errors;
    }

    // useEffect(() => {
    //     console.log(formErrors)
    //     if (Object.keys(formErrors).length == 0 && isSubmit) {
    //         // console.log(formData)
    //     }
    // }, [formErrors])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{JSON.stringify(formData)}</h1>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <p>{formErrors.name}</p>
                <br />

                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                <p>{formErrors.email}</p>
                <br />

                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <p>{formErrors.password}</p>
                <br />

                <select name="country" onChange={handleChange} value={formData.country}>
                    <option value="select country">select country</option>
                    <option value="India">India</option>
                    <option value="Russia">Russia</option>
                </select>
                <p>{formErrors.country}</p>
                <br />

                <div>
                    Gender :
                    <label>
                        Male
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Female
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <p>{formErrors.gender}</p>
                <br />


                <label>
                    Agree
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                    />
                </label>
                <p>{formErrors.agree}</p>
                <br />

                <button type='submit'>submit</button>
            </form>
        </div>
    );
}

export default FormValidationPage