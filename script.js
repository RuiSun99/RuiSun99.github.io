// 切换导航栏
const toggleButton = document.getElementById('toggle-button');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

// 统计访问人数 (需要后端技术支持)
// ...
