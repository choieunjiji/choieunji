// 모든 섹션에 슬라이드 인 애니메이션 추가
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('slide-in');
    });
});
