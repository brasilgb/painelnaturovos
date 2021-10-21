import React, { Fragment } from 'react'

const KpiVendaAno = ({DataJSON, fontA, fontB, heigth}) => {

    return (
        <Fragment>
            {DataJSON.map((fat, index) => (
                <div key={index} className="ml-1">
                    <div className="mb-2 p-2 bg-white rounded-md shadow">
                        <h1 className={`text-${fontA} text-gray-600 uppercase font-bold border-b`}>Meta:</h1>
                        <div className={`text-${fontB} py-${heigth} font-bold text-green-700 text-right text-shadow`} style={{fontSize: fontB}}>
                            {fat.MetaAcumuladaAno}
                        </div>
                    </div>
                    <div className="mb-2 p-2 bg-white rounded-md shadow">
                        <h1 className={`text-${fontA} text-gray-600 uppercase font-bold border-b`}>Vendas:</h1>
                        <div className={`text-${fontB} py-${heigth} font-bold text-blue-500 text-right text-shadow`} style={{fontSize: fontB}}>
                            {fat.VendaAno}
                        </div>
                    </div>
                    <div className="mb-2 p-2 bg-white rounded-md shadow">
                        <h1 className={`text-${fontA} text-gray-600 uppercase font-bold border-b`}>Performance:</h1>
                        <div className={`text-${fontB} py-${heigth} font-bold text-red-500 text-right text-shadow`} style={{fontSize: fontB}}>
                            {(fat.PerformanceAno * 100).toFixed(2).replace(".", ",")}%
                        </div>
                    </div>
                    <div className="p-2 bg-white rounded-md shadow">
                        <h1 className={`text-${fontA} text-gray-600 uppercase font-bold border-b`}>Diferença:</h1>
                        <div className={`text-${fontB} py-${heigth} font-bold text-red-500 text-right text-shadow`} style={{fontSize: fontB}}>
                            {fat.DiferencaAno}
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default KpiVendaAno
