# TDD Basics concepts

utilizzo di Jest https://jestjs.io/ Test Runner

expect doc https://jestjs.io/docs/using-matchers

## new project 

```
npm init --yes
```

## install jest library
```
npm install jest
npm install @types/jest --save-dev
```

automation

```
"testq": "jest",
"test": "jest --watchAll --verbose"
```

testq per quick test
test per un feedback loop ottimale

## Get vs code Auto complete
.jsconfig.json

```
{
    "typeAcquisition": {
        "include": [
            "jest"
        ]
    }
}
```

## basics

basics.test.js

```
 describe("basics", () =>{

    beforeEach(()=> {

    })
    
    it.todo("works");

    it("works", () => {
        expect(1).toBe(1);
    })
 })
```

## Coverage

```
"testc": "jest --watchAll --verbose --coverage"
```

## e2e

```
npm install cypress -D
```