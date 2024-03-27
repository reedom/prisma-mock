import { DMMF } from '@prisma/generator-helper';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P;
type PrismaDelegate = {
    findUnique: (...args: Array<any>) => Promise<any>;
};
type IsTable<S> = S extends `\$${infer fnc}` ? never : S;
type IsString<S extends any> = S extends string ? S : never;
type PrismaList<P extends {
    [key: string]: any;
}, K extends string> = P[K] extends PrismaDelegate ? Array<Partial<UnwrapPromise<ReturnType<P[K]["findUnique"]>>>> : never;
export type PrismaMockData<P> = Partial<{
    [key in IsTable<Uncapitalize<IsString<keyof P>>>]: PrismaList<P, key>;
}>;
export type PrismaMock<P> = P & {
    $getInternalState: () => any;
    $reset: () => void;
};
export type MockPrismaOptions = {
    caseInsensitive?: boolean;
};
declare const createPrismaMock: <P>(data?: PrismaMockData<P>, datamodel?: DMMF.Datamodel, client?: import("jest-mock-extended").DeepMockProxy<P>, options?: MockPrismaOptions) => PrismaMock<P>;
export default createPrismaMock;
