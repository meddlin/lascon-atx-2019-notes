## Security Code Analysis is For Everyone!

Masooma Faquih and Gal Shtokhamer

- worked for Gemalto, but recently acquired by Thales
- code analysis for enterprise, their customers are B2B

We don't normally think about quality and security at the same time

- but if high-quality code, can be more secure
- want to find these security issues (at the source code) very early in development
	- finding it early means fixing it is cheaper

Strategies: Static

- white box strategy
- support lots of types of software
- can't find runtime issues

Strategies: Dynamic

- black box strategy
- later in development
- fewer application types to support
- can find runtime issues

Static analysis can find

- buffer overflow
- buffer over-reads
- injection: xss, csrf, sql
- sensitive data exposure
- weak hashing
- null-pointer exceptions

Analyzers
- techniques
	- pattern-matching
	- data-flow analysis
		- can also detect if data is coming from user or uncontrolled place
		- then tries to follow where the data is going; if it's sanitized
	- semantic analysis
		- for instance, did you use `eval()` in JS, that could be dangerous
	- control-flow analysis

Continuous integration is the ideal way to run SAST (static analysis) tools

SAST limitation

- they will only find security bugs, not flaws
- bugs are implementation issues
- flaws are design/arch issues
- a SAST tool doesn't have the context to understand the design
- so, you have to keep in mind, the tool is only going to find the issues with implementation details

DAST limitations/uses

- will check memory usage
- check encryption
	- DAST will try to break it
	- SAST will check that you're using it
- permissions and code injection
- you would want to run this close to or in the staging environment
- can crash the system/app
- can develop compliance reports
- BurpSuite is technically in here

*The tools are only as good as you make them.*

Likewise, DAST tools can't determine the business logic or context of design, so they can't detect system flaws
and architecture problems.

- also, only one execution path at a time
	- so it may take some time

SAST & DAST should be used together

Quality Gate idea

- set some threshold for quality of tests passed or static analysis results
- if fail, stop build
- if pass, continue to build Docker images, etc.

Then continue with DAST tools after deployment pipeline


How to pick one

- support for tech stack
- commercial for open-source
- does it group issues on severity?
- does it mark false-positives?
- integration with CI pipeline

Remember: it's not enough by itself. also need:

- risk assessment
- DB security scanning
- test-coverage analyzers
- credential exposure
- validate/update third-party libraries (google: blackdoc?)