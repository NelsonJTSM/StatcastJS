import axios from 'axios';
import * as csv from 'csv-parser';
import { Readable } from 'stream';
import { Pitch, Teams } from '../models/statcast';

const ROOT_URL = 'https://baseballsavant.mlb.com'

async function get_statcast_data_from_url(url: string): Promise<Pitch[]> {
  try {
    const data = (await axios.get(ROOT_URL + url)).data;
    const readable = Readable.from(data);
    const pitches: Pitch[] = [];

    return new Promise((resolve, reject) => {
      readable.pipe(csv())
        .on('data', (pitch: Pitch) => {
          pitches.push(pitch);
        })
        .on('end', () => resolve(pitches))
        .on('error', (e) => reject(e));
    });
  } catch (e) {
    return e;
  }
}

export async function small_request(startDate: string, endDate: string, team?: Teams): Promise<Pitch[]> {
  const url = `/statcast_search/csv?all=true&hfPT=&hfAB=&hfBBT=&hfPR=&hfZ=&stadium=&hfBBL=&hfNewZones=&hfGT=R%7CPO%7CS%7C=&hfSea=&hfSit=&player_type=pitcher&hfOuts=&opponent=&pitcher_throws=&batter_stands=&hfSA=&game_date_gt=${startDate}&game_date_lt=${endDate}&team=${team}&position=&hfRO=&home_road=&hfFlag=&metric_1=&hfInn=&min_pitches=0&min_results=0&group_by=name&sort_col=pitches&player_event_sort=h_launch_speed&sort_order=desc&min_abs=0&type=details&`
  return get_statcast_data_from_url(url);
}
