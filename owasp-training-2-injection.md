Side note: The OWASP top 10 has changed over time, but the core pieces of it have stayed the same because statistics and tests across newer software still shows some of the same vulns are still there.

There has been a decrease in the number of buffer overflows, though. It doesn't mean this classification has been "fixed", but it's just not as prevalent in web apps as other errors/vulns: injection, XSS, etc.

Side note: Speed of developers coming into industry. It's alarming to see developers jumping into the industry with less and less security training due in part to how quickly universities, bootcamps, etc. are "pumping" them out. Are they taking classes on crypto, secure coding, etc. in parallel to web apps, architecture, data/algo, etc.

Also, a lot of job openings are looking for "unicorn candidates" which is in direct opposition to how fast and how available this information/training/experience typically comes to people in the industry.


Injection: turning "data to be stored" into "code to be processed"

- can turn into lost data, take over, DDOS, and bad stuff

SQL injection: Malicious actors are trying to change the structure of the query

Old story

- Default Windows SQL Server user: sa
- could also run stored procs. to execute shell commands
- shell commands -> mean OS-level execution
- bad stuff!

OS Command Injection

- this doesn't exist *too much* anymore
- an older way to do things in Perl was to "shell out" to hard .sh scripts
	- but today there's open-source libraries, services, and better ways to do this
- still...know what is sitting behind your calls
- especially when you need to glue various applications together

LDAP injection

- if you're dynamically buildling LDAP queries (similar to SQL injection)

How do you test against this?

- easy to automate because they're "interpreter based"...try passing in various characters that wouldn't be expected
- code scanning tools
- there are also pretty obvious patterns when doing static code analysis
- attacker is constantly asking: "What do I think their code looks like on the server, and how do I get past it?"

You can configure around this too

- It's possible to configure the JDBC driver to not run more than one statement per line, for example

OWASP RECOMMENDATION: Positively validate inputs

- input validation *doesn't fix the vuln* it only makes it harder to exploit
	- try limiting certain characters
	- try limiting string length

- make sure the data to be entered *is never treated as code to be executed*
	- turn inputs over to interpreters via stored. procs. or prepared statements, also use something like Hibernate, NHibernate (ORMs)
- DO NOT allow users to see verbose error messages

- A specific place, using stored procedures, is where you're allowing for dynamic queries or opening up the databases advanced search/query capabilities to the end-user
	- basically, don't try to dynamically change your queries inside of your stored procedures

Even if you're using correct input parameter handling, then passing those off to a stored procedure...don't simply append a bunch of stuff together

- You will just create the same problem, but in PL-SQL