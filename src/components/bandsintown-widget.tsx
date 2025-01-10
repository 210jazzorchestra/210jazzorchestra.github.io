// import Script from 'next/script';

// export default function BandsintownWidget({ artist }: { artist: string }) {
//   return (
//     <>
//       <Script
//         src='https://widget.bandsintown.com/main.min.js'
//       />
//       <div className='mx-[-10px] lg:mt-4 mt-[-20px]'>
//         <a
//           className='bit-widget-initializer'
//           data-artist-name={artist}
//           data-display-local-dates='false'
//           data-auto-style='true'
//           data-text-color='#FFFFFF'
//           data-link-color='#57534e'
//           data-display-past-dates='true'
//           data-background-color='rgba(0,0,0,0)'
//           data-display-limit='4'
//           data-display-start-time='false'
//           data-link-text-color='#FFFFFF'
//           data-display-lineup='false'
//           data-display-play-my-city='false'
//           data-display-track-button='false'
//           data-separator-color='rgba(255, 255, 255, 0.5)'
//           data-font='Roboto'
//           data-font-size='14px'
//           data-display-logo='false'
//         />
//       </div>
//     </>
//   );
// }

import Script from 'next/script';

export default function BandsintownWidget({ artist }: { artist: string }) {
  return (
    <>
      <Script src='https://widgetv3.bandsintown.com/main.min.js' />
      <a
        className='bit-widget-initializer'
        data-artist-name={artist}
        data-events-to-display=''
        data-background-color='rgba(0,0,0,0)'
        data-separator-color='rgba(221,221,221,1)'
        data-text-color='rgba(255,255,255,1)'
        data-font='Tahoma'
        data-auto-style='false'
        data-button-label-capitalization='uppercase'
        data-header-capitalization='uppercase'
        data-location-capitalization='capitalize'
        data-venue-capitalization='capitalize'
        data-display-local-dates='false'
        data-local-dates-position='tab'
        data-display-past-dates='true'
        data-display-details='false'
        data-display-lineup='false'
        data-display-start-time='false'
        data-social-share-icon='false'
        data-display-limit='4'
        data-date-format='MMM. D, YYYY'
        data-date-orientation='horizontal'
        data-date-border-color='#4A4A4A'
        data-date-border-width='1px'
        data-date-capitalization='capitalize'
        data-date-border-radius='10px'
        data-event-ticket-cta-size='medium'
        data-event-custom-ticket-text=''
        data-event-ticket-text='INFO'
        data-event-ticket-icon='false'
        data-event-ticket-cta-text-color='rgba(255,255,255,1)'
        data-event-ticket-cta-bg-color='rgba(74,74,74,1)'
        data-event-ticket-cta-border-color='rgba(74,74,74,1)'
        data-event-ticket-cta-border-width='0px'
        data-event-ticket-cta-border-radius='2px'
        data-sold-out-button-text-color='rgba(255,255,255,1)'
        data-sold-out-button-background-color='rgba(74,74,74,1)'
        data-sold-out-button-border-color='rgba(74,74,74,1)'
        data-sold-out-button-clickable='true'
        data-event-rsvp-position='hidden'
        data-event-rsvp-cta-size='medium'
        data-event-rsvp-only-show-icon='false'
        data-event-rsvp-text='RSVP'
        data-event-rsvp-icon='false'
        data-event-rsvp-cta-text-color='rgba(74,74,74,1)'
        data-event-rsvp-cta-bg-color='rgba(255,255,255,1)'
        data-event-rsvp-cta-border-color='rgba(74,74,74,1)'
        data-event-rsvp-cta-border-width='1px'
        data-event-rsvp-cta-border-radius='2px'
        data-follow-section-position='hidden'
        data-follow-section-alignment='center'
        data-follow-section-header-text='Get updates on new shows, new music, and more'
        data-follow-section-cta-size='medium'
        data-follow-section-cta-text='FOLLOW'
        data-follow-section-cta-icon='false'
        data-follow-section-cta-text-color='rgba(255,255,255,1)'
        data-follow-section-cta-bg-color='rgba(74,74,74,1)'
        data-follow-section-cta-border-color='rgba(74,74,74,1)'
        data-follow-section-cta-border-width='0px'
        data-follow-section-cta-border-radius='2px'
        data-play-my-city-position='hidden'
        data-play-my-city-alignment='center'
        data-play-my-city-header-text='Don’t see a show near you?'
        data-play-my-city-cta-size='medium'
        data-play-my-city-cta-text='REQUEST A SHOW'
        data-play-my-city-cta-icon='false'
        data-play-my-city-cta-text-color='rgba(255,255,255,1)'
        data-play-my-city-cta-bg-color='rgba(74,74,74,1)'
        data-play-my-city-cta-border-color='rgba(74,74,74,1)'
        data-play-my-city-cta-border-width='0px'
        data-play-my-city-cta-border-radius='2px'
        data-optin-font=''
        data-optin-text-color=''
        data-optin-bg-color=''
        data-optin-cta-text-color=''
        data-optin-cta-bg-color=''
        data-optin-cta-border-width=''
        data-optin-cta-border-radius=''
        data-optin-cta-border-color=''
        data-language='en'
        data-layout-breakpoint='900'
        data-app-id=''
        data-affil-code=''
        data-bit-logo-position='hidden'
        data-bit-logo-color='rgba(255,255,255,1)'
      ></a>
    </>
  );
}
