
import React, { useState } from "react";


const Bmi = () => {

    const [age, setAge] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState();
    const [msg, setMsg] = useState();


    const reset = () => {
        setMsg("")
        setAge("")
        setWeight("")
        setHeight("")
        setBmi("")
    }

    const handleCalculations = (e) => {
        e.preventDefault()

        if (weight === 0 || height === 0) {
            alert("Please enter a valid number!!!")
        } else {
            let bmiformula = (weight / (height * height) * 703);
            setBmi(bmiformula.toFixed(2))
        }

        if (bmi < 18.5) {
            setMsg("You are Underweight!!!")
        }

        else if (bmi >= 18.5 || bmi < 25) {
            setMsg("You are Normalweight...")

        }else if(bmi >= 25 || bmi < 30){
            setMsg("You are Overweight!!!")
        }
        else {
            setMsg("You are unhealthy!!!")
        }
    }
    return (

        <div className="app" >
            <div className="container">
                <h1 className="title">BMI  CALCULATOR </h1>
                <form onSubmit={handleCalculations}>

                    <div>
                        <label className="labels">Age:</label>
                        <input className="bmi-input" type="number" placeholder="Age..." value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>

                    <div>
                        <label className="labels">Weight:</label>
                        <input className="bmi-input" type="number" placeholder="Weight in Pounds" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>

                    <div>
                        <label className="labels">Height:</label>
                        <input className="bmi-input" type="number" placeholder="Height in Inches" value={height} onChange={(e) => setHeight(e.target.value)} />
                    </div >


                    <div>
                        <button type='submit' style={{ width: "100px", height: "40px" }} className="btn" variant="outlined"> CALCULATE</button>
                        <button className="btn btn-reset" type="button" onClick={reset} style={{ width: "100px", height: "40px" }}> RESET</button>                   
                        <div className="result">
                            <h3>Your BMI is: {bmi}</h3>
                            <h3> Result:{msg}</h3>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Bmi;
