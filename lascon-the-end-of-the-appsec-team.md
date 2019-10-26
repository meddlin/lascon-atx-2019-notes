## The End of the App Sec Team

Justin Collins
@presidentbeef
presidentbeef.com (slides will be here)
LASCON 2019

***Book recommendation: The DevOps Handbook***

The purpose of this talk isn't to be prescriptive, but to get your brain thinking on how to make things better

Sr. Software Engineer at Synopsys, soon going to Gusto

End of the AppSec team

- not the end of appsec or appsec engineer

10 years from now is 2029

- is this terminator in 2029? do you have to worry about Skynet? lol

Are AppSec teams destined to fail?

- think of the team roles appsec has
- think about the size of appsec teams: 1, < 5, or +> 5??
- is this team very happy, interpersonally/professionally?
- is the appsec team too small? (that seems the obvious solution is to just make the team bigger, right?)
	- totally rational, but how many will you hire?
	- it's really hard to hire AppSec people, too
	- you will never have 1:1 team size with AppSec : Devs

We know people don't scale

- so, throw some automation on it? lol, another silver bullet approach
- Justin's Twitter talk on this was from 2012...if you're just trying to get to that point, *you're so far behind*
	- that's not to be offensive, or righteous, but simple automation is not enough by itself

"Security is everyone's job"

- it's not *"wrong"*...but who gets paged for your security issues?
	- also, we have a "security team"--it's kinda in their name
- security teams say "no" because they are innacuratly held accountable for all flaws
	- did your security team write the flawed software?
	- so, is security truly everyone's job?
	- let's say I'm *not* in security--with an average 7-8 hrs/day for my work--but security is also my job...
		- then where does security fit in?
		- do I understand it?
		- when can I just get back to my work that I understand?

Oh, so this is a DevSecOps talk?

- book recommendation here
- why devops? there was a code between developers, code, and deploying
	- throw the code over the wall, attempt to make it work
- the same thing could be argued for QA or DBAs
- so, isn't this the same thing as how AppSec is treated?
	- write code, then throw it over the wall for a "security step"

*Important point: It felt like developers weren't trying to learn about security, they were trying to say "security said this was okay, so I'm gonna do it".*

Problems with walls

- you can't see through them
- non-locality, there's a lack of context for good advice and communication
- there could be inconsistency issues: "ti works on my machine", "the tests pass on my machine", because environments are different
- long feedback cycle
- you could think of the wall as JIRA, or your in-house ticketing system
- there's also a transfer of responsibility
	- I did my job...now, it's your job

So...operations as "everyone's job"?

- well, infrastructure as code became useful/popular
- deployments are automatic/on-demand
- create new services on-demand
- alerts, logs, metrics are available to everyone or at least many more people

*It's not 'I'm giving you more responsibility'; it's "I'm giving you more access"*

QA as everyone's job

- feature flags
- tests are ran in CI server and TDD

DBA as everyone's job

- even more stuff here...

Security as everyone's job

- this is where we need to spend our time thinking on it
- does it need to go away?
	- why not just update all the time? like we have automated dependency updates
		- just like "ship all the time"
	- always deploy on fully-patched systems (recycling machines/containers)
	- security built into frameworks/libraries
	- APIs that are safe by default
		- why would you ever be unsafe? make that really hard

@gabro27, the bots automatically found vulnerability and patched it tweet

- integrating security
	- so, code reviews include security checklist?
	- developers "threat model" on their own, why throw the entire context of the work on the security team when they didn't write the code
	- security tests are part of the test suite
	- a note on code review: *code review should be peer reviewed...AppSec are not the peers of the devs!*
	- security alerts
		- security team should likely be copied, but the alerts should go to those who can affect change
		- ********LOOK INTO THIS FOR ALERTS AT WORK, AND HOW THEY WERE RECENTLY BROUGHT UP********
	- distributing the roles across various teams
		- *this does not mean distribute roles and stand the walls back up*
		- or...why not pair an AppSec team member with the developers for a short time?


The proposal...

- no more AppSec teams (just as no more QA team)
- the work should be distributed, automated, and democratized
	- perhaps look at an AppSec role instead of "team"
	- automate as much as you can
	- democratization means to open up access, again, *as much as you can*

How to make these moves?

- contribute to securing frameworks/libraries
	- *Dont' want to see another new web framework without security built-in?*
- contribute to developer education
	- *Current resouces are not developer friendly.*