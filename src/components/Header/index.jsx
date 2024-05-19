import styled from "styled-components";

import { Button } from 'primereact/button';
        

const headerStyles = styled.section`

`;

const Header = () => {
    return ( 
        <headerStyles>
            <nav className="w-full flex align-items-center justify-content-between p-5">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="contatos">
                    <div className="info flex gap-3">
                        <Button label="4.8" icon="pi pi-star-fill" outlined text raised/>
                        <Button label="Fechado" icon="pi pi-clock" iconPos="right" text severity="secondary" raised/>
                    </div>
                    <div className="contato flex justify-content-end gap-2 mt-3">
                        <i className="pi pi-whatsapp cursor-pointer" style={{ fontSize: '2rem' }}></i>
                        <i className="pi pi-instagram cursor-pointer" style={{ fontSize: '2rem' }}></i>
                        <i className="pi pi-facebook cursor-pointer" style={{ fontSize: '2rem' }}></i>
                        <i className="pi pi-phone cursor-pointer" style={{ fontSize: '2rem' }}></i>
                    </div>
                </div>
            </nav>
        </headerStyles>
     );
}
 
export default Header;