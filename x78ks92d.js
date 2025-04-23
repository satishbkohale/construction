<script>
    // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Block F12 and Ctrl+Shift+I / Cmd+Option+I
    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || 
            ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'i')) {
            e.preventDefault();
        }
    });

    // Basic DevTools detection via toString trap
    setInterval(function () {
        const devtoolsTrap = /./;
        devtoolsTrap.toString = function () {
            alert('DevTools is disabled!');
            location.reload();
        };
        console.log('%c', devtoolsTrap);
    }, 2000);
</script>
