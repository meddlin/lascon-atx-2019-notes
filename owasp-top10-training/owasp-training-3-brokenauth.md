### Broken Authentication

- examples: passing user credentials in cleartext, missed http vs. https, cookie stealing, etc.
- a lot of enterprises are *not* using https internally to protect things
- Google and other search engines are even de-ranking sites that don't use https
- forgot my password: *don't email the password back to users*

Privileged accounts are targeted

Sniffing traffic: Firesheep

- plugin for Firefox, 15 years ago, no one was using https
- it monitored network traffic, when people logged into social sites, etc. it captured the session credentials
	- you clicked "login", and you were that user, until they logged out
- move your site to https, and you kill this attack

Attackers can also "guess" session id's

- this is why to use timeout periods, length, and complexity
- if no timeout, you're giving attackers infinite time to guess/figure it out

WebGoat

- OWASP tool, really good if you want to learn about web app security
	- good hands-on tool to pair with training
	- intentionally insecure web application

Sarah Palin story

- forgot my password + easy questions + OSINT
- this is why "forgotten password" questions should be self-made, not stuff that can be looked up
	- you can also store the questions and answers in a password manager, or just use hashes for all of it ;)

Broken Auth is hard to figure out from just scan tools

- password reset flaws will not get picked up (scan tools don't know business logic)

Use threat models

- highly manual, but highly targeted

Mitigations

- use built-in stuff for sessions
- remember cookies are under control of the user!
- longer sessions mean more window for brute-force attack
	- a closed browser is not a logout, need timeouts for frustrated users who close browsers
- ***DO NOT PUT SENSITIVE DATA IN LOGS*** or urls
- use combinations of reliable factors for authentication
	- remember, under attack, even usernames and passwords are likely changed

Using a time-based token for 2FA is better than SMS for 2FA

Remember email is cleartext

- to avoid system email addresses to timeout so the email doesn't get brute-forced


Swap session id's from anonymous cookie into authenticated cookie

- Amazon does this to track your shopping cart, then maintain your items when you login later
- This is more of a tracking issue than security, but an interesting point on how cookies are used


Passowrd Manager Suggestion

- KeyPass + stored DB file in Google Drive/DropBox, etc. + storing the key to the DB file elsewhere
- this way you can sync the DB back and forth between devices
- if someone cracks online account then steals the DB file, then you know the key elsewhere

Look into Veracrypt/TrueCrypt as well