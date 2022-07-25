import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Card } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';

@Component({
	selector: 'app-modal-add',
	templateUrl: './modal-add.component.html'
})
export class ModalAddComponent implements OnInit {

	@ViewChild('focusInput') contentInput!: ElementRef<HTMLInputElement>;
	
	addForm!: FormGroup;
	onAdd!: Function;
	toDoList!: Card[];

	constructor(
		public bsModalRef: BsModalRef,
		private formBuilder: FormBuilder,
		private cardService: CardService,
	) { }

	ngOnInit(): void {
		this.addForm = this.formBuilder.group({
			titulo: ['', Validators.required],
			conteudo: ['', Validators.required]
		})
	}

	ngAfterViewInit() {
		setTimeout(()=>{ 
			this.contentInput.nativeElement.focus();
		},0);
	}

	addCard() {
		if (this.addForm.valid) {
			let card: Card = this.addForm.getRawValue();
			card.lista = "ToDo"
			this.cardService
				.addCard(card)
				.subscribe({
					next: (data) => {
						this.bsModalRef.hide();
						this.onAdd(data, this.toDoList)
					},
					error: (error: Error) => {
						debugger
						throw new Error(error.message);
					}	
				});
		}
	}

}
