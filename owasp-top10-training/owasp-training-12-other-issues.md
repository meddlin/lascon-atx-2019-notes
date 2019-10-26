## Other Prominent Issues

Buffer Overflows

- prominent where you're managing your own memory
- when overwrites memory the application shouldn't have access to

- most web development environments have their own bounds checking, memory management baked in

Denail of Service

- watch where attackers can use a lot of resources
- watch for logging routines, automatic emails, heavy CPU resources, etc.

Information Leakage and Improper Error Handling

- don't give away too much information in reported errors
	- verbose error message for invalid login, resetting password

