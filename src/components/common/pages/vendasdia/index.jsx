import React, { Fragment, useEffect, useState } from 'react'
import KpiVendaDia from '../../kpi/kpivendadia'
import ChartDia from '../../charts/chartdia'
import axios from 'axios';
const VendasDia = () => {

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
                className="mx-4 my-4">

                <div className="bg-solar-blue-200 rounded-t-md flex items-center">
                    <h1 className="flex-1 py-2 px-4 text-2xl uppercase font-bold text-shadow-md text-white">Vendas do dia: {faturamento.map((fat, index) => fat.Dia)}</h1>
                </div>

                <div className="grid grid-cols-3 gap-2 p-3 rounded-b-md shadow bg-gray-200">
                    <div className="">
                        <ChartDia DataJSON={faturamento} largura={520} altura={856} fonte={'xl'} />
                    </div>
                    <div className="col-span-2">
                        <KpiVendaDia DataJSON={faturamento} fontA={'4xl'} fontB={'6rem'} heigth={'2'} />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default VendasDia