// Simulated download counter
let downloads = {
    addon1: 0,
    addon2: 0
};

// Function to simulate downloading and update download count
function downloadAddon(addonId) {
    downloads[addonId]++;
    updateDownloadCount(addonId);
}

// Function to update the download count on the page
function updateDownloadCount(addonId) {
    const downloadCountElement = document.getElementById(`downloads-${addonId}`);
    if (downloadCountElement) {
        downloadCountElement.textContent = downloads[addonId];
    }
}
