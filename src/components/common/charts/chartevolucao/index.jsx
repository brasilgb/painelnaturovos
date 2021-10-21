import React, { Fragment } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const ChartEvolucao = ({DataJSON, altura}) => {

    const diasemana = DataJSON.map((item) => item.DiaSemana)
    const venda = DataJSON.map((item) => parseFloat(item.Venda))
    const meta = DataJSON.map((item) => parseFloat(item.Meta))

    Highcharts.setOptions({
        lang: {
          decimalPoint: ',',
          thousandsSep: '.'
        }
    });
    
    const options = {
        chart: {
            marginLeft: 80,
            marginRight: 35,
            marginTop: 30,
            height: altura,
        },
        title: {
            text: ''
        },
        xAxis: [{
            categories: diasemana,
            crosshair: true
        }],

        yAxis: [{

            title: {
                text: ""
            },
            labels: {
                format: '{value}'
            }
        }, {
            title: {
                enabled: false,
            },
            labels: {
                enabled: false
            },

        },
        ],
        tooltip: {
            noTooltip: true,
            valuePrefix: "R$ ",
            valueDecimals: 2,
            shared: true,
        },

        series: [
            {
                type: 'column',
                yAxis: 1,
                name: "Dia da Semana",
                data: venda,
                color: '#3b82f6',
                dataLabels: {
                    enabled: true,
                    valueDecimals: 2,
                    
                },
            }, {
                type: 'spline',
                name: "Meta",
                data: meta,
                color: '#09bb21',
                dataLabels: {
                    enabled: false,
                    format: 'R$ {point.y:.2f}'
                },
            }
        ]
    };
    return (
        <Fragment>
                    <HighchartsReact highcharts={Highcharts} options={options} />
        </Fragment>
    )
}

export default ChartEvolucao