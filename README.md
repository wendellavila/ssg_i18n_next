# ssg_i18n_next
Next.js 14 Starter SSG project with client-side locale detection and internationalization with next-intl.

## Features
* Preferred language detection using navigator.languages.
* Saving preferred language in localStorage when user switches language.
* Internationalization (i18n) with next-intl.
* ```getTranslations``` function for retrieving next-intl messages outside of client components.

## Screens
### Loading screen
* Loading screen (/)
* Shown briefly while preferred language is detected on client side.  

![Loading Screen](screenshots/loading.png?raw=true "Loading Screen")


### Main page
* English (/en/)

![Main page - English](screenshots/main-page-en.png?raw=true "Main page - English")
* Brazilian Portuguese (/pt/)

![Main page - Brazilian Portuguese](screenshots/main-page-pt.png?raw=true "Main page - Brazilian Portuguese")


### Subpage
* English (/en/subpage/)

![Subpage - English](screenshots/subpage-en.png?raw=true "Subpage - English")
* Brazilian Portuguese (/pt/subpage/)

![Subpage - Brazilian Portuguese](screenshots/subpage-pt.png?raw=true "Subpage - Brazilian Portuguese")