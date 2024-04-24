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

export function MyRoutes() {
  
  return (
   
    
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mantenimientotablaspage" element={<MantenimientoTablasPage />} />
        <Route path="/accionistaspage" element={<AccionistasPage />} />
        <Route path="/descargas" element={<Descargas />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/accionistaslista" element={<AccionistasLista />} />
        <Route path="/accionistasform" element={<AccionistasForm />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/searchpagecomitentes" element={<SearchPageComitentes />} />
        <Route path="/comitenteslista" element={<ComitentesLista />} />
        <Route path="/comitentesform" element={<ComitentesForm />} />
        <Route path="/searchpage" element={<SearchPage />} />        
        
      </Routes>
    
  );
}
