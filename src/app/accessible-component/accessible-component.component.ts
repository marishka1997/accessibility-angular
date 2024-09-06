import { Component } from '@angular/core';

@Component({
  selector: 'app-accessible-component',
  standalone: true,
  imports: [],
  templateUrl: './accessible-component.component.html',
  styleUrl: './accessible-component.component.css'
})
export class AccessibleComponentComponent {
  showingAlert = false;
  // @ViewChild('toggleButton') toggleButton: ElementRef;

  showAlert() {
    alert('Button clicked!');
  }

  toggleAlert() {
    this.showingAlert = !this.showingAlert;
    // if (this.showingAlert) {
    //   setTimeout(() => this.toggleButton.nativeElement.focus(), 0);
    // }
  }

  onSubmit() {
    alert('Form submitted!');
  }
}
