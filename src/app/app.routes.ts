import { Routes } from '@angular/router';

import { CoursePageComponent } from './course-page/course-page.component';
import { CourseAddPageComponent } from './course-add-page/course-add-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { CourseDetailResolverService } from './course-add-page/course-detail-resolver.service';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: '',
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'courses',
        component: CoursePageComponent,
        data: {
          breadcrumb: 'Courses',
        }
      },
      {
        path: 'courses/new',
        component: CourseAddPageComponent,
        data: {
          breadcrumb: 'New Course',
        },
      },
      {
        path: 'courses/:id',
        component: CourseAddPageComponent,
        data: {
          breadcrumb: 'Edit Course',
        },
        resolve: {
          course: CourseDetailResolverService,
        }
      },
    ],
  },
  { path: 'login', component: LoginPageComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/404' },
];
