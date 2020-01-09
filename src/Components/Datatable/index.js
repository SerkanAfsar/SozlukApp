import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button } from 'react-bootstrap';




const DatatablePage = ({ diller, onDelete }) => {

    const data = {
        columns: [
            {
                label: 'Dil Adı',
                field: 'diladi',
                sort: 'asc'

            },
            {
                label: 'Detay',
                field: 'detay',
                sort: 'asc'

            },
            {
                label: 'Sil',
                field: 'sil',
                sort: 'asc'
            },
        ],
        rows: diller.map((item, i) => {
            const response = {
                diladi: "" + item.toLocaleUpperCase() + "",
                detay: <Button className="w-100" variant="primary" >Detay</Button>,
                sil: <Button className="w-100" variant="danger" onClick={() => handleSil(i)} >Sil</Button>
            };
            return response;
        })
    };


    const handleSil = (i) => {
        console.log("Datatables Sayfası Sonuç " + diller);
        onDelete(i);
    }


    return (
        <MDBDataTable
            exportToCSV
            searchLabel="Arama"
            entriesLabel="Gösterim Sayısı"
            paginationLabel={["Önceki", "Sonraki"]}
            infoLabel={["Gösterim", "den", "e", "kadar"]}
            responsive
            striped
            bordered
            hover
            noBottomColumns
            data={data}
        />
    );

}
export default DatatablePage;