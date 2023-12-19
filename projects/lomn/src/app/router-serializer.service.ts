import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { keys } from 'lodash';

@Injectable()
export class HealtheRouterSerialize implements RouterStateSerializer<any> {
  serialize(routerState: RouterStateSnapshot): any {
    let route = routerState.root;
    const params = {};
    const queryParams = {};
    while (route.firstChild) {
      keys(route.firstChild.params).forEach(
        (key) => (params[key] = route.firstChild.params[key])
      );
      keys(route.firstChild.queryParams).forEach(
        (key) => (queryParams[key] = route.firstChild.queryParams[key])
      );
      route = route.firstChild;
    }

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url: routerState.url, params, queryParams };
  }
}
