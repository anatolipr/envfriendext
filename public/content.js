
function __getEFModel() {
    return {
        _imenvt_: __envfriend._imenvt_,
        projects: Object.entries(__envfriend.configCache).map(entry => {
            const envStr = __envfriend.getCurrentEnvironmentString(entry[0]);
            const isOverride = envStr !== _imenvt_;
            const model = {
                name: entry[0],
                useCount: __envfriend.useCount[entry[0]] || '0',
                envString: envStr,
                isOverride,
                environments: 
                    Object.entries(entry[1]).map(env => ({
                        id: env[1].id, 
                        name: env[1].name, 
                        usageNote: env[1].usageNote,
                        override: isOverride && env[1].id === envStr,
                        selected: env[1].id === envStr
                    }))
            }
            if (!__envfriend.configCache[entry[0]][envStr]) {
                model.environments.push({
                    id: envStr,
                    override: true,
                    selected: true,
                    unconfigured: true
                })
            }
            return model;
        })
    }
}


function __overrideEF(env) {
    let envSpl = env.split(':::');
    __envfriend.overrideCurrentEnvironment(envSpl[0], envSpl[1]);
    return __getEFModel();
}