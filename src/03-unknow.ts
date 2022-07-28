let anyVar: any;
anyVar = 'string';
anyVar = 123;
anyVar = true;
anyVar = {};
anyVar = [];
anyVar = () => { };
anyVar = null;
anyVar = undefined;
anyVar = Symbol('symbol');

anyVar.toUpperCase();

let bool: boolean = anyVar;

let anyUnknownVar: unknown;
anyUnknownVar = 'string';
anyUnknownVar = 123;
anyUnknownVar = true;
anyUnknownVar = {};
anyUnknownVar = [];
anyUnknownVar = () => { };
anyUnknownVar = null;
anyUnknownVar = undefined;
anyUnknownVar = Symbol('symbol');

if (typeof anyUnknownVar === 'boolean') {
    let isDone: boolean = anyUnknownVar;
}

if (typeof anyUnknownVar === 'string')
    anyUnknownVar.toUpperCase();

