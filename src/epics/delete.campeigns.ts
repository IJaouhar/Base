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
  return action$.pipe(
    ofType('MAIN::FETCH_DELETE_CAMPAIGN'),
    mergeMap((actionRequest: any) => {
      return ajax.delete(campaignsPaths.deleteCampaigns +
    actionRequest.payload.id,
    ).pipe(
      map((response: AjaxResponse) => {
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
