import React from 'react'
import "./Metricbar.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


function Metricbar() {
    return (
        <div className='metric-bar'>
            <div className="metric">
                <div className="metric-bar__title"># of Notes</div>
                <div className='metric-bar__container'>
                    <span className="metric-bar__value">240</span>
                    <span className="metric-bar__value-change">
                        -11.4 <ArrowDownwardIcon className="metric-bar__icon negative" />
                    </span>

                </div>
            </div>

        </div>
    )
}

export default Metricbar