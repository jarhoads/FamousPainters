# Famous Painters
A famous painters page I created while learning Typescript

## What it does
This app will read data (in JSON form) form from [/json/famousPainters.json](https://github.com/jarhoads/FamousPainters/blob/master/src/json/famousPainters.json) (using jQuery) and used that to display
information about the painter to the user.

## The Layout
The basic layout is below. There is a dropdown and when the user chooses the painter, the information is displayed:
```html
<body>
    <div class="container fluid">
        <div class="row">
            <div class="col-md-1">
                <img class="logoImg" src="images/brush.png" />
            </div>
            <div class="col-md-11 pull-left">
                <h1>Famous Painters</h1>
            </div>
        </div>

        <h3><span class="label label-info">Famous Painter</span></h3>
        
        <div>
            <select class="form-control" id="PainterSelect">
                <option id="PainterSelectOpt" disabled>Choose a painter. . .</option>
            </select>
        </div>

        <h3><span class="label label-primary">Name</span></h3>
        <div id="painterName">
        </div>

        <h3><span class="label label-primary">Style</span></h3>
        <div class="foodGroups" id="painterStyle"></div>

        <h3><span class="label label-primary">Examples</span></h3>
        <div class="examples" id="examples"></div>

    <div class="container">
</body>
```
## Internal Modules
Each files is broken into internal modules that exposes a class through `export` 

Examples of these include;
- [painter.ts](https://github.com/jarhoads/FamousPainters/blob/master/src/scripts/painter.ts): contains the `PaintersModule` and exposes these classes:
 `Painters`, `PainterSummary`, `Example`, and `Painter`  
- [painterData.ts](https://github.com/jarhoads/FamousPainters/blob/master/src/scripts/painterData.ts): contains the `PainterData` module and exposes these interfaces:
 `IPainterData`, `IBasePainter`, `IPainter`, `IExample`, `IPainterSummary`        
- testShouldBe: what the resulting value for testValue should be

An example of this is the following:
```typescript
module PainterData{
    
    export interface IPainterData{
        painters?: PaintersModule.Painters<PaintersModule.Painter>;
        paintersSummary?: PaintersModule.Painters<IPainterSummary>;
    }
    
    export interface IBasePainter{
        name: string;
        style: string;
    }
    
    export interface IPainter extends IBasePainter{
        examples: IExample[];
    }

    export interface IExample{
        name: string;
    }

    export interface IPainterSummary {
        text: string;
        title: string;
    }
}
```
#Installing
Assuming you have npm installed you should be able to use and are at the project root in the comand line:
`npm install`
This will install necessary node modules 
`npm start`
This will compile all of the TypeScript files and generate .js and .map (for debugging) files. 
A watcher will also be created to monitor any changes in the .ts files. Leave the command-window open while doing development work.

#Limitations
I created this as a way to learn Typescript. It probably doesn't 
require as much organization as I put into it but I wanted to learn more about Typescript
classes and modules.