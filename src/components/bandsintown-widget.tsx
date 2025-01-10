import Script from "next/script";


export default function BandsintownWidget({ artist }: { artist: string }) {
  return (
    <>  
      <Script
        src='https://widget.bandsintown.com/main.min.js'
        strategy='afterInteractive'
      />
      <div className='mx-[-10px] lg:mt-4 mt-[-20px]'>
        <a
          className='bit-widget-initializer'
          data-artist-name={artist}
          data-display-local-dates='false'
          data-auto-style='true'
          data-text-color='#FFFFFF'
          data-link-color='#57534e'
          data-display-past-dates='true'
          data-background-color='rgba(0,0,0,0)'
          data-display-limit='4'
          data-display-start-time='false'
          data-link-text-color='#FFFFFF'
          data-display-lineup='false'
          data-display-play-my-city='false'
          data-display-track-button='false'
          data-separator-color='rgba(255, 255, 255, 0.5)'
          data-font='Roboto'
          data-font-size='14px'
          data-display-logo='false'
        />
      </div>
    </>
  );
}
