import React, { Fragment } from 'react'

import Highcharts from 'highcharts'
import Highcharts2 from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const ChartAno = ({DataJSON, larguraA, larguraB, altura, fonte }) => {
    

    const alcancadoano = DataJSON.map((item) => (item.VendaAlcancadaAno))

    const options = {
        chart: {
            type: 'column',
            width: larguraA,
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
                }
            }
        },
        series: [
            {
                showInLegend: false,
                name: "Meta",
                data: [parseFloat(alcancadoano * 100)],
                color: '#3b82f6',
            }
        ]
    };
    const options2 = {
        chart: {
            type: 'column',
            width: larguraB,
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
                enabled: false
            }
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
                }
            }
        },
        series: [
            {
                showInLegend: false,
                name: "Venda",
                data: [parseFloat(1 * 100)],
                color: '#047857'
            }
        ]
    };

    return (
        <Fragment>
            <div className="flex shadow">
                <div className="mr-0 rounded-l-md p-1 bg-white border-r" style={{ width: '60%' }}>
                    <div className={`text-center uppercase font-semibold text-blue-500 text-${fonte}`}>Vendas</div>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
                <div className="rounded-r-md p-1 bg-white" style={{ width: '40%' }}>
                    <div className={`text-center uppercase font-semibold text-green-700 text-${fonte}`}>Meta Acum.</div>
                    <HighchartsReact highcharts={Highcharts2} options={options2} />
                </div>
            </div>
        </Fragment>
    )
}

export default ChartAno
