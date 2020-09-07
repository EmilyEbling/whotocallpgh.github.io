import React from 'react'
import ReachMultiSelectCheckboxes from 'react-multiselect-checkboxes'

const filter = (props) => {
    const options = [
        {label: "Immediate Support"},
        {label: "Limited Hours Call Support"},
        {label: "24 Hour Call Support"},
        {label: "Pittsburgh Specific"},
        {label: "Referral and Resource Hub"},
        {label: "Mobile Unit and Possible Police"},
        {label: "Crisis"},
        {label: "Medical"},
        {label: "Mental Health"},
        {label: "Violence"},
        {label: "Housing"},
        {label: "Harm Reduction"},
        {label: "Houseless"},
        {label: "LGBTQ+"},
        {label: "Families"},
        {label: "Youth"},
        {label: "Elders"},
        {label: "Anyone"}
    ]
    return (
        <div className="Filter">
            <ul className="tags">
                {options.map(option => (
                    <label>
                        <input type="checkbox"/>
                        {option.label}
                    </label>
                    
                ))}
            </ul>
            
        </div>
    )
}

export default filter;