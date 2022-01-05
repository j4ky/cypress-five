# cypress-five

Run Cypress tests demo(Five)

## Prerequisites

Node.js 12 or 14 and above

## Installation

* Clone the project
```bash
cd /your/project/path
``` 
```
git clone https://github.com/j4ky/cypress-five.git
```
* Install Cypress
```bash
cd /your/project/path
```
```
npm install cypress --save-dev
```

## Run tests
>By default `cypress run` will run all tests headlessly
* Run Cypress tests within the folder matching the glob . 
```
npx cypress run --spec "cypress/integration/cypress-five/**"
```
* Run Cypress tests with Cypress command defined in `scripts`. 
```
npm run cypress:five
```