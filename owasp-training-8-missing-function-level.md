## Missing Function Level Access

Simply not showing a link on a page for a user who doesn't have the "role" simply isn't enough. You also need to check on the server-side if the user has proper permissions to execute a function.

Bad actors, could craft requests to get around client-side role validation.

This isn't just one type of hard, technical vulnerability; it's more conceptual.

### How to check

Login with a privileged role, and crawl the application

- try BurpSuite, OWASP Zapp, etc.
- what are all of the links and parameters that can be browsed and passed in?

Logout, login with "normal" lesser-privileged user

- try to crawl again


Automated tools aren't really going to understand the business rules around this

- crawlers can give you some clues though


### Examples

Attackers could just force URLs to various places

- try `dirbuster` for this, or just to see this idea

Roles are/aren't being enforced based on certain routes in a web application for the function being invoked behind them


Make sure developers understand authentication vs. authorization

Use Cases vs Abuse Cases

- in agile, we discuss what use cases to satisfy
- what about any case for how users can abuse the application?
	- can any user "browse their way" into the admin page
	- is it possible for a user to break out of the usual workflow? (go from step 1 straight to step 4, skipping 2-3)

Try focusing on creating modular, reusable authorization module for validating these business functions

- a commerical static code analysis tool can shine here
- or if you really want to take the time to `grep` around