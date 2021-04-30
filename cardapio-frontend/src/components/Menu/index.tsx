import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import Lottie from 'react-lottie';
import {BoxButtom, BoxListMenu, Container, BoxMenu, BoxListOrder, BoxHamb} from './styles';
import menu from './../../assets/img/menu.png';
import btnMenu from './../../assets/img/btnMenu.svg';
import btnPedido from './../../assets/img/btnPedido.svg';
import animationData from './../../assets/lotties/hamburguer.json';


export function Menu() {
    const [menus, setMenus] = useState<any[]>([]);
    const [orders, setOrders] = useState<any[]>([]);
    const [tela, setTela] = useState<string>('menu');

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

    function alterarTela(tela: string) {
        console.log("alterou")
        
    }
    
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
            <BoxHamb>
                <Lottie 
                    options={defaultOptions}
                    height={90}
                    width={90}
                />
            </BoxHamb>
            {tela === "order" ? 
                <BoxListOrder>
                    {menus.map((item) => (
                        <BoxMenu key={item.id}>
                            <strong>outra tela</strong>
                        </BoxMenu>
                    ))}
                </BoxListOrder> : 
                <BoxListMenu>
                    {menus.map((item) => (
                        <BoxMenu key={item.id}>
                            <img src={menu} alt=""/> 
                            <strong>{item.description}</strong>
                        </BoxMenu>
                    ))}
                </BoxListMenu>
                }
            <BoxButtom>
                <div onClick={() => setTela("menu")}>
                    <img src={btnMenu} alt=""/>
                </div>
                <div onClick={() => setTela("order")}>
                    <img src={btnPedido} alt=""/>
                </div>
            </BoxButtom>
        </Container>
    )
}