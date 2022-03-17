import React, { useEffect, useState } from 'react'
import "./Metricbar.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import axios from 'axios';

function Metricbar() {
    const [metrics, setMetrics] = useState([]);

    useEffect(async () => {
        let result = await axios.get("http://localhost:3000/stats/get_metric_stats");
        setMetrics(result?.data);
    }, []);



    return (
        <div className='metric-bar'>
            <div className="metric">
                <div className="metric-bar__title"># of Notes</div>
                <div className='metric-bar__container'>
                    <span className="metric-bar__value">
                        {
                            parseFloat(metrics.num_notes) < 0 ? metrics.num_notes : "+" + metrics.num_notes
                        }

                    </span>
                    <span className="metric-bar__value-change">
                        {
                            parseFloat(metrics.notes_delta) < 0 ?
                                <ArrowDownwardIcon className='metric-bar__icon negative' /> :
                                <ArrowUpwardIcon className='metric-bar__icon positive' />
                        }

                        {
                            parseFloat(metrics.notes_delta) < 0 ? metrics.notes_delta : "+" + metrics.notes_delta
                        }

                    </span>

                </div>
            </div>
            <div className="metric">
                <div className="metric-bar__title"># of Contacts</div>
                <div className='metric-bar__container'>
                    <span className="metric-bar__value">
                        {
                            parseFloat(metrics.num_customers) < 0 ? metrics.num_customers : "+" + metrics.num_customers
                        }

                    </span>
                    <span className="metric-bar__value-change">
                        {
                            parseFloat(metrics.customers_delta) < 0 ?
                                <ArrowDownwardIcon className='metric-bar__icon negative' /> :
                                <ArrowUpwardIcon className='metric-bar__icon positive' />
                        }

                        {
                            parseFloat(metrics.customer_delta) < 0 ? metrics.customer_delta : "+" + metrics.customer_delta
                        }

                    </span>

                </div>
            </div>
            <div className="metric">
                <div className="metric-bar__title">Avg Clients Added YTD</div>
                <div className='metric-bar__container'>
                    <span className="metric-bar__value">
                        {
                            parseFloat(metrics.num_customers) < 0 ? metrics.num_customers : "+" + metrics.num_customers
                        }

                    </span>
                    <span className="metric-bar__value-change">
                        {
                            parseFloat(metrics.customers_delta) < 0 ?
                                <ArrowDownwardIcon className='metric-bar__icon negative' /> :
                                <ArrowUpwardIcon className='metric-bar__icon positive' />
                        }

                        {
                            parseFloat(metrics.customer_delta) < 0 ? metrics.customer_delta : "+" + metrics.customer_delta
                        }

                    </span>
                </div>
            </div>

        </div>
    )
}

export default Metricbar
