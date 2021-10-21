import React, { Fragment, useEffect, useState } from 'react'
import ChartEvolucao from '../../charts/chartevolucao'
import axios from 'axios'
const Evolucao = () => {

    const [grafico, setGrafico] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(process.env.REACT_APP_DATA_GRAFICO);
            setGrafico(data);
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
                    <h1 className="flex-1 py-2 px-4 text-2xl uppercase font-bold text-shadow-md text-white">Evolução de Vendas do Mês</h1>
                </div>

                <div className="p-4 rounded-b-md shadow bg-gray-200">
                    <div className="p-2 bg-white rounded-md shadow">
                        <ChartEvolucao DataJSON={grafico} altura={868}/>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Evolucao
