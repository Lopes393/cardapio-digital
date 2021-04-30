import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import Lottie from 'react-lottie';
import { Container, BoxListOrder, BoxHeaderOrder, BoxTotalOrder } from './styles';
import menu from './../../assets/img/icons/menu.png';
import animationData from './../../assets/lotties/hamburguer.json';


export function Order() {
    const [menus, setMenus] = useState<any[]>([]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    

    useEffect(() => {
        getMenus();
    }, [])
    
    function getMenus() {
        const arUrlPath = window.location.pathname.split('/');

        if (arUrlPath.length > 1) {
            const bussinesKey = arUrlPath[1];
            if (window.location.pathname)  {
                api.get(`menu/${bussinesKey}`).then(response => setMenus(response.data))
            }
        }
        
    }

    return (
        <Container>
                <BoxListOrder>
                    <BoxHeaderOrder>
                        <strong>Itens do Pedido</strong>
                    </BoxHeaderOrder>
                    <ul>
                        {menus.map((item) => (
                            <li key={item.id}>
                                <hr/>
                                <div>
                                    <strong>Pizza de frango com catupiri</strong>
                                    <p>catupiri, frango, bacon e tomate picado</p>
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
                    <strong>Total: R$ 100,00</strong>
                    <button>Finalizar Pedido</button>
                </BoxTotalOrder>
        </Container>
    )
}