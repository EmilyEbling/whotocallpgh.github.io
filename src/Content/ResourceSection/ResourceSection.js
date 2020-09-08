import React, { Component } from 'react'
import Resource from '../Resource/Resource'
import Resources from '../Data/ResourceData'
import groupedOptions from '../Data/FilterLabels'
import Select from 'react-select'
import './resource_section.css'

class ResourceSection extends Component {

    constructor() {
        super();
        this.state = {
            search: '',
            selectedOption: null
        };
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        var result = Resources.filter((data) => {
            if (this.state.search == null)
                return data
            else if (data.description.toLowerCase().includes(this.state.search.toLowerCase())
                || data.name.toLowerCase().includes(this.state.search.toLowerCase())
                || data.tags.some(tag => tag.toLowerCase().includes(this.state.search.toLowerCase()))) {
                return data
            }
        }).map(data => {
            return (
                <div key={data.name}>
                    <Resource
                        name={data.name}
                        phone_link={data.phone_link}
                        formatted_phone={data.formatted_phone}
                        website={data.website}
                        description={data.description}
                        tags={data.tags}>
                    </Resource>
                </div>
            )
        })

        if (Object.keys(result).length === 0 && this.state.search !== null) {
            result = <h3>No Results Found</h3>
        }

        return (
            <div>
                <div>
                    <input className="search" type="text" placeholder="Search" onChange={(e) => this.searchSpace(e)}></input>
                    <div className="Filter" >
                        <Select
                            className="select"
                            onChange={this.handleChange}
                            closeMenuOnSelect={false}
                            options={groupedOptions}
                            isMulti>
                        </Select>
                    </div>
                </div>
                <div>
                    {result}
                </div>
            </div>
        )
    }
}

export default ResourceSection;