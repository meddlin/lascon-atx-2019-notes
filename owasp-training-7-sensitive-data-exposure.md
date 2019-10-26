## Sensitive Data Exposure


Special question about PCI, cutting off credit cards

- PCI can technically cut people off who aren't doing proper PCI compliance, but this goes by number of transactions, not dollar value
- So, it's only viable to go after PCI lvl4 (10k-1M transactions) organizations. Anyone below that, and it's not exactly feasible to go after them.

Encrypted backups, if your backups aren't encrypted then you could be screwed.


ssllabs.com is a way to test any publicly accessible URL for how well it handles TLS/SSL protocols and implementations


Dont' store passwords!

- use a salt, store the hash
- hash the password the user enters, compare the hashes
- without using a salt, your user password hashes are vulnerable to rainbow table attacks

- use the user password + user specific random hash
- now, it's difficult to use a rainbow table because each user has their own random salt
- however, this leaves the possibility of bruteforce

- This is where bcrypt comes in
- it "re-hashes the hash"
	- introduces a few seconds of delay for creating a new password
	- for an attacker though, increasing the hashing time by a few seconds for each user, the bruteforce approach is made incredibly more difficult

WebGoat has an insecure login example

For PCI compliance, it's a good point to not store credit card data because...if it's not stored, then it can't be stolen

Use FIPS 140 for some cryptographic requirement standards

- go by this, it's the government standard

Disable autocomplete on forms collecting sensitive data

- you can try to detect if this is public/private computer
- also make sure pages aren't cached with sensitive data

### Data Classification Policy

- what kind of data do you store?
	- also make note of the business impact of each type of data
- what controls do you have to protect it?

- review the regulations you have to adhere to
- do you have to report anything to anyone?
- what do you need to encrypt things at rest? (keep in mind, if/how/when data is decrypted)

### Implementation Details

- use SHA-256, SHA-512 preferably
- use what is already available on your development platform
- *store keys securely*