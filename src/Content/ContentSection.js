import React, { Component } from 'react'
import data from './content.json'
import Content from './Content'

class ContentSection extends Component {
    render() {
        return (
            <div>
               {data.map((contentData) => {
                   return (
                        <div key={contentData.name}>
                            <Content 
                            name={contentData.name}
                            phone_link={contentData.phone_link}
                            formated_phone={contentData.formated_phone}
                            website={contentData.website}
                            description={contentData.description}
                            tags={contentData.tags}>
                            </Content>
                        </div>
                   );
               })}
            </div>
        )
    }
}

export default ContentSection;