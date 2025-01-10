'use client';

import BandsintownDates from './bandsintown-dates';
import BandsintownDateSelector from './bandsintown-date-selector';
import { useState } from 'react';

export default function BandsintownWidget({
  artist,
  appId,
}: {
  artist: string;
  appId: string;
}) {
  const [pastEvents, setPastEvents] = useState(false);

  return (
    <div>
      <BandsintownDateSelector
        pastEvents={pastEvents}
        setPastEvents={setPastEvents}
      />
      <hr className='my-4' />
      <BandsintownDates artist={artist} pastEvents={pastEvents} appId={appId} />
    </div>
  );
}
