// 加载本地假数据并根据学号生成报告（腾讯云演示用）
function loadData() {
    const input = document.getElementById('studentIdInput');
    if (!input) {
        alert('页面未找到学号输入框，请稍后重试。');
        return;
    }

    const studentId = input.value.trim();
    if (!studentId) {
        alert('请输入学号再生成报告');
        input.focus();
        return;
    }

    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络错误：' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const studentData = data[studentId];
            if (!studentData) {
                alert('测试版仅支持学号：20230001、20230002、20230003');
                return;
            }

            // 暂存当前学生数据，后续如需在各页替换数字可复用
            window.studentData = studentData;

            closeStudentModal();
            alert(`欢迎你，${studentData.name}！数据加载成功，即将进入报告！`);
            nextPage();
        })
        .catch(error => {
            console.error('加载数据失败:', error);
            alert('加载数据失败，请稍后重试');
        });
}

// 关闭学号弹窗
function closeStudentModal() {
    const modal = document.getElementById('studentModal');
    if (modal) modal.classList.add('hidden');
}

// 弹窗内「直接进入」：关闭弹窗并进入下一页
function closeModalAndEnter() {
    closeStudentModal();
    nextPage();
}

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
    if (prevButton) prevButton.style.display = 'none';
    if (nextButton) nextButton.style.display = 'none';
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
    
    // 执行页面特定动画
    runPageAnimations(index);
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

// 各页面动画函数
function animatePage7() {
    const elements = document.querySelectorAll('.page-7 .data-hours, .page-7 .data-logins, .page-7 .data-daily');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate');
        }, index * 300);
    });
}

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

function animatePage10() {
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
    
    const bottomIcon = document.querySelector('.page-11 .bottom-icon');
    if (bottomIcon) {
        setTimeout(() => {
            bottomIcon.style.transform = 'rotate(360deg)';
            bottomIcon.style.transition = 'transform 2s ease';
        }, 1000);
    }
}

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

function animatePage13() {
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
    
    const arrow = document.querySelector('.page-14 .arrow-icon');
    if (arrow) {
        setInterval(() => {
            arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'rotate(200deg)' : 'rotate(180deg)';
        }, 1000);
    }
}

function animatePage15() {
    const progressFill = document.querySelector('.page-15 .progress-fill');
    if (progressFill) {
        const width = progressFill.style.width;
        progressFill.style.width = '0';
        progressFill.style.transition = 'width 2s ease';
        
        setTimeout(() => {
            progressFill.style.width = width;
        }, 500);
    }
    
    const loadingText = document.querySelector('.page-15 .text-loading');
    if (loadingText) {
        let dots = 0;
        const originalText = loadingText.textContent;
        
        setInterval(() => {
            dots = (dots + 1) % 4;
            loadingText.textContent = originalText + '.'.repeat(dots);
        }, 500);
    }
    
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

// 事件监听
document.addEventListener('DOMContentLoaded', function() {
    // 按钮事件
    prevButton.addEventListener('click', prevPage);
    nextButton.addEventListener('click', nextPage);
    
    // 指示器点击事件
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToPage(index);
        });
    });
    
    // 页面1的按钮点击事件（点击封面也关闭弹窗并进入）
    document.querySelector('.page-1 .frame')?.addEventListener('click', () => {
        closeStudentModal();
        nextPage();
    });
    
    // 页面6的箭头点击事件
    document.querySelector('.page-6 .next-arrow')?.addEventListener('click', () => {
        alert('✨ 继续探索你的个人轨迹...');
    });
    
    // 键盘导航
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevPage();
        } else if (e.key === 'ArrowRight' || e.key === ' ') {
            nextPage();
        }
    });
    
    // 点击页面切换
    document.querySelector('.report-container')?.addEventListener('click', function(event) {
        if (!event.target.classList.contains('indicator-dot') && 
            !event.target.classList.contains('prev-button') && 
            !event.target.classList.contains('next-button')) {
            
            // 获取点击位置的X坐标
            const clickX = event.clientX;
            // 获取屏幕宽度的一半
            const halfWidth = window.innerWidth / 2;
            
            // 如果点击在左半边，上一页；如果点击在右半边，下一页
            if (clickX < halfWidth) {
                prevPage();
            } else {
                nextPage();
            }
        }
    });
    
    // 触摸滑动支持
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.querySelector('.report-container')?.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.querySelector('.report-container')?.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            nextPage();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevPage();
        }
    }
    
    // 自动播放功能
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
    
    document.querySelector('.report-container')?.appendChild(autoPlayButton);
    
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
    
    // 初始化
    initPages();
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);
    
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