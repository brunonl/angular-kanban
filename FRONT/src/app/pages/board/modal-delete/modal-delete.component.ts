import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Card } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';

@Component({
	selector: 'app-modal-delete',
	templateUrl: './modal-delete.component.html'
})
export class ModalDeleteComponent implements OnInit {

	title?: string;
	description?: string;
	id!: string;
	card?: Card;
	onDelete!: Function;

	constructor(
		public bsModalRef: BsModalRef,
		private cardService: CardService
	) { }

	ngOnInit(): void {
	}

	deleteCard() {
		this.cardService
			.deleteCards(this.card!.id)
			.subscribe({
				next: (data) => {
					this.bsModalRef.hide();
					this.onDelete(this.card);
				},
    			error: (error: Error) => {
					throw new Error(error.message);
				}	
			});
	}

}