import React from 'react'
import "./Metricbar.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon  from '@mui/icons-material/ArrowUpward'

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
            <div className="metric">
                <div className="metric-bar__title"># of Contacts</div>
                <div className='metric-bar__container'>
                    <span className="metric-bar__value num_of_contacts">20</span>
                    <span className="metric-bar__value-change">
                        +1 <ArrowUpwardIcon className="metric-bar__icon positive" />
                    </span>

                </div>
            </div>
            <div className="metric">
                <div className="metric-bar__title">Avg Clients Added (per day)</div>
                <div className='metric-bar__container'>
                    <span className="metric-bar__value avg_add_customers">2.55</span>
                    <span className="metric-bar__value-change">
                        -2 <ArrowDownwardIcon className="metric-bar__icon negative" />
                    </span>

                </div>
            </div>

        </div>
    )
}

export default Metricbar
