export declare function buildPrompt(userPrompt: string, componentMeta?: ({
    name: string;
    description: string;
    category: string;
    props: ({
        name: string;
        type: string;
        description: string;
        required: boolean;
        default?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        default: string;
        required: boolean;
    })[];
    events: {
        name: string;
        description: string;
        params: {
            name: string;
            type: string;
            description: string;
        }[];
    }[];
    slots?: undefined;
} | {
    name: string;
    description: string;
    category: string;
    props: ({
        name: string;
        type: string;
        description: string;
        required: boolean;
        default?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        default: string;
        required: boolean;
    })[];
    events: {
        name: string;
        description: string;
        params: {
            name: string;
            type: string;
            description: string;
        }[];
    }[];
    slots: {
        name: string;
        description: string;
    }[];
} | {
    name: string;
    description: string;
    category: string;
    props: ({
        name: string;
        type: string;
        description: string;
        required: boolean;
        default?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        default: string;
        required: boolean;
    })[];
    slots: {
        name: string;
        description: string;
    }[];
    events?: undefined;
} | {
    name: string;
    description: string;
    category: string;
    props: ({
        name: string;
        type: string;
        description: string;
        required: boolean;
        default?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        default: string;
        required: boolean;
    })[];
    events: {
        name: string;
        description: string;
    }[];
    slots: {
        name: string;
        description: string;
    }[];
} | {
    name: string;
    description: string;
    category: string;
    props: ({
        name: string;
        type: string;
        description: string;
        required: boolean;
        default?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        default: string;
        required: boolean;
    })[];
    events?: undefined;
    slots?: undefined;
})[]): string;
//# sourceMappingURL=promptBuilder.d.ts.map