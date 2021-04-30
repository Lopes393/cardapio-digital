import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { imgProduct } from '../../service/ImgProduct';
import {Container, BoxProduct, BoxProductList} from './styles';
import animationData from './../../assets/lotties/hamburguer.json';

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
    console.log(imgProduct);
    return (
        <Container>
            <BoxProductList>
                {products.map((item) => (
                    <div key={item.id}>
                        <BoxProduct>
                            <img src={imgProduct['pizza']} alt=""/>
                            <div>
                                <strong>{item.name}</strong>
                                <p>{item.description}</p>
                            </div>
                            <pre>R$20,00</pre>
                        </BoxProduct>
                    </div>
                ))}
            </BoxProductList>
        </Container>
    )
}