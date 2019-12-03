## Security Misconfiguration

Big question as this becomes more handled by "ops"

- Has anything been misconfigured as this went through the DevOps pipelines?
- Is anything out of date in your DevOps pipeline?

Are your web app frameworks configured correctly?

- .NET, Tomcat, etc.
- Are ports or dev/management portals exposed in your environment?
- What about default app server/admin console user accounts? admin?
- Is directory listing disabled on the server?
- Does your appserver return stack traces to users?
	- this just gives even more clues to how to break-in
- Make sure ***NO*** sample applications are deployed to production

Book: The Checklist Manifesto [https://www.amazon.com/Checklist-Manifesto-How-Things-Right/dp/0312430000](https://www.amazon.com/Checklist-Manifesto-How-Things-Right/dp/0312430000)

*You can automate these checklists!*

Don't overlook keeping your code libraries up to date

Continually check and track that your secure configuration stays secure according to new discoveries and vulnerabilities.


Secure Apps: not only code, not only network...secure code, secure configs, secure practices, and deploying to secure infrastructure/networks.


For detecting node_modules changes, especially when the author was changed to a malicious one, or incorporates malicious code:

- do the proper primary research to be aware, and be on the lookout
- try to put some type of scanning in place to detect when suspicious changes take place