## Cloud Security at Scale: Managing the Chaos

> See the talk from LASCON!
> 
> [https://www.youtube.com/watch?v=tc9DINU3bS8&list=PLLWzQe8KOh5l4JeHrl-a1A7AcNYazBTCC&index=23](https://www.youtube.com/watch?v=tc9DINU3bS8&list=PLLWzQe8KOh5l4JeHrl-a1A7AcNYazBTCC&index=23)


Ken Toler, @relotnek
Mike McCabe, @mccabe615
mbmconsultants.co

Regulated Financial Services...can be cloud hell


Three Financials

Themes

- complexity, on-prem & cloud, adapting (security had to change)

Over 3 examples, how did these people move?

- long, slow process learning lessons
- iterative, one chunk at a time
- just jump

OODA loop

- observe, orientate, decide, act
- how much trouble do you have moving through this?
	- and how will it change as your cloud infrastructure increases
	- this is a measure of technical maturity

Those 1-2 people in a basement

- a lot of teams, companies have them
- these 2 understand
- everyone else must ask them questions

Service Limits

- AWS has service limits on everything
- companies frequently bump into AWS's limits, believe it or not

Also bumping against the problems of

- having feet in both places, on-prem vs cloud
- we didn't really secure on-prem yet, but now we need to be concerned with cloud

Michael Jordan -- get the fundamentals down and the level of everything you do will rise

- inventory, detect, alert, remediate
- get these things down (see how it's basic, conceptual security?) and you will be ahead of others


The people are important

- helping them understand the move to the cloud
- understanding others have regulations to adhere to which you may not really have to deal with normally
	- also, how do you deal with regulations you don't have the expertise for?

A lot of people are still confused

- what services?
- how to understand various levels of cloud services?
- how to explain key management, secret management

Focus on enabling

- time, money, effort
- if security is a cost-center of the business, how do you sell these decisions to the business?
- cloud is an opportunity to give entire teams towards keys, secrets, managing PII, etc. instead of just having
single experts in the company

Where do you fall?

- cloud-hative?
- cloud-hybrid?
- cloud-never?


Wandered into the cloud

- enable a few services, then devs keep moving workloads up there
- it's a hybrid cloud approach by default before even creating a cloud-strategy
	- "the plan...is going according to plan" :D

Multi-cloud?

- you can't avoid vendor lock-in
	- how to use KMS or IAM without being locked into AWS?
- Docker won't make you cloud agnostic

Cloud compliance

- automation and tools are available
- but there's still uncertainty surrounding these
- this kinda forces you to be multiple disciplinary

Cloud security is hard at any scale

PLan early and adapt often

Be comfortable with complexity and risk trade-offs
- you can't really use cloud in a simplistic way


Now infrastructure changes turn into code

- configuration is very terraform based
- server/config/user changes become code reviews
- things are more easily managed and testable
	- cfn-lint, and specialized testing tools take these ideas even further
- all of this can make audits even easier and more thorough
- code configuration, testability, both lead to patterns that can be followed

Find a champion project to move over as an example