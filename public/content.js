if (! window.__envfriend && window._imenvt_) {
    const sc = document.createElement('script');
    sc.setAttribute('src', 'https://cdn.jsdelivr.net/npm/envfriend@0.0.15/dist/tool.js')
    document.head.appendChild(sc)
}

window.addEventListener('message', (e) => {
    if (e.data && e.data.hasOwnProperty('__envfriendMessage') && window.__envfriend 
        && window.top != window.self) {
        if (e.data.method === 'overrideCurrentEnvironment') {
            console.log('IFRAME override', window)
            __envfriend.overrideCurrentEnvironment(e.data.project, e.data.override)
        }
    }
});

function __getServerEnv() {
    return window.__envfriend ? window.__envfriend._imenvt_ : window._imenvt_
}

function __getCurrentEnvironmentString(project) {
    return window.__envfriend?.getCurrentEnvironmentString(project)
}

function __overrideEF(env) {
    let envSpl = env.split(':::');

    if (window.top == window.self) {
        [...document.getElementsByTagName('iframe')].forEach(
            frame => frame.contentWindow.postMessage({
                __envfriendMessage: true,
                method: 'overrideCurrentEnvironment',
                project: envSpl[0],
                override: envSpl[1]
            }, '*')
        )
    }

    if (window.__envfriend) {
        window.__envfriend.overrideCurrentEnvironment(envSpl[0], envSpl[1]);
    }
}

function __efUseCnt() {
    return Object.entries(window.__envfriend?.configCache || {})
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
