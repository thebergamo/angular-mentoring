import { Component, OnInit } from '@angular/core';
import { LoaderOverlayService } from '../loader-overlay.service';

@Component({
  selector: 'app-loader-overlay',
  templateUrl: './loader-overlay.component.html',
  styleUrls: ['./loader-overlay.component.css']
})
export class LoaderOverlayComponent implements OnInit {
  public show = false;

  constructor(private loaderService: LoaderOverlayService) { }

  ngOnInit() {
    this
      .loaderService
      .shouldLoaderBeVisible()
      .subscribe((visibility) => this.show = visibility);
  }

}
