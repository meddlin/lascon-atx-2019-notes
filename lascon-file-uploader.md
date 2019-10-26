## Effective Techniques for Building Malware Avoidance in File Uploaders

Ravi K Muthukrishnan, works at VISA
@msravikris
rmuthuk@ncsu.edu

Attackers are shifting to trying to send malware payloads via Office docs


Malware Processing Techniques

- surface analysis
	- file metadata is very useful for some basic info
	- this doesn't require a lot of hardware cycles/resources
- A/V scan is traditional
	- you can run multiple A/V engines together
- dynamic/runtime analysis
	- heavy on CPU cycles
	- time consuming to setup
	- Google: "Cuckoo" (a tool?)
	- beware output of malware can be malicious, like a recursion loop
		- so make sure your scanning doesn't get infected
- unpack
	- packer software tries to hide the malware inside
	- unpacking can lead to recursion attacks (i.e. a zipbomb)
		- decide on acceptable recursion level, and other limitations
- static analysis
	- process files without executing them
	- extract strings, objdumps, etc.
- reverse engineering
	- trying to deconstruct the malicious code to gain better understanding of malware
	- probably most expensive, but understand it's an option
	- IDAPro and OllyDump (memory dump)
- AI/ML
	- pre-exec on metadata-based multi-class
	- detonation based ML models in sandbox (on-exec)
	- pre-mature, but coming quickly

Attacks at a Glance

- Scarlett Johansson attack
	- uploaded an image, evaded A/V, stole DB data
	- only 3 engines detect a suspicious image file
	- only 1 engine detected the bad URL
	- A/V engines are only as effective as the signatures you have for them
- ImageTragick
	- someone used imagemagick to hide the exploit?
- JS in PDF
	- XSS leveraging application vulnerability
	- they added a POST request to add an admin user
	- if the PDF has JS inside, you can reflect the XSS vuln

Scanning at server level is a losing battle

Endpoint protection is a losing battle


Hainvg a submission-based automated analysis system

- start with questions
	- understand the customer
	- who are users, what are the formats, file size?, how many files on average?
	- can you implement sync/async calls? what does user do if file is flagged as bad?
- (see pic for 8 steps to bring everything together)
	- implementation details in the pic
- triage to perform dynamic analysis, reverse engineering where necessary

Scaling malware protection

- bots have capability to upload files via API
	- this becomes easy for attackers to test your API via brute-force
- do you scale horizontally or vertically?
	- this is based on type of file, what's required to scan it, and the demand for uploading


Streaming a file could be even more difficult

- to analyze you still need to whole file
- so you would have to collect the file, and process post-stream

Spinning up a sandbox/container for runtime analysis

- could be good, but consider the overhead and time constraints for that