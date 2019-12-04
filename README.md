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

What's it look like?

*Code Vulnerability*

```csharp
<input id="someInput" type="text" />
var userInput = @Html.Raw(someInput); // unvalildated user input

Sql cmd = new Sql($@"select * from users where name = {userInput}");
cmd.Execute();
```

*Exploitation*

```
Expected: "John Smith"

Malicious: "OR 1=1 UNION SELECT * FROM administrators;";
```

### Cross-site scripting (XSS)

Not a direct attack.

There are a couple different types:

What's it look like?

### Misconfiguration

- Has anything been misconfigured as this went through the DevOps pipelines?
- Is anything out of date in your DevOps pipeline?

### 

### Vulnerable components

What is AppSec?

"Shift-left" movement

- How does AppSec relate to this?


<hr />

Application Security

"Ensuring that custom application code performs as expected under the entire range of possible inputs."

- *If QA verifies software does what it's supposed to do, then AppSec is concerned that software doesn't do what it shouldn't do.* 
