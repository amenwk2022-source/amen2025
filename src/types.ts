export enum ClientType {
    Individual = 'individual',
    Company = 'company'
}

export interface Client {
    id: string;
    name: string;
    type: ClientType;
    phone: string;
    email: string;
    address: string;
    createdAt: string;
}

export enum CaseStatus {
    UnderFiling = 'under_filing',
    Active = 'active',
    Execution = 'execution',
    Closed = 'closed'
}

export interface Case {
    id: string;
    caseNumber: string;
    automaticNumber?: string;
    title: string;
    clientId: string;
    opponentName: string;
    court: string;
    department: string;
    status: CaseStatus;
    financialTotal: number;
    financialPaid: number;
    openedDate: string;
    judgmentDate?: string;
    verdict?: string;
    createdAt: string;
}