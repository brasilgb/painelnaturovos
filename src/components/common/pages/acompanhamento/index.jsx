import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import ChartDia from '../../charts/chartdia'
import KpiVendaDia from '../../kpi/kpivendadia'
import ChartMes from '../../charts/chartmes'
import KpiVendaMes from '../../kpi/kpivendames'
import ChartAno from '../../charts/chartano'
import KpiVendaAno from '../../kpi/kpivendaano'
import ChartEvolucao from '../../charts/chartevolucao'

const Acompanhamento = () => {

    const [grafico, setGrafico] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(process.env.REACT_APP_DATA_GRAFICO);
            setGrafico(data);
        }
        fetchData();
    }, []);

    const [faturamento, setFaturamento] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(process.env.REACT_APP_DATA_FATURAMENTO);
            setFaturamento(data);
        }
        fetchData();
    }, []);

    return (
        <Fragment>

            <div data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="mx-4 py-4"
            >
                <div className="flex gap-4">
                    <div style={{ width: '30%' }}>
                        <div className="bg-solar-blue-200 rounded-t-md">
                            <h1 className="flex items-center py-2 px-4 text-2xl uppercase font-bold text-shadow-md text-white">Vendas do dia: {faturamento.map((fat, index) => fat.Dia)}</h1>
                        </div>
                        <div className="flex items-start justify-left rounded-b-md shadow bg-gray-200 w-full p-2">
                            <div className="w-44 pr-1">
                                <ChartDia DataJSON={faturamento} larguraA={'130'} altura={432} fonte={'sm'} />
                            </div>
                            <div className="w-full">
                                <KpiVendaDia DataJSON={faturamento} fontA={'lg'} fontB={'2rem'} heigth={'2'} />
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '35%' }}>
                        <div className="bg-solar-blue-200 rounded-t-md">
                            <h1 className="flex items-center p-2 text-2xl uppercase font-bold text-shadow-md text-white">Vendas do Mês: {faturamento.map((fat, index) => fat.Mes)}</h1>
                        </div>
                        <div className="flex items-start justify-left rounded-b-md shadow bg-gray-200 w-full p-2">
                            <div className="w-60 pr-1">
                                <ChartMes DataJSON={faturamento} larguraA={'130'} larguraB={'90'} altura={432} fonte={'sm'} />
                            </div>
                            <div className="w-full">
                                <KpiVendaMes DataJSON={faturamento} fontA={'lg'} fontB={'2rem'} heigth={'2'} />
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '35%' }}>
                        <div className="bg-solar-blue-200 rounded-t-md flex items-center">
                            <h1 className="flex items-center p-2 text-2xl uppercase font-bold text-shadow-md text-white">Vendas do Ano: {faturamento.map((fat, index) => fat.Ano)}</h1>
                        </div>

                        <div className="flex items-start justify-left rounded-b-md shadow bg-gray-200 w-full p-2">
                            <div className="w-60 pr-1">
                                <ChartAno DataJSON={faturamento} larguraA={'130'} larguraB={'90'} altura={432} fonte={'sm'} />
                            </div>
                            <div className="w-full">
                                <KpiVendaAno DataJSON={faturamento} fontA={'lg'} fontB={'2rem'} heigth={'2'} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-4 p-2 bg-gray-200 rounded-md">
                    <ChartEvolucao DataJSON={grafico} altura={408} />
                </div>
            </div>

        </Fragment>
    )
}

export default Acompanhamento
