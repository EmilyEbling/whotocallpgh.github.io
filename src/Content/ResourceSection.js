import React, { Component } from 'react'
import Resource from './Resource/Resource'
import Resources from './ResourceData.js'
import './resource_section.css'

class ContentSection extends Component {

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
        var test = Resources.filter((data) => {
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

        return (
            <div>
                <div>
                    <input className="search" type="text" placeholder="Search" onChange={(e) => this.searchSpace(e)}></input>
                </div>
                <div>
                    {test}
                </div>
            </div>
        )
    }
}

export default ContentSection;