import { useEffect, useState } from 'react';
import {BtnClose, Container, ContentHeader, Content, ContentAction, ContentTotal, Title} from './styles';
import cancel from './../../assets/img/cancel.png';
import Modal from 'react-modal';
import { Storage } from '../../service/Storage';

export function OrderModal({status , product, setOpenModalOrder, setTelaGeral}: any) {
    const [additionals, setAdditionals] = useState<any[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [totalProducts, setTotalProducts] = useState<number>(0);
    const [totalDelivery, setTotalDelivery] = useState<number>(0);

    const [isCard, setIsCard] = useState<string>('');
    const [isDelivery, setIsDelivery] = useState<string>('');

    const [troco, setTroco] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');

    useEffect(() => {
    }, [status]) 
    
    
    function setOpenModalProductAction(status: boolean) {
        setOpenModalOrder(status)
    }

    function sendOrder() {

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

    function  handleChange(event: any) {    
        setTroco(event.target.value); 
    }
    // Storage('troco', event.target.value, true)

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
                <strong>Informações de entrega e pagamento</strong>
            </ContentHeader>
            <Content>
                <div>
                    {isCard === 'card'? <button onClick={()=> setIsCard('card')}>Cartão</button> : <button onClick={()=> setIsCard('card')}>Cartão</button>}
                    {isCard === 'money'? <button onClick={()=> setIsCard('money')}>Dinheiro</button> : <button onClick={()=> setIsCard('money')}>Dinheiro</button>}
                </div>
                {isCard === 'money' ? 
                    <input type="text" placeholder="precisa de troco?" value={troco} onChange={handleChange}/>
                : '' }
                {troco !== '' || isCard == ''? 
                <div>
                    {isDelivery === 'delivery' ? <button onClick={()=> setIsDelivery('delivery')}>Entregar</button> : <button onClick={()=> setIsDelivery('delivery')}>Cartão</button>}
                    {isDelivery === 'goway' ? <button onClick={()=> setIsDelivery('goway')}>Vou buscar</button> : <button onClick={()=> setIsDelivery('goway')}>Dinheiro</button>}
                </div>
                : '' }
                {isDelivery === 'delivery' ? 
                    <input type="text" placeholder="Qual o seu endereço?"/>
                : '' }
            </Content>
            <ContentTotal>
                <strong>Produtos: {totalProducts.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                <strong>Frete: {totalDelivery.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                <strong>Total: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
            </ContentTotal>

            <ContentAction>
                    <button onClick={()=> setOpenModalProductAction(false)}>Voltar</button>
                    <button onClick={()=> sendOrder()}>Enviar</button>
            </ContentAction>
            </Modal>
        </Container>
    )
}