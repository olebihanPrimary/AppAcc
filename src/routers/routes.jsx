import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import {Descargas} from "../pages/Descargas";
import {Reportes} from "../pages/Reportes";
import { MantenimientoTablasPage } from "../pages/MantenimientoTablasPage";
import { AccionistasPage } from "../pages/AccionistasPage";
import { AccionistasLista } from "../components/AccionistasLista";
import { AccionistasForm } from "../components/AccionistasForm";
import { SearchPage } from "../components/SearchPage";
import { ComitentesForm } from "../components/ComitentesForm";
import { ComitentesLista } from "../components/ComitentesLista";
import { SearchPageComitentes } from "../components/SearchPageComitentes";
import { SearchPageAccionistas } from "../components/SearchPageAccionistas";
import { PadComForm } from "../components/PadComForm";
import { PadComLista } from "../components/PadComLista";
import { SearchPagePadCom } from "../components/SearchPagePadCom";
import { PadronXLSXLista } from "../components/PadronXLSXLista";
import { PadronXLSXForm } from "../components/PadronXLSXForm";
import { SearchPagePadronXLSX } from "../components/SearchPagePadronXLSX";
import { CuentasLista } from "../components/CuentasLista";
import { SearchPageCuentas } from "../components/SearchPageCuentas";
import { CuentasForm } from "../components/CuentasForm";

export function MyRoutes() {

  
  
  return (
   
      
  
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mantenimientotablaspage" element={<MantenimientoTablasPage />} />
        <Route path="/accionistaspage" element={<AccionistasPage />} />
        <Route path="/descargas" element={<Descargas />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/accionistaslista" element={<AccionistasLista />} />
        <Route path="/accionistasform" element={<AccionistasForm />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/searchpagecomitentes" element={<SearchPageComitentes />} />
        <Route path="/searchpageaccionistas" element={<SearchPageAccionistas />} />
        <Route path="/comitenteslista" element={<ComitentesLista />} />
        <Route path="/comitentesform" element={<ComitentesForm />} />
        <Route path="/cuentaslista" element={<CuentasLista />} />
        <Route path="/cuentasform" element={<CuentasForm />} />
        <Route path="/searchpagepadcom" element={<SearchPagePadCom />} />
        <Route path="/padcomlista" element={<PadComLista />} />
        <Route path="/padronXLSXlista" element={<PadronXLSXLista />} />
        <Route path="/padronXLSXForm" element={<PadronXLSXForm />} />
        <Route path="/searchpagepadronXLSX" element={<SearchPagePadronXLSX />} />    
        <Route path="/searchpagecuentas" element={<SearchPageCuentas />} />     
        <Route path="/padcomform" element={<PadComForm />} />        
        <Route path="/searchpage" element={<SearchPage />} />    
        <Route path="/home" element= {<Home />} /> 
           

        
        
      </Routes>
    
  );
}
