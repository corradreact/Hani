import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { Rating } from 'primereact/rating';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { classNames } from 'primereact/utils';
import React, { useEffect, useRef, useState } from 'react';
import { ProductService } from '../../demo/service/ProductService';
import { useRouter } from 'next/router';

const Crud = () => {
    const router =useRouter();
    const [listbank, set_listbank] =useState([])

    useEffect (() => {
        hit_api()
    }, [])

    const hit_api = async() => 
    {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("https://toyyibpay.com/api/getBankFPX", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.length > 0){
                    set_listbank (result)
                }
             } )
            .catch(error => console.log('error', error));

    }


    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">
                <div className="header">
                    <h6>Bil / Senarai Bil</h6>
        
        </div>
                </div>
         
       
      
            </div>

            <div className="col-12 bg-secondary">
                <div className="card" style={{backgroundColor:'#4b5563'}} onClick={() => router.push ("/")}>
                <div className="header">
                    <h6 className='text-white text-bold'>Cukai Taksiran</h6>
                    <span className='text-sm text-white'>Senarai Bil Cukai Taksiran</span>
        
        </div>
                </div>
         
       
      
            </div>

            <div className="col-12 bg-secondary">
                <div className="card bg-white">
                <div>
                    <h5>Result Usestate Hani</h5>
                </div>

                 <div> 
                    {
                        listbank.length > 0  && listbank.map ((item,index) =>
                        <div key ={index}>
                            <p>{index + 1}. Bank Name: {item.NAME}</p>

                        </div>
                        )
    
                    }
                </div>
                
                </div>
            </div>
        </div>    
    );
};

export default Crud;
