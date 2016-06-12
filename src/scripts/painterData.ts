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