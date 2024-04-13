<script lang="ts">


    import { getPageVar } from './lib/chro'
        let version = '0.0.11'


        let model: {} | string | undefined = undefined;

        (async () => {
          const bla = await getPageVar('__getEFModel', '');

          model  = bla ? {...bla} : "not supported";

        })();

        async function __overrideEF(prj: string, env: string): Promise<void> {
            const bla = await getPageVar('__overrideEF', `${prj}:::${env}`)
            model = {...bla}
        }

        async function customEnv(prj: string): Promise<void> {
            let env: string | null  = prompt("enter environment (eg. http://localhost:2000");
            if (env !== null) {
                await __overrideEF(prj, env);
            }
        }
</script>

{#if !model || model === 'not supported'} Not supported {:else}
<div
    style="position: relative; width: 312px; height: 383px; overflow: scroll"
    class="container">
    <div style="top: 0px; left: 0px; position: sticky" class="header">
        <div style="width: 37px; height: 27px">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="153.888 130.996 24.8119 20.589">
                <path
                    d="M 177.053 140.319 C 175.586 140.425 173.657 142.139 171.796 143.125 C 169.516 144.332 165.965 143.361 165.965 143.361 C 166.513 143.062 168.738 142.441 169.186 142.21 C 171.569 140.985 171.367 138.428 170.232 138.45 C 168.733 138.479 167.853 138.909 164.863 139.387 C 162.595 139.747 159.914 139.615 158.628 140.19 C 156.812 141.001 153.888 146.46 153.888 146.46 L 158.409 151.585 C 158.409 151.585 161.208 148.361 162.569 148.361 C 165.673 148.361 165.799 148.311 168.68 148.129 C 169.905 148.052 170.161 147.994 170.862 147.716 C 174.597 146.24 178.608 142.305 178.681 141.831 C 178.852 140.735 177.828 140.263 177.053 140.319 Z"
                    style="fill: currentColor;"
                    transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 1.4210854715202004e-14)"></path>
                <path
                    d="M 157.959 135.401 L 162.064 131.666 L 163.044 132.789 L 160.319 135.334 L 163.177 137.83 L 162.114 139.019 L 157.959 135.401 Z M 168.129 137.913 C 168.45 137.913 168.788 137.83 169.143 137.662 C 169.497 137.495 169.774 137.327 169.974 137.16 L 170.273 136.909 L 171.038 137.846 C 170.927 138.036 170.755 138.254 170.522 138.5 C 170.29 138.745 170.054 138.955 169.816 139.128 C 169.578 139.301 169.262 139.457 168.869 139.597 C 168.475 139.736 168.068 139.806 167.647 139.806 C 166.75 139.806 166.019 139.463 165.453 138.776 C 164.888 138.089 164.606 137.204 164.606 136.121 C 164.606 134.759 164.999 133.565 165.786 132.537 C 166.572 131.51 167.492 130.996 168.545 130.996 C 169.353 130.996 169.982 131.225 170.431 131.683 C 170.88 132.141 171.104 132.783 171.104 133.609 C 171.104 134.1 171.021 134.659 170.855 135.284 L 170.522 135.636 L 166.368 136.021 C 166.556 137.283 167.143 137.913 168.129 137.913 Z M 168.129 132.722 C 167.642 132.722 167.232 132.92 166.899 133.316 C 166.567 133.712 166.373 134.218 166.318 134.832 L 169.143 134.48 C 169.176 134.223 169.193 134.011 169.193 133.844 C 169.193 133.096 168.838 132.722 168.129 132.722 Z M 177.802 135.284 L 173.697 139.019 L 172.716 137.897 L 175.442 135.351 L 172.583 132.856 L 173.647 131.666 L 177.802 135.284 Z"
                    style="fill: currentColor;"
                    transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 1.4210854715202004e-14)"></path>
            </svg>
        </div>
        <div style="padding: 4px; font-size: 14px; text-align: right; flex: 1">
            {'envfriend ' + version}
        </div>
    </div>
    <div class="server">
        <div style="width: 31px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path
                    fill="white"
                    d="M6.5 5h3a.5.5 0 1 0 0-1h-3a.5.5 0 1 0 0 1M6 15h.05a3.5 3.5 0 0 1-.894-1.464A1 1 0 0 1 5 13V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6h1V3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2m2.5-5a2.5 2.5 0 0 0 0 5H9a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H9a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H12a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"></path>
            </svg>
        </div>
        <div style="flex-direction: column; display: flex">
            <div style="font-size: 12px">server</div>
            <div style="font-size: 21px">{model._imenvt_}</div>
        </div>
    </div>
    {#each model.projects as proj}
    <div class="project">
        <div class="project-title" on:click="{() => customEnv(proj.name)}" role="none">
            <div style="width: 15px; height: 15px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                        fill="white"
                        d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16h-8.5a.75.75 0 0 1 0-1.5h8.5a.25.25 0 0 0 .25-.25V6.5h-13v1.75a.75.75 0 0 1-1.5 0ZM6.5 5h8V1.75a.25.25 0 0 0-.25-.25H6.5Zm-5 0H5V1.5H1.75a.25.25 0 0 0-.25.25Z" />
                    <path
                        fill="white"
                        d="M1.5 13.737a2.25 2.25 0 0 1 2.262-2.25L4 11.49v1.938c0 .218.26.331.42.183l2.883-2.677a.25.25 0 0 0 0-.366L4.42 7.89a.25.25 0 0 0-.42.183V9.99l-.23-.001A3.75 3.75 0 0 0 0 13.738v1.012a.75.75 0 0 0 1.5 0z" />
                </svg>
            </div>
            <div
                style="width: 117px; font-size: 16px; flex: 1; overflow-wrap: anywhere">
                {proj.name}
            </div>
            <div
                style="width: 23px; height: 22px; font-size: 12px; border-radius: 99px; background-color: #000000; display: flex; align-items: center; justify-content: center">
                {proj.useCount}
            </div>
        </div>
        {#each proj.environments as env}
        <div
            class="env-line"
            on:click="{() => __overrideEF(proj.name, env.id)}"
            role="none">
            {#if env.selected}
            <div style="width: 25px; height: 17px" class="toggled"></div>
            {/if} {#if env.override}
            <div
                style="width: 24px; height: 22px"
                class="overridden-icon"></div>
            {/if}
            <div style="height: 24px">{env.name || env.id}</div>
        </div>
        {/each}
    </div>
    {/each}
</div>
{/if}

<style>
    .server {
      gap: 7px;
      padding: 11px;
      background: linear-gradient(90deg, #1a1c8b 24%, #1c7d80 34%, #581c65 44%);
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: center;
    }

    .header {
      padding: 8px;
      background-color: #000000;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .project {
      padding: 19px;
      flex-direction: column;
      gap: 19px;
      display: flex;
    }

    .project-title {
      gap: 6px;
      padding: 9px;
      border-radius: 42px;
      background-color: #447740;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .env-line {
      gap: 4px;
      ;
      font-size: 16px;
      font-weight: 200;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow-wrap: anywhere;
      cursor: pointer;
    }

    .toggled {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 1024 1024'%3E%3Cpath fill='white' d='M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04l-316.8-316.8a64 64 0 0 1 0-90.496'/%3E%3C/svg%3E")
    }

    .overridden-icon {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Ccircle cx='12' cy='17' r='1'/%3E%3Cpath d='M21 7v6h-6'/%3E%3Cpath d='M3 17a9 9 0 0 1 9-9a9 9 0 0 1 6 2.3l3 2.7'/%3E%3C/g%3E%3C/svg%3E")
    }

    .container {
      gap: 6px;
      border: 1px solid gray;
      background-color: #2a2a2a;
      display: flex;
      flex-direction: column;
      color: white;
    }

    * {box-sizing: border-box}
</style>
