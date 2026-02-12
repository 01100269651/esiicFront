import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ordr-proc',
  templateUrl: './ordr-proc.component.html',
  styleUrls: ['./ordr-proc.component.css']
})
export class OrdrProcComponent implements OnInit {
  orderProcessForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.orderProcessForm = this.fb.group({
      factId: [null, [Validators.required]],
      season: [null, [Validators.required]],
      typ: ['', [Validators.required]],
      f_id: [null, [Validators.required]],
      e_id: [null, [Validators.required]],
      locale: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.orderProcessForm.valid) {
      const formData = this.orderProcessForm.value;
      
      // Build query parameters
      const params = {
        factId: formData.factId,
        season: formData.season,
        typ: formData.typ,
        f_id: formData.f_id,
        e_id: formData.e_id,
        locale: formData.locale
      };

      // Call the API
      this.http.get('api/OrderProcess', { params }).subscribe({
        next: (response) => {
          console.log('Order Process response:', response);
          alert('Order Process completed successfully!');
        },
        error: (error) => {
          console.error('Order Process error:', error);
          alert('An error occurred during Order Process.');
        }
      });
    }
  }

  resetForm(): void {
    this.orderProcessForm.reset();
  }
}
