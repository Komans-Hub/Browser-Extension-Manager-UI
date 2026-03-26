export function AppLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#logo-a)">
        <path fill="#C7231A" fillRule="evenodd" clipRule="evenodd"
          d="M13.715.516c-2.257 0-4.42.896-6.016 2.492L0 10.707v3.524c0 2.49 1.07 4.73
             2.774 6.285A8.485 8.485 0 0 0 0 26.802v3.524l7.699 7.698A8.507 8.507 0 0 0
             20 37.742a8.508 8.508 0 0 0 12.301.282L40 30.326v-3.524c0-2.49-1.07-4.73
             -2.774-6.286A8.485 8.485 0 0 0 40 14.231v-3.524l-7.699-7.7A8.508 8.508 0
             0 0 20 3.29 8.485 8.485 0 0 0 13.715.516Zm12.044 20a8.528 8.528 0 0
             1-.282-.27L20 14.77l-5.477 5.477a8.528 8.528 0 0 1-.282.27c.096.087.19.177
             .282.269L20 26.262l5.477-5.476c.092-.093.186-.182.282-.27Zm-3.537
             9.81v1.682a4.063 4.063 0 0 0 6.936 2.874l6.398-6.397v-1.683a4.063 4.063 0
             0 0-6.937-2.874l-6.397 6.398Zm-4.444 0-6.397-6.398a4.063 4.063 0 0
             0-6.937 2.873v1.684l6.397 6.397a4.063 4.063 0 0 0 6.937-2.873v-1.683Zm
             0-21.302v1.683l-6.397 6.397a4.063 4.063 0 0 1-6.937-2.873v-1.683l6.397
             -6.397a4.063 4.063 0 0 1 6.937 2.873Zm10.841 8.08-6.397-6.397V9.024a4.063
             4.063 0 0 1 6.936-2.873l6.398 6.397v1.683a4.063 4.063 0 0 1-6.937 2.873Z"/>
      </g>
      <defs>
        <clipPath id="logo-a"><rect width="40" height="41" fill="white"/></clipPath>
      </defs>
    </svg>
  )
}

export function SunIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path stroke="currentColor" strokeWidth="1.98" strokeLinecap="round" strokeLinejoin="round"
        d="M11 1.833v1.834m0 14.666v1.834M3.667 11H1.833m3.955-5.212L4.492
           4.492m11.72 1.296 1.297-1.296M5.788 16.215l-1.296 1.296m11.72-1.296
           1.297 1.296M20.167 11h-1.834m-2.75 0a4.583 4.583 0 1 1-9.167 0
           4.583 4.583 0 0 1 9.167 0Z"/>
    </svg>
  )
}

export function MoonIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path stroke="currentColor" strokeWidth="1.98" strokeLinecap="round" strokeLinejoin="round"
        d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002Z"/>
    </svg>
  )
}

const classNames = (...classes) => classes.filter(Boolean).join(' ')

