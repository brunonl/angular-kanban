import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Card } from '../interfaces/card';

const API_URL = environment.API_URL;

@Injectable({
	providedIn: 'root',
})
export class CardService {
	constructor(private http: HttpClient) { }

	getCards() {
		return this.http.get<Card[]>(API_URL + '/cards/');
	}

	addCard(card: Card) {
		return this.http.post<Card>(API_URL + '/cards/', card)
	}

	updateCards(card: Card) {
		return this.http.put<Card[]>(API_URL + '/cards/' + card.id, card)
	}

	deleteCards(id: string) {
		return this.http.delete<Card[]>(API_URL + '/cards/' + id)
	}


}
