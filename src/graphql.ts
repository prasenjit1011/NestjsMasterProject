
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddMobileArgs {
    title: string;
    price: number;
}

export interface UpdateMobileArgs {
    id: number;
    title: string;
    price: number;
}

export interface Book {
    id: number;
    title: string;
    price?: Nullable<number>;
}

export interface Mobile {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    books(): Book[] | Promise<Book[]>;
    mobiles(): Mobile[] | Promise<Mobile[]>;
    mobile(mobileId: number): Mobile | Promise<Mobile>;
}

export interface IMutation {
    addMobile(addMobileArgs: AddMobileArgs): string | Promise<string>;
    updateMobile(updateMobileArgs: UpdateMobileArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
