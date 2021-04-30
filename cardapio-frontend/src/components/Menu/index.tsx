import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import Lottie from 'react-lottie';
import {BoxButtom, BoxListMenu, Container, BoxMenu, BoxListOrder, BoxHamb} from './styles';
import menu from './../../assets/img/icons/menu.png';
import btnMenu from './../../assets/img/icons/btnMenu.png';
import btnPedido from './../../assets/img/icons/btnPedido.png';
import animationData from './../../assets/lotties/hamburguer.json';
import { MenuProduct } from '../MenuProduct';


export function Menu() {
    const [menus, setMenus] = useState<any[]>([]);
    const [telageral, setTelaGeral] = useState<string>('menu');
    const [telaMenu, setTelaMenu] = useState<string>('menu');
    const [idMenu, setIdMenu] = useState<number>(0);

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

    function alterTela() {
        if (telageral === "menu") {
            setTelaMenu('menu')
        } else {
            setTelaGeral("menu")
        }
    }

    function viewMenuById(idMenu: number) {
        setTelaMenu('menuItem')
        setIdMenu(idMenu)
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
            {telageral === "order" ? 
                <BoxListOrder>
                    {menus.map((item) => (
                        <BoxMenu key={item.id}>
                            <strong>outra tela</strong>
                        </BoxMenu>
                    ))}
                </BoxListOrder> : 
                <BoxListMenu >
                    {telaMenu === "menu" ? 
                        menus.map((item) => (
                            <BoxMenu key={item.id} onClick={() => {viewMenuById(item.id)}}>
                                <img src={menu} alt=""/> 
                                <strong>{item.description}</strong>
                            </BoxMenu> 

                        ))
                    : <MenuProduct idMenu={idMenu}/> }
                </BoxListMenu>
                }
            <BoxButtom>
                <div onClick={alterTela}>
                    <img src={btnMenu} alt=""/>
                </div>
                <div onClick={() => setTelaGeral("order")}>
                    <img src={btnPedido} alt=""/>
                </div>
            </BoxButtom>
        </Container>
    )
}