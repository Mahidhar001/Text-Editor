
let fileHandle;

async function openFile() {
    try {
        [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        const contents = await file.text();
        document.getElementById('textbox').value = contents;
    } catch (error) {
        console.error("Error opening file:", error);
    }
}

async function saveFile() {
    try {
        if (!fileHandle) {
            fileHandle = await window.showSaveFilePicker({
                suggestedName: 'Untitled.txt',
                types: [
                    {
                        accept: {
                            'text/plain': ['.txt'],
                        },
                    },
                ],
            });
        }
        const writable = await fileHandle.createWritable();
        await writable.write(document.getElementById('textbox').value);
        await writable.close();
    } catch (error) {
        console.error("Error saving file:", error);
    }
}
