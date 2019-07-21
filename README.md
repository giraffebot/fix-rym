# fix-rym
custom javascript/css to re-render rateyourmusic so it doesn't look like trash

using the [user javascript and css](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en) plugin on chrome 74 to make this. i guess if you want to use this ideally you would use that plugin and paste the contents of the files in the correct columns. go to rateyourmusic.com, click the extension icon, add a rule, paste the contents of the js file on the left and the css stuff on the right. make sure the rule is enabled and refresh the page.

since i assume you use rateyourmusic i'm ~giraffebot and if stuff goes wrong with this you should definitely message me about it (also if you have a particular aesthetic problem with the ui itself)

right now it sorta loads slowly. i'm looking into ways to make some of it faster since a lot of it seems to run when the window loads. if you actually know something about this sort of thing you should tell me or make a pull request or something

focusing on simple javascript and doing css/drastic element repositioning later

progress:
- homepage
- navbar
- account settings are slightly better

things i intend to do:
- fix user profile pages (big boye)
- collapsible review guidelines (i'll make the collapsible super conspicuous don't worry)
- make faqs easier to comb through (collapsible help categories)
