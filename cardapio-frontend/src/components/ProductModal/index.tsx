import { useEffect, useState } from 'react';
// import { api } from '../../service/api';
import {BtnClose, Container, ContentHeader, Content, ContentAction, ContentTotal, Title} from './styles';
// import animationData from './../../assets/lotties/hamburguer.json';
import cancel from './../../assets/img/cancel.png';
import Modal from 'react-modal';
import { api } from '../../service/api';
import { imgProduct } from '../../service/ImgProduct';
import imgMais from './../../assets/img/mais.png';
import imgMenos from './../../assets/img/menos.png';

export function ProductModal({status , product, setOpenModalProduct}: any) {
    const [products, setProducts] = useState<any[]>([]);

    // const [newStatus, setNewStatus] = useState<boolean>(status ?? false);
    // console.log(setOpenModalProduct)
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice"
    //     }
    // };
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
                    <button>Selecionar</button>
            </ContentAction>
            </Modal>
        </Container>
    )
}