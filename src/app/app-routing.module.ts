import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { AuthGuard } from "./user/auth.guard";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: "login",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  {
    path: "memo",
    loadChildren: () => import("./memo/memo.module").then((m) => m.memoModule),
    canActivate: [AuthGuard],
  },
  {
    path: "customers",
    loadChildren: () =>
      import("./customers/customers.module").then((m) => m.CustomersModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
