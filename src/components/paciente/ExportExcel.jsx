import React from 'react';
import { SiMicrosoftexcel } from "react-icons/si";
import * as XLSX from 'xlsx';

const ExportExcel = ({ data, fileName }) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = () => {
        const newData = data.map(item => ({
            'Nombre Completo': item.nombres + ' ' + item.apellidos,
            'Identificación': item.tipo_documento + ' ' + item.documento,
            'Fecha de Nacimiento': item.fecha_nacimiento,
            'Genero': item.genero,
            'Departamento': item.departamento,
            'Ciudad': item.ciudad,
        }));
        const ws = XLSX.utils.json_to_sheet(newData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const dataBlob = new Blob([excelBuffer], { type: fileType });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.setAttribute('download', fileName + fileExtension);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    };

    return (
        <button className='inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-e-lg bg-green-500 border border-green-500 hover:bg-white hover:text-green-500 focus:z-10 focus:ring-2' onClick={exportToCSV}>
            <SiMicrosoftexcel className="w-6 h-6 mr-1" /> Generar Reporte
        </button>
    );
};

export default ExportExcel;
