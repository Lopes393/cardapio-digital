import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import {BoxButtom, BoxListMenu, Container, BoxMenu} from './styles';
import menu from './../../assets/img/menu.png';
import btnMenu from './../../assets/img/btnMenu.svg';
import btnPedido from './../../assets/img/btnPedido.svg';

export function Menu() {
    const [menus, setMenus] = useState<any[]>([]);

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
            <BoxListMenu>

            {menus.map((item) => (
                <BoxMenu key={item.id}>
                    <img src={menu} alt=""/> 
                    <strong>{item.description}</strong>
                </BoxMenu>
            ))}
            </BoxListMenu>
            <BoxButtom>
                <div>
                    <img src={btnMenu} alt=""/>
                </div>
                <div>
                    <img src={btnPedido} alt=""/>
                </div>
            </BoxButtom>
        </Container>
    )
}