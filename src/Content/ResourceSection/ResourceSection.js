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
            selectedOption: {}
        };
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        //console.log(`Option selected: ${selectedOption}`);
    }

    filtering() {
        console.log(`num of checks: ${JSON.stringify(this.state.selectedOption.length)}`);
        console.log(Object.entries(this.state.selectedOption).length);

        if (this.state.selectedOption == null || Object.entries(this.state.selectedOption).length === 0) {
            console.log(`empty`);
            return Resources;
        }

        //console.log(`${Object.entries(this.state.selectedOption)}`);

        console.log(`filter: ${JSON.stringify(Object(this.state.selectedOption.value))}`);
        console.log(`filter includes Immediate: ${this.state.selectedOption.value === "Immediate"}`);

        var filtered = Resources.filter(data =>
            data.tags.some(tag => this.state.selectedOption.value === tag)).map(data => {
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

        console.log(Object.entries(filtered).length);
        return filtered;
    }

    search(filtered) {
        //console.log(filtered)
        var result = Resources.filter((data) => {
            if (data.description.toLowerCase().includes(this.state.search.toLowerCase())
                || data.name.toLowerCase().includes(this.state.search.toLowerCase())
                || data.tags.some(tag => tag.toLowerCase().includes(this.state.search.toLowerCase()))
            ) {
                return data;
            }
            else if (this.state.search == null)
                return data;
            else
                return null;

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

        return result
    }

    render() {

        var x = this.filtering()
        console.log(`fek: ${x}`)

        let display = this.search(Object.entries(x));

        if (Object.keys(display).length === 0 && this.state.search !== null) {
            display = <h3>No Results Found</h3>
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
                    {display}
                </div>
            </div>
        )
    }
}

export default ResourceSection;