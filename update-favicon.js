const fs = require('fs');

try {
    // Copy the logo into the app directory as icon.png (Next.js automatically uses this!)
    fs.copyFileSync('public/logo.png', 'app/icon.png');
    console.log('✅ Created app/icon.png successfully.');

    // Delete the old default Next.js server favicon to avoid conflicts
    if (fs.existsSync('app/favicon.ico')) {
        fs.unlinkSync('app/favicon.ico');
        console.log('✅ Removed old default favicon.ico.');
    }
    
    console.log('🎉 Browser tabs and Search Engines will now show your ProviaCore logo!');
} catch (err) {
    console.error('Failed to update favicon:', err);
}
