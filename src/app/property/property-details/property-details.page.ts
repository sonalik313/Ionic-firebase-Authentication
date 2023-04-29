import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { map } from 'rxjs';
import { Properties } from 'src/app/models/properties.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {
  Properties: Properties;
  PropId: string | undefined | null;
  res: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authf: AuthService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.PropId = params.get('property_id');
    });
    if (this.PropId) {
      this.authf. getPropertiesByPropertyId(this.PropId).subscribe((Properties) => {
        console.log(Properties);

        this.Properties = Properties;
        // console.log(Properties);
      });
    }
  }
}
