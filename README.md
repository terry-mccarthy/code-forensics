# code-forensics

This is a containerised implementation of [code-forensics](https://github.com/smontanari/code-forensics). And this is based on [code-maat](https://github.com/adamtornhill/code-maat)

## Usage

Modify gulpfile.js to point to your repo

**gulp**

Analysis tasks
* sloc-trend-analysis                 : Analyse the sloc trend in time for a particular file
* javascript-complexity-trend-analysis: Analyse the complexity trend in time for a particular javascript file
* ruby-complexity-trend-analysis      : Analyse the complexity trend in time for a particular ruby file
* sum-of-coupling-analysis            : Analyse the sum of coupling for each file
* temporal-coupling-analysis          : Analyse the evolution of coupling in time for a particular file
* hotspot-analysis                    : Analyse the complexity and churn of source code to identify hotspots
* commit-message-analysis             : Analyse the number of occurrencies of commit message words
* developer-effort-analysis           : Analyse the distribution of effort (revisions) amongst developers/teams
* developer-coupling-analysis         : Analyse the ownership and communication coupling between developers
* knowledge-map-analysis              : Analyse the distribution of knowledge amongst developers/teams for each file
* system-evolution-analysis           : Analyse the evolution and the coupling in time of different parts of your system