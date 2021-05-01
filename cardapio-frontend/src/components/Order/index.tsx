import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import Lottie from 'react-lottie';
import { Container, BoxListOrder, BoxHeaderOrder, BoxTotalOrder } from './styles';
import menu from './../../assets/img/icons/menu.png';
import animationData from './../../assets/lotties/hamburguer.json';
import { Storage } from '../../service/Storage';


export function Order() {
    const [order, setOrder] = useState<any[]>([]);
    const [total, setTotal] = useState<number>(0);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
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
            total += 15; 
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
        Storage('order', false, false, true);
        getOrder();
    }

    return (
        <Container>
                <BoxListOrder>
                    <BoxHeaderOrder>
                        <strong>Itens do Pedido</strong>
                    </BoxHeaderOrder>
                    <ul>
                        {order.map((item) => (
                            <li key={item.id}>
                                <hr/>
                                <div>
                                    <strong>{item?.name}</strong>
                                    <p>{item?.description}</p>
                                    <span>bacon</span>
                                    <span>Milho</span>
                                    <span>beteraba</span>
                                </div>
                                <div>R$15,00</div>
                            </li>
                            
                        ))}
                    </ul>
                </BoxListOrder>
                <BoxTotalOrder>
                    <strong >Total: R$ {total}</strong>
                    <button onClick={()=> openModalFinalizar()}>Finalizar Pedido</button>
                </BoxTotalOrder>
        </Container>
    )
}