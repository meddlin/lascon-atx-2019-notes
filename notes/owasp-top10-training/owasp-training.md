## Intro

http://bit.ly/2fEjGKc

slides are here, it's a shortened Dropbox link

@joshsokol, Josh Sokol

@danielcornell, Dan Cornell, OWASP San Antonio

## App Security

The intended and actual functionality overlap, but don't entirely overlap 100%

- Where it's more actual, but not intended -> those are bugs and undocumented

Infosec has a "measure" culture vs. Dev has a "build" culture

All data is still pointing to the same metric of "96% of applications tested in 2013" having one or more serious vulns

Technical Vulns vs. Logical Vulns

- scanner tools are great against technical vulns
	- it's data in, data out, check the output
	- these are typically pretty easy to fix, too
	- add a routine, very perscriptive, and mitigations can be applied in multiple areas

- logical vulns
	- poor decisions about trust, these are the "people problems"
	- remediation is arch/design changes (very hard)

Story about woman who was laundering ordered items which the e-commerce app sent off before validating payment

- Accepted CC info, and shipped before validating any money showed up
- This was a logical error that no scanning tool could have picked up

OWASP Top 10 is only the top-10. If you want more look for WASC threat classification project: http://projects.webappsec.org/Threat-Classification


### Least Privilege

Most of the time, your app does not need raw disk access. So, what's the least amount of privilege you can work with?

- Least privilege in DB, could limit you to a specific table, etc.
- Keep in mind, you can always revise privileges
- But *the idea is to start with the least amount of privilege*


### Defense in Depth

Don't depend on a single point of security or single point of failure

Extra security trade-off is less usability

What if there is a misconfigured firewall? What then?

- Remember, firewall configurations (and misconfigurations) are likely "holes" poked through the firewall. So, what else can catch and protect against malicious actors?
	- A/V
	- File permissions
	- DB permissions
	- Data encryption (encrypted at rest? so even if they steal the data it's still okay?)

### Fail Closed vs. Fail Open

Typically, "fail closed" is more secure

Missilee silo -- fail closed
fire doors -- fail open

CC info input screen -- *it depends!* What are you expecting? and what is your customer expecting?

	- Perhaps, accept the info, but allow soft-fails until future authorization and validation happens

Understand what you are trying to protect, and *how it should be protected*. This is typically left to devs in the form of error handling. Also, business and clients typically don't know enough for how to define this.

- Concern places: Erorr handling, code review, testing

### Separation of Duties

Key fraud control measure, look for uses around Sarbanes Oxley in this

"The person who has the ability to enter vendors, doesn't also have the ability of paying vendors."

This is also why devs don't have direct "push to production" access

- Devops is changing this, but even still your pipeline has these types of controls in place. *There is still some line of control access and separation of duties here.*