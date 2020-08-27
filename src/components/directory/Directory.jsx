import React from 'react'
import MenuItem from '../menuItem/MenuItem';

import './Directory.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://images.unsplash.com/photo-1545289414-1c3cb1c06238?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1510344914706-49ac7003d996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1566803165026-c064b955a20a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="directory-menu">
                    {
                        this.state.sections.map(({id, title, imageUrl, size, linkUrl}) => ( // mapping over the sections data
                            // placing each data into menuItem component
                            <MenuItem 
                                key={id} 
                                title={title}
                                imageUrl={imageUrl}
                                size={size}
                                linkUrl={linkUrl}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Directory;
