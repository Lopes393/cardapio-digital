import Lottie from 'react-lottie';
import { Container, BoxHamb } from './styles';
import animationData from './../../assets/lotties/duvida.json';
import animationDataDelivery from './../../assets/lotties/delivery.json';
import { useState } from 'react';


export function OrderClear() {
    const [printInTela, setPrintInTela] = useState<boolean>(false);


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptionsDelivery = {
        loop: true,
        autoplay: true,
        animationData: animationDataDelivery,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    setTimeout(() => {
        setPrintInTela(true)
    },200);

    return (
        <Container>
            { printInTela ? 
            <>
                <BoxHamb>
                    <Lottie 
                        options={defaultOptions}
                        height={90}
                        width={90}
                    />
                </BoxHamb>
                <strong>Você ainda não selecionou um produto.</strong>
                <p>Bora fazer um pedido de algo delicioso</p>
                <BoxHamb>
                    <Lottie 
                            options={defaultOptionsDelivery}
                            height={90}
                            width={90}
                        />
                </BoxHamb>
            </>
            : '' }
        </Container>              
    )
}