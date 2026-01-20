
            // 页面导航功能
        document.addEventListener('DOMContentLoaded', function() {
            const pages = document.querySelectorAll('.page');
            const navButtons = document.querySelectorAll('.nav-button');
            let currentPage = 7; // 从第7页开始
            
            // 初始化显示第一页
            showPage(currentPage);
            
            // 导航按钮点击事件
            navButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const pageNumber = parseInt(this.getAttribute('data-page'));
                    showPage(pageNumber);
                });
            });
            
            // 键盘导航
            document.addEventListener('keydown', function(event) {
                if (event.key === 'ArrowRight' || event.key === ' ') {
                    event.preventDefault();
                    nextPage();
                } else if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    prevPage();
                }
            });
            
            // 点击页面切换
            document.querySelector('.report-container').addEventListener('click', function(event) {
                // 排除导航按钮的点击
                if (!event.target.classList.contains('nav-button')) {
                    nextPage();
                }
            });
            
            // 显示指定页面
            function showPage(pageNumber) {
                // 隐藏所有页面
                pages.forEach(page => {
                    page.classList.remove('active');
                });
                
                // 显示指定页面
                const targetPage = document.querySelector(`.page-${pageNumber}`);
                if (targetPage) {
                    targetPage.classList.add('active');
                    currentPage = pageNumber;
                    
                    // 更新导航按钮状态
                    updateNavButtons(pageNumber);
                    
                    // 页面特定动画
                    runPageAnimations(pageNumber);
                }
            }
            
            // 更新导航按钮状态
            function updateNavButtons(pageNumber) {
                navButtons.forEach(button => {
                    if (parseInt(button.getAttribute('data-page')) === pageNumber) {
                        button.classList.add('active');
                    } else {
                        button.classList.remove('active');
                    }
                });
            }
            
            // 下一页
            function nextPage() {
                let nextPageNum = currentPage + 1;
                if (nextPageNum > 15) {
                    nextPageNum = 7; // 循环回到第7页
                }
                showPage(nextPageNum);
            }
            
            // 上一页
            function prevPage() {
                let prevPageNum = currentPage - 1;
                if (prevPageNum < 7) {
                    prevPageNum = 15; // 循环到最后一页
                }
                showPage(prevPageNum);
            }
            
            // 页面特定动画
            function runPageAnimations(pageNumber) {
                // 重置所有动画
                resetAnimations();
                
                // 根据页面编号执行特定动画
                switch(pageNumber) {
                    case 7:
                        animatePage7();
                        break;
                    case 8:
                        animatePage8();
                        break;
                    case 9:
                        animatePage9();
                        break;
                    case 10:
                        animatePage10();
                        break;
                    case 11:
                        animatePage11();
                        break;
                    case 12:
                        animatePage12();
                        break;
                    case 13:
                        animatePage13();
                        break;
                    case 14:
                        animatePage14();
                        break;
                    case 15:
                        animatePage15();
                        break;
                }
            }
            
            // 重置所有动画
            function resetAnimations() {
                // 移除所有动画类
                document.querySelectorAll('.animate').forEach(el => {
                    el.classList.remove('animate');
                });
            }
            
            // 第7页动画
            function animatePage7() {
                const elements = document.querySelectorAll('.page-7 .data-hours, .page-7 .data-logins, .page-7 .data-daily');
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animate');
                    }, index * 300);
                });
            }
            
            // 第8页动画
            function animatePage8() {
                const textElements = document.querySelectorAll('.page-8 .text-year, .page-8 .text-time, .page-8 .text-study, .page-8 .text-detail, .page-8 .text-quote');
                textElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(20px)';
                        el.style.transition = 'all 0.5s ease';
                        
                        setTimeout(() => {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }, 100);
                    }, index * 200);
                });
            }
            
            // 第9页动画
            function animatePage9() {
                const dataElements = document.querySelectorAll('.page-9 .data-homework, .page-9 .data-tests');
                dataElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.transform = 'scale(0.5)';
                        el.style.transition = 'transform 0.5s ease';
                        
                        setTimeout(() => {
                            el.style.transform = 'scale(1)';
                        }, 100);
                    }, index * 400);
                });
                
                // 光晕效果动画
                const glow = document.querySelector('.page-9 .glow-effect');
                if (glow) {
                    setTimeout(() => {
                        glow.style.opacity = '0.8';
                        glow.style.transition = 'opacity 1s ease';
                        
                        setInterval(() => {
                            glow.style.opacity = glow.style.opacity === '0.8' ? '0.3' : '0.8';
                        }, 1500);
                    }, 500);
                }
            }
            
            // 第10页动画
            function animatePage10() {
                // 进度条填充动画
                const progressBars = document.querySelectorAll('.page-10 .progress-fill1, .page-10 .progress-fill2, .page-10 .progress-fill3, .page-10 .progress-fill4');
                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const width = bar.style.width;
                        bar.style.width = '0';
                        bar.style.transition = 'width 1s ease';
                        
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    }, index * 300);
                });
                
                // 箭头旋转动画
                const arrow = document.querySelector('.page-10 .arrow');
                if (arrow) {
                    setTimeout(() => {
                        arrow.style.transform = 'rotate(360deg)';
                        arrow.style.transition = 'transform 1s ease';
                        
                        setTimeout(() => {
                            arrow.style.transform = 'rotate(0deg)';
                        }, 1000);
                    }, 1500);
                }
            }
            
            // 第11页动画
            function animatePage11() {
                const dataElements = document.querySelectorAll('.page-11 .data-watch, .page-11 .data-play');
                dataElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '0';
                        el.style.transition = 'opacity 0.5s ease';
                        
                        setTimeout(() => {
                            el.style.opacity = '1';
                        }, 100);
                    }, index * 400);
                });
                
                // 底部图标旋转动画
                const bottomIcon = document.querySelector('.page-11 .bottom-icon');
                if (bottomIcon) {
                    setTimeout(() => {
                        bottomIcon.style.transform = 'rotate(360deg)';
                        bottomIcon.style.transition = 'transform 2s ease';
                    }, 1000);
                }
            }
            
            // 第12页动画
            function animatePage12() {
                const textElements = document.querySelectorAll('.page-12 .text-year, .page-12 .text-no-submit, .page-12 .text-perhaps, .page-12 .text-define-learning, .page-12 .text-exploration, .page-12 .text-no-standard-answer, .page-12 .text-growth, .page-12 .text-outside-homework, .page-12 .text-zero, .page-12 .text-blank');
                
                textElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '0';
                        el.style.transform = 'translateX(-20px)';
                        el.style.transition = 'all 0.5s ease';
                        
                        setTimeout(() => {
                            el.style.opacity = '1';
                            el.style.transform = 'translateX(0)';
                        }, 100);
                    }, index * 200);
                });
            }
            
            // 第13页动画
            function animatePage13() {
                // 进度条填充动画
                const progressBars = document.querySelectorAll('.page-13 .progress-fill-independent, .page-13 .progress-fill-social');
                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const width = bar.style.width;
                        bar.style.width = '0';
                        bar.style.transition = 'width 1s ease';
                        
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    }, index * 500);
                });
                
                // 图标浮动动画
                const icons = document.querySelectorAll('.page-13 .ai-icon2, .page-13 .chat-icon3');
                icons.forEach((icon, index) => {
                    setTimeout(() => {
                        icon.style.transform = 'translateY(-10px)';
                        icon.style.transition = 'transform 0.5s ease';
                        
                        setTimeout(() => {
                            icon.style.transform = 'translateY(0)';
                        }, 500);
                    }, index * 300);
                });
            }
            
            // 第14页动画
            function animatePage14() {
                const keywords = document.querySelectorAll('.page-14 .keyword');
                
                keywords.forEach((keyword, index) => {
                    setTimeout(() => {
                        keyword.style.opacity = '0';
                        keyword.style.transform = 'scale(0.5) rotate(10deg)';
                        keyword.style.transition = 'all 0.5s ease';
                        
                        setTimeout(() => {
                            keyword.style.opacity = '1';
                            keyword.style.transform = 'scale(1) rotate(0deg)';
                        }, 100);
                    }, index * 200);
                });
                
                // 箭头动画
                const arrow = document.querySelector('.page-14 .arrow-icon');
                if (arrow) {
                    setInterval(() => {
                        arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'rotate(200deg)' : 'rotate(180deg)';
                    }, 1000);
                }
            }
            
            // 第15页动画
            function animatePage15() {
                // 进度条动画
                const progressFill = document.querySelector('.page-15 .progress-fill');
                if (progressFill) {
                    const width = progressFill.style.width;
                    progressFill.style.width = '0';
                    progressFill.style.transition = 'width 2s ease';
                    
                    setTimeout(() => {
                        progressFill.style.width = width;
                    }, 500);
                }
                
                // Loading文字动画
                const loadingText = document.querySelector('.page-15 .text-loading');
                if (loadingText) {
                    let dots = 0;
                    const originalText = loadingText.textContent;
                    
                    setInterval(() => {
                        dots = (dots + 1) % 4;
                        loadingText.textContent = originalText + '.'.repeat(dots);
                    }, 500);
                }
                
                // 进度点动画
                const progressDots = document.querySelectorAll('.page-15 .progress-dot1, .page-15 .progress-dot2, .page-15 .progress-dot3, .page-15 .progress-dot4');
                progressDots.forEach((dot, index) => {
                    setTimeout(() => {
                        dot.style.opacity = '0.3';
                        dot.style.transition = 'opacity 0.5s ease';
                        
                        setInterval(() => {
                            dot.style.opacity = dot.style.opacity === '0.3' ? '1' : '0.3';
                        }, 1000 + index * 200);
                    }, index * 300);
                });
            }
            
            // 自动播放功能（可选）
            let autoPlayInterval;
            const autoPlayButton = document.createElement('button');
            autoPlayButton.textContent = '自动播放';
            autoPlayButton.style.position = 'absolute';
            autoPlayButton.style.top = '10px';
            autoPlayButton.style.left = '10px';
            autoPlayButton.style.zIndex = '1000';
            autoPlayButton.style.padding = '5px 10px';
            autoPlayButton.style.background = 'rgba(255,255,255,0.7)';
            autoPlayButton.style.border = 'none';
            autoPlayButton.style.borderRadius = '5px';
            autoPlayButton.style.cursor = 'pointer';
            
            document.querySelector('.report-container').appendChild(autoPlayButton);
            
            autoPlayButton.addEventListener('click', function() {
                if (autoPlayInterval) {
                    clearInterval(autoPlayInterval);
                    autoPlayInterval = null;
                    autoPlayButton.textContent = '自动播放';
                } else {
                    autoPlayInterval = setInterval(nextPage, 3000);
                    autoPlayButton.textContent = '停止播放';
                }
            });
            
            // 触摸滑动支持
            let touchStartX = 0;
            let touchEndX = 0;
            
            document.querySelector('.report-container').addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            document.querySelector('.report-container').addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                
                if (touchEndX < touchStartX - swipeThreshold) {
                    // 向左滑动 - 下一页
                    nextPage();
                } else if (touchEndX > touchStartX + swipeThreshold) {
                    // 向右滑动 - 上一页
                    prevPage();
                }
            }
            
            // 页面加载完成后的初始化
            window.addEventListener('load', function() {
                // 添加CSS动画类
                const style = document.createElement('style');
                style.textContent = `
                    .animate {
                        animation: popIn 0.5s ease forwards;
                    }
                    
                    @keyframes popIn {
                        0% {
                            opacity: 0;
                            transform: scale(0.5);
                        }
                        70% {
                            transform: scale(1.1);
                        }
                        100% {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                `;
                document.head.appendChild(style);
            });
        });   