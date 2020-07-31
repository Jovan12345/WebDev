import React from 'react';

import { Link } from 'react-router-dom';

class returnYears extends React.Component {
    renderYears() {
        let arr = [];
        for (let year = 2005; year <= 2018; year++) {
            arr.push(year)
        };

        return arr.map(year => {
            return (
                <div className="yearList" key={year}>
                    <Link to={`winners/${year}`} className='yearListItem'>
                        {year}
                    </Link>
                </div>
            )
        })
    };

    render() {
        return (

            <div>
                <h3>Select season winners</h3>
                {this.renderYears()}
            </div>
        )
    }
}


export default returnYears;