const LOGO_MAP = {
  devlens: (s) => (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#BFD8BD"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M23.675 15.75c-2.39 0-4.39.851-5.789 2.352-1.393 1.494-2.135 3.573-2.135
           5.937v1.074h28.498V24.04c0-2.363-.737-4.442-2.129-5.937-1.397-1.501-3.397
           -2.352-5.794-2.352h-12.65Zm-2.24 4.951a1.125 1.125 0 0 0 0 2.25h.082a1.125
           1.125 0 0 0 0-2.25h-.083Zm3.728 0a1.125 1.125 0 0 0 0 2.25h.083a1.125 1.125
           0 0 0 0-2.25h-.083Zm3.73 0a1.125 1.125 0 0 0 0 2.25h.082a1.125 1.125 0 0 0
           0-2.25h-.083Z"/>
      <path fill="#091540" d="M29.49 32.25a2.821 2.821 0 1 0 0 5.642 2.821 2.821 0 0 0 0-5.642Z"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M15.75 35.96v-8.597h28.5v8.596c0 2.364-.738 4.443-2.13 5.938-1.398 1.5-3.398
           2.352-5.795 2.352h-12.65c-2.396 0-4.397-.852-5.794-2.352-1.392-1.495-2.13
           -3.574-2.13-5.938Zm8.669-.889a5.071 5.071 0 1 1 9.324 2.763l1.509 1.509a1.125
           1.125 0 1 1-1.591 1.59l-1.532-1.531a5.071 5.071 0 0 1-7.71-4.33Z"/>
    </svg>
  ),
  stylespy: (s) => (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#A9D6E5"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M19.32 19.197C20.633 17.788 22.502 17 24.71 17h11.246c2.212 0 4.082.788 5.394
           2.197 1.305 1.4 1.983 3.335 1.983 5.505v10.596c0 2.17-.678 4.104-1.983
           5.505C40.038 42.213 38.167 43 35.955 43H24.71c-2.213 0-4.083-.788-5.395
           -2.197-1.304-1.401-1.982-3.335-1.982-5.505V24.702c0-2.171.682-4.105
           1.987-5.506Zm1.463 1.363c-.903.969-1.45 2.386-1.45 4.142v10.596c0 1.757.545
           3.174 1.446 4.142.894.96 2.212 1.56 3.93 1.56h11.246c1.718 0 3.038-.6
           3.932-1.56.901-.968 1.446-2.385 1.446-4.142V24.702c0-1.757-.545-3.174-1.446
           -4.142-.894-.96-2.213-1.56-3.931-1.56H24.709c-1.711 0-3.03.6-3.926 1.56Z"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M23.685 24.188a1 1 0 0 1 1-1h2.644a1 1 0 1 1 0 2h-1.644v9.631h1.644a1 1 0
           1 1 0 2h-2.644a1 1 0 0 1-1-1V24.187ZM32.339 24.188a1 1 0 0 1 1-1h2.644a1 1
           0 0 1 1 1v11.631a1 1 0 0 1-1 1h-2.644a1 1 0 0 1 0-2h1.644v-9.632h-1.644a1
           1 0 0 1-1-1Z"/>
    </svg>
  ),
  speedboost: (s) => (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#FFCFD2"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="m35.532 28.321-3.92 3.92a.967.967 0 0 1-.706.294.989.989 0 0 1-.707-.294
           1.006 1.006 0 0 1 0-1.413l3.92-3.92a1.006 1.006 0 0 1 1.413 0c.4.387.4
           1.027 0 1.413Zm-4.613-7.626c-6 0-10.88 4.88-10.88 10.88 0 .136.003.273.008
           .407a.396.396 0 0 0 .398.38h4.474a2.658 2.658 0 0 1 2.659 2.862c-.022.266
           .168.524.435.524h.226a2.666 2.666 0 0 1 2.583 3.323c-.059.23.1.477.337.477a2.66
           2.66 0 0 1 2.58 2.018c.06.247.305.425.547.346 4.357-1.417 7.513-5.51
           7.513-10.337 0-6-4.88-10.88-10.88-10.88ZM28.122 18.786h5.611a1 1 0 0 0
           0-2h-5.61a1 1 0 0 0 0 2Z"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M29.233 38.413a1 1 0 0 0-1-1h-5.721a1 1 0 0 0 0 2h5.721a1 1 0 0 0
           1-1ZM31.152 41.214h-5.721a1 1 0 0 0 0 2h5.721a1 1 0 0 0
           0-2ZM25.924 35.026a1 1 0 0 0-1-1H19.2a1 1 0 0 0 0 2h5.723a1 1 0 0 0 1-1Z"/>
    </svg>
  ),
  jsonwizard: (s) => (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#F1C0E8"/>
      <path stroke="#091540" strokeWidth="2.333" strokeLinecap="round" strokeLinejoin="round"
        d="M36.553 16.008c4.58 0 7.447 3.23 7.447 7.81V36.18c0 4.58-2.867 7.812-7.447
           7.812H23.432c-4.58 0-7.432-3.232-7.432-7.812V23.818c0-4.58 2.867-7.81
           7.432-7.81h6.876m-7.241 27.97 9.54-10.843a3.176 3.176 0 0 0-.287-4.492l-1.729
           -1.515a3.18 3.18 0 0 0-4.506.272l-2.123 2.411-7.69 8.707m10.934-5.848
           3.246 2.86m6.835-8.508v-.06m-2.083 10.606v.06m-13.25-14.86v-.06m14.621-.241v-.061"/>
    </svg>
  ),
  tabmasterpro: (s) => (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#CFBAF0"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M41.585 28.624a3.741 3.741 0 0 0-2.992-1.478H21.406a3.743 3.743 0 0 0-2.992
           1.476 3.744 3.744 0 0 0-.646 3.274l2.2 8.15a3.774 3.774 0 0 0 3.638
           2.787h12.786a3.777 3.777 0 0 0 3.638-2.787l2.202-8.149a3.74 3.74 0 0
           0-.647-3.273ZM25.248 19.167h9.5a1 1 0 0 0 0-2h-9.5a1 1 0 0 0
           0 2ZM21.576 23.67h16.846a1 1 0 0 0 0-2H21.576a1 1 0 0 0 0 2Z"/>
    </svg>
  ),
  viewportbuddy: (s) => (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#A3C4F3"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M20.13 20.32c1.19-1.276 2.882-1.987 4.87-1.987h2.641a1 1 0 0 1 0 2h-2.64c
           -1.494 0-2.636.522-3.409 1.352-.78.837-1.259 2.068-1.259 3.605v9.42c0
           1.539.477 2.77 1.256 3.606.77.828 1.912 1.35 3.412 1.35h9.996c1.5 0
           2.642-.522 3.413-1.35.78-.837 1.257-2.068 1.257-3.606v-2.063a1 1 0 0 1 2
           0v2.063c0 1.952-.61 3.7-1.793 4.969-1.19 1.277-2.883 1.988-4.877 1.988H25c
           -1.994 0-3.687-.711-4.876-1.989-1.182-1.269-1.792-3.017-1.792-4.968v-9.42c0
           -1.953.614-3.7 1.796-4.97Z"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M35.394 20.333a1 1 0 1 1 0-2h5.272a1 1 0 0 1 1 1v5.272a1 1 0 1 1-2
           0v-2.858l-8.09 8.09h2.857a1 1 0 0 1 0 2H29.16a1 1 0 0 1-1-1v-5.27a1 1 0
           1 1 2 0v2.856l8.09-8.09h-2.857Z"/>
    </svg>
  ),
  markupnotes: (s) => (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#90DBF4"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M36.358 23.648c.897.01 2.144.014 3.201.01.541-.002.816-.655.442-1.05-.68
           -.712-1.624-1.705-2.574-2.702l-2.606-2.738c-.386-.404-1.058-.126-1.058.434v3.425c0
           1.437 1.172 2.621 2.595 2.621Z"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M29.558 33.507h-6.306a1 1 0 1 1 0-2h6.306a1 1 0 0 1 0 2Zm-6.307-7.504h3.292a1
           1 0 0 1 0 2H23.25a1 1 0 1 1 0-2Zm10.743 5.819a4.078 4.078 0 0 1 5.565-1.494l1.04
           .602c.043.024.076.057.116.084V26.13a.58.58 0 0 0-.579-.584h-3.95c-2.354-.013
           -4.296-1.963-4.296-4.34v-4.185a.593.593 0 0 0-.592-.598h-6.871c-3.203 0-5.803
           2.638-5.803 5.86v14.008c0 3.38 2.728 6.122 6.074 6.122h5.778c-.05-.152-.11-.3
           -.142-.459l-.18-.892a5.248 5.248 0 0 1 .6-3.632l3.24-5.61Z"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="m39.322 34.975-3.237 5.606c-.19.328-.492.576-.848.699l-.9.275-.179-.896c-.073
           -.371-.01-.758.18-1.086l3.237-5.608a.411.411 0 0 1 .558-.149l1.04.6a.41.41 0 0
           1 .15.559Zm.85-2.291-1.04-.6a2.41 2.41 0 0 0-3.287.881l-3.24 5.61a3.57 3.57 0
           0 0-.408 2.474l.178.895a2.025 2.025 0 0 0 2.635 1.524l.868-.295a3.563 3.563 0 0
           0 1.939-1.592l3.238-5.608a2.415 2.415 0 0 0-.882-3.289Z"/>
    </svg>
  ),
  gridguides: (s) => (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#B8B8FF"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M24.403 34.667H20.93a3.602 3.602 0 0 0-3.598 3.597v.805a3.602 3.602 0 0 0
           3.598 3.598h3.472A3.6 3.6 0 0 0 28 39.069v-.805a3.6 3.6 0 0
           0-3.597-3.597ZM39.07 17.333h-3.473A3.6 3.6 0 0 0 32 20.931v.805a3.6 3.6 0
           0 0 3.597 3.597h3.472a3.6 3.6 0 0 0 3.598-3.597v-.805a3.601 3.601 0 0
           0-3.598-3.598ZM39.07 29.333h-3.473A3.6 3.6 0 0 0 32 32.931v6.138a3.6 3.6 0
           0 0 3.597 3.598h3.472a3.601 3.601 0 0 0 3.598-3.598v-6.138a3.601 3.601 0 0
           0-3.598-3.598ZM24.403 17.333H20.93a3.602 3.602 0 0 0-3.598 3.598v6.138a3.602
           3.602 0 0 0 3.598 3.598h3.472A3.6 3.6 0 0 0 28 27.069v-6.138a3.6 3.6 0 0
           0-3.597-3.598Z"/>
    </svg>
  ),
  palettepicker: (s) => (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#98F5E1"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M21.599 18.342a4.342 4.342 0 0 0-4.334 4.334v2.24c0 .147.12.266.267.266
           1.166-.003 5.855-.012 8.134-.013.148 0 .266-.12.266-.267v-2.226a4.333 4.333 0
           0 0-4.333-4.334ZM17.532 27.157a.266.266 0 0 0-.267.266v4.158c0 .06.06.108.12
           .108h8.28c.148 0 .267-.12.267-.267v-3.986a.266.266 0 0 0-.266-.267c-2.28
           0-6.968-.01-8.134-.012ZM21.599 36.21c.666 0 1.2.546 1.2 1.2 0 .666-.534
           1.2-1.2 1.2-.654 0-1.2-.534-1.2-1.2 0-.654.546-1.2 1.2-1.2Zm-4.067-2.534a.266
           .266 0 0 0-.267.267v3.4c0 2.4 1.947 4.333 4.334 4.333 2.4 0 4.333-1.933
           4.333-4.333v-3.387a.266.266 0 0 0-.266-.267c-2.28 0-6.968-.01-8.134-.013ZM38.637
           23.86c-1.213-3.307-5.08-3.894-7.227-1.747l-3.35 3.324c-.1.1-.157.235-.157.376l
           -.026 5.22-.013 1.653v.013l-.024 4.593a.267.267 0 0 0 .455.19l9.355-9.343c1.12
           -1.12 1.534-2.786.987-4.28ZM38.897 33.015h-3.041a.534.534 0 0 0-.374.154l-8.186
           8.056a.267.267 0 0 0 .187.457h11.562c1.582 0 3.062-.885 3.726-2.32 1.48-3.204
           -.836-6.347-3.874-6.347Z"/>
    </svg>
  ),
  linkchecker: (s) => (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#FFD8BE"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M23.955 21.853c.738 0 1.334-.596 1.334-1.333V18a1.333 1.333 0 1 0-2.667
           0v2.52c0 .737.596 1.333 1.333 1.333ZM21.85 23.958c0-.737-.596-1.333-1.333
           -1.333H18a1.333 1.333 0 1 0 0 2.667h2.516c.737 0 1.333-.596
           1.333-1.334ZM36.048 38.146c-.738 0-1.334.596-1.334 1.333V42a1.333 1.333 0 1
           0 2.667 0v-2.52c0-.737-.596-1.333-1.333-1.333ZM42 34.708h-2.517a1.333 1.333
           0 1 0 0 2.667H42a1.332 1.332 0 1 0 0-2.667ZM31.604 36.127l-1.31 1.316c-2.136
           2.129-5.606 2.13-7.736.002a5.48 5.48 0 0 1 0-7.738l1.311-1.308a1.335 1.335 0
           0 0-1.883-1.89l-1.313 1.31c-3.17 3.174-3.17 8.337 0 11.511a8.101 8.101 0 0 0
           5.748 2.375c2.084 0 4.17-.792 5.76-2.377l1.314-1.32a1.332 1.332 0 1
           0-1.891-1.88ZM41.552 26.579a8.085 8.085 0 0 0-2.375-5.761c-3.166-3.167-8.326
           -3.167-11.506 0l-1.32 1.32a1.332 1.332 0 0 0 0 1.885c.52.521 1.364.521
           1.885 0l1.319-1.319c2.136-2.128 5.606-2.132 7.737-.001a5.437 5.437 0 0 1
           1.593 3.875c0 1.466-.566 2.84-1.593 3.865l-1.323 1.321a1.334 1.334 0 0 0
           1.887 1.886l1.321-1.322a8.076 8.076 0 0 0 2.375-5.749Z"/>
    </svg>
  ),
  domsnapshot: (s) => (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#8EECF5"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M41.752 29.78h-.701v-3.07a.58.58 0 0 0-.58-.583h-3.95c-2.357-.014-4.3-1.964
           -4.3-4.343v-4.185a.594.594 0 0 0-.593-.599h-6.873c-3.204 0-5.804 2.639-5.804
           5.863v6.917h-.703a1 1 0 0 0 0 2h23.504a1 1 0 0 0 0-2Z"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M36.69 24.227c.898.01 2.145.013 3.203.01.542-.002.818-.657.442-1.05-.679
           -.712-1.624-1.707-2.575-2.704-.953-1.001-1.91-2.008-2.608-2.739-.384-.405
           -1.057-.126-1.057.434v3.426c0 1.439 1.172 2.623 2.596 2.623Z"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd" opacity=".4"
        d="M40.582 33.333H19.418a.468.468 0 0 0-.468.468v3.076c0 3.38 2.728 6.123
           6.075 6.123h10.233c3.206 0 5.792-2.612 5.792-5.836v-3.363a.468.468 0 0
           0-.468-.468Z"/>
    </svg>
  ),
  consoleplus: (s) => (
    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="10" fill="#B9FBC0"/>
      <path fill="#091540" fillRule="evenodd" clipRule="evenodd"
        d="M35.363 35.255h-4.406a1 1 0 0 1 0-2h4.406a1 1 0 0 1 0 2Zm-6.855-4.222-3.163
           3.163a.992.992 0 0 1-.706.293.999.999 0 0 1-.707-1.707l2.456-2.455-2.456-2.456a1
           1 0 0 1 1.413-1.415l3.163 3.163a1 1 0 0 1 0 1.414Zm7.116-13.7H24.377c-4.213
           0-7.044 2.96-7.044 7.368v10.596c0 4.408 2.83 7.37 7.044 7.37h11.246c4.213 0
           7.044-2.962 7.044-7.37V24.701c0-4.408-2.831-7.368-7.043-7.368Z"/>
    </svg>
  ),
}

