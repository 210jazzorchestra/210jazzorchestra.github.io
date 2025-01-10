'use client';

import { Button } from '../ui/button';
import { useEffect, useState } from 'react';

interface Event {
  id: string;
  url: string;
  datetime: string;
  title: string;
  description: string;
  artist: {
    id: string;
    name: string;
    url: string;
    mbid: string;
    options: {
      display_listen_unit: boolean;
    };
    tracking: string[];
    image_url: string;
    thumb_url: string;
    facebook_page_url: string;
    tracker_count: number;
    upcoming_event_count: number;
    support_url: string;
    links: string;
    artist_optin_show_phone_number: boolean;
    show_multi_ticket: boolean;
  };
  venue: {
    location: string;
    name: string;
    latitude: string;
    longitude: string;
    street_address: string;
    postal_code: string;
    city: string;
    country: string;
    region: string;
  };
  lineup: string[];
  offers: {
    status: string;
    type: string;
    url: string;
  }[];
  free: boolean;
  artist_id: string;
  on_sale_datetime: string;
  festival_start_date: string;
  festival_end_date: string;
  festival_datetime_display_rule: string;
  starts_at: string;
  ends_at: string;
  datetime_display_rule: string;
  bandsintown_plus: boolean;
  presale: string;
  sold_out: boolean;
}

export default function BandsintownDates({
  artist,
  pastEvents,
  appId,
}: {
  artist: string;
  pastEvents?: boolean;
  appId: string;
}) {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const res = await fetch(
        `https://rest.bandsintown.com/artists/${artist}/events/?app_id=${appId}&date=${
          pastEvents ? 'past' : 'upcoming'
        }`
      );
      const data = await res.json();
      setEvents(data);
    };

    getEvents();
  }, [artist, pastEvents, appId]);

  return (
    <ul>
      {events.length > 0 ? (
        events.map((event: Event) => (
          <li
            key={event.id}
            className='list-none mt-5 p-3 border border-gray-300 rounded bg-transparent flex justify-between items-center'
          >
            <div className='text-left'>
              <h3 className='text-lg font-bold'>{event.venue.name}</h3>
              <p className='text-gray-700'>{event.venue.location}</p>
              <p className='text-gray-600'>
                {new Date(event.starts_at).toLocaleString(undefined, {
                  hour: 'numeric',
                  minute: 'numeric',
                })}{' '}
                -{' '}
                {new Date(event.ends_at).toLocaleString(undefined, {
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </p>
            </div>
            <a href={event.url} target='_blank' rel='noopener noreferrer'>
              <Button size='lg'>Info</Button>
            </a>
          </li>
        ))
      ) : (
        <p className='text-gray-500 text-2xl pt-4 pl-2 font-bold w-full'>
          No events found
        </p>
      )}
    </ul>
  );
}
