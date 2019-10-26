## XSS

This isn't a direct attack on the application's infrastructure like SqlInj is. XSS is using the application to attack a different user. There's typically a couple of steps that must happen along the way, too.

Some people argue: XSS isn't a real threat to be mitigated because it's against the users, not the app. *Well, if they spoof your privileged users, then it's your app that's under attack pretty quickly.*

1) store script in DB
2) innocent user views data from DB
3) malicious script tries to do bad stuff in the innocent's browser

### Reflected XSS

Malicious link to click

Craft a link, it's being reflected (i.e. rendered) without being encoded/escaped, then this will run in the users' browser

- You then cause someone to click on it via social engineering, etc.
- A poorly configured message board is an example of where this could take place at

### DOM-based XSS

Malicious link containing the payload

### Mitigation

It's still about validating inputs

- also, encoding HTML/XML application outputs
- **this is what really fixes the issue**
- "data to display, not tags to interpret"

For input validation, "what do you really need to allow as input" (modified "least privilege")

### Input Validation

*Never trust anything that has crossed a trust boundary.*

### Output Encoding

From a user, from a database...you typically always want to encode these

- basically any time it *could* have come from an untrusted source

### Testing/Scanning

- Static analysis tools can pick up some of the encoding
- More dynamic tools may be needed for determining if html-in gets encoded out or not
- For DOM-based XSS, manual access/edits to `document` or `window` are red flags