


function __getServerEnv() {
    return __envfriend._imenvt_
}

function __overrideEF(env) {
    let envSpl = env.split(':::');
    __envfriend.overrideCurrentEnvironment(envSpl[0], envSpl[1]);
}

function __efUseCnt() {
    return Object.entries(__envfriend.configCache)
    .reduce((a,v) => { 
        const envStr = __envfriend.getCurrentEnvironmentString(v[0]);

        if (!a[v[0]]) {
            a[v[0]] = {}
        }
        
        a[v[0]].useCount = __envfriend.useCount[v[0]] || 0; 
        a[v[0]].envStr = envStr;
        const isOverride = envStr !== _imenvt_;
        a[v[0]].isOverride = isOverride;

        a[v[0]].environments = Object.entries(v[1])
        .reduce((ac, va) => {
            ac[va[0]] = {...va[1]};
            ac[va[0]].override = isOverride && va[0] === envStr;
            ac[va[0]].selected = va[0] === envStr
            return ac;
        }, {});

        if (!__envfriend.configCache[v[0]][envStr]) {
            a[v[0]].environments[envStr] = {
                id: envStr,
                override: true,
                selected: true,
                unconfigured: true
            }
        }

        return a;
    }, {});    
}

function ___efInspect() {
    return {
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
