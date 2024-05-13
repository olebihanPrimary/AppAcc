import styled from "styled-components";
import logo from "../assets/appacc.jpg";

export function Home() {
  return (<Container>

         <div className="d-flex align-items-center justify-content-center align-middle" 
          >
            <img src={logo} className="mx-auto d-block" />
          </div>   


          </Container>);
}
const Container =styled.div`
  height:100vh;
 
`