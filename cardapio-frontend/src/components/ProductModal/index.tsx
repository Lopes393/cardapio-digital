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
    const [additionals, setAdditionals] = useState<any[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        getProducts();
    }, [status]) 
    
    function getProducts() {
        setAdditionals([])
        api.get(`additional/${product.id}`).then((response) => {setAdditionals(response.data);calcularTotal();})
    }
    
    function setOpenModalProductAction(status: boolean) {
        setOpenModalProduct(status)
    }

    function alterTelaToOrder() {
        setTelaGeral('order')
    }

    function getAdditional() {
        let selecteds = [];
        for(let item of additionals) {
            if (item.qt_item > 0) {
                selecteds.push(item);
            }
        }

        return selecteds;
    }

    function selectProduct() {
        let order  = Storage('order');
        let productSave = product;
        productSave.item = getAdditional();
        console.log(productSave)
        if (order) {
            order = [productSave, ...order] 
        } else {
            order = [productSave] 
        }
        Storage('order', order);
        alterTelaToOrder() 
    }

    function alterQuantity(item: any, incre: boolean = true) {
        if (incre) {
            item.qt_item += 1;
        } else {
            if (item.qt_item >= 1) {
                item.qt_item -= 1;
            }
        }

        const itensCopy = Array.from(additionals);
        itensCopy[additionals.indexOf(item)] = item;
        setAdditionals(itensCopy);

        calcularTotal();
    }

    function calcularTotal() {
        let total = parseFloat(product.value);

        for(let item of additionals) {
            if (item.qt_item > 0) {
                total += (item.qt_item * item.value); 
            }
        }

        setTotal(total)
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
                {additionals.length > 0 ? <Title>Acrecimos</Title>: ''}
                {additionals.map((item) => (
                    <div key={item.id}>
                        <div>
                            <img src={imgProduct[`hotdog`]} alt=""/>
                            <strong>{item?.name}</strong>
                            <p>{parseFloat(item?.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            <img src={imgMenos} onClick={()=> alterQuantity(item, false)} />
                            <p>{item?.qt_item}</p>
                            <img src={imgMais} onClick={()=> alterQuantity(item)} />
                        </div>
                    </div>
                ))}
            </Content>
            <ContentTotal>
                <strong>Total: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>

            </ContentTotal>

            <ContentAction>
                    <button onClick={()=> setOpenModalProductAction(false)}>Cancelar</button>
                    <button onClick={()=> selectProduct()}>Selecionar</button>
            </ContentAction>
            </Modal>
        </Container>
    )
}