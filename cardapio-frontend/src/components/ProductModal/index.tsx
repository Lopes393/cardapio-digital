import { useEffect, useState } from 'react';
import {BtnClose, Container, ContentHeader, Content, ContentAction, ContentTotal, Title} from './styles';
import cancel from './../../assets/img/cancel.png';
import Modal from 'react-modal';
import { api } from '../../service/api';
import { imgProduct } from '../../service/ImgProduct';
import imgMais from './../../assets/img/mais.png';
import imgMenos from './../../assets/img/menos.png';
import { Storage } from '../../service/Storage';

export function ProductModal({status , product, setOpenModalProduct, setTelaGeral}: any) {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        getProducts()
    }, [status]) 
    
    function getProducts() {
        setProducts([])
        api.get(`product/${product.id}`).then(response => setProducts(response.data))
    }
    
    function setOpenModalProductAction(status: boolean) {
        setOpenModalProduct(status)
    }
    function alterTelaToOrder() {
        setTelaGeral('order')
    }
    function selectProduct() {
        let order  = Storage('order');
        if (order) {
            order = [product, ...order] 
        } else {
            order = [product] 
        }
        Storage('order', order);
        alterTelaToOrder() 
    }

    return (
        <Container>
             <Modal 
                isOpen={status}  
                onRequestClose={() => setOpenModalProductAction(false)}
                overlayClassName="react-modal-overlay"
                ariaHideApp={false}
                className="react-modal-content"
            >
            <BtnClose>
                <img src={cancel} alt="" onClick={()=> setOpenModalProductAction(false)}/>
            </BtnClose>
            <ContentHeader>
                <strong>{product?.name}</strong>
                <p>{product?.description}</p>
            </ContentHeader>
            <Content>
                {products.length > 0 ? <Title>Acrecimos</Title>: ''}
                {products.map((item) => (
                    <div key={item.id}>
                        <div>
                            <img src={imgProduct['pizza']} alt=""/>
                            <strong>Bacon</strong>
                            <p>R$2,00</p>
                            <img src={imgMenos} alt=""/>
                            <p>1</p>
                            <img src={imgMais} alt=""/>
                        </div>
                    </div>
                ))}
            </Content>
            <ContentTotal>
                <strong>Total: R$25,00</strong>

            </ContentTotal>

            <ContentAction>
                    <button onClick={()=> setOpenModalProductAction(false)}>Cancelar</button>
                    <button onClick={()=> selectProduct()}>Selecionar</button>
            </ContentAction>
            </Modal>
        </Container>
    )
}