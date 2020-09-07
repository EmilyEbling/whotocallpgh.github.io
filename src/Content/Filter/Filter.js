import React, { Component } from 'react'
import ReachMultiSelectCheckboxes from 'react-multiselect-checkboxes'


class Filter extends Component {
    constructor() {
        super();
        this.state = { isChecked: false };
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked() {
        this.setState({ isChecked: !this.state.isChecked });
        if(this.state.isChecked)
            console.log("checked")
    }
    render() {

        var options = [
            { label: "Immediate Support" },
            { label: "Limited Hours Call Support" },
            { label: "24 Hour Call Support" },
            { label: "Pittsburgh Specific" },
            { label: "Referral and Resource Hub" },
            { label: "Mobile Unit and Possible Police" },
            { label: "Crisis" },
            { label: "Medical" },
            { label: "Mental Health" },
            { label: "Violence" },
            { label: "Housing" },
            { label: "Harm Reduction" },
            { label: "Houseless" },
            { label: "LGBTQ+" },
            { label: "Families" },
            { label: "Youth" },
            { label: "Elders" },
            { label: "Anyone" }
        ]

        return(
            <div className = "Filter" >
                <ul className="tags">
                    {options.map(option => (
                        <label>
                            <input type="checkbox" onChange={this.handleChecked} />
                            {option.label}
                        </label>
    
                    ))}
                </ul>
            </div>
        )
    }
}

export default Filter;
