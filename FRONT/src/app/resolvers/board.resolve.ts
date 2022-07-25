import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CardService } from "../services/card.service";

@Injectable({ 
    providedIn: 'root' 
})

export class BoardResolver implements Resolve<Observable<any>> {

    constructor(private cardService: CardService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        return this.cardService.getCards()
    }
}