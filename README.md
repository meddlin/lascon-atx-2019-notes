## Intro

Slides are here: [https://www.dropbox.com/s/pis1afrj5tn5txm/LASCON%202015%20-%20Web%20Application%20Developer%20Security%20Training.pdf?dl=0](https://www.dropbox.com/s/pis1afrj5tn5txm/LASCON%202015%20-%20Web%20Application%20Developer%20Security%20Training.pdf?dl=0)

*This is an incomplete list.* See WASC Threat Classification for more:
[http://projects.webappsec.org/w/page/13246978/Threat%20Classification](http://projects.webappsec.org/w/page/13246978/Threat%20Classification)

## OWASP Top 10 2017

[https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf](https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf)

- Injection
- Broken Authentication
- Sensitive Data Exposure
- XML External Entities (XXE)
- Broken Access Control
- Security Misconfiguration
- Cross-site Scripting (XSS)
- Insecure Deserialization
- Using Components with Unknown Vulnerabilities
- Insufficient Logging & Monitoring

## Types of Vulnerabilities

- Technical
    - Based on language/syntactic implementation
    - Input handling/validation
    - Static scanners can pick this up
    - **Fix:** *code changes*

- Logical
  - Insecure program logic
  - Can be due to poor decisions about trust
  - Most scanners *can't* detect this
  - **Fix:** *architecture & design changes*

<hr />

## Top 5 Vulnerabilities

These 5 were selected (subjectively) as being the most "directly applicable" from 
a developer's perspective. *We only have an hour

### Injection
  - SQL Injection
  - OS cmd injection
  - LDAP injection

*Code Vulnerability*

```csharp
<input id="someInput" type="text" />
var userInput = @Html.Raw(someInput); // unvalildated user input

Sql cmd = new Sql($@"select * from users where name = {userInput}");
cmd.Execute();
```

*Exploitation*

```
Expected input: "John Smith"

Malicious input: "OR 1=1 UNION SELECT * FROM administrators;";
```

Reference - SQL Injection: [https://portswigger.net/web-security/sql-injection](https://portswigger.net/web-security/sql-injection)

### Cross-site scripting (XSS)

*"If an attacker controls your browser--it is no longer your browser."*

Not a direct attack.

There are a couple different types:

- Stored
- Reflected
- DOM based

What's it look like?

*When this is type of input is accepted from the user*

```html
<script>alert(document.cookie)</script>
```

### Misconfiguration

- Has anything been misconfigured as this went through the DevOps pipelines?
- Is anything out of date in your DevOps pipeline?

Things to check:

- out of date software
- default accounts and/or passwords still enabled or unchanged?
- Error handling reveals stack traces (*too much info*)

### Sensitive Data Exposure



### Vulnerable components

**Bit-coin mining package**

> A package, `event-stream`, was handed to a new author who "incidentally" modified it with "Bitcoin-siphoning malware".

What started it? 

- An author wanted to give up a module.
- Unvetted authors
- Unvetted code

TheRegister Article/Explanation: [https://www.theregister.co.uk/2018/11/26/npm_repo_bitcoin_stealer/](https://www.theregister.co.uk/2018/11/26/npm_repo_bitcoin_stealer/)

**`left-pad` debacle**

> 17 lines of JS used for left-justifying text.

An ugly dispute led to a single open-source author deleting his modules--*one of them being* `left-pad`--that was buried in
the dependency chain of thousands of other projects. This led to massive failures across the internet.

ArsTechnica Article/Explaination: [https://arstechnica.com/information-technology/2016/03/rage-quit-coder-unpublished-17-lines-of-javascript-and-broke-the-internet/](https://arstechnica.com/information-technology/2016/03/rage-quit-coder-unpublished-17-lines-of-javascript-and-broke-the-internet/)

left-pad on npm: [https://www.npmjs.com/package/left-pad](https://www.npmjs.com/package/left-pad) *It's been deprecated, but is still listed at 4.2M weekly downloads.*

<hr />

## What is AppSec?

### Application Security

"Ensuring that custom application code performs as expected under the entire range of possible inputs."

- *If QA verifies software does what it's supposed to do, then AppSec is concerned that software doesn't do what it shouldn't do.* 


Static vs. Dynamic Code Analysis

### "Shift-left" movement

- How does AppSec relate to this?