export function ExtensionLogo({ extensionKey, size = 48 }) {
  const render = LOGO_MAP[extensionKey]
  if (!render) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-xl bg-gray-300 dark:bg-gray-600 flex-shrink-0"
      />
    )
  }
  return (
    <div className="flex-shrink-0" style={{ width: size, height: size, lineHeight: 0 }}>
      {render(size)}
    </div>
  )
}

export function Toggle({ active, onChange, label = 'Toggle extension' }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      aria-label={label}
      onClick={onChange}
      className={classNames('toggle-track', active ? 'is-on' : 'is-off')}
    >
      <span className="toggle-thumb" />
    </button>
  )
}

export function ExtensionCard({ extension, onToggle, onRemove, index }) {
  const { id, key, name, description, active, removing } = extension

  return (
    <article
      className={classNames(
        'flex flex-col gap-4 p-5 rounded-2xl border',
        'dark:bg-[#1C2333] dark:border-[#252f42]',
        'dark:hover:border-[#374151] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]',
        'bg-white border-[#E2E8F0]',
        'hover:border-[#CBD5E0] hover:shadow-md',
        'transition-[border-color,box-shadow,opacity] duration-200',
        !active  ? 'opacity-60' : null,
        removing ? 'card-remove' : 'card-enter',
      )}
      style={{ animationDelay: `${Math.min(index * 35, 280)}ms` }}
    >
      {/* ── Top row: logo + name + description ── */}
      <div className="flex gap-4 items-start">
        <ExtensionLogo extensionKey={key} size={48} />
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-[15px] leading-snug mb-1 dark:text-[#F0F6FC] text-gray-900">
            {name}
          </h3>
          <p className="text-[13px] leading-relaxed dark:text-[#8B9AB1] text-gray-500 m-0">
            {description}
          </p>
        </div>
      </div>

      {/* ── Bottom row: remove button + toggle ── */}
      <div className="flex items-center justify-between pt-0.5">
        <button
          type="button"
          onClick={() => onRemove(id)}
          aria-label={`Remove ${name}`}
          className={classNames(
            'text-[13px] font-medium px-4 py-[6px] rounded-full border bg-transparent',
            'transition-[border-color,color] duration-150 active:scale-95',
            'dark:border-[#374151] dark:text-[#8B9AB1]',
            'dark:hover:border-[#4A5568] dark:hover:text-[#E2E8F0]',
            'border-[#D1D5DB] text-gray-500',
            'hover:border-gray-400 hover:text-gray-700',
          )}
        >
          Remove
        </button>
        <Toggle
          active={active}
          onChange={() => onToggle(id)}
          label={`${active ? 'Disable' : 'Enable'} ${name}`}
        />
      </div>
    </article>
  )
}

const FILTERS = ['All', 'Active', 'Inactive']

export function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Filter extensions">
      {FILTERS.map((f) => {
        const isActive = activeFilter === f
        return (
          <button
            key={f}
            type="button"
            onClick={() => onFilterChange(f)}
            aria-pressed={isActive}
            className={classNames(
              'px-4 py-2 rounded-full text-[13px] font-semibold border',
              'transition-[background-color,color,border-color,box-shadow] duration-200 active:scale-95',
              isActive
                ? 'bg-[#C7231A] text-white border-transparent shadow-[0_4px_14px_rgba(199,35,26,0.38)]'
                : classNames(
                    'bg-transparent',
                    'dark:border-[#2d3748] dark:text-[#8B9AB1]',
                    'dark:hover:border-[#4A5568] dark:hover:text-white',
                    'border-[#E2E8F0] text-gray-500',
                    'hover:border-gray-400 hover:text-gray-800',
                  ),
            )}
          >
            {f}
          </button>
        )
      })}
    </div>
  )
}

