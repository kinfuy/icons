declare const _default: import("vue").DefineComponent<{
    rotate: NumberConstructor;
    spin: BooleanConstructor;
    size: {
        type: NumberConstructor;
        default: number;
    };
    color: StringConstructor;
}, {
    rotateStyle: import("vue").ComputedRef<{
        transform: string;
    } | {
        transform?: undefined;
    }>;
    sizeStyle: import("vue").ComputedRef<{
        fontSize: string;
    } | {
        fontSize?: undefined;
    }>;
    colorStyle: import("vue").ComputedRef<{
        color: string;
    } | {
        color?: undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rotate: NumberConstructor;
    spin: BooleanConstructor;
    size: {
        type: NumberConstructor;
        default: number;
    };
    color: StringConstructor;
}>>, {
    size: number;
    spin: boolean;
}>;
export default _default;
