export type Model = {
    _imenvt_: string;
    projects: Project[];
}

export type Project = {
    envString:    string;
    environments: Environment[];
    isOverride:   boolean;
    name:         string;
    useCount:     number;
}

export type Environment = {
    id:       string;
    name?:    string;
    override: boolean;
    selected: boolean;
}