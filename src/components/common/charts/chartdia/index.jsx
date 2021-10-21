import React, { Fragment }  from 'react'

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartDia = ({DataJSON, largura, altura, fonte}) => {
    
    const MetaAlcancadaDia2 = DataJSON.map((item) => (item.MetaAlcancadaDia))

    const options = {
        chart: {
            type: 'column',
            width: largura,
            height: altura,
        },
        title: {
            text: null
        },
        yAxis: {
            softMax: 125,
            title: {
                text: null
            },
            labels: {
                format: '{text}%'
            },
        },
        tooltip: {
            pointFormat: "{point.y:.2f}%"
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.2f}%'
                },
            }
        },
        series: [
            {
                showInLegend: false,
                name: "",
                data: [parseFloat(MetaAlcancadaDia2 * 100)],
                color: '#3b82f6',
            }
        ]
    };

    return (
        <Fragment>
            <div className="rounded-md shadow p-1 bg-white" style={{ width: '100%' }}>
            <div className={`text-center uppercase font-semibold text-blue-500 text-${fonte}`}>Vendas</div>
            <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </Fragment>
    )
}

export default ChartDia
