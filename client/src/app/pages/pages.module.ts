import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ServicesComponent } from "./services/services.component";
import { BasePageComponent } from "../partials/base-page/base-page.component";



@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AboutComponent,
        ContactComponent,
        HomeComponent,
        ProductsComponent,
        ServicesComponent,
        BasePageComponent
    ],
    exports: [
        AboutComponent,
        ContactComponent,
        HomeComponent,
        ProductsComponent,
        ServicesComponent
    ]
})
export class PagesModule {}
