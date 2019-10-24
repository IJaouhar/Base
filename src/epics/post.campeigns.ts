import { Action } from 'redux';
import { Observable, of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import MainActions from '../actions/main.actions';
import campaignsPaths from '../common/paths';
import CampaignAdapter from '../models/entities/campaigns.entity';


interface postCampaign {
  type: string,
  payload: {
    campaignInfo: CampaignAdapter,
  },
}

export default function createCampaigns(
  action$: Observable<Action>,
): Observable<Action> {
  return action$.pipe(
    ofType('MAIN::FETCH_POST_CAMPAIGNS'),
    mergeMap((actionRequest: any) => {
      console.log(actionRequest.payload);
      return ajax.post(campaignsPaths.postCampaigns,
    actionRequest.payload.campaignInfo,
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
    )),
  )
}
