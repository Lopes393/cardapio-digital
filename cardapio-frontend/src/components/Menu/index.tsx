import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import {BoxButtom, BoxListMenu, Container} from './styles';
import bussines from './../../assets/img/bussines.svg';

export function Menu() {
    const [user, setMenu] = useState<any[]>([]);

    useEffect(() => {
        getMenus();
    }, [])
    
    function getMenus() {
        const arUrlPath = window.location.pathname.split('/');
        if (arUrlPath.length > 1) {
            const bussinesKey = arUrlPath[1];

            // if (window.location.pathname)  {
            //     api.get(`menus/${bussinesKey}`)
            //     .then(response => setMenu(response.data.menus))
            // }
        }
        
    }

    return (
        <Container>
            <BoxListMenu>

                Lista de Menus
            </BoxListMenu>
            <BoxButtom>
            </BoxButtom>
        </Container>
    )
}