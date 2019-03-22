import React, { Component } from 'react';
import Banner from './Banner';
import ContentList from './contentList';

class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="content">
                    <Banner />
                    <ContentList/>                  
                    
                    </div>
            </React.Fragment>
        )
    }
}

export default Content;


