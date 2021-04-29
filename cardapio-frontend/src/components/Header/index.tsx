import { useEffect, useState } from 'react';
import { api } from '../../service/api'
import {Container, ImgBox, UserBox} from './styles'
import bussines from './../../assets/img/bussines.svg';

export function Header() {
    const [user, setUser] = useState<any>({});

    useEffect(() => {
        getUser();
    }, [])
    
    function getUser() {
        const arUrlPath = window.location.pathname.split('/');
        
        if (arUrlPath.length > 1) {
            const bussinesKey = arUrlPath[1];
            api.get(`user/${bussinesKey}`).then(response => setUser(response.data))
        }
    }

    return (
        <Container>
            <ImgBox>
                <img src={bussines} alt=""/>   
            </ImgBox>
            <UserBox>
                <strong>{user?.bussines}</strong>
                <p>{user?.phone}</p>
            </UserBox>
        </Container>
    )
}