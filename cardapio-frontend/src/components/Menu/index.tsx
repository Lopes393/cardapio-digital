import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import {BoxButtom, BoxListMenu, Container, BoxMenu, BoxListOrder} from './styles';
import menu from './../../assets/img/menu.png';
import btnMenu from './../../assets/img/btnMenu.svg';
import btnPedido from './../../assets/img/btnPedido.svg';

export function Menu() {
    const [menus, setMenus] = useState<any[]>([]);
    const [orders, setOrders] = useState<any[]>([]);
    const [tela, setTela] = useState<string>('menu');

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