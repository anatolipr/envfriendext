//https://stackoverflow.com/questions/46869780/access-global-js-variables-from-js-injected-by-a-chrome-extension/46870005#46870005

export async function getPageVar(name: any, 
    par: string = '', tabId?: string | number | undefined): Promise<any> {

    const [{result}] = await chrome.scripting.executeScript({
      func: (name, par) => (window as any)[name](par),
      args: [name, par],

      target: {
        tabId:  <number>tabId ??
          (await chrome.tabs.query({active: true, currentWindow: true}))[0].id
      },
      world: 'MAIN',
    });
    return result;
  }