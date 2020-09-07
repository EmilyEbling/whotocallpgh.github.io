import React, { Component } from 'react'
import Resource from './Resource/Resource'
import Resources from './ResourceData.js'
import Filter from './Filter/Filter'
import './resource_section.css'

class ResourceSection extends Component {

    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
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

        if(Object.keys(result).length === 0 && this.state.search !== null){
            result = 
            <div>
                No Results Found
            </div>
        }
        
        return (
            <div>
                <div>
                    <input className="search" type="text" placeholder="Search" onChange={(e) => this.searchSpace(e)}></input>
                    <Filter></Filter>
                </div>
                <div>
                     {result}
                </div>
            </div>
        )
    }
}

export default ResourceSection;