import React, { useState, useEffect } from "react";
import cars_data from "../Data/cars_data";
import Slider from '@mui/material/Slider';

import "./calculate.css";

export default function Calculate() {
    const [carPrice, setCarPrice] = useState(cars_data[0].price);
    const [downPayment, setDownPayment] = useState(0);
    const [loanPeriod, setLoanPeriod] = useState(1);
    const [interestRate, setInterestRate] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const marks = [
        {
            value: 1,
            label: '1 Year',
        },
        {
            value: 2,
            label: '2 Years',
        },
        {
            value: 3,
            label: '3 Years',
        },
        {
            value: 4,
            label: '4 Years',
        },
        {
            value: 5,
            label: '5 Years',
        },
    ];
    useEffect(() => {
        calculatePayment();
    }, [carPrice, downPayment, loanPeriod, interestRate]);

    const calculatePayment = () => {

        
        const principal = Math.max(carPrice - downPayment, 0);
        const monthlyInterestRate = interestRate / 100 / 12;
        const numberOfPayments = loanPeriod * 12;
        if (isNaN(principal)) {
            setDownPayment(0);
            return;
        }

        if (isNaN(interestRate)) {
            setInterestRate(0);
            return;
        }

        if(downPayment < 0){
            setDownPayment(0);
        }

        if(interestRate < 0){
            setInterestRate(0);
        }


        if (interestRate === 0) {
            const monthly = principal / numberOfPayments;
            setMonthlyPayment(monthly);
            setTotalPayment(monthly * numberOfPayments);
            setTotalInterest(0);
        } else {
            const monthly = (principal * monthlyInterestRate) /
                (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
            setMonthlyPayment(monthly);
            setTotalPayment(monthly * numberOfPayments);
            setTotalInterest(monthly * numberOfPayments - principal);
        }
    };

    return (
        <div className="calculate">
            <div className="cal">
                <h2>Benz Finance Calculator</h2>
                <p>Calculate your monthly car repayments as well as total payment and total interest based on vehicle price.</p>

                <form className="form">
                    <label>Select vehicle:</label>
                    <select name="cars" id="cars" onChange={(e) => setCarPrice(parseInt(e.target.value))}>
                        {cars_data.map((car, index) => (
                            <option key={index} value={car.price}>{car.name}</option>
                        ))}
                    </select>
                    <div className="input">
                        <div className="dp">
                            <label>Down Payment:</label>
                            <input type="number" name="down-payment" onChange={(e) => setDownPayment(parseInt(e.target.value),0)} min={0}/>
                        </div>
                        <br />
                        <div className="lp">
                            <label>Interest Rate:</label>
                            <input type="number" name="interest-rate" onChange={(e) => setInterestRate(parseFloat(e.target.value),0)} min={0} />
                        </div>
                    </div>
                    <br />
                    <label>Loan Period:</label>
                    <br />
                    <Slider className="slide" aria-label="Always visible" defaultValue={1} step={1} marks={marks} min={1} max={5} onChange={(e, value) => setLoanPeriod(value)} />
                    <br />
                    <div className="Cards">
                        <div className="card">
                            <label className="head">Monthly Payment:</label>
                            <label className="price">${monthlyPayment.toFixed(1)}</label>
                        </div>
                        <div className="card">
                            <label className="head">Remaining Payment:</label>
                            <label className="price">${totalPayment.toFixed(0)}</label>
                        </div>
                        <div className="card">
                            <label className="head">Total Interest:</label>
                            <label className="price">${totalInterest.toFixed(0)}</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

