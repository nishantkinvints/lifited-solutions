import React from 'react'

const Innerbanner = (props) => {
    return (
        <div className="common_inner_page_banner_section book_banner_section">
            <div className="common_inner_page_logo">
                <h1>{props.title} BOOK EXCHANGE</h1>
            </div>
        </div>
    )
}

export default Innerbanner
