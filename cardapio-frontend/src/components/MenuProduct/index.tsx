import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import Lottie from 'react-lottie';
import {Container, BoxProduct, BoxProductList} from './styles';
import animationData from './../../assets/lotties/hamburguer.json';
import hotdog from './../../assets/img/hotdog.png';

export function MenuProduct({idMenu}: any) {
    const [products, setProducts] = useState<any[]>([]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {
        getProducts();
    }, [])

    
    function getProducts() {
        if (idMenu)  {
            api.get(`product/${idMenu}`).then(response => setProducts(response.data))
        }
        
    }

    return (
        <Container>
            {/* <BoxHamb>
                <Lottie 
                    options={defaultOptions}
                    height={90}
                    width={90}
                />
            </BoxHamb> */}
            <BoxProductList>
                {products.map((item) => (
                    <div key={item.id}>
                        <BoxProduct>
                            <img src={hotdog} alt=""/>
                            <strong>{item.name}</strong>
                            <p>{item.description}</p>
                        </BoxProduct>
                    </div>
                ))}
            </BoxProductList>
        </Container>
    )
}