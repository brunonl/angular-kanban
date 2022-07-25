import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Card } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html'
})
export class ModalEditComponent implements OnInit {

	@ViewChild('focusInput') contentInput!: ElementRef<HTMLInputElement>;

  	editForm!: FormGroup;
	card!: Card;
	onEdit!: Function;

	constructor(
		public bsModalRef: BsModalRef,
		private formBuilder: FormBuilder,
		private cardService: CardService,
	) { }

	ngOnInit(): void {
		this.editForm = this.formBuilder.group({
			titulo: ['', Validators.required],
			conteudo: ['', Validators.required]
		})

		this.editForm.controls['titulo'].setValue(this.card.titulo);
		this.editForm.controls['conteudo'].setValue(this.card.conteudo);
	}

	ngAfterViewInit() {
		setTimeout(()=>{ 
			this.contentInput.nativeElement.focus();
		},0);
	}

	editCard() {
		if (this.editForm.valid) {
			let card: Card = this.editForm.getRawValue();
			card.lista = this.card.lista;
			card.id = this.card.id;
			this.cardService
				.updateCards(card)
				.subscribe({
					next: (data) => {
						this.bsModalRef.hide();
						this.onEdit(data)
					},
					error: (error: Error) => {
						throw new Error(error.message);
					}	
				});
		}
	}

}
