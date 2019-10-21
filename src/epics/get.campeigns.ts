import { Action } from 'redux';
import { Observable, of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import MainActions from '../actions/main.actions';
import campaignsPaths from '../common/paths';


interface getCampaignRequest {
  type: string,
}

export default function getCampaign(
  action$: Observable<Action>,
): Observable<Action> {
  return action$.pipe(
    ofType('MAIN::FETCH_GET_CAMPAIGNS'),
    mergeMap((actionRequest: getCampaignRequest) => ajax.get(campaignsPaths.getCampaigns
    ).pipe(
      map((response: AjaxResponse) => {
        console.log(response);
        return MainActions.getCampaignsSuccess(response as any);
      }),
      catchError((error: AjaxError) => of({
        type: 'MAIN::ERROR_GET_CAMPAIGNS',
        payload: { Error: true },
      })),
    )),
  )
}
