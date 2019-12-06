import React, { Component } from 'react';

import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Appear,
    CodePane,
    Layout,
    Fill
  } from 'spectacle';

  import createTheme from 'spectacle/lib/themes/default';
  const theme = createTheme(
    {
      primary: 'white',
      secondary: '#1F2022',
      tertiary: '#03A9FC',
      quartenary: '#CECECE',
    },
    {
      primary: 'Montserrat',
      secondary: 'Helvetica',
    }
  );

export default class Presentation extends Component {
    render() {
        return(
            <Deck
                contentWidth={1500}
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
                progress="bar">

                {/* Title */}
                <Slide>
                    <Heading size={1} caps lineHeight={1}>
                        LASCON ATX 2019
                    </Heading>
                    <Heading size={2}>
                        OWASP Top 10
                    </Heading>
                </Slide>

                <Slide>
                    <Text>
                        Previous LASCON (2019 slides, videos coming)
                    </Text>
                    <Text>
                        <a href="https://lascon.org/past-lascon/">https://lascon.org/past-lascon/</a>
                    </Text>
                </Slide>

                <Slide>
                    <Text>It's not all code--heavy focus on practices and configurations as well.</Text>
                </Slide>

                <Slide>
                    <div style={{display: `flex`, flexDirecton: `row`, justifyContent: `center`}}>
                        <img style={{ marginTop: `-150px`}} src={require('./pics/01-actual-functionality.png')} />
                    </div>
                </Slide>

                {/* What is top 10 */}
                <Slide>
                    <Heading size={2}>
                        OWASP Top 10
                    </Heading>

                    <div style={{display: `flex`, flexDirecton: `row`, justifyContent: `center`}}>
                        <List>
                            <Text style="margin: 15px;">Injection -- SQL, OS, LDAP, etc.</Text>
                            <Text style="margin: 15px;">Broken Authentication </Text>
                            <Text style="margin: 15px;">Sensitive Data Exposure </Text>
                            <Text style="margin: 15px;">XML External Entities (XXE) </Text>
                            <Text style="margin: 15px;">Broken Access Control </Text>
                            <Text style="margin: 15px;">Security Misconfiguration </Text>
                            <Text style="margin: 15px;">Cross-site Scripting (XSS) </Text>
                            <Text style="margin: 15px;">Insecure Deserialization </Text>
                            <Text style="margin: 15px;">Using Components with Unknown Vulnerabilities </Text>
                            <Text style="margin: 15px;">Insufficient Logging &amp; Monitoring </Text>
                        </List>
                    </div>

                    <Text>
                        OWASP Top 10: <a href="https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project">
                            https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project</a>
                    </Text>
                </Slide>

                {/* Technical vs. Logical */}
                <Slide>
                    <div style={{display: `flex`, flexDirecton: `row`, justifyContent: `center`}}>
                        <div>
                            <Heading>Technical</Heading>
                            <List>
                                <Text style="margin: 15px;"><b>></b> Based on language/syntactic implementation</Text>
                                <Text style="margin: 15px;"><b>></b> Input handling/validation</Text>
                                <Text style="margin: 15px;"><b>></b> Static scanners can pick this up</Text>
                                <br />
                                <Text style="margin: 15px;"><i>Fix: code changes</i></Text>
                            </List>
                        </div>

                        <div>
                            <Heading>Logical</Heading>
                            <List>
                                <Text style="margin: 15px;"><b>></b> Insecure program logic</Text>
                                <Text style="margin: 15px;"><b>></b> Can be due to poor decisions about trust</Text>
                                <Text style="margin: 15px;"><b>></b> Most scanners can't detect this</Text>
                                <br />
                                <Text style="margin: 15px;"><i>Fix: architecture &amp; design changes</i></Text>
                            </List>
                        </div>
                    </div>
                </Slide>


                {/* Pick 5 Vulns */}
                <Slide>
                    <Text>Let's start with 5...</Text>
                </Slide>

                <Slide>
                    <Text>Let's start with 5...</Text>

                    <List>
                        <Text style="margin: 15px;">SQL Injection</Text>
                        <Text style="margin: 15px;">Cross-site Scripting (XSS)</Text>
                        <Text style="margin: 15px;">Misconfiguration</Text>
                        <Text style="margin: 15px;">Sensitive Data Exposure</Text>
                        <Text style="margin: 15px;">Using Components with Unknown Vulnerabilities </Text>
                    </List>
                </Slide>


                {/* SQL Injection */}
                <Slide>
                    <Heading caps size={3}>SQL Injection</Heading>
                </Slide>
                <Slide>
                    <div style={{display: `flex`, flexDirecton: `row`, justifyContent: `center`}}>
                        <div>
                            <Text>Code Vulnerability</Text>
                            <img src={require('./pics/02a-sql-injection-snippet.png')} />
                        </div>

                        <div>
                            <Text>Exploit</Text>
                            {/* <div style={{ display: `flex`, flexDirection: `column`, alignItems: `flex-start`, marginLeft: `10em` }}> */}
                            <div>
                                <span>Expected input:</span>
                                <code>"John Smith"</code>
                            </div>
                            <div>
                                <span>Malicious input: </span>
                                <code>"OR 1=1 UNION SELECT * FROM administrators;";</code>
                            </div>
                        </div>
                    </div> 
                    
                    <hr style={{ marginTop: `8em` }} />
                    <br />

                    <Text>
                        Ref: <a href="https://portswigger.net/web-security/sql-injection">
                            https://portswigger.net/web-security/sql-injection
                            </a>
                    </Text>
                </Slide>


                {/* Cross-site scription (XSS) */}
                <Slide>
                    <Heading caps size={3}>Cross-site Scripting (XSS)</Heading>

                    <Text>Not a direct attack</Text>
                    <Text><i>"If an attacker controls your browser--it is no longer your browser."</i></Text>
                </Slide>

                <Slide>
                    <List>
                        <Text><b>></b> Stored</Text>
                        <Text><b>></b> Reflected</Text>
                        <Text><b>></b> DOM-based (directly modifying DOM)</Text>
                    </List>

                    <hr />

                    <List>
                        <Text><b>></b> HTML Encoding input</Text>
                        <Text><b>></b> Never trust client-side input</Text>
                        <div>
                            <img src={require('./pics/05-xss-example.png')} />
                        </div>

                        <Text><b>></b> Sesssion/page-specific random tokens for requests</Text>
                        <Text><code>{`<input type="hidden" name="65464" secretValue="234ef56a7" />`}</code></Text>
                        <br />
                        <Text><b>></b> Force POST over GET (Browsers easily perform GET)</Text>
                        <Text><b>></b> Several others...</Text>
                        <br />
                        <Text><b>></b> MySpace worm :)</Text>
                    </List>
                </Slide>


                {/* Misconfiguration */}
                <Slide>
                    <Heading caps size={3}>Misconfiguration</Heading>
                    <img src={require('./pics/03-misconfiguration.jpg')} />
                </Slide>
                <Slide>
                    <Heading size={5}>What is it?</Heading>
                    <Text>Think: default configs, easily referenced, known bugs</Text>

                    <Heading size={5}>What to watch for</Heading>
                    <List>
                        <Text><b>></b> Keys (<i>"code secrets"</i>) left in config files or "publicly accessible"</Text>
                        <Text><b>></b> Out of date software (frameworks, admin consoles?)</Text>
                        <Text><b>></b> Is anything out of date in your DevOps pipeline?</Text>
                        <Text><b>></b> Any default accounts and/or password still enabled or unchanged?</Text>
                        <Text><b>></b> Error handling reveals stack traces (<i>too much info</i>)</Text>
                    </List>
                </Slide>


                {/* Sensitive data exposure */}
                <Slide>
                    <Heading caps size={3}>Sensitive Data Exposure</Heading>

                    <List>
                        <Text><b>></b> How are user credentials stored? passwords? salts, hashes?</Text>
                        <Text><b>></b> FIPS 140: what and where is it needed?</Text>
                        <Text><b>></b> Don't store credit card data</Text>
                        <Text><b>></b> <b>Disable auto-complete on forms containing sensitive data</b></Text>
                    </List>

                    <Text>
                        WebGoat -- an insecure example app: <a href="https://www2.owasp.org/www-project-webgoat/">https://www2.owasp.org/www-project-webgoat/</a>
                    </Text>
                    <br />
                    <Text>
                        Ref: <a href="https://en.wikipedia.org/wiki/FIPS_140-2">FIPS 140</a>
                    </Text>
                </Slide>

                {/* Vulnerable Components */}
                <Slide>
                    <Heading caps size={3}>Vulnerable Components</Heading>

                    <div style={{display: `flex`, flexDirection: `row`, justifyContent: `center`}}>
                        <List>
                            <Text>npm</Text>
                            <Text>Nuget</Text>
                            <Text>bower, etc.</Text>
                        </List>
                    </div>

                    <Text>
                        These tools offer amazing, quick value. They aren't necessarily open-source, but aren't necessarily 
                        closed-source either.
                    </Text>

                    <br />
                    <Text>
                        Be sure to audit and <i>update</i> your components <b>regularly</b>
                    </Text>
                </Slide>

                <Slide>
                    <Heading caps size={4} textColor={"tertiary"}>Vulnerable Components: Case studies</Heading>

                    <div style={{display: `flex`, flexDirection: `row`, justifyContent: `center`}}>
                        <div style={{margin: `20px`}}>
                            <Heading size={5}>Bitcoin mining/siphon</Heading>
                            <List>
                                <Text><b>></b> An author who wanted to give up a module</Text>
                                <Text><b>></b> Package <code>event-stream</code> handed over to a new author; then modified</Text>
                                <Text><b>></b> Unvetted authors (?) + Unvetted code (?)</Text>
                            </List>
                        </div>

                        <div style={{margin: `20px`}}>
                            <Heading size={5}>left-pad collapse</Heading>
                            <List>
                                <Text><b>></b> Author rage quits over dispute w/ Kik, npm</Text>
                                <Text><b>></b> 17 line package deleted from npm</Text>
                                <Text><b>></b> The <code>left-pad</code> package was buried deep inside 100,000's of dependency trees</Text>
                            </List>
                        </div>
                    </div>

                    <Text>Ref: <a href="https://www.theregister.co.uk/2018/11/26/npm_repo_bitcoin_stealer/">Bitcoin story @ TheRegister</a></Text>
                    <Text>Ref: <a href="https://arstechnica.com/information-technology/2016/03/rage-quit-coder-unpublished-17-lines-of-javascript-and-broke-the-internet/">left-pad story @ ArsTechnica</a></Text>
                </Slide>



                <Slide>
                    <Text>A couple other notes...</Text>
                </Slide>

                <Slide>
                    <Text>AppSec &amp; "Shift-left"</Text>
                </Slide>


                <Slide>
                    <Heading size={5} textColor="tertiary">AppSec?</Heading>

                    <div style={{display: `flex`, flexDirection: `row`, justifyContent: `center`}}>
                        <List style={{margin: `2em`}}>
                            <Text>AppSec != DevOps</Text>
                            <br />
                            <Text>"Security as code"</Text>
                        </List>

                        <List>
                            <Text><b>></b> Jails -> Docker</Text>
                            <Text><b>></b> ... -> Kubernetes is "orchestration as code"</Text>
                            <Text><b>></b> ... -> CI is solved</Text>
                            <Text><b>></b> ... -> CD is not</Text>
                            <Text><b>></b> ... -> Cloud -> Serverless -> <i><b>what?</b></i></Text>
                            <Text><b>></b> ...just code. So, AppSec is what you have left</Text>
                        </List>
                    </div>

                    <hr style={{ marginTop: `2em`}} />

                    <Text>Boyd's key point: <i>Automated security test in the build pipeline is key</i></Text>
                    
                    <Text>Ref: Boyd E. Hemphill</Text>
                </Slide>

                <Slide>
                    <Heading size={5} textColor="tertiary">Shift left?</Heading>

                    <List>
                        <Text><b>></b> Microservice architecture leads to the same infrastructure, just "as code" now.</Text>
                        <Text><b>></b> Enables &amp; uncovers need for CI/CD</Text>
                        <Text><b>></b> Continued velocity exposes security silos</Text>
                        <Text><b>></b> Can we incorporate security and operations earlier in the cycle?</Text>
                        <Text><b>></b> Thus...opportunities to "shift left" pieces of implementation with our new tools</Text>
                    </List>

                    <img src={require('./pics/04-shift-left.png')} />
                    
                    <Text>Ref: Farshad Abasi (micro-serv. arch. talk)</Text>
                    <Text>Kovair: <a href="https://www.kovair.com/blog/shifting-left-going-beyond-agile-devops-in-sdlc/">shift left credit</a></Text>
                </Slide>

                <Slide>
                    <Heading style={{ marginBottom: `100px`}}>Thanks!</Heading>

                    <List>
                        <Text>LASCON ATX: <a href="https://lascon.org/">https://lascon.org/</a></Text>
                        <Text>Cloud Austin: <a href="https://www.meetup.com/CloudAustin/">https://www.meetup.com/CloudAustin/</a></Text>
                        <Text>slides: <a href="https://github.com/meddlin/lascon-atx-2019-notes">https://github.com/meddlin/lascon-atx-2019-notes</a></Text>
                    </List>
                </Slide>
            </Deck>
        );
    }
}