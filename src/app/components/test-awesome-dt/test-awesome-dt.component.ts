import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GenericTableColumnConfig } from 'awesome-ng-datatable/lib/models/awesomemodels';

@Component({
  selector: 'app-test-awesome-dt',
  templateUrl: './test-awesome-dt.component.html',
  styleUrls: ['./test-awesome-dt.component.css']
})
export class TestAwesomeDTComponent implements OnInit {
  citiesTableConfig: Array<GenericTableColumnConfig> = [];
  @ViewChild('actionsCelTemp', { static: true }) actionsCelTemp: TemplateRef<any>;
  selectedLanguage = 'ar';
  items:Array<any> = [];
  ngOnInit(): void {

    this.citiesTableConfig = [
      { header: 'Lookups.CityName', key: "nameAr", headerIsTranslationKey: true, customCellTemplate: null },
      { header: 'region.regionName', key: this.selectedLanguage == "ar" ? "region.nameAr" : "region.nameEn", headerIsTranslationKey: true, customCellTemplate: null },
      {
        header: 'Actions', key: "id", headerIsTranslationKey: true,
        customCellTemplate: this.actionsCelTemp
      },
    ];
    this.items = [{
      nameAr: 'مدينه ',
      region: { nameAr: "منطقة", nameEn: 'region1' }
    }];
  }
}
