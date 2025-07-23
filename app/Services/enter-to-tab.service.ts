import { Injectable } from '@angular/core';
import * as $ from 'jquery'; 

@Injectable({
  providedIn: 'root'
})
export class EnterToTabService {

  constructor() {
    this.handleEnterKey();
   }

   handleEnterKey() {
    $(document).ready(function () {
      $("input").not($(":button"))
          .keypress(function (evt) {
              if (evt.keyCode == 13) {
                  var iname = $(this).val();
                  if (iname !== 'Submit') {
                      var fields = $(this).closest('form, body').find('button, input, textarea, select, mat-select');
                      var index = fields.index(this);
                      if (index > -1 && (index + 1) < fields.length) {
                          fields.eq(index + 1).focus();
                      }
                      return false; // Return false if iname is not 'Submit'
                  }
                  return true; // Return true if iname is 'Submit'
              }
              return true; // Return true if the key pressed is not Enter
          });
  });
}
}