export function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={classNames(
        'w-10 h-10 rounded-xl flex items-center justify-center',
        'transition-[background-color,color] duration-150 active:scale-90',
        'dark:bg-[#252f42] dark:text-[#8B9AB1] dark:hover:bg-[#2d3748] dark:hover:text-white',
        'bg-[#F1F5F9] text-gray-500 hover:bg-[#E2E8F0] hover:text-gray-800',
      )}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export function Header({ isDark, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 px-5 py-4">
      <div className={classNames(
        'max-w-5xl mx-auto flex items-center justify-between',
        'px-5 py-3.5 rounded-2xl backdrop-blur-md',
        'dark:bg-[#1C2333]/90 dark:border dark:border-[#252f42]',
        'bg-white/90 border border-[#E2E8F0] shadow-sm',
      )}>
        <div className="flex items-center gap-3">
          <AppLogo />
          <span className="font-bold text-[17px] tracking-tight dark:text-[#F8FAFC] text-gray-900">
            Extensions
          </span>
        </div>
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </div>
    </header>
  )
}

const EMPTY_CONFIG = {
  All:      { emoji: '🔌', title: 'No extensions',          sub: 'All extensions have been removed.' },
  Active:   { emoji: '⚡', title: 'No active extensions',   sub: 'Enable an extension to see it here.' },
  Inactive: { emoji: '💤', title: 'No inactive extensions', sub: 'All extensions are currently active.' },
}

export function EmptyState({ filter }) {
  const { emoji, title, sub } = EMPTY_CONFIG[filter] ?? EMPTY_CONFIG.All
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
      <span className="text-5xl mb-4 leading-none">{emoji}</span>
      <h3 className="font-bold text-[18px] mb-1 dark:text-[#F8FAFC] text-gray-800">{title}</h3>
      <p className="text-sm dark:text-[#8B9AB1] text-gray-500 m-0">{sub}</p>
    </div>
  )
}
