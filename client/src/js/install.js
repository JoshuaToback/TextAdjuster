const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit');
    console.log("event", event);
    event.preventDefault();

    // Stores Triggered Events
    window.deferredPrompt = event;

    // Removes Hidden Class from Button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    // Shows prompt
    promptEvent.prompt();

    // Resets the Deffered prompt variable, as it can only be used once. 
    window.deferredPrompt = null;

    butInstall.classlist.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    console.log('install hit')
    window.deferredPrompt = null;
});
