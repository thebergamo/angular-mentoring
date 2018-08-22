import { Component, OnInit } from '@angular/core';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface BreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: BreadCrumb[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root));
  }

  extractLabel(data) {
    if (data.course) {
      return data.course.title;
    }

    return data.breadcrumb || 'Home';
  }

  buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: BreadCrumb[] = []
  ) {
    const hasRouteConfig = !!route.routeConfig;
    const label = this.extractLabel(route.snapshot.data);
    const path = hasRouteConfig ? route.routeConfig.path : '';

    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label: label,
      url: nextUrl,
    };

    const newBreadcrumbs = [...breadcrumbs, breadcrumb];

    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs.reduce((acc, actual) => {
      if (acc.find((item) => item.label === actual.label)) {
        return acc;
      }

      return [...acc, actual];
    }, []);
  }
}
