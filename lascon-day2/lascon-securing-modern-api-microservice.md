## Securing Modern API and Micorservice-based Applications by Design

Farshad Abasi, Forward Security (FwdSec)

The older style SOA service-oriented-architecture

- these primarily used SOAP + XML, or some enterprise message bus

Microservices

- much smaller
- typically using a gateway and HTTP
- more fine-grained than SOA
- typically inside containers, but don't have to be
- you could have microservices, but aren't exposed via some external API
- but now you get the distributed services complexity
	- also, increased memory consumption

Typically RESTful APIs follow some ROA (resource oriented architecture)

Monolithic

- walled-garden
- single-entry, user Auth is typically limited to one auth call, one place
- authorization can happen way at the beginning

MicoS

- app is broken up, so you have broken up authentication/authorization


API Gateway

- acts as the single point of entry
- central enforecemnt of security policies
- and guards the APIs/MicroS (i.e. via getting a token, passing it around)
- typically use IAM/KMS service tied into your API gateway (or at least you should)
- lowers the exposure of longterm credentials, too
	- generate a token, and force the token to be expired every now an then
	- DO NOT pass the user/pwd all the way down
- can even create "mash-ups" of commonly related services
- hides service partitioning from clients

In older 3-tier applications, the middle/service layer is talking to the DB via a service account (user level E2E trust)

- instead of this, you should use the authenticated user token to talk to the DB
- anyone could make use of that service account; there's no user-level security context for logging, enforcement

You also need to sign the token

- without signed tokens, then anyone can create their own token, right?
- or the token can be stolen
- so you want to limit who/what can talk to the service eventually talking to the DB
- don't just trust any token on the network
	- if someone creates/steals/etc. a token, then it can be relayed across the network
	- so you still need service-layer protection as well

Mutual TLS?

- need a separate TLS/SSL token for each service?
- not for the faint of heart
- can be very hard, but is very secure

Token-exchange end-point

- handles tokens for various services needing different types of tokens
- limits amount of access granted for heterogenous protocols

E2E trust tokens

- can work, but requires a homogenous set of services which all require the same type of token

Security token service could live "outside" at same layer as the API gateway

What about accessing other microservices in another trust-zone?

- you want to re-use functionality, but it's in another architectural place
- go through the API gateway of *that* zone


Authorization

- each microservice may have its own authorization requirements
- token claims can include: end-user identity, expiration, etc.
- first verify authenticity of token (signature matches), then authorize
	- if you don't have token service endpoint, then you have to store policies in each service
- token-exchange service can be used for more downstream tokens too! don't forget that!

Make sure you *know the difference between OpenID, OpenID Connect, and OAuth*

- using these incorrectly is in the OWASP Top 10


You should not accept the access/call/token of another service calling yours...

- without first enforcing the policies of your own service
- even though it's another "good" service, still continue to verify it as if it's a user

You can even provide centralized security policies by rolling them out to a "central policy enforcement point"

- this central point can be your central access token service

API logging and monitoring

- logs should be centrally aggregated, correlated, and monitored
	- make sure secrity policy failures are in there too
	- API invocations per second
- fraud protection
	- which device, location consumed or used a service is useful as well

Grouping objects and poicies is not new

- think of Active Directory, you don't apply policies by user; you do it by group
- security tokens should only be valid/issued for APIs in a specific group


TAKE-AWAYS

- (see pic)
- distribute policy checks and token issuing across services
- configurable policies *consistently*
- log, monitor, and detect
- ***defense in depth***
- security by design
- agile is great, but architecture is great
	- you don't have to throw one out because of the other

Remember the building a 50-story building in *agile method* analogy

- you'll get the building, but now try to put a couple elevators in
- you'll have to dig out a core of the building, and put it in