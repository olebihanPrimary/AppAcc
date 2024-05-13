import styled from "styled-components";
import logo from "../assets/appacc.jpg";

export function Home() {
  return (
  
        <Container>

        {/*  <div className="d-flex align-items-center justify-content-center align-middle" 
          >
            <img src={logo} className="mx-auto d-block" />
          </div>    */}

          <div class="position-relative mt-5">
            <img className="mt-30 position-absolute start-50 translate-middle-x" src={logo}  />
          </div>
          
    
        
  
          


          </Container>);
}
const Container =styled.div`
align-items: center
bgcolor:#6b6789
 
`