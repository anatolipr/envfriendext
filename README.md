Envfriend extenxion

<img width="309" alt="image" src="https://github.com/anatolipr/envfriendext/assets/29383028/fabc5c33-91ab-4c42-b3ac-033ec20cb528">

[Unpacked - dist.zip](https://github.com/anatolipr/envfriendext/files/15050158/dist.zip)

Latest: [dist.zip](https://github.com/user-attachments/files/18872485/dist.zip)


# How to Load the Unpacked Chrome Extension

## Step-by-Step Instructions

1. **Unzip the File:**
   - Locate the `dist.zip` file in Finder.
   - Double-click the `dist.zip` file to unzip it. This will create a folder named `dist` in the same directory.

2. **Open Google Chrome:**
   - Launch Google Chrome from your Applications folder or dock.

3. **Access the Extensions Page:**
   - In Chrome, click the three-dot menu in the upper-right corner.
   - Navigate to `More tools` > `Extensions`. Alternatively, you can directly open the Extensions page by entering `chrome://extensions/` in the address bar and pressing Enter.

4. **Enable Developer Mode:**
   - On the Extensions page, look for the toggle switch labeled `Developer mode` in the upper-right corner.
   - Click the toggle switch to enable Developer mode.

5. **Load Unpacked Extension:**
   - Click the `Load unpacked` button that appears after enabling Developer mode.
   - In the file dialog that opens, navigate to the location of the `dist` folder that you unzipped earlier.
   - Select the `dist` folder and click `Open`.

6. **Verify Installation:**
   - Once the extension is loaded, you should see it listed on the Extensions page with its details.
   - Ensure that the extension is enabled by checking that the toggle switch next to it is turned on.

7. **(Optional) Pin the Extension:**
   - After loading the extension, click the puzzle piece icon (Extensions) in the upper-right corner of Chrome's toolbar.
   - Find your newly installed extension in the dropdown list.
   - Click the pin icon next to the extension name to pin it to the toolbar for easy access.

8. **Upload your projects/environments configuration:**
      - When you open the extension in your browser, click on **Upload Configuration** and upload a txt file which contains a json object with a list of your projects and their environments.
      - The txt file that you upload should look like this:
        ```
        {
        "projects":[
          {
            "name": "your-project-name",
            "environments": [
                { "id": "production" },
                { "id": "stage11" },
                { "id": "stage6" },
            ]
          }, 
          {
            "name": "example-name",
            "environments": [ { "id": "production" }, { "id": "stage27" }, { "id": "stage6" } ]
          }, 
        ] 
        }

## Troubleshooting Tips

- **Check for Errors:**
  If the extension does not load, check for any error messages that appear on the Extensions page. These messages can provide clues on what might be wrong (e.g., missing files, incorrect manifest, etc.).

- **Manifest File:**
  Ensure that the `dist` folder contains a valid `manifest.json` file, as this is crucial for Chrome to recognize the extension.

## Example
Here's a brief example of what the process looks like:

1. Unzip `dist.zip` to create `dist` folder.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable `Developer mode`.
4. Click `Load unpacked`.
5. Select the `dist` folder and click `Open`.
6. (Optional) Pin the extension by clicking the puzzle piece icon and then the pin icon next to your extension.

That's it! Your unpacked extension should now be loaded and visible in Chrome.


