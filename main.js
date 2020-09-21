const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
    // 创建浏览器窗口
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // 隐藏菜单栏
    Menu.setApplicationMenu(null);

    // 应用加载index.html
    win.loadFile('./index.html');

    // 打开开发者工具
    win.webContents.openDevTools();
}

// 在初始化完成并且准备好创建浏览器窗口时调用这个方法
// 部分API在ready事件触发后才能使用
app.whenReady().then(createWindow);

//窗口关闭时
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

//窗口启用时
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
