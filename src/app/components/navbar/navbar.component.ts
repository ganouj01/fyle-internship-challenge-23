import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() searchValueChanged = new EventEmitter<string>();
  @Output() selectionChanged = new EventEmitter<number>();
  @Output() callParentFunctionEvent = new EventEmitter<void>();

  searchQuery: string = '';
  selectedOption: number = 10;

  repoCounts: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  sendSearchValue() {
    this.searchValueChanged.emit(this.searchQuery);
  }

  onSelectionChange() {
    this.selectionChanged.emit(this.selectedOption);
  }

  callParentFunction() {
    this.callParentFunctionEvent.emit();
  }
}
