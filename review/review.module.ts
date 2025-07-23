import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewSideMenuComponent } from './Components/review-side-menu/review-side-menu.component';
import { BckgrndReviewComponent } from './Components/bckgrnd-review/bckgrnd-review.component';


@NgModule({
  declarations: [
    ReviewSideMenuComponent,
    BckgrndReviewComponent
  ],
  imports: [
    CommonModule,
    ReviewRoutingModule
  ]
})
export class ReviewModule { }
