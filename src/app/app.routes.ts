import { RouterModule, Routes } from "@angular/router";

//componentes
import { HabilidadesComponent, HomeComponent, SobreMiComponent, ContactemeComponent, ProyectosComponent } from "./componentes/index.components";

const APP_ROUTES: Routes = [
    { path : 'home', component: HomeComponent },
    { path : 'sobre-mi', component: SobreMiComponent },
    { path : 'habilidades', component: HabilidadesComponent },
    { path : 'proyectos', component: ProyectosComponent },
    { path : 'contacto', component: ContactemeComponent },
    { path : '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true} );