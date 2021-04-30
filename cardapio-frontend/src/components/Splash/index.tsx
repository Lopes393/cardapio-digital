import { useEffect } from 'react';
import { Container } from './styles';
import Lottie from 'react-lottie';
import animationData from './../../assets/lotties/splash.json';

export function Splash() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
      };
      
    useEffect(() => {
    }, [])




    return (
        <Container>
            <Lottie 
                options={defaultOptions}
                height={150}
                width={150}
            />
        </Container>
    )
}