import { Action } from 'redux';
import { Observable, of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import MainActions from '../actions/main.actions';
import campaignsPaths from '../common/paths';


interface deleteCampaign {
  type: string,
  payload: {
    id: string,
  },
}

export default function deleteCampaigns(
  action$: Observable<Action>,
): Observable<Action> {
  console.log('object');
  return action$.pipe(
    ofType('MAIN::FETCH_GET_CAMPAIGNS'),
    mergeMap((actionRequest: any) => {
      console.log(actionRequest);
      return ajax.delete(campaignsPaths.deleteCampaigns,
    actionRequest.payload,
    ).pipe(
      map((response: AjaxResponse) => {
        console.log(response)
        const campaigns: Array<object> = response.response
        return MainActions.getCampaignsSuccess(campaigns);
      }),
      catchError((error: AjaxError) => of({
        type: 'MAIN::ERROR_GET_CAMPAIGNS',
        payload: { Error: true },
      })),
    )}),
  )
}
