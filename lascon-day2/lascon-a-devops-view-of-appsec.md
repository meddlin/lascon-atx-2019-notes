## Welcome to the Party: A DevOps View of AppSec

Boyd E. Hmphill, Director of Cloud Engineering, Contrast Security

A DevOp is *not* AppSec!

Learn from others mistakes; be *wise* not *smart*

DevOps Days, Austin DevOps, Container Days organizer --> these are groups!

port 443 is the whole in your firewall, and "I will get all of your data"

- "*all of your data are belong to me*"

Also, talk to QA, they have an interesting perspective of AppSec

Story: They answered a little old lady's cooking questions while trying to fix a bug in the Chef devops tool.

- 2012, circa
- funny story, go try to find it in the IRC logs


It's not about who had the idea first, it's about who makes it available to mere mortals.

Martin Fowler -- the agile, XP guy, he's also a CI guy

- we've been working on it for 15 years, that's why it's solved
- why haven't we solved security? we haven't had enough time yet

Security as Code

- that's a thing, right? No, but it should be.

Ops people are more susceptible to PTSD
Notice Security is also first-responders, they are also susceptible to the same thing

Docker?

- FreeBSD originally came out with "jails" in 1999
- Docker is great because you have this legitimate infrastructure artifact
	- yes, you need the Docker daemon
	- but people adopt it because it's not some dark .jar file or similar
	- so you don't have "build parlyzation"
	- instead you have "build parallelization"

Docker-style helps you go from 1000 machines -> 1 rack of 10 machines!

Kubernetes is "orchestration as code"

- if you don't change default K8s settings, it's really easy to hack the kernel
- but it's only been around since 2016
- we need to help ensure it's actually secure

But notice the pattern of standadization

- CI is solved
- CD is not solved

Serverless

- if there's no server
- then it's all code
- if it's all code, then to secure it there is only AppSec


The actual problem of DevOps, we seek to automate/eliminate things that can be eliminated

Book recommendation: The Goal -- Eliyahu Goldratt

Automated security test in the build pipeline is key!

What's the reward for a job well done? *More work; another job*

- you can look at this postively or negatively

Gain mastery, then automate

- what if you could fix a vulnerability within an hour?
	- that's a superpower
	- what? are you going to tell the hackers to "wait a minute"?
- fight forward, and fight forward fast

Generative culture

- if you have this, then you can:
	- admit you made a mistake
	- ask others for assistance
	- and you'll work together
	- because you're all human

If you're gonna screw up, do it in a new and novel way.

Book recommendation: The Phoenix Project -- Gene Kim

Alexander the Great (and the knot?)

- choppped the knot
- "world's first hacker?"
- look up this story

If you have a complex solution, the first thing you should do is seek to simplify it.

If it ain't measured in the pipeline, you're slowing things down.

DevOps comes *assembly required* because your organization is different

- you are constantly practicing the thoughts of DevOps

Another recommendation for **Cloud Austin** meetup

- Devops, and they want security
- but don't forget your own community
- make personal connections, and personally invite people
	- this is how you have inter-communal connections and improve everything
