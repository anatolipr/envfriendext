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
    showEnvInExt: boolean;
}

export type Environment = {
    id:       string;
    name?:    string;
    override: boolean;
    selected: boolean;
    unconfigured?: boolean;
}