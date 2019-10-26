## Kubernetes Ingress-Nginx Security From Beginner to Expert

Fernando Diaz, from gitlab

@fjdiaz, gitlab
@awkwardferny, twitter

slide deck is on LASCON talk, site, thing

Ingress

- the ingress controller is the front-door to your apps on Kubernetes
- it sits directly behind the load balancer
	- load balancer is technically on the outside
	- ingress is on the inside
	- so it could be saidd the ingress controller is a Layer 7 router (or 3 or 4, as well)

A lot of people deploy Ingress via Helm

Can provide basic or external auth via 3rd parties into the ingress controller

Mutual Authentication

- the client certificate both have to be signed by the same CA
- together they are essentially authenticating against a 3rd service
	- the 3rd party knows the certificate is legitimate (CA - certificate authority)
- you can point ingress at the certificates via the attributes in the ingress configuration

ModSecurity is a WAF used in Ingress-NGINX controller

- also look into OWASP Core Rule Set (CRS)
	- rules that can be applied to ModSecurity WAF
- Gitlab provides these by default if you want to use their service
- NOTE: lookup -- "absinthe" it is/was a scanner capable of detecting/trying SQL injection

Rate Limiting

- ingress also supports rate limiting to prevent ddos

There are kernel parameters which can be configured as well

- this runs an init daemon?
- so, it has access to kick off systemctl commands?
- so, it can help detect things happening at the kernel level of containers?

Via Ingress, you can tune almost anything available in nginx (since it's built on-top of that)

krew plugin

- basically a package manager for kubernetes
- "linting" for health of the items you have configured