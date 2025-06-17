import { DMMF } from '@prisma/generator-helper';
import { PrismaMockData } from "..";
export default function HandleDefault<P>(prop: string, field: DMMF.Field, data: PrismaMockData<P>): any;
export declare function ResetDefaults(): void;
