import { Button } from "primereact/button";

const Content = () => {
    return ( 
        <>
            <div className="formgrid flex p-8 gap-8 align-items-center">
                <div className="field col">
                    <h1>🤩Bemvind@s</h1>
                    <p>👋 Olá! Somos o Salgadinhos da Hora. Temos um imenso prazer em ter você como cliente. 🥰Quer ver o que temos pra você hoje? 👇Visita no CARDÁPIO abaixo.👇</p>
                    <div className="infodelivery flex gap-2">
                        <Button label="Retirar na loja" text severity="secondary"/>
                        <Button label="Delivery" text severity="secondary"/>
                    </div>
                    <Button label="Rua Tropical,20 - Paupina - Fortaleza - CE, 60872-510, Brasil" text severity="secondary"/>
                </div>
                <div className="field col flex flex-column gap-2">
                    <Button label="PROMOÇÕES" size="large"/>
                    <Button label="CARDÁPIO DIGITAL" size="large"/>
                    <Button label="WHATSAPP" size="large"/>
                    <Button label="ENDEREÇO" size="large"/>
                </div>
            </div>
        </>
     );
}
 
export default Content;