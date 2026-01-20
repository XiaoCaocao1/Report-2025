
        // 页面管理
        const pages = document.querySelectorAll('.page');
        const dots = document.querySelectorAll('.indicator-dot');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        let currentPage = 0;
        
        // 初始化页面
        function initPages() {
            pages.forEach((page, index) => {
                if (index === 0) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active', 'prev');
                }
            });
            
            updateDots();
            updateButtons();
        }
        
        // 更新指示器
        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentPage) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // 更新按钮状态
        function updateButtons() {
            if (currentPage === 0) {
                prevButton.style.display = 'none';
            } else {
                prevButton.style.display = 'flex';
            }
            
            if (currentPage === pages.length - 1) {
                nextButton.style.display = 'none';
            } else {
                nextButton.style.display = 'flex';
            }
        }
        
        // 切换到指定页面
        function goToPage(index) {
            if (index < 0 || index >= pages.length) return;
            
            // 更新当前页面状态
            pages[currentPage].classList.remove('active');
            if (index < currentPage) {
                pages[currentPage].classList.add('prev');
            }
            
            // 更新目标页面状态
            pages[index].classList.add('active');
            pages[index].classList.remove('prev');
            
            currentPage = index;
            updateDots();
            updateButtons();
        }
        
        // 下一页
        function nextPage() {
            if (currentPage < pages.length - 1) {
                goToPage(currentPage + 1);
            }
        }
        
        // 上一页
        function prevPage() {
            if (currentPage > 0) {
                goToPage(currentPage - 1);
            }
        }
        
        // 事件监听
        prevButton.addEventListener('click', prevPage);
        nextButton.addEventListener('click', nextPage);
        
        // 点击指示器切换页面
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToPage(index);
            });
        });
        
        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevPage();
            } else if (e.key === 'ArrowRight') {
                nextPage();
            }
        });
        
        // 页面1的按钮点击事件
        document.querySelector('.page-1 .frame').addEventListener('click', () => {
            nextPage();
        });
        
        // 页面6的箭头点击事件
        document.querySelector('.page-6 .next-arrow').addEventListener('click', () => {
            alert('✨ 继续探索你的个人轨迹...');
        });
        
        // 初始化
        initPages();
        
        // 添加页面加载动画
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.8s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 300);
        });