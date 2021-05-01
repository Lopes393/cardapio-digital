import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { imgProduct } from '../../service/ImgProduct';
import {Container, BoxProduct, BoxProductList} from './styles';
import animationData from './../../assets/lotties/hamburguer.json';
import { ProductModal } from '../ProductModal';

export function MenuProduct({idMenu, setTelaGeral}: any) {
    const [products, setProducts] = useState<any[]>([]);
    const [product, setProduct] = useState<any>({});
    const [openModalProduct, setOpenModalProduct] = useState<boolean>(false);
    
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

    function openModal(item: any) {
        console.log("modal aberto")
        setOpenModalProduct(true)
        setProduct(item)
        
    }

    function getProducts() {
        if (idMenu)  {
            api.get(`product/${idMenu}`).then(response => setProducts(response.data))
        }
        
    }

    return (
        <Container>
            <ProductModal status={openModalProduct} product={product} setOpenModalProduct={setOpenModalProduct} setTelaGeral={setTelaGeral}/>
            <BoxProductList>
                {products.map((item) => (
                    <div key={item.id}>
                        <BoxProduct onClick={() => {openModal(item)}}>
                            <img src={imgProduct['pizza']} alt=""/>
                            <div>
                                <strong>{item.name}</strong>
                                <p>{item.description}</p>
                            </div>
                            <pre>{parseFloat(item?.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</pre>
                        </BoxProduct>
                    </div>
                ))}
            </BoxProductList>
        </Container>
    )
}