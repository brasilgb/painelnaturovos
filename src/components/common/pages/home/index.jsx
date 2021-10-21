import React, { Fragment, useEffect, useState } from 'react'
import Atualizacao from '../../outros/atualizacao'
import axios from 'axios'

const Home = () => {

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

            <section
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="w-8/12 lg:w-6/12 flex-1 h-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-r-full shadow-md border-r-2 border-white">

                <div className="h-full flex flex-col items-center justify-center">
                    <h1 className="text-lg lg:text-6xl font-semibold text-white text-shadow-md uppercase">PROJEÇÃO DE VENDAS</h1>
                    <h1 className="lg:mt-8 text-md lg:text-4xl font-semibold text-white text-shadow-md uppercase">LOJAS SOLAR</h1>
                    <h1 className="flex items-center justify-center mt-2 lg:mt-8 text-xs lg:text-xl font-semibold text-white text-shadow-md uppercase"><span className="mr-2">ATUALIZAÇÃO DE DADOS: </span> <Atualizacao atualizacao={faturamento} /></h1>
                </div>

            </section>

        </Fragment>
    )
}

export default Home
