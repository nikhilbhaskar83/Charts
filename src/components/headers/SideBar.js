import React from 'react';
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div className="sidebar">
            <ul>

                <li><Link to="/chart1">Chart1</Link></li>
                <li><Link to="/chart2">Chart2</Link></li>
                <li><Link to="/chart3">Chart3</Link></li>
                <li><Link to="/chart4">Chart4</Link></li>

            </ul>
        </div>

    )

}
export default SideBar
