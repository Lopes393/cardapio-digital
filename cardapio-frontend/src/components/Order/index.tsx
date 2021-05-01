import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import Lottie from 'react-lottie';
import { Container, BoxListOrder, BoxHeaderOrder, BoxTotalOrder, BoxHamb } from './styles';
import animationData from './../../assets/lotties/duvida.json';
import animationDataDelivery from './../../assets/lotties/delivery.json';
import { Storage } from '../../service/Storage';
import { OrderModal } from '../OrderModal';


export function Order() {
    const [order, setOrder] = useState<any[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [openModalOrder, setOpenModalOrder] = useState<boolean>(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptionsDelivery = {
        loop: true,
        autoplay: true,
        animationData: animationDataDelivery,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    

    useEffect(() => {
        getOrder();
    }, [])

    function calcularOrder(order: any) {
        let total = 0;

        for(let item of order) {
            total += parseFloat(item.value); 
        }

        setTotal(total)
    }
    
    function getOrder() {
        let order = Storage('order');

        if (!order) {
            order = [];
        }
        
        setOrder(order)
        calcularOrder(order)
        console.log(order)
    }

    function openModalFinalizar() {
        setOpenModalOrder(true)
        // Storage('order', false, false, true);
        getOrder();
    }

    return (
        <Container>
            <OrderModal status={openModalOrder} setOpenModalOrder={setOpenModalOrder}/>
                <BoxListOrder>
                    <BoxHeaderOrder>
                    {order.length > 0 ?
                        <strong>Itens do Pedido</strong>
                    : <>
                        <BoxHamb>
                            <Lottie 
                                options={defaultOptions}
                                height={90}
                                width={90}
                            />
                        </BoxHamb>
                        <strong>Você ainda não selecionou um produto.</strong>
                        <p>Bora fazer um pedido de algo delicioso</p>
                        <BoxHamb>
                            <Lottie 
                                    options={defaultOptionsDelivery}
                                    height={90}
                                    width={90}
                                />
                        </BoxHamb>
                    </>
                    }
                    </BoxHeaderOrder>
                    <ul>
                        {order.map((item) => (
                            <li key={item.id}>
                                <hr/>
                                <div>
                                    <strong>{item?.name}</strong>
                                    <p>{item?.description}</p>
                                    {item.item.map((additional: any) => (
                                        <span>{additional.qt_item}x {additional.name}</span>
                                    ))}
                                </div>
                                <div>{parseFloat(item?.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                            </li>
                            
                        ))}
                    </ul>
                </BoxListOrder>
                <BoxTotalOrder>
                    {order.length > 0 ?
                        <>
                            <strong >Total: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                            <button onClick={()=> openModalFinalizar()}>Finalizar Pedido</button>
                        </>
                    : '' }
                </BoxTotalOrder>
        </Container>
    )
